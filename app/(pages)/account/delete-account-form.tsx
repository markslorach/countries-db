"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { deleteAccount } from "@/server/auth";
import {
  deleteAccountFormSchema,
  DeleteAccountFormType,
} from "@/utils/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type DeleteAccountActionProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const DeleteAccountForm = ({ isOpen, setIsOpen }: DeleteAccountActionProps) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<DeleteAccountFormType>({
    resolver: zodResolver(deleteAccountFormSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (data: DeleteAccountFormType) => {
    const result = await deleteAccount(data);

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    toast.success("Account deleted successfully");
    router.push("/");
    router.refresh();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Label>Please enter your password to confirm.</Label>
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

        <div className="flex flex-col justify-end gap-2 sm:flex-row">
          <Button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            variant="outline"
            className="h-11"
          >
            Cancel
          </Button>

          <Button
            type="submit"
            variant="destructive"
            className="h-11"
            disabled={form.formState.isSubmitting}
          >
            {`${form.formState.isSubmitting ? "Deleting Account..." : "Delete Account"}`}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default DeleteAccountForm;
