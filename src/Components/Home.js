import { useAuth } from "../Context/AuthContext";

function Home() {
    const { loggedUser } = useAuth();
    return ( 
        <div>
            <h1>Hi {loggedUser.fullname}</h1>
        </div>
     );
}

export default Home;