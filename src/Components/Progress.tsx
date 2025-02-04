
function Progress() {
    const progressData = [
        { title: "Prayer Progress", percentage: 60 },
        { title: "Quran Reading", percentage: 40 },
        { title: "Charity Progress", percentage: 30 }
      ];
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    {progressData.map(({ title, percentage }) => (
      <div key={title} className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
        <p className="text-gray-600">{percentage}% of your goal completed</p>
      </div>
    ))}
  </div>

  )
}

export default Progress