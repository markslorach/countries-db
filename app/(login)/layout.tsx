import { ReactNode } from "react";

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-4 md:container flex justify-center mt-10">
      {children}
    </div>
  );
};

export default LoginLayout;
