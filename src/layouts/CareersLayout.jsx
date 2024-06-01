import { Outlet } from "react-router-dom";

const CareersLayout = () => {
  return (
    <div className="careers-layout">
      <h2>Careers Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        cupiditate!
      </p>

      <Outlet />
    </div>
  );
};

export default CareersLayout;
