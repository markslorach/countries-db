"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
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

    if (result.success) {
      router.push("/");
      router.refresh();
    }

    if (!result.success) {
      toast.error(result.error);
    }
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
                  <Button
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 hover:bg-transparent"
                  >
                    {showPassword ? (
                      <EyeOff className="size-5" />
                    ) : (
                      <Eye className="size-5" />
                    )}
                  </Button>
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
                  <Button
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 hover:bg-transparent"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="size-5" />
                    ) : (
                      <Eye className="size-5" />
                    )}
                  </Button>
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
