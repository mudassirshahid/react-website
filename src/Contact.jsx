import React, { useState } from "react";
import logo from "./logo.svg";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My phone number is ${data.phone} and email is  ${data.email}, Here what I want to say that is ${data.msg}`)
  };
  return (
    <>
      <div className="my-5 py-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact-div mb-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput2" className="form-label">
                  Phone
                </label>
                <input
                  type="phone"
                  className="form-control"
                  id="exampleFormControlInput2"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile number"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput3" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput3"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-auto">
                <button type="submit" class="btn btn-outline-info submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
