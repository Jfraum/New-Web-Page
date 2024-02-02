import { BrowserRouter, Routes , Route } from "react-router-dom"


import Home from "./pages/Home"
import HomeP from "./pages/Photography"
import HomeC from "./pages/Code"
import HomeD from "./pages/Design"
import StephannyP from "./pages/photoPages/stephanny"
import AlessandraP from "./pages/photoPages/Alessandra"
import AnaP from "./pages/photoPages/Ana"
import MariaFP from "./pages/photoPages/MariaF"


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


        </Routes>
        </BrowserRouter>
    )
}