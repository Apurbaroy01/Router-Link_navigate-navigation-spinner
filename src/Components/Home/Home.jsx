import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Audio } from 'react-loader-spinner'
;


const Home = () => {
    const navagation=useNavigation()
    return (
        <div>
            
            <Navbar></Navbar>
            
            
            <div>
               {
                navagation.state ==="loading"?
                <p><Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                    /></p>:<Outlet></Outlet>
               }
                
            </div>
            
        </div>
    );
};

export default Home;