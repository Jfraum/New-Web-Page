import { BrowserRouter, Routes , Route } from "react-router-dom"


import Home from "./pages/Home"
import HomeP from "./pages/Photography"
import HomeC from "./pages/Code"
import StephannyP from "./pages/stephanny"
import AlessandraP from "./pages/Alessandra"
import AnaP from "./pages/Ana"
import MariaFP from "./pages/MariaF"
import BarbaraP from "./pages/Bárbara"
import Glerifer2P from "./pages/Glerifer2"
import NeonDemonP from "./pages/NeonDemon"
import SunmodelP from "./pages/SunModel"
import GleriferP from "./pages/Glerifer"
import IsabelP from "./pages/Isabel"
import MetroP from "./pages/Metro"
import MaferP from "./pages/Mafer"
import SunshineP from "./pages/Sunshine"
import Mid2000sP from "./pages/Mid2000s"
import StreetP from "./pages/Street"
import AboutMe from "./pages/About"
import { ContactMe } from "./pages/ContactMe"


export default function App(){

    return (
        <>    
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
        </>


    )
}