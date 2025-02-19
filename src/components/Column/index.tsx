import { useTaskBoard } from "../../hooks/useTaskBoard "
import CardList from "../CardList"

const Column = () => {
  const { tasks, setActiveCard, onDrop, setSourceColumnIndex } = useTaskBoard()

  return (
    <section aria-labelledby="task-lists">
      {tasks.length ? (
        <ul className="grid grid-cols-3 gap-5">
          {tasks.map((board, index) => (
            <CardList
              key={board.id}
              board={board}
              boardIndex={index}
              setActiveCard={setActiveCard}
              onDrop={onDrop}
              setSourceColumnIndex={setSourceColumnIndex}
            />
          ))}
        </ul>
      ) : (
        <span>Enter URL to check issues!</span>
      )}
    </section>
  )
}

export default Column