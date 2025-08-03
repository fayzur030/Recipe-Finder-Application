import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import RecipeDetails from './Pages/RecipeDetails'
import Footer from './Components/Footer'
import FavouritePage from './Pages/FavouritePage'

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        {/* <h1 className='text-2xl font-semibold text-center py-4'>Our Recipes</h1> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/recipe/:id' element={<RecipeDetails />} />
          <Route path='/favourite' element={<FavouritePage />} />
        </Routes>
      </main>
      <Outlet />
      <div className='min-h-screen flex flex-col'></div>
      <Footer />
    </>
  )
}

export default App
