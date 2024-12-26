import { createContext, useState, ReactNode, useContext, useMemo } from "react";

interface SignInContextType {
  isSignInModalInOpen: boolean;
  setIsSignInModalOpen: (value: boolean) => void;
}

const SignInContext = createContext<SignInContextType | undefined>(undefined);

function SignInContextProvider({ children }: { children: ReactNode }) {
  const [isSignInModalInOpen, setIsSignInModalOpen] = useState(false);
  const providerValue = useMemo(() => ({ isSignInModalInOpen, setIsSignInModalOpen }), [isSignInModalInOpen]);
  return <SignInContext.Provider value={providerValue}>{children}</SignInContext.Provider>;
}

const useSignIn = () => {
  const context = useContext(SignInContext);
  if (!context) {
    throw new Error("useSignIN must be used within an SignInContextProvider");
  }
  return context;
};

export { SignInContextProvider, useSignIn };
