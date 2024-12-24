import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import routesConfig from "./routesConfig";

export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {routesConfig.map(({ path, element: Element }, index) => (
                        <Route key={index} path={path} element={<Element />} />
                    ))}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}