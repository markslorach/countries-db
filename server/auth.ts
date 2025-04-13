"use server";
import { auth } from "@/lib/auth";
import {
  signInFormSchema,
  SignInFormType,
  signUpFormSchema,
  SignUpFormType,
} from "@/utils/validationSchemas";
import { revalidatePath } from "next/cache";

export const signIn = async (data: SignInFormType) => {
  const validatedData = signInFormSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      success: false,
      error: validatedData.error.errors[0].message,
    };
  }

  const { email, password } = validatedData.data;

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    console.error("Sign in error:", error.message);

    return {
      success: false,
      error: error.message || "An error occurred during sign in",
    };
  }
};

export const signUp = async (data: SignUpFormType) => {
  const validatedData = signUpFormSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      success: false,
      error: validatedData.error.errors[0].message,
    };
  }

  const { name, email, password } = validatedData.data;

  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    console.error("Sign up error:", error.message);

    return {
      success: false,
      error: error.message || "An error occurred during sign up",
    };
  }
};