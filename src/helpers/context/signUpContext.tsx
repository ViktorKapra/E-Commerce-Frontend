import { createContext, useState, ReactNode, useContext, useMemo } from "react";

interface SignUpContextType {
  isSignUpModalInOpen: boolean;
  setIsSignUpModalOpen: (value: boolean) => void;
}

const SignUpContext = createContext<SignUpContextType | undefined>(undefined);

function SignUpContextProvider({ children }: { children: ReactNode }) {
  const [isSignUpModalInOpen, setIsSignUpModalOpen] = useState(false);
  const providerValue = useMemo(() => ({ isSignUpModalInOpen, setIsSignUpModalOpen }), [isSignUpModalInOpen]);
  return <SignUpContext.Provider value={providerValue}>{children}</SignUpContext.Provider>;
}

const useSignUp = () => {
  const context = useContext(SignUpContext);
  if (!context) {
    throw new Error("useSignUp must be used within an SignUpContextProvider");
  }
  return context;
};

export { SignUpContextProvider, useSignUp };
