import { EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

type ShowPasswordProps = {
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
};

const ShowPasswordButton = ({ showPassword, setShowPassword }: ShowPasswordProps) => {
  return (
    <Button
      onClick={() => setShowPassword(!showPassword)}
      type="button"
      variant="ghost"
      size="icon"
      tabIndex={-1}
      aria-label={showPassword ? "Hide password" : "Show password"}
      className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 hover:bg-transparent"
    >
      {showPassword ? (
        <EyeOff className="size-5" />
      ) : (
        <Eye className="size-5" />
      )}
    </Button>
  );
};

export default ShowPasswordButton;
