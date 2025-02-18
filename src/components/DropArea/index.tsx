import { useState } from "react"

const DropArea = ({onDrop}:{onDrop: () => void}) => {
  const [showDrop, setShowDrop] = useState<boolean>(false)

  return (
    <li
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={e => e.preventDefault()}
      className={showDrop ? "w-full h-[100px] rounded-xl bg-blue-500 opacity-50 transition-all duration-200 ease-in-out" : "opacity-0 py-4"}
    >
    </li>
  )
}

export default DropArea