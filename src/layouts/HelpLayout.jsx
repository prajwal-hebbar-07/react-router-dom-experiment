import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>THis is the Help Section!</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem voluptate
        aliquid commodi? Placeat culpa sit dolorem, sequi impedit ullam ipsum
        iure corrupti optio tempore, voluptates odit quo soluta dolores vitae?
      </p>

      <nav>
        <NavLink to="faq">FAQ About the Portal</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;
