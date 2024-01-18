import { BrowserRouter, Routes , Route } from "react-router-dom"


import Home from "./pages/Home"
import HomeP from "./pages/home photography"
import HomeC from "./pages/home code"
import HomeD from "./pages/home design"
import { IKImage, IKVideo, IKContext, IKUpload } from 'imagekitio-react'

const urlEndpoint = '<https://ik.imagekit.io/f10c3to17/>'
const publicKey = '<public_uOVFRhFppXpYrQdII5ome8vMYy0=>'; 
const authenticator = ()=>{
  return new Promise((resolve,reject)=>{
    resolve({signature,token,expiry})
  })
};


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