export default async function singInUser(email: string, password: string): Promise<boolean> {
  const url = "https://localhost:7240/api/auth/signIn"; // `${apiEndpoints.sign_in}`; // "https://localhost:7240/api/auth/signIn"
  const response = await fetch(url, {
    mode: "no-cors",
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    return true;
  }
  if (response.status === 401) {
    return false;
  }
  return Promise.reject(Error("Unable to sign_in."));
}
