import { createBrowserRouter } from 'react-router-dom'
import Daily_Quotes from '../DailyQuotes'
import Home from '../Home'
import PrayerTimes from '../PrayerTimes/prayertimes'


export const createRouter = () => {

const Routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Daily-Quotes",
    element: <Daily_Quotes />
  },
  {
    path: "prayertimes",
    element: <PrayerTimes />
  }
]
return createBrowserRouter(Routes)
}


