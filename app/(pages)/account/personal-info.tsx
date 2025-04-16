import Heading from "@/app/components/shared/heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type PersonalInfoProps = {
  session: {
    user: {
      name: string;
      email: string;
    };
  };
};

const PersonalInfo = ({ session }: PersonalInfoProps) => {
  return (
    <section>
      <Heading tag="h2" className="mb-4 text-base">
        Personal Information
      </Heading>

      <div className="space-y-4">
        <Label className="mb-3">Name</Label>
        <Input
          value={session.user?.name}
          disabled
          className="h-11 bg-white text-sm sm:text-base"
        />

        <Label className="mb-3">Email</Label>
        <Input
          value={session.user?.email}
          disabled
          className="h-11 bg-white text-sm sm:text-base"
        />
      </div>
    </section>
  );
};

export default PersonalInfo;
