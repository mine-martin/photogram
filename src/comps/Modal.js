import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImage, setSelectedImage }) => {
  const setclick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImage(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={setclick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        alt="selectedImage"
        initial={{ y: '-100vh' }}
        transition={{ delay: 1 }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
