const SkeletonIssuesBoard = () => {
  const skeletons = Array(3).fill(0)
  return (
    <div className="grid grid-cols-3 gap-5">
      {skeletons.map((_, index) => (
        <div
          key={index}
          role="status"
          className="h-[calc(100vh-330px)] p-4 border border-gray-200 rounded-xl shadow-sm animate-pulse md:p-6 dark:border-gray-700 flex flex-col items-center"
        >
          <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-30 mb-8"></div>
          <div className="w-full h-[100px] bg-gray-300 rounded-xl dark:bg-gray-700 mb-8"></div>
          <div className="w-full h-[100px] bg-gray-300 rounded-xl dark:bg-gray-700"></div>
        </div>
      ))}
    </div>
  )
}

export default SkeletonIssuesBoard
