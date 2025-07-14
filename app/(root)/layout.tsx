import SideMenu from "@/app/shared/side-menu/side-menu";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <SideMenu />
      <main className="flex-1 overflow-y-auto p-2 md:p-2">
        <div className="max-w-full mx-auto">
          <div className="rounded-lg shadow p-6">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
