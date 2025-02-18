import { useTaskBoard } from "../../hooks/useTaskBoard "
import CardList from "../CardList"

const Column = () => {
  const { tasks, setActiveCard, onDrop, setSourceColumnIndex } = useTaskBoard()
  
  return (
    <section className="grid grid-cols-3 gap-5" aria-labelledby="task-lists">
      {tasks.length
        ? tasks.map((board, index) => (
            <CardList
              key={board.id}
              board={board}
              boardIndex={index}
              setActiveCard={setActiveCard}
              onDrop={onDrop}
              setSourceColumnIndex={setSourceColumnIndex}
            />
          ))
        : <span>Enter URL to check issues!</span>}
    </section>
  )
}

export default Column