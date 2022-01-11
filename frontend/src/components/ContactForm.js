import Input from "./Input";
import Button from "./Button";

const ContactForm = () => {
  return (
    <section className="container m-auto px-96 py-8">
      <h3 className="text-4xl mb-8 text-center">Contact Us</h3>
      <form className="w-full">
        <Input label="Name" name="name" type="text" placeholder="Your name" />
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="Your email"
        />
        <Input
          label="Phone Number"
          name="tel"
          type="number"
          placeholder="Your Phone Number"
        />
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Your message"
          className="w-full my-4 focus:border-secondary focus:ring-secondary border border-gray-300 rounded-md"
        ></textarea>

        <div className="text-center mt-4">
          <Button label="Submit" />
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
