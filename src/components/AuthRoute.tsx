import { useSelector } from 'react-redux';
import { selectUser } from '../redux/Features/selector';
import { Navigate, Outlet } from 'react-router-dom';

function AuthRoute() {
    const userInfo = useSelector(selectUser);

    if (userInfo) {
        return <Navigate to={'/'} />;
    } else {
        return <Outlet />;
    }
}
export default AuthRoute;
