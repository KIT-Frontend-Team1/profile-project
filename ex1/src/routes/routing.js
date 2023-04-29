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
]);

export default router;
