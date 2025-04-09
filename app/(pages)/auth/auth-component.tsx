import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";

const AuthComponent = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="sign-in">
        <TabsList className="mb-5 h-11 w-full rounded-xs">
          <TabsTrigger value="sign-in">Sign In</TabsTrigger>
          <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <SignInForm />
        </TabsContent>
        <TabsContent value="sign-up">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthComponent;
