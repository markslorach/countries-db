"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleAlert } from "lucide-react";

interface DeleteAccountDialogProps {
  isTestAccount: boolean;
}

const DeleteAccountDialog = ({ isTestAccount }: DeleteAccountDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCancelButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="cursor-pointer">
        <Button
          variant="destructive"
          className="h-11 w-fit"
          disabled={isTestAccount}
        >
          Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[500px] border border-red-300">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-500">
            <CircleAlert className="size-5" />
            Are you sure?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our database.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={handleCancelButtonClick}
            variant="outline"
            className="h-11"
          >
            Cancel
          </Button>
          <Button variant="destructive" className="h-11">
            Delete Account
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAccountDialog;
