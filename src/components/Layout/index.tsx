import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full max-w-[390px] mx-auto pl-4 pr-8">{children}</div>
  );
};

export default Layout;
