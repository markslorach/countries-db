import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CircleAlert } from "lucide-react";

type DeleteAccountProps = {
  isTestAccount: boolean;
};

const DeleteAccount = ({ isTestAccount }: DeleteAccountProps) => {
  return (
    <Card className="w-full max-w-[550px] border border-red-300 bg-white">
      <div className="flex flex-col space-y-1">
        <div className="flex items-center font-semibold text-red-500">
          <CircleAlert className="mr-2 size-5" />
          <span>Delete Account</span>
        </div>

        <p className="text-muted-foreground">
          Deleting your account will remove all your data from our database.
        </p>
      </div>

{/* TODO: Remove true once account deletion is set up */}
      <Button variant="destructive" className="w-fit" disabled={true || isTestAccount}>
        Delete Account
      </Button>
    </Card>
  );
};

export default DeleteAccount;
