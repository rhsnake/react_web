import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";


//Outlet renders the child route
const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
