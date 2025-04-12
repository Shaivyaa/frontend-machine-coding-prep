import React, { useState } from "react";
import "./styles.css";

export default function ModalBox() {
  const [openModal, setOpenModal] = useState(false);

  const onModalOpen = () => {
    setOpenModal(() => !openModal);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  //   useEffect(() => {
  //     if (openModal) {
  //       return (document.body.style.overflow = "hidden");
  //     } else {
  //       return (document.body.style.overflow = "auto");
  //     }

  //   }, [openModal]);

  return (
    <>
      <div>
        <button onClick={onModalOpen}>Open Modal</button>
        <div onClick={(e) => e.stopPropagation()} className="containermodal">
          {openModal && (
            <div className="modal">
              Hello Hi, Okay Bye
              <button onClick={closeModal}>Close</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
