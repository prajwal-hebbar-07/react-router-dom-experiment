import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>React Router DOM Experiment</h1>
          {/* This makes sure that the page is not completely loaded and all the content will be displayed in the Outlet */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <BreadCrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
