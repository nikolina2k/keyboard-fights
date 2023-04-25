import { writable } from 'svelte/store';

export type User = {
  email: string | null;
  uid: string;
};

export const auth = writable<User | null>(null);
