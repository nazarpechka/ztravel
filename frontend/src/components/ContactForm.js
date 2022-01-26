import { useState } from "react";
import axios from "axios";

import Input from "./Input";
import Button from "./Button";

const ContactForm = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (e) => {
    const target = e.target;
    let val = target.value;
    if (target.type === "tel") {
      val = val.replace(/\D/g, "");
    }
    setInfo({
      ...info,
      [target.name]: val,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const error = document.querySelector("#contact-error");
    console.log(error);
    const success = document.querySelector("#contact-success");

    axios
      .post("/api/contacts", info)
      .then(() => {
        error.textContent = "";
        success.textContent = "We will reach you soon!";
      })
      .catch((err) => {
        console.log("got error");
        success.textContent = "";
        error.textContent = err.response
          ? err.response.data.message
          : err.message;
      });
  };

  return (
    <section className="container m-auto px-96 py-8">
      <h3 className="text-4xl mb-8 text-center">Contact Us</h3>
      <form className="w-full" onSubmit={onSubmit}>
        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="Your name"
          value={info.name}
          onChange={onChange}
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="Your email"
          value={info.email}
          onChange={onChange}
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Your Phone Number"
          value={info.phone}
          onChange={onChange}
        />
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Your message"
          value={info.message}
          onChange={onChange}
          className="w-full my-4 focus:border-secondary focus:ring-secondary border border-gray-300 rounded-md"
        ></textarea>

        <div className="text-center mt-4 ">
          <span className="block text-red-500 mb-4" id="contact-error"></span>
          <span
            className="block text-green-500 mb-4"
            id="contact-success"
          ></span>
          <Button label="Submit" type="submit" />
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
