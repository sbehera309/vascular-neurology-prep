import { UserProfile } from '../types';

export interface RegisteredAccount {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  targetExamDate?: string;
  role?: string;
  institution?: string;
  createdAt: string;
}

const AUTH_STORAGE_KEY = 'vascneuro_registered_accounts';

/**
 * Hash a password string using native Web Cryptography SHA-256.
 */
export async function hashPassword(password: string): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(password.trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Get all registered accounts stored in localStorage.
 */
export function getRegisteredAccounts(): Record<string, RegisteredAccount> {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Error reading registered accounts:', e);
  }
  return {};
}

/**
 * Saves all registered accounts map to localStorage.
 */
function saveRegisteredAccounts(accounts: Record<string, RegisteredAccount>): void {
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(accounts));
  } catch (e) {
    console.error('Error saving registered accounts:', e);
  }
}

/**
 * Register a new user account with real password hashing and validation.
 */
export async function registerLocalUser(
  name: string,
  email: string,
  password: string,
  role?: string,
  institution?: string,
  targetExamDate?: string
): Promise<UserProfile> {
  const cleanEmail = email.toLowerCase().trim();
  if (!cleanEmail || !cleanEmail.includes('@')) {
    throw new Error('Please enter a valid email address.');
  }

  if (!password || password.trim().length < 4) {
    throw new Error('Password must be at least 4 characters long.');
  }

  const accounts = getRegisteredAccounts();
  if (accounts[cleanEmail]) {
    throw new Error(`An account for "${cleanEmail}" already exists. Please sign in or use "Forgot Password".`);
  }

  const passwordHash = await hashPassword(password);
  const userId = `user-${btoa(encodeURIComponent(cleanEmail)).replace(/=/g, '')}`;

  const newAccount: RegisteredAccount = {
    id: userId,
    name: name.trim() || 'Candidate',
    email: cleanEmail,
    passwordHash,
    role: role?.trim() || 'Vascular Neurology Fellow',
    institution: institution?.trim() || 'Academic Medical Center',
    targetExamDate: targetExamDate || '2026-10-15',
    createdAt: new Date().toISOString(),
  };

  accounts[cleanEmail] = newAccount;
  saveRegisteredAccounts(accounts);

  return {
    id: newAccount.id,
    name: newAccount.name,
    email: newAccount.email,
    role: newAccount.role,
    institution: newAccount.institution,
    targetExamDate: newAccount.targetExamDate,
    isLoggedIn: true,
    createdAt: newAccount.createdAt,
  };
}

/**
 * Validate user credentials and sign in.
 * Rejects wrong passwords or non-existent accounts.
 */
export async function loginLocalUser(email: string, password: string): Promise<UserProfile> {
  const cleanEmail = email.toLowerCase().trim();
  if (!cleanEmail) {
    throw new Error('Please enter your email address.');
  }

  if (!password) {
    throw new Error('Please enter your password.');
  }

  const accounts = getRegisteredAccounts();
  const account = accounts[cleanEmail];

  if (!account) {
    const totalAccounts = Object.keys(accounts).length;
    if (totalAccounts === 0) {
      throw new Error(`No account registered for "${cleanEmail}". Click the "Create Account" tab above to register your profile first.`);
    }
    throw new Error(`Account not found for "${cleanEmail}". Please check your email or click "Create Account" to register.`);
  }

  const enteredHash = await hashPassword(password);
  if (enteredHash !== account.passwordHash) {
    throw new Error('Incorrect password. Please verify your password or use "Forgot Password" to reset it.');
  }

  return {
    id: account.id,
    name: account.name,
    email: account.email,
    role: account.role,
    institution: account.institution,
    targetExamDate: account.targetExamDate,
    isLoggedIn: true,
    createdAt: account.createdAt,
  };
}

/**
 * Reset a user's password.
 */
export async function resetLocalUserPassword(email: string, newPassword: string): Promise<boolean> {
  const cleanEmail = email.toLowerCase().trim();
  if (!cleanEmail) {
    throw new Error('Please provide an email address.');
  }

  if (!newPassword || newPassword.trim().length < 4) {
    throw new Error('New password must be at least 4 characters long.');
  }

  const accounts = getRegisteredAccounts();
  const account = accounts[cleanEmail];

  if (!account) {
    throw new Error(`No account found for "${cleanEmail}". Please create an account first.`);
  }

  const newHash = await hashPassword(newPassword);
  account.passwordHash = newHash;
  accounts[cleanEmail] = account;
  saveRegisteredAccounts(accounts);

  return true;
}

/**
 * Creates or gets a quick candidate profile (e.g. 1-click test/fellow session).
 */
export async function createQuickCandidateProfile(candidateName: string = 'Dr. Vascular Neurologist'): Promise<UserProfile> {
  const email = 'fellow@stroke-prep.org';
  const accounts = getRegisteredAccounts();
  
  if (accounts[email]) {
    const acc = accounts[email];
    return {
      id: acc.id,
      name: acc.name,
      email: acc.email,
      role: acc.role,
      institution: acc.institution,
      targetExamDate: acc.targetExamDate,
      isLoggedIn: true,
      createdAt: acc.createdAt,
    };
  }

  return registerLocalUser(
    candidateName,
    email,
    'password123',
    'Vascular Neurology Fellow',
    'Academic Medical Center',
    '2026-10-15'
  );
}
