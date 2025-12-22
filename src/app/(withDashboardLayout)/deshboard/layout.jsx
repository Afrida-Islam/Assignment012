import DashboardSidebar from "@/app/Components/DashboardSidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex gap-4 ">
      <DashboardSidebar />
      <div className="ml-[200px]">{children}</div>
    </div>
  );
};

export default layout;
