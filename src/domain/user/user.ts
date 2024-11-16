export interface NewUser {
  firstName: string;
  lastName?: string;
}

export interface User extends NewUser {
  id: number;
}
