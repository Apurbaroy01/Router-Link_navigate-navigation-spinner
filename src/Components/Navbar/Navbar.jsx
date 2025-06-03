import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    
    return (
        <div>
            <nav className="font-bold border-1 bg-amber-400 text-2xl  flex justify-between px-8">
                <Link to="/">Home </Link>

                <NavLink to="/">Home</NavLink>
                <div className="space-x-5">
                    <Link to="/about">About </Link>
                    <Link to="/contac">Contact-Us </Link>
                </div>
                
            </nav>

            <h1>Hey I am Navbar</h1>
        </div>
    );
};

export default Navbar;