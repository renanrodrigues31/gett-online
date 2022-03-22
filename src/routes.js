import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import BlogDeital from "./pages/BlogDeital";
import Blogs from "./pages/Blogs";
import Cases from "./pages/Cases";
import CasesDeital from "./pages/CasesDeital";
import Contact from "./pages/Contact";
import Form from "./pages/Form";
import Jobs from "./pages/Jobs";
import JobsDeital from "./pages/JobsDeital";
import Marketing from "./pages/Marketing";
import MarketingStrategy from "./pages/MarketingStrategy";
import Portfolio from "./pages/Portfolio";
import PortfolioCombinator from "./pages/PortfolioCombinator";
import Services from "./pages/Services";
import Tecnologies from "./pages/Technologies";
import TechnologiesDeital from "./pages/TechnologiesDeital";
import Home from './pages/index';
import Policy from './pages/PrivacyPolitcy';


export default function routes() {
    return (
        <>
        <BrowserRouter>
            <Routes>
            

            <Route path='/' element={<Home/>} />
                
            <Route path="/about" element={<AboutUs/>} />

            <Route path="/blog" element={<Blogs/>} />

            <Route path="/blog/deital" element={<BlogDeital/>} />

            <Route path="/cases" element={<Cases/>} />

            <Route path="/cases/deital" element={<CasesDeital/>} />

            <Route path="/contact" element={<Contact/>} />   
           
            <Route path="/form" element={<Form/>} />  

            <Route path="/jobs" element={<Jobs/>} />   

            <Route path="/jobs/deital" element={<JobsDeital/>} />     

            <Route path="/marketing" element={<Marketing/>} />     

            <Route path="/marketing/strategy" element={<MarketingStrategy/>} /> 

            <Route path="/portfolio" element={<Portfolio/>} />   

            <Route path="/portfolio/combinator" element={<PortfolioCombinator/>} />

            <Route path="/policy" element={<Policy/>} />      

            <Route path="/services" element={<Services/>} />     

            <Route path="/technologies" element={<Tecnologies/>} />  

            <Route path="/technologies/deital" element={<TechnologiesDeital/>} />    
           
            
            </Routes>
        </BrowserRouter>
        </>
      );


}