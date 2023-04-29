import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main/Main';
import AppProfile from '../pages/yeseul/AppProfile';
import HyerinProfile from '../pages/hyerin/HyerinProfile';
import SeungyongProfile from '../pages/seungyong/SeungyongProfile';
import JaewonProfile from '../pages/Jaewon/JaewonProfile';

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
        path: '/seungyong/:id',
        element: <SeungyongProfile />,
    },
    {
        path: '/jaewon',
        element: <JaewonProfile />,
    },
    {
        path: '/hyerin/:id',
        element: <HyerinProfile />,
    },
]);

export default router;
