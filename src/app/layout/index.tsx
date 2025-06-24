import { Outlet } from "react-router-dom";
import { Footer } from "~widgets/index";

export const GenericLayout = () => {
  return (
    <div className=" font-sans antialiased">
      <Outlet />

      <Footer />
    </div>
  );
};
