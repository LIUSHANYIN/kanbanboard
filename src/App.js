import React, { useState } from "react";
import "./App.css";
import columnsData from "./constants";
import Column from "./components/Column";

function App() {
  const [columns, setColumns] = useState(columnsData);

  const handleAddCard = (input, index) => {
    let newColumns = [...columns];
    newColumns[index].cards.push({ title: input });
    setColumns(newColumns);
  };
  const handleMoveCard = (currentColumn, nextColumn, cardIndex) => {
    const newColumns = [...columns];
    const cardToRemove = newColumns[currentColumn].cards.splice(
      cardIndex,
      1
    )[0];
    newColumns[nextColumn].cards.push(cardToRemove);
    setColumns(newColumns);
  };

  return (
    <div className="App">
      <div className="columns-container">
        {columns.map((column, i) => (
          <Column
            moveCard={handleMoveCard}
            addCardToColumn={handleAddCard}
            index={i}
            titleColor={column.color}
            cards={column.cards}
            title={column.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
