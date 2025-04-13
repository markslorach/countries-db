"use client";
import Heading from "@/app/components/shared/heading";
import DeleteAccountDialog from "./delete-account-dialog";
import { Card } from "@/components/ui/card";
import { CircleAlert } from "lucide-react";

type DeleteAccountProps = {
  isTestAccount: boolean;
};

const DangerZone = ({ isTestAccount }: DeleteAccountProps) => {
  return (
    <section>
      <Heading tag="h2" className="mb-4 text-base">
        Danger Zone
      </Heading>

      <Card className="border border-red-300 bg-white">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center font-semibold text-red-500">
            <CircleAlert className="mr-2 size-5" />
            <span>Delete Account</span>
          </div>

          <p className="text-muted-foreground text-sm">
            Deleting your account will remove all your data from our database.
            You will be promted to confirm your password before your account is
            deleted.
          </p>
        </div>

        <DeleteAccountDialog isTestAccount={isTestAccount} />
      </Card>
    </section>
  );
};

export default DangerZone;
