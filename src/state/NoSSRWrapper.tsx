import { ReactNode } from "react";

const NoSSRWrapper = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
export default NoSSRWrapper;
