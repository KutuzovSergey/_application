import Home from "../pages/Home.tsx";
import Unregistered from "../pages/Unregistered.tsx";
import Error from "../pages/Error.tsx";
import PublicRoutersType from "../type/typesRouter.ts"

export const publicRouters: PublicRoutersType = [
    { name: 'Unregistered', path: '/', component: <Unregistered /> },
    { name: 'Error', path: '*', component: <Error /> },
];

export const privateRouters: PublicRoutersType = [
    { name: 'Home', path: '/', component: <Home /> },
    { name: 'Error', path: '*', component: <Error /> },
];
