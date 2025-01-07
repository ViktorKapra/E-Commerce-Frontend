import apiEndpoints from "@/api.endpoints";
import UserInfo from "@/types/user.types";

export default async function ChangePassword(password: string) {
  const patchDocument = [{ op: "replace", path: "/password", value: password }];
  const response = await fetch(apiEndpoints.changePassword, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json-patch+json",
    },
    body: JSON.stringify(patchDocument),
  });

  if (response.ok) {
    return true;
  }
  if (response.status === 400) {
    return false;
  }
  return Promise.reject(Error("Unable to change password."));
}

export async function getUser(): Promise<UserInfo> {
  const response = await fetch(apiEndpoints.getUserInfo, { method: "GET" });
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(Error("Unable to get user data."));
}
export async function saveProfile(profile: UserInfo) {
  const formData = new FormData();
  formData.append("username", profile.username);
  formData.append("addressDelivery", profile.addressDelivery);
  formData.append("phoneNumber", profile.phoneNumber);
  formData.append("profilePicture", await fetch(profile.profilePicture).then((r) => r.blob()));

  const response = await fetch(apiEndpoints.saveProfile, {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    return true;
  }
  if (response.status === 400) {
    return false;
  }
  return Promise.reject(Error("Unable to save profile."));
}
