// IMPORTS // ______________________________________________________________

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// components imports
import Header from './layout/Header'
import HomePage from './pages/HomePage'
import TeamPage from './pages/TeamPage'
import HeroesPage from './pages/HeroesPage'
import InventoryPage from './pages/InventoryPage'
import ContactPage from './pages/ContactPage'
// styles imports
import './css/styles.min.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="team/*" element={<TeamPage />} />
          <Route path="heroes" element={<HeroesPage />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
