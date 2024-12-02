"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import {
  type SignUpFormData as FormState,
  SignUpFormSchema,
} from "@/lib/definitions";

import {
  BACKEND_URL,
  BACK_LOGIN_PATH,
  BACK_REGISTER_PATH,
} from "@/lib/constants";

export async function signIn(state: FormState) {
  const validatedFields = SignUpFormSchema.safeParse({
    nickname: state.nickname,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${BACKEND_URL}${BACK_LOGIN_PATH}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(state),
  });

  const accessToken = response.headers.get("set-cookie")!.split("=")[1];
  cookies().set("access_token", accessToken);

  if (response.ok) {
    redirect("/dashboard");
  }

  return {
    errors: "failed to sign up",
  };
}

export async function signUp(state: FormState) {
  const validatedFields = SignUpFormSchema.safeParse({
    nickname: state.nickname,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${BACKEND_URL}${BACK_REGISTER_PATH}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(state),
  });

  const accessToken = response.headers.get("set-cookie")!.split("=")[1];
  cookies().set("access_token", accessToken);

  if (response.ok) {
    redirect("/dashboard");
  }

  return {
    errors: "failed to sign up",
  };
}

export async function signOut() {
  cookies().set("access_token", "", { expires: new Date(0) });
  redirect("/sign-in");
}

export async function getSession() {
  const cookie = cookies().get("access_token")?.value;

  //   redirect("/sign-in");
  return cookie;
}
