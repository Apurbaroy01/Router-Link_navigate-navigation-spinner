import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const userDetails=useLoaderData()
    const{name}=userDetails;

    const navigate= useNavigate();

    const gobackHandeler=()=>{
        navigate(-1)
    };
    return (
        <div className="text-center">
            <h1>NAme: {name}</h1>
            <button onClick={gobackHandeler} className="btn">Go Back</button>
        </div>
    );
};

export default UserDetails;