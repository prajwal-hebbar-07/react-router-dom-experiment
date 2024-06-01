import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found!!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, dolor! Sit
        soluta nisi eius repellat eaque ducimus, officia quos consectetur
        accusantium totam facilis, culpa dignissimos corporis, quia corrupti
        iure sapiente? Placeat saepe perferendis odit accusamus fuga cupiditate
        eveniet fugit atque animi inventore laborum consequuntur et eaque illum
        iure expedita repellat tempore soluta iusto, reprehenderit omnis facilis
        quis recusandae dicta. Numquam.
      </p>
      <p>
        Go back to the <Link to={"/"}>Home Page</Link>
      </p>
    </div>
  );
};
