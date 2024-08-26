import { Outlet,NavLink } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"

const RootLayout = () => {
  return (
    <>
        <header>
            <nav>
                <h1>Job Router</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="help">Help</NavLink>
                <NavLink to="career">Career</NavLink>
            </nav>
        </header>
        <Breadcrumbs/>
        <main>
            <Outlet/>
        </main>
    </>  
  )
}

export default RootLayout