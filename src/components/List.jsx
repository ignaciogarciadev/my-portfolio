import React from "react";
import { items } from "./data";
import { motion } from "framer-motion";

function Card({ id, title, category, theme, setSelectedId }) {
  return (
    <li className={`card ${theme}`} onClick={() => setSelectedId(id)}>
      <div className="card-content-container">
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
        </motion.div>
      </div>
    </li>
  );
}

export function List({ selectedId, setSelectedId }) {
  return (
    <ul className="card-list">
      {items.map((card) => (
        <Card 
          key={card.id} 
          {...card} 
          isSelected={card.id === selectedId} 
          setSelectedId={setSelectedId} 
        />
      ))}
    </ul>
  );
}
