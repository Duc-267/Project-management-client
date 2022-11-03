import { useState, useEffect } from "react";
import userSignup from "../service/userSignup";
import { useNavigate } from "react-router-dom";

function Authenticate() {
    const navigate = useNavigate();
    const [{ fullname, email, password }, setForm] = useState({
        fullname: "",
        email: "",
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        userSignup({ fullname, email, password }).then(() => {
            navigate("/login");
        });
    };
    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        setForm((form) => ({ ...form, [name]: value }));
    }
    return ( 
        <div className="authenticate">
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" name="fullname" id="fullname" value={fullname} onChange={handleInput}/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={handleInput}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={handleInput}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
     );
}

export default Authenticate;