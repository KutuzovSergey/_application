import React, { FC, useEffect, useState } from "react";
import { Route, Routes, } from "react-router-dom";
import {privateRouters, publicRouters } from "../router/index.tsx";
import { useSelector } from "react-redux";
import { StateUserType } from "../type/typesStore.ts";


const AppRouter: FC = () => {
    const isAuth: boolean = useSelector((state: StateUserType) => state.userData.isAuth);
    // const isAuth: boolean = 

    return (
        isAuth
            ?
            <Routes>
                {privateRouters.map(route =>
                    <Route
                        key={route.name}
                        path={route.path} 
                        element={route.component} />
                    )}
            </Routes>
            :
            <Routes>
                {publicRouters.map(route =>
                    <Route
                        key={route.name}
                        path={route.path} 
                        element={route.component} />
                    )}
            </Routes>
    )
}

export default AppRouter;