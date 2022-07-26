function Modal({
  fullscreen = false,
  isOpen = true,
  children,
  onClose = () => {},
}) {
  function closeModal() {
    onClose();
  }

  return (
    <>
      {isOpen && (
        <div
          className={`modal + ${
            fullscreen ? "modal_fullscreen" : "modal_child"
          }`}
          onClick={closeModal}
        >
          {children}
        </div>
      )}
    </>
  );
}
export default Modal;
