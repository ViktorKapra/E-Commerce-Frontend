import { useEffect } from "react";
import NONE_AUTHENTICATED_USER from "@/helpers/constants";

export default function PrivateComponent({
  authenticatedUser,
  children,
  isOpenSignInModal,
  setSignInModal,
}: {
  authenticatedUser: string;
  children: React.ReactNode;
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

  return children;
}
