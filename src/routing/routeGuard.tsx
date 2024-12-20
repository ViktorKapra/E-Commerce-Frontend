import { useEffect } from "react";
import NONE_AUTHENTICATED_USER from "@/helpers/constants";
import { Outlet } from "react-router";

export default function RouteGuard({
  authenticatedUser,
  isOpenSignInModal,
  setSignInModal,
}: {
  authenticatedUser: string;
  isOpenSignInModal: boolean;
  setSignInModal: (value: boolean) => void;
}) {
  useEffect(() => {
    if (authenticatedUser === NONE_AUTHENTICATED_USER) {
      setSignInModal(true);
    }

    return () => {
      if (authenticatedUser === NONE_AUTHENTICATED_USER && isOpenSignInModal) {
        setSignInModal(false);
      }
    };
  }, [authenticatedUser]);

  return <Outlet />;
}
