import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
