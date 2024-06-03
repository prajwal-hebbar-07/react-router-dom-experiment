import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>{career.title}</h2>
      <p>Starting Salary - {career.salary}</p>
      <p>Location - {career.location}</p>
    </div>
  );
};

export default CareerDetails;

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:3001/careers/" + id);

  return res.json();
};
