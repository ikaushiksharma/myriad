import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="items-center h-full justify-center flex">{children}</div>;
};

export default Layout;
