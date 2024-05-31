import { account } from './appwrite';

export async function register(email, password, name) {
  try {
    const response = await account.create('unique()', email, password, name);
    return response;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

export async function login(email, password) {
  try {
    const response = await account.createSession(email, password);
    return response;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}

export async function logout() {
  try {
    return await account.deleteSession('current');
  } catch (error) {
    console.log('Logout error :' + error.message);
  }
}

export function loginWithGoogle() {
  account.createOAuth2Session('google');
}

export function loginWithGitHub() {
  account.createOAuth2Session('github');
}
