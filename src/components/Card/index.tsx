import { getDaysAgo } from "../../utils/getDaysAgo"
import { CardProps } from "../../types/cardTypes"

const Card = ({ task, taskIndex, boardIndex, setActiveCard, setSourceColumnIndex }: CardProps) => {
  if (!task) return null;

  const handleDragStart = (columnIndex: number, cardIndex: number) => {
    setActiveCard(cardIndex);
    setSourceColumnIndex(columnIndex);
  };

  return (
    <li
      className="p-3 border border-black rounded-xl bg-white cursor-grab"
      draggable
      onDragStart={() => handleDragStart(boardIndex, taskIndex)  }
      onDragEnd={() => setActiveCard(null)}
    >
      <a href={task.html_url} target="_blank">

      <h4 className="font-bold overflow-hidden whitespace-nowrap text-ellipsis mb-1">
        {task.title}
      </h4>
      </a>
      <div className="flex gap-4 mb-1 flex-wrap text-gray-500">
        <span>#{task.number}</span>
        <span>{getDaysAgo(task.updated_at)}</span>
      </div>
      <div className="flex gap-4 flex-wrap text-gray-500">
        <span className="max-w-[120px] overflow-hidden whitespace-nowrap text-ellipsis">
          {task.user.login}
        </span>
        |<span>Comments: {task.comments}</span>
      </div>
    </li>
  )
}

export default Card