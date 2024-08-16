import { ReactNode } from "react";

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center">
      {children}
    </div>
  );
};

export default LoginLayout;
