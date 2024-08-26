import 
{ 
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import Career, { careersLoader } from "./pages/careers/Career"
import CareerDetail, { careerDetailLoader } from "./pages/careers/CareerDetail";
import CareerError from "./pages/careers/CareerError";
import NotFound from "./pages/NotFound";

//layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from "./layouts/HelpLayout";
import CareerLayout from "./layouts/CareerLayout";

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="help" element={<HelpLayout/>}>
          <Route path="faq" element={<Faq/>} />
          <Route 
            path="contact" 
            element={<Contact/>}
            action={contactAction} 
          />
        </Route>
        <Route path="career" element={<CareerLayout/>} errorElement={<CareerError/>}>
          <Route 
            index
            element={<Career/>} 
            loader={careersLoader}
          />
          <Route
            path=":id"
            element={<CareerDetail/>}
            loader={careerDetailLoader}
          />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App
