export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-20 h-20 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
        <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        <div className="w-3/5 h-6 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
}
