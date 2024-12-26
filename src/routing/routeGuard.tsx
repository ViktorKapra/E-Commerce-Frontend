import { useEffect } from "react";
import NONE_AUTHENTICATED_USER from "@/helpers/constants";
import { Outlet } from "react-router";
import { useAuth } from "@/helpers/context/authContext";
import { useSignIn } from "@/helpers/context/signInContext";

export default function RouteGuard() {
  const { authenticatedUser } = useAuth();
  const { isSignInModalInOpen, setIsSignInModalOpen } = useSignIn();
  useEffect(() => {
    if (authenticatedUser === NONE_AUTHENTICATED_USER) {
      setIsSignInModalOpen(true);
    }

    return () => {
      if (authenticatedUser === NONE_AUTHENTICATED_USER && isSignInModalInOpen) {
        setIsSignInModalOpen(false);
      }
    };
  }, [authenticatedUser]);

  return <Outlet />;
}
