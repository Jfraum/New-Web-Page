import { BrowserRouter, Routes , Route } from "react-router-dom"


import Home from "./pages/Home"
import HomeP from "./pages/Photography"
import HomeC from "./pages/Code"
import StephannyP from "./pages/subpages/stephanny.jsx"
import AlessandraP from "./pages/subpages/Alessandra"
import AnaP from "./pages/subpages/Ana"
import MariaFP from "./pages/subpages/MariaF"
import BarbaraP from "./pages/subpages/Bárbara"
import Glerifer2P from "./pages/subpages/Glerifer2"
import NeonDemonP from "./pages/subpages/NeonDemon"
import SunmodelP from "./pages/subpages/SunModel"
import GleriferP from "./pages/subpages/Glerifer"
import IsabelP from "./pages/subpages/Isabel"
import MetroP from "./pages/subpages/Metro"
import MaferP from "./pages/subpages/Mafer"
import SunshineP from "./pages/subpages/Sunshine"
import Mid2000sP from "./pages/subpages/Mid2000s"
import StreetP from "./pages/subpages/Street"
import AboutMe from "./pages/About"
import { ContactMe } from "./pages/ContactMe"
import { Cinematography } from "./pages/Cinematography"
import { Metanoia } from "./pages/subpages/Metanoia"
import { Reel } from "./pages/subpages/Reel.jsx"
import { Things } from "./pages/subpages/Things.jsx"

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
            <Route path="/Cinematography" element={<Cinematography />}></Route>
            <Route path="/Metanoia" element={<Metanoia />}></Route>
            <Route path="/Reel" element={<Reel />}></Route>
            <Route path="/Things" element={<Things />}></Route>

        </Routes>
        </BrowserRouter>
        </>


    )
}