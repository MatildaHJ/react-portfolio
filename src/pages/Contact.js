import React from "react";
import "../styles/Contact.css";

export default function Contact({ isNight }) {
  return (
    <div className="Contact">
      <section id="contact">
        <div className="border-section">
          <h3>Let's work together!</h3>
          <p>Send me a message and I'll get back to you asap</p>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control no-background"
                id="emailInput"
                fdprocessedid="5rahu7"
              />
              <label htmlFor="emailInput">Email</label>
            </div>
            <div className="form-group">
              <input
                type="name"
                className="form-control no-background"
                id="nameInput"
                fdprocessedid="vn5tda"
              />
              <label htmlFor="nameInput">Name</label>
            </div>
            <div className="form-group">
              <textarea
                className="form-control no-background"
                id="messageInput"
                rows="8"
              ></textarea>
              <label htmlFor="messageInput">Message</label>
            </div>
            <div>
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: isNight ? "#211b23" : "#665D68" }}
                fdprocessedid="svevfm"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
