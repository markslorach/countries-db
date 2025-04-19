"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleAlert } from "lucide-react";
import DeleteAccountForm from "./delete-account-form";

interface DeleteAccountDialogProps {
  isTestAccount: boolean;
  isOAuthUser: boolean;
}

const DeleteAccountDialog = ({
  isTestAccount,
  isOAuthUser,
}: DeleteAccountDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="cursor-pointer">
        <Button
          variant="destructive"
          className="h-11 w-fit"
          disabled={isTestAccount || isOAuthUser}
          aria-label="Delete account modal trigger"
        >
          Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[490px] border border-red-300">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-500">
            <CircleAlert className="size-5" />
            Are you sure?
          </DialogTitle>
          <DialogDescription>
            This will permanently delete your account and remove your data from
            our database.
          </DialogDescription>
        </DialogHeader>

        <DeleteAccountForm isOpen={isOpen} setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAccountDialog;
