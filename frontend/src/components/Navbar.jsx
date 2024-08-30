import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav>
            <ul className="space-x-5">
                <button><Link to="/"> Home</Link></button>
                <button><Link to="/login">Login</Link></button>
                <button><Link to="/register">Register</Link></button>
                <button><Link to="/logout">Logout</Link></button>
            </ul>
        </nav>
    );
};

export default Navbar;