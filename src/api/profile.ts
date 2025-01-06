import apiEndpoints from "@/api.endpoints";

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
