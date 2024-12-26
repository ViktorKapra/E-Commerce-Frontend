import { createContext, useState, ReactNode, useContext, useMemo } from "react";

interface AuthContextType {
  authenticatedUser: string;
  setAuthenticatedUser: (value: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [authenticatedUser, setAuthenticatedUser] = useState("");
  const providerValue = useMemo(() => ({ authenticatedUser, setAuthenticatedUser }), [authenticatedUser]);
  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};

export { AuthContextProvider, useAuth };
