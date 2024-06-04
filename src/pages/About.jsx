import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState("Prajwal");

  if (!user) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <div className="about-page">
      <h2>This is the About Page!</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
        accusantium molestias tempora, porro perspiciatis error ex aspernatur
        sunt, aliquam repellendus incidunt! Velit, accusantium! Facere vel
        fugiat architecto, amet sed quidem. Fuga consequuntur beatae repellendus
        sint quasi delectus corrupti, iure placeat porro voluptatem velit at,
        non ipsa earum quo sed repellat accusamus illum modi architecto? Odio
        voluptas dicta eligendi fugiat voluptates.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
        accusantium molestias tempora, porro perspiciatis error ex aspernatur
        sunt, aliquam repellendus incidunt! Velit, accusantium! Facere vel
        fugiat architecto, amet sed quidem. Fuga consequuntur beatae repellendus
        sint quasi delectus corrupti, iure placeat porro voluptatem velit at,
        non ipsa earum quo sed repellat accusamus illum modi architecto? Odio
        voluptas dicta eligendi fugiat voluptates.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
        accusantium molestias tempora, porro perspiciatis error ex aspernatur
        sunt, aliquam repellendus incidunt! Velit, accusantium! Facere vel
        fugiat architecto, amet sed quidem. Fuga consequuntur beatae repellendus
        sint quasi delectus corrupti, iure placeat porro voluptatem velit at,
        non ipsa earum quo sed repellat accusamus illum modi architecto? Odio
        voluptas dicta eligendi fugiat voluptates.
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default About;
