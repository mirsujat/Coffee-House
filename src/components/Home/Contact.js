import React from "react";
import Title from "../Globals/Title/Title";

const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="col-10 col-sm-8 col-md-6 mx-auto">
        <form action="https://formspree.io/sujatbd09@gmail.com" method="POST">
          {/* name */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="mir sujat"
            />
          </div>
          {/* name */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder="test@email.com"
            />
          </div>
          {/* description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              row="5"
              placeholder="Please write somethings..."
            />
          </div>
          {/* submit */}
          <button
            type="submit"
            className="btn btn-yellow btn-block text-capitalize mt-5"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
