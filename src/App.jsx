import { BrowserRouter, Routes , Route } from "react-router-dom"


import Home from "./pages/Home"
import HomeP from "./pages/Photography"
import HomeC from "./pages/Code"
import StephannyP from "./pages/photoPages/stephanny"
import AlessandraP from "./pages/photoPages/Alessandra"
import AnaP from "./pages/photoPages/Ana"
import MariaFP from "./pages/photoPages/MariaF"
import BarbaraP from "./pages/photoPages/Bárbara"
import Glerifer2P from "./pages/photoPages/Glerifer2"
import NeonDemonP from "./pages/photoPages/NeonDemon"
import SunmodelP from "./pages/photoPages/SunModel"
import GleriferP from "./pages/photoPages/Glerifer"
import IsabelP from "./pages/photoPages/Isabel"
import MetroP from "./pages/photoPages/Metro"
import MaferP from "./pages/photoPages/Mafer"
import SunshineP from "./pages/photoPages/Sunshine"
import Mid2000sP from "./pages/photoPages/Mid2000s"
import StreetP from "./pages/photoPages/Street"
import AboutMe from "./pages/About"
import { ContactMe } from "./pages/ContactMe"


export default function App(){

    return (
    
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/HomeP" element={<HomeP />}></Route>
            <Route path="/HomeC" element={<HomeC />}></Route>
            <Route path="/AboutMe" element={<AboutMe />}></Route>
            <Route path="/ContactMe" element={<ContactMe />}></Route>
            <Route path="/StephannyP" element={<StephannyP />}></Route>
            <Route path="/AlessandraP" element={<AlessandraP />}></Route>
            <Route path="/AnaP" element={<AnaP />}></Route>
            <Route path="/MariaFP" element={<MariaFP />}></Route>
            <Route path="/BarbaraP" element={<BarbaraP />}></Route>
            <Route path="/Glerifer2P" element={<Glerifer2P />}></Route>
            <Route path="/NeonDemonP" element={<NeonDemonP />}></Route>
            <Route path="/GleriferP" element={<GleriferP />}></Route>
            <Route path="/IsabelP" element={<IsabelP />}></Route>
            <Route path="/MetroP" element={<MetroP />}></Route>
            <Route path="/MaferP" element={<MaferP />}></Route>
            <Route path="/SunshineP" element={<SunshineP />}></Route>
            <Route path="/Mid2000s" element={<Mid2000sP />}></Route>
            <Route path="/StreetP" element={<StreetP />}></Route>
            <Route path="/SunmodelP" element={<SunmodelP />}></Route>


        </Routes>
        </BrowserRouter>


    )
}