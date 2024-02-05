import { BrowserRouter, Routes , Route } from "react-router-dom"


import Home from "./pages/Home"
import HomeP from "./pages/Photography"
import HomeC from "./pages/Code"
import HomeD from "./pages/Design"
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


export default function App(){

    return (
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/HomeP" element={<HomeP />}></Route>
            <Route path="/HomeC" element={<HomeC />}></Route>
            <Route path="/HomeD" element={<HomeD />}></Route>
            <Route path="/HomeP/StephannyP" element={<StephannyP />}></Route>
            <Route path="/HomeP/AlessandraP" element={<AlessandraP />}></Route>
            <Route path="/HomeP/AnaP" element={<AnaP />}></Route>
            <Route path="/HomeP/MariaFP" element={<MariaFP />}></Route>
            <Route path="/HomeP/BarbaraP" element={<BarbaraP />}></Route>
            <Route path="/HomeP/Glerifer2P" element={<Glerifer2P />}></Route>
            <Route path="/HomeP/NeonDemonP" element={<NeonDemonP />}></Route>
            <Route path="/HomeP/GleriferP" element={<GleriferP />}></Route>
            <Route path="/HomeP/IsabelP" element={<IsabelP />}></Route>
            <Route path="/HomeP/MetroP" element={<MetroP />}></Route>
            <Route path="/HomeP/MaferP" element={<MaferP />}></Route>
            <Route path="/HomeP/SunshineP" element={<SunshineP />}></Route>
            <Route path="/HomeP/Mid2000s" element={<Mid2000sP />}></Route>
            <Route path="/HomeP/StreetP" element={<StreetP />}></Route>
            <Route path="/HomeP/SunmodelP" element={<SunmodelP />}></Route>


        </Routes>
        </BrowserRouter>
    )
}