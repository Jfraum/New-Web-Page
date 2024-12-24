import React from "react";


// routesConfig.js
const Home = React.lazy(() => import("./pages/Home"));
const HomeP = React.lazy(() => import("./pages/Photography"));
const HomeC = React.lazy(() => import("./pages/Code"));
const AboutMe = React.lazy(() => import("./pages/About"));
const ContactMe = React.lazy(() => import("./pages/ContactMe"));
const Cinematography = React.lazy(() => import("./pages/Cinematography"));
const Metanoia = React.lazy(() => import("./pages/subpages/Metanoia"));
const Reel = React.lazy(() => import("./pages/subpages/Reel"));
const Things = React.lazy(() => import("./pages/subpages/Things"));
const Firehat = React.lazy(() => import("./pages/subpages/Firehat"));
const Marcos = React.lazy(() => import("./pages/subpages/Marcos"));
const Palacio = React.lazy(() => import("./pages/subpages/Palacio"));
const Jhuli = React.lazy(() => import("./pages/subpages/Jhuli"));
const Majo = React.lazy(() => import("./pages/subpages/Majo"));
const StephannyP = React.lazy(() => import("./pages/subpages/stephanny"));
const AlessandraP = React.lazy(() => import("./pages/subpages/Alessandra"));
const AnaP = React.lazy(() => import("./pages/subpages/Ana"));
const MariaFP = React.lazy(() => import("./pages/subpages/MariaF"));
const BarbaraP = React.lazy(() => import("./pages/subpages/Bárbara"));
const Glerifer2P = React.lazy(() => import("./pages/subpages/Glerifer2"));
const NeonDemonP = React.lazy(() => import("./pages/subpages/NeonDemon"));
const SunmodelP = React.lazy(() => import("./pages/subpages/SunModel"));
const GleriferP = React.lazy(() => import("./pages/subpages/Glerifer"));
const IsabelP = React.lazy(() => import("./pages/subpages/Isabel"));
const MetroP = React.lazy(() => import("./pages/subpages/Metro"));
const MaferP = React.lazy(() => import("./pages/subpages/Mafer"));
const SunshineP = React.lazy(() => import("./pages/subpages/Sunshine"));
const Mid2000sP = React.lazy(() => import("./pages/subpages/Mid2000s"));
const StreetP = React.lazy(() => import("./pages/subpages/Street"));
const Virino = React.lazy(() => import("./pages/subpages/Virino"));


const routesConfig = [
    { path: "/", element: Home },
    { path: "/HomeP", element: HomeP },
    { path: "/HomeC", element: HomeC },
    { path: "/AboutMe", element: AboutMe },
    { path: "/ContactMe", element: ContactMe },
    { path: "/Cinematography", element: Cinematography },
    { path: "/Metanoia", element: Metanoia },
    { path: "/Reel", element: Reel },
    { path: "/Things", element: Things },
    { path: "/Firehat", element: Firehat },
    { path: "/Marcos", element: Marcos },
    { path: "/Palacio", element: Palacio },
    { path: "/Jhuli", element: Jhuli },
    { path: "/Majo", element: Majo },
    { path: "/StephannyP", element: StephannyP },
    { path: "/AlessandraP", element: AlessandraP },
    { path: "/AnaP", element: AnaP },
    { path: "/MariaFP", element: MariaFP },
    { path: "/BarbaraP", element: BarbaraP },
    { path: "/Glerifer2P", element: Glerifer2P },
    { path: "/NeonDemonP", element: NeonDemonP },
    { path: "/SunmodelP", element: SunmodelP },
    { path: "/GleriferP", element: GleriferP },
    { path: "/IsabelP", element: IsabelP },
    { path: "/MetroP", element: MetroP },
    { path: "/MaferP", element: MaferP },
    { path: "/SunshineP", element: SunshineP },
    { path: "/Mid2000sP", element: Mid2000sP },
    { path: "/StreetP", element: StreetP },
    {path: "/Virino" , element: Virino},
];

export default routesConfig;

