import { Outlet } from "react-router-dom"
import Footer from '../Components/Footer'
import Navigation from '../Components/Navbar'
const Layout = () => {
  return (
    <>
    <Navigation />
     <Outlet/> 
     <Footer/>
    </>
  )
}

export default Layout
