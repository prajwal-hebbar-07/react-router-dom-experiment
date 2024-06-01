const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact Us Section</h3>

      <form>
        <label>
          <span>Email: </span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Message: </span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
