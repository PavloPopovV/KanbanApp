import React from "react"
import { CardListProps } from "../../types/cardTypes"
import Card from "../Card"
import DropArea from "../DropArea"

const CardList = ({
  board,
  boardIndex,
  onDrop,
  setActiveCard,
  setSourceColumnIndex,
}: CardListProps) => {
  return (
    <div className="bg-[#1b1b1b] rounded-2xl">
      <h3 className="font-bold text-lg text-center text-white uppercase pt-3">
        {board.title}
      </h3>
      <ul className="px-5 h-120 overflow-y-auto overscroll-auto">
        <DropArea onDrop={() => onDrop(board.status, 0)} />
        {board.list.length
          ? board.list.map((task, index) => (
              <React.Fragment key={task.id}>
                <Card
                  task={task}
                  taskIndex={index}
                  boardIndex={boardIndex}
                  setActiveCard={setActiveCard}
                  setSourceColumnIndex={setSourceColumnIndex}
                />
                <DropArea onDrop={() => onDrop(board.status, index + 1)} />
              </React.Fragment>
            ))
          : <span className="text-white text-center block">No tasks in this column yet!</span>}
      </ul>
    </div>
  )
}

export default CardList
