import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Outlet />
    </div>
  );
}
