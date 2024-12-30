import { useEffect } from "react";
import NONE_AUTHENTICATED_USER from "@/helpers/constants";
import { Outlet } from "react-router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectAuthUser } from "@/redux/features/authUserSlice";
import { openSignIn, closeSignIn, selectSignInOpen } from "@/redux/features/signInSlice";

export default function RouteGuard() {
  const authenticatedUser = useAppSelector(selectAuthUser);
  const signInOpen = useAppSelector(selectSignInOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authenticatedUser === NONE_AUTHENTICATED_USER) {
      dispatch(openSignIn());
    }

    return () => {
      if (authenticatedUser === NONE_AUTHENTICATED_USER && signInOpen) {
        dispatch(closeSignIn());
      }
    };
  }, [authenticatedUser]);

  return <Outlet />;
}
