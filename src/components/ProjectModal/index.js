import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import "./projectModal.scss";

export default function ProjectModal({ open, setOpen }) {
  return (
    <div className="modal-container">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          animationIn: "customEnterAnimation",
          animationOut: "customLeaveAnimation",
        }}
        animationDuration={500}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </div>
  );
}
