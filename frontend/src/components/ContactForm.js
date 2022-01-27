import { useState } from "react";
import axios from "axios";

import Section from "./Section";
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
    const success = document.querySelector("#contact-success");

    axios
      .post("/api/contacts", info)
      .then(() => {
        error.textContent = "";
        success.textContent = "We will reach you soon!";
      })
      .catch((err) => {
        success.textContent = "";
        error.textContent = err.response
          ? err.response.data.message
          : err.message;
      });
  };

  return (
    <Section heading="Contact Us">
      <form className="w-1/2" onSubmit={onSubmit}>
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

        <div className="text-center">
          <p className="text-red-500 mb-4" id="contact-error"></p>
          <p className="text-green-500 mb-4" id="contact-success"></p>
          <Button label="Submit" type="submit" />
        </div>
      </form>
    </Section>
  );
};

export default ContactForm;
