import { useNav } from "../../customHooks/useNav";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const contactRef = useNav("Contact");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w4jyvd3",
        "template_x6areta",
        form.current,
        "K6IV_EwGNYNMUJVKA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section ref={contactRef} id="contactContainer">
      <div className="contact_content">
        <h2>Contact</h2>
        <h3>Lets Get In Touch</h3>
        <p>Feel free to send an email and I will respond promply</p>
        <span>devwiandj@gmail.com</span>
      </div>
      <div className="contact_form">
        <form ref={form} onSubmit={sendEmail}>
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            name="user_name"
            placeholder="Name"
          />
          <label  className="label ">Email</label>

          <input
            className="input"
            type="email"
            name="user_email"
            placeholder="Email"
          />
          <label  className="label">Message</label>

          <textarea
            className="input_message"
            name="user_message"
            placeholder="message"
          />
          <input className="input_send" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};
