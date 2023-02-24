import { useNav } from "../../customHooks/useNav";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import './contact.css'

export const Contact = () => {
  const contactRef = useNav("Contact");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log(response.status);
          alert("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Email Failed!" + error);
        }
      );
  };

  return (
    <section ref={contactRef} id="contactContainer">
      <div className="contact_content">
        <h2>Contact</h2>
        <h3>Lets Get In Touch</h3>
        <p>Feel free to send an email and I will respond promptly</p>
        <div className="icon_email">
          <div>
            <MdEmail
              style={{ color: "#172b4b", fontSize: "2rem", marginRight: ".5rem" }}
            />
          </div>
          <p>- devwiandj@gmail.com</p>
        </div>
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
          <label className="label ">Email</label>

          <input
            className="input"
            type="email"
            name="user_email"
            placeholder="Email"
          />
          <label className="label">Message</label>

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
