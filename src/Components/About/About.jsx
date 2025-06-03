import { useLoaderData } from "react-router-dom";
import User from "../Users/User";


const About = () => {
    const user=useLoaderData()

    return (
        <div>
            <h1>User length: {user.length} </h1>
            <div className="grid lg:grid-cols-3">
                {
                    user.map(user=><User user={user}></User>)
                }
            </div>
        </div>
    );
};

export default About;