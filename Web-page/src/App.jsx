import { BrowserRouter, Routes , Route } from "react-router-dom"


import Home from "./pages/Home"
import HomeP from "./pages/Photography"
import HomeC from "./pages/Code"
import HomeD from "./pages/Design"


export default function App(){

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/HomeP" element={<HomeP />}></Route>
            <Route path="/HomeC" element={<HomeC />}></Route>
            <Route path="/HomeD" element={<HomeD />}></Route>
        </Routes>
        </BrowserRouter>
    )
}