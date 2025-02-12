import React from "react";
import { motion } from "framer-motion";
import { items } from "./data";

export function Item({ id, setSelectedId }) {
  const { category, title, description, link } = items.find((item) => item.id === id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="overlay"
        onClick={() => setSelectedId(null)}
      />
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`images/${id}.jpg`} alt={title} />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container">
            <h2 className="text-1xl" >{description}</h2>
            <a href={link} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded pointer-events-auto">
              Go to the website
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
