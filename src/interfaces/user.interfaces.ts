export type roles = 'User' | 'Admin' | 'ReadOnly Admin';

export interface RegisteredUser {
  email: string;
  password: string;
  name: string;
  phoneNumber?: string;
  role: roles;
  hasToResetPassword?: boolean;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface LoggedUser {
  email: string;
  name: string;
  role: string;
  phoneNumber?: string;
}
