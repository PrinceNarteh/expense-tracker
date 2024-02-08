import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <div className="h-screen bg-primary-dark">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
