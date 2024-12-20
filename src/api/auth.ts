import apiEndpoints from "@/api.endpoints";

export async function signInUser(email: string, password: string): Promise<boolean> {
  const url = apiEndpoints.signIn; // "https://localhost:7240/api/auth/signIn";
  const response = await fetch(url, {
    method: "POST",
    headers: new Headers({ "Content-type": "application/json" }),
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

export async function signUpUser(email: string, password: string): Promise<boolean> {
  const url = apiEndpoints.signUp; // "https://localhost:7240/api/auth/signUp";

  const response = await fetch(url, {
    method: "POST",
    headers: new Headers({ "Content-type": "application/json" }),
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
