import Remainder from '../Components/Remainder'
import DailyQuote from '../Components/DailyQuote'
import Progress from '../Components/Progress'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function Home() {
  return (
        <div className="flex h-screen bg-gray-50">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 p-8">
            <Header />
    
            {/* Progress Overview */}
            <Progress />
    
            {/* Daily Quote */}
            <DailyQuote />
    
            {/* Reminders */}
            <Remainder />
          </div>
        </div>
      )
  
}

export default Home