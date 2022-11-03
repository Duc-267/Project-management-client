import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userLogin from "../service/userLogin";
import { useAuth } from "../Context/AuthContext";

function Login() {
    const { setAuthState } = useAuth();
    const navigate = useNavigate();
    const [{ email, password }, setForm] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        userLogin({ email, password })
            .then((userLoggedIn) => setAuthState(userLoggedIn))
            .then(() => {
                navigate("/");
            }
        );
    };
    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        setForm((form) => ({ ...form, [name]: value }));
    }
    return ( 
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={handleInput}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={handleInput}/>
                <button type="submit">Login</button>
            </form>
        </div>
     );
}

export default Login;