import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Support from "./Support.jsx";
import Profile from "./Profile.jsx";
import Account from "./Account.jsx";
import Shows from "./Shows.jsx";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
        {
            path: "/shows",
            element: <Shows />,
        },
        {
            path: "/profile",
            element: <Profile />,
        },
        {
            path: "/account",
            element: <Account />,
        },
        {
            path: "/support",
            element: <Support />,
        },
        {
            path: "/error",
            element: <Error />,
        },
        {
            path: "*",
            element: <Error />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;
