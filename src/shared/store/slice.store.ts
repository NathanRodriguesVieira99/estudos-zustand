import { create, type StateCreator } from "zustand";

interface User {
  name: string;
  age: number;
  email: string;
  avatar?: string;
}

// tipagem de uma slice com estados e métodos
interface AuthSlice {
  token: string | null;
  isAuthenticated: boolean;

  login: (data: { user?: User; token: string }) => Promise<void>;
  logout: () => void;
}

// tipagem de uma slice com estados e métodos
interface ProfileSlice {
  user: User | null;

  updateProfile: (data: User) => void;
}

// implementação da slice com StateCreator
const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  token: null,
  isAuthenticated: false,

  login: async (data: { user?: User; token: string }) =>
    set({ token: data.token }),

  logout: () => set({ token: null }),
});

// implementação da slice com StateCreator
const createProfileSlice: StateCreator<ProfileSlice> = (set) => ({
  user: null,

  updateProfile: (data: User) =>
    set((prev) => ({ user: data ? null : prev.user })),
});

// Tipagem unindo ambas as slices
type BoundStore = AuthSlice & ProfileSlice;

// Store que recebe as slices
// ...a --> recebe todos os params de create (set,get)
export const useBoundStore = create<BoundStore>((...params) => ({
  ...createAuthSlice(...params),
  ...createProfileSlice(...params),
}));
