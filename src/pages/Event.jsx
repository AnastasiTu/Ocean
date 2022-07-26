import { useState } from "react";
import ContactForm from "../components/common/ContactForm/ContactForm";
import Modal from "../components/common/Modal";

function Event() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="intro">
      <div className="container">
        <div className="intro__inner">
          <h1 className="intro__title">
            PROTECT <p>OUR SEA</p> CREATURES
          </h1>
          <h4 className="intro__subtitle">Together We Can Do It.</h4>
          <p className="intro__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
          </p>
          <button
            className="btn btn--red"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Join Us
          </button>
          <Modal isOpen={isModalOpen} onClose={onModalClose}>
            <ContactForm fullscreen onClose={onModalClose}></ContactForm>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Event;
