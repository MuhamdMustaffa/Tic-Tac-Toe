"use client";
import { useEffect, useState } from "react";
import Cell from "./Components/Cells/cells";

// All Probability of winning cases
const winningCombos = [
  [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

export default function Home() {
  // Dynamic setting cells
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  // determine who will start first by variable Go
  const [go, setGo] = useState("circle");
 const [winningMessage , setWinningMessage] = useState("");

  useEffect(()=>{
    winningCombos.forEach((combo)=>{ 
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every ((cell)=> cells[cell] === "cross");

      if(circleWins){
        setWinningMessage("Circle Wins!");
      }else if(crossWins){
        setWinningMessage("Cross Wins!");
      }
    })
  },[cells])

  useEffect(()=> {
    if(cells.every((cell)=> cell !=="") && !winningMessage) {
      setWinningMessage("It's a Draw!")
    }
  },[cells,winningMessage])
  return (
    <>
      <div className="container">
        <div className="gameBoard">
          {cells.map((cell, index) => (
            <Cell
              id={index}
              go={go}
              setGo={setGo}
              key={index}
              cells={cells}
              setCells={setCells}
              cell={cell}
              winningMessage={winningMessage}
            />
          ))}
        </div>
        <div>{winningMessage}</div>
        {/* if there is no winning message , you can show this message */}
        {!winningMessage && <div>{`Now is the turn of ${go}!`}</div>}
      </div>
    </>
  );
}
