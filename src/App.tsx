
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { createRouter} from './routes'

function App() {

  return (
    <>
      <RouterProvider router={createRouter()} />
    </>
  )
}

export default App
