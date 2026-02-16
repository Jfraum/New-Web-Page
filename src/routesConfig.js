import React from "react";



// routesConfig.js
const Home = React.lazy(() => import("./pages/Home"));
const HomeP = React.lazy(() => import("./pages/Photography"));
const HomeC = React.lazy(() => import("./pages/Code"));
const AboutMe = React.lazy(() => import("./pages/About"));
const ContactMe = React.lazy(() => import("./pages/ContactMe"));
const VisualArts = React.lazy(() => import("./pages/VisualArts"));
const Metanoia = React.lazy(() => import("./pages/subpages/Metanoia"));
const Reel = React.lazy(() => import("./pages/subpages/Reel"));
const Things = React.lazy(() => import("./pages/subpages/Things"));
const Firehat = React.lazy(() => import("./pages/subpages/Firehat"));
const Marcos = React.lazy(() => import("./pages/subpages/Marcos"));
const Palacio = React.lazy(() => import("./pages/subpages/Palacio"));

const Majo = React.lazy(() => import("./pages/subpages/Majo"));
const StephannyP = React.lazy(() => import("./pages/subpages/stephanny"));
const AlessandraP = React.lazy(() => import("./pages/subpages/Alessandra"));
const AnaP = React.lazy(() => import("./pages/subpages/Ana"));
const MariaFP = React.lazy(() => import("./pages/subpages/MariaF"));
const BarbaraP = React.lazy(() => import("./pages/subpages/Bárbara"));
const NeonDemonP = React.lazy(() => import("./pages/subpages/NeonDemon"));
const SunmodelP = React.lazy(() => import("./pages/subpages/SunModel"));
const GleriferP = React.lazy(() => import("./pages/subpages/Glerifer"));
const BYL = React.lazy(() => import("./pages/subpages/BreakYourLimits"));
const MetroP = React.lazy(() => import("./pages/subpages/Metro"));
const MaferP = React.lazy(() => import("./pages/subpages/Mafer"));
const SunshineP = React.lazy(() => import("./pages/subpages/Sunshine"));
const Mid2000sP = React.lazy(() => import("./pages/subpages/Mid2000s"));
const StreetP = React.lazy(() => import("./pages/subpages/Street"));
const Virino = React.lazy(() => import("./pages/subpages/Virino"));
const Motion = React.lazy(() => import("./pages/subpages/MotionGraphics"));
const CastroCarazo = React.lazy(() => import("./pages/subpages/CastroCarazo"));
const Samadhi = React.lazy(() => import("./pages/subpages/Samadhi"));
const DTH = React.lazy(() => import("./pages/subpages/DTH"));
const JYCH = React.lazy(() => import("./pages/subpages/JYCH"));
const Kajiri = React.lazy(() => import("./pages/subpages/Kajiri"));
const KOI = React.lazy(() => import("./pages/subpages/KOI"));
const LCS = React.lazy(() => import("./pages/subpages/LCS"));
const Lions = React.lazy(() => import("./pages/subpages/Lions"));
const POSH = React.lazy(() => import("./pages/subpages/POSH"));
const TEC = React.lazy(() => import("./pages/subpages/TEC"));
const StyleAdd = React.lazy(() => import("./pages/subpages/StyleAdd"));
const BonsP = React.lazy(() => import("./pages/subpages/Bons"));


const routesConfig = [
    { path: "/", element: Home },
    { path: "/HomeP", element: HomeP },
    { path: "/HomeC", element: HomeC },
    { path: "/AboutMe", element: AboutMe },
    { path: "/ContactMe", element: ContactMe },
    { path: "/VisualArts", element: VisualArts },
    { path: "/Metanoia", element: Metanoia },
    { path: "/Reel", element: Reel },
    { path: "/Things", element: Things },
    { path: "/Firehat", element: Firehat },
    { path: "/Marcos", element: Marcos },
    { path: "/Palacio", element: Palacio },
    { path: "/BYL", element: BYL },
     
    { path: "/Majo", element: Majo },
    { path: "/StephannyP", element: StephannyP },
    { path: "/AlessandraP", element: AlessandraP },
    { path: "/AnaP", element: AnaP },
    { path: "/MariaFP", element: MariaFP },
    { path: "/BarbaraP", element: BarbaraP },
    { path: "/NeonDemonP", element: NeonDemonP },
    { path: "/SunmodelP", element: SunmodelP },
    { path: "/GleriferP", element: GleriferP },

    { path: "/MetroP", element: MetroP },
    { path: "/MaferP", element: MaferP },
    { path: "/SunshineP", element: SunshineP },
    { path: "/Mid2000sP", element: Mid2000sP },
    { path: "/StreetP", element: StreetP },
    {path: "/Virino" , element: Virino},
    {path: "/Motion", element: Motion},

    {path: "/StyleAdd", element: StyleAdd},
    {path: "/Castro", element: CastroCarazo},
    {path: "/DTH", element: DTH},
    {path: "/JYCH", element: JYCH},
    {path: "/Kajiri", element: Kajiri},
    {path: "/KOI", element: KOI},
    {path: "/LCS", element: LCS},
    {path: "/Lions", element: Lions},
    {path: "/POSH", element: POSH},
    {path: "/Samadhi", element: Samadhi},
    {path: "/TEC", element: TEC},
    {path: "/Bons", element: BonsP},

];

export default routesConfig;

