import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { routes } from './utlitiy/routeConfig'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routes?.map((route) => (
          <Route key={route.key} path={route.path} Component={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
