import { createContext } from "react";

export interface AuthContextType {
  authenticatedUser: string;
  setAuthenticatedUser: (user: string) => void;
  isSignInModalOpened: boolean;
  setIsSignInModalOpened: (value: boolean) => void;
  isSignUpModalOpened: boolean;
  setIsSignUpModalOpened: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
  authenticatedUser: "",
  setAuthenticatedUser: () => {},
  isSignInModalOpened: false,
  setIsSignInModalOpened: () => {},
  isSignUpModalOpened: false,
  setIsSignUpModalOpened: () => {},
});
