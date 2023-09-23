import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h3>Oops !!</h3>
            <p>No Content here</p>
            <button>
                <Link to='/'>Go Back Home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;