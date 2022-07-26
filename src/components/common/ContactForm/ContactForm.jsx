import Closes from "../../../img/close.png";
import "../../../scss/_modal.scss";
import { useEffect, useState } from "react";
import Modal from "../Modal";

function ContactForm({ onClose }) {
  const [isThxModalOpen, setThxModalOpen] = useState(false);
  const closeThxModal = () => {
    setThxModalOpen(false);
  };
  const openThxModal = () => {
    setThxModalOpen(true);
    setTimeout(() => {
      setThxModalOpen(false);
      onClose();
    }, 2000);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  }, [keydownHandler]);

  return (
    <div className="modal__header" onClick={(e) => e.preventDefault()}>
      <div className="modal__inner" onClick={(e) => e.stopPropagation()}>
        <h4 className="modal__title">
          The ocean needs your help!
          <p>Write to us:</p>
        </h4>
        <div className="modal__text">
          <p>Fill a little form and we will call you back!</p>
        </div>
        <form className="form">
          <div className="form__group">
            <input className="input" type="text" placeholder="Your name" />
          </div>

          <div className="form__group">
            <input className="input" type="tel" placeholder="Your phone" />
          </div>

          <div className="form__group">
            <input className="input" type="email" placeholder="Your email" />
          </div>

          <button className="btn btn--red" type="" onClick={openThxModal}>
            <span>Call me back</span>
          </button>
          <Modal onClose={closeThxModal} isOpen={isThxModalOpen}>
            <h4 className="modal__title--th">Thank's you!</h4>
          </Modal>
        </form>

        <div className="modal__footer">
          <h4 className="modal__footer-title">Our contacts</h4>
          <address className="modal__contacts">
            <p>Moscow</p>
            <p>
              Phone: <a href="tel:+799124012">+799124012</a>
            </p>
            <p>
              E-mail:{" "}
              <a href="mailto:a.t@gmail.com">
                a.t@gmail.com
              </a>
            </p>
          </address>
        </div>

        <button className="modal__close" type="button" onClick={onClose}>
          <img src={Closes} alt="" />
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
