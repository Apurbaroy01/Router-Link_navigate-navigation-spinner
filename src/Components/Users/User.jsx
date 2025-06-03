import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const{id, name, email}=user;

    const navigate= useNavigate();

    const handlerDetails=()=>{
        navigate(`/user/${id}`)

    }
    return (
        <div className="border-2 m-2 rounded-xl p-4 text-center ">
            <h2>ID: {id}</h2>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <div className="btn btn-primary mt-2">
                <Link to={`/user/${id}`}>More Details</Link>
                
            </div>
            <button onClick={handlerDetails}>See Details</button>
        </div>
    );
};

export default User;