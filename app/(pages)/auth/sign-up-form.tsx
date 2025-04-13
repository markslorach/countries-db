"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormMessage,
  FormItem,
  FormControl,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GoogleLogo from "@/components/ui/google-logo";
import { signUp } from "@/server/auth";
import { SignUpFormType, signUpFormSchema } from "@/utils/validationSchemas";
import ShowPasswordButton from "./show-password-btn";

const SignUpForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
  });

  const onSubmit = async (data: SignUpFormType) => {
    const result = await signUp(data);

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    toast.success("Account created successfully");
    router.push("/");
    router.refresh();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <Label>
                First Name <span className="text-red-500">*</span>
              </Label>
              <FormControl>
                <Input
                  placeholder="Enter your first name"
                  {...field}
                  className="h-11"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label>
                Email <span className="text-red-500">*</span>
              </Label>
              <FormControl>
                <Input
                  placeholder="example@email.com"
                  {...field}
                  className="h-11"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Label>
                Password <span className="text-red-500">*</span>
              </Label>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                    {...field}
                    className="h-11"
                  />
                  <ShowPasswordButton
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <Label>
                Confirm Password <span className="text-red-500">*</span>
              </Label>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="••••••••"
                    type={showConfirmPassword ? "text" : "password"}
                    {...field}
                    className="h-11"
                  />
                  <ShowPasswordButton
                    showPassword={showConfirmPassword}
                    setShowPassword={setShowConfirmPassword}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center">
          <Button
            type="submit"
            className="h-11 flex-1 cursor-pointer"
            disabled={form.formState.isSubmitting}
          >
            {`${form.formState.isSubmitting ? "Signing Up..." : "Sign Up"}`}
          </Button>
          <div className="bg-border mx-4 h-11 w-[1px]" />
          <Button
            disabled
            variant="outline"
            className="h-11 flex-1 font-semibold"
            type="button"
          >
            <GoogleLogo />
            Google
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
