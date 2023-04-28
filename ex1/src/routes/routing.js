import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main/Main';
import AppProfile from '../pages/yeseul/AppProfile';
import JawonHeader from '../components/JaewonHeader';

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
        element: <JawonHeader />,
    },
]);

export default router;
