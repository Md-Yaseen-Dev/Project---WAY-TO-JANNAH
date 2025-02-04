import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 bg-green-600 text-white p-5">
      <div className="text-xl font-bold mb-10">Way to Jannah</div>
      <ul>
        {["Home", "Progress", "Reminders", "Daily Quotes", "Prayer Times"].map((item) => (
          <li key={item} className="mb-6 hover:bg-green-700 p-2 rounded">
            <Link to={`/${item.toLowerCase().replace(" ", "")}`} className="block">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar