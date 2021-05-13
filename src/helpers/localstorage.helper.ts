import { RegisteredUser } from 'src/interfaces/user.interfaces';

/**
 * Get users from local storage and convert them to POJO
 * @returns list of users
 */
export const localstorageUsersToPOJO = (): RegisteredUser[] => {
  const jsonUsers = localStorage.getItem('users');
  if (jsonUsers) {
    return JSON.parse(jsonUsers);
  }
  return [];
};

/**
 * Save to local storage new array of users
 * @param users list of users to be saved
 */
export const saveObjectToLocalStorage = (users: RegisteredUser[]): void => {
  localStorage.setItem('users', JSON.stringify(users));
};

/**
 * Add a new user to local storage
 * @param user new user to add to local storage
 */
export const addNewUserToLocalStorage = (user: RegisteredUser): void => {
  const users = localstorageUsersToPOJO();
  users.push(user);
  saveObjectToLocalStorage(users);
};

/**
 * Check if a user exists in local storage
 * @param email new user email
 * @returns true if user exists, false otherwise
 */
export const checkIfUserExists = (email: string): boolean => {
  const users = localstorageUsersToPOJO();
  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    return true;
  }
  return false;
};

/**
 * Get a user from local storage array of users
 * @param email user email
 * @returns user if user exists in users list, false otherwise
 */
export const getUserFormLocalstorage = (
  email: String
): RegisteredUser | undefined => {
  const users = localstorageUsersToPOJO();
  return users.find((user) => user.email === email);
};
