import * as SecureStore from 'expo-secure-store';

const key = 'ACTIVE_USER';

export async function persistUser(user) {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(user));
  } catch (error) {
    console.log('Error storing the auth token', error);
  }
}

export async function removeUser() {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('Error removing the auth token', error);
  }
}

export async function getUser() {
  try {
    let result = await SecureStore.getItemAsync(key);
    return JSON.parse(result);
  } catch (error) {
    console.log('Error getting the auth token', error);
  }
}
