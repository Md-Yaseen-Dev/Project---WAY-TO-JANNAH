
function Remainder() {
    const reminders = [
        "Pray your Fajr on time today!",
        "Read 2 pages of the Quran after Fajr",
        "Donate to a charity of your choice"
      ];
    
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Your Reminders</h3>
      <ul className="list-disc pl-6">
        {reminders.map((reminder, index) => (
          <li key={index} className="text-gray-600 mb-2">{reminder}</li>
        ))}
      </ul>
    </div>

)
}

export default Remainder