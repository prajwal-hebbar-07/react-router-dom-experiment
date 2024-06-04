import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us Section</h3>

      <Form method="post" action="/help/contact">
        <label>
          <span>Email: </span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Message: </span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
};

export default Contact;

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submissionData = {
    email: data.get("email"),
    message: data.get("message"),
  };

  console.log(submissionData);

  // Error message display
  if (submissionData.message.length < 10) {
    return { error: "The message should be atleast 10 characters long" };
  }
  // redirect
  return redirect("/");
};
