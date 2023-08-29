import { routes } from "../../router";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    Component={route.component}
                />
            ))}
        </Routes>
    )
};

export default AppRouter;
