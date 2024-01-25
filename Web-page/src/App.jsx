import { BrowserRouter, Routes , Route } from "react-router-dom"

import Home from "./pages/Home";
import Photography from "./pages/Photography";
import Code from "./pages/Code";
import Design from "./pages/Design";

export default function App(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Photography" element={<Photography/>}></Route>
                <Route path="/Code" element={<Code/>}></Route>
                <Route path="/Design" element={<Design/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
