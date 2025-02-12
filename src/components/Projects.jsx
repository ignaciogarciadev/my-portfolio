"use client"
import { useState } from "react";
import { List } from "./list";
import { Item } from "./Item";
import { AnimatePresence } from "framer-motion";
import '../app/globals.css';

export default function Project() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <h1>Items List</h1>
      <List selectedId={selectedId} onSelect={setSelectedId} />
      
      {/* Renderiza el overlay solo cuando hay un ítem seleccionado */}
      <AnimatePresence>
        {selectedId && (
          <div className="overlay-container">
            <Item id={selectedId} />
            <button className="close-overlay" onClick={() => setSelectedId(null)}>
              Close
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
