import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Careers;

// This is a loader function
export const careerLoader = async () => {
  const res = await fetch("http://localhost:3001/careers");
  if (!res.ok) {
    throw Error("Careers data could not be fetched!");
  }
  return res.json();
};
