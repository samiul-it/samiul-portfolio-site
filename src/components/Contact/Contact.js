import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cfcmqoq",
        "template_ruw6wau",
        form.current,
        "l7Tg_KDK-0xI6yhfa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Ask me anything...</h1>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    name="user_name"
                    class="input input-bordered"
                  />
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="user_email"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Message</span>
                  </label>
                  <input
                    type="text"
                    name="message"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control mt-6">
                  <button value="Send" class="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
