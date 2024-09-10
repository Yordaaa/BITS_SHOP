import { Link } from 'react-router-dom';
import notfound from '/notfound.jpg';
function NotFoundPage() {
    return (
        <div className="max-w-[50%] mx-auto pt-10 flex flex-col justify-center items-center">
            <img src={notfound} />
            <Link to="/" className="bg-primary text-white p-2 rounded-3xl my-5 hover:bg-opacity-90">
                Back to home
            </Link>
        </div>
    );
}
export default NotFoundPage;
