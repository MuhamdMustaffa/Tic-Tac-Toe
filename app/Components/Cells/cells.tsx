import React, { Dispatch, SetStateAction } from "react";

type CellsProps = {
  id: number;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  cell: string;
  winningMessage:string;
};

const Cells = ({ go, setGo, id, cells, setCells, cell , winningMessage }: CellsProps) => {
  const handleClick = () => { // Removed the (e) parameter as it's not used
    // if there is winning message , he will return and stop after that
    if (winningMessage) {
      return;
    }
  
    const notTaken = !cells[id]; // Changed to !cells[id] to check if cell is empty
    if (notTaken) {
      if (go === "circle") {
        handleCellChange("circle");
        setGo("cross");
      } else if (go === "cross") {
        handleCellChange("cross");
        setGo("circle");
      }
    }
  };

  const handleCellChange = (cellToChange: string) => {
    // Make a copy of the cells array
    let copyCells = [...cells];
    // Edit the cell in the copied array
    copyCells[id] = cellToChange;
    // Update the state with the new array
    setCells(copyCells);
  };

  return (
    <div className="square" onClick={handleClick}> {/* Removed the (e) parameter */}
      <div className={cell}>{cell ? (cell === "circle" ? "O" : "X") : ""}</div>
    </div>
  );
};

export default Cells; // Changed to "Cells" to follow naming conventions
