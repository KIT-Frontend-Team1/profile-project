<<<<<<< HEAD
import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main/Main';
import AppProfile from '../pages/yeseul/AppProfile';
import HyerinProfile from '../pages/hyerin/HyerinProfile';
import Jaewon from '../pages/jaewon/Jaewon';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/yeseul',
        element: <AppProfile />,
    },
    {
        path: '/seungyong',
        element: <AppProfile />,
    },
    {
        path: '/jaewon',
        element: <Jaewon />,
    },
    {
        path: '/hyerin/:id',
        element: <HyerinProfile />,
    },
=======
import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/Main";
import AppProfile from "../pages/yeseul/AppProfile";
import HyerinProfile from "../pages/hyerin/HyerinProfile";
import SeungyongProfile from "../pages/seungyong/SeungyongProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/yeseul",
    element: <AppProfile />,
  },
  {
    path: "/seungyong/:id",
    element: <SeungyongProfile />,
  },
  {
    path: "/jaewon",
    element: <AppProfile />,
  },
  {
    path: "/hyerin/:id",
    element: <HyerinProfile />,
  },
>>>>>>> 63a41ceef2e1cf36119bf38a615da5b05f4e7835
]);

export default router;
