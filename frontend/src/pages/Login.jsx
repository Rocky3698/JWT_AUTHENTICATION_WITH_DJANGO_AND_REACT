
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate()


    const handleLogin = async(e)=>{
        setLoading(true);
        e.preventDefault();
        const data = {
            email,
            password
        }
        try{
            console.log(data);
            const res = await api.post("/api/token/",data);
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            console.log(res);
            navigate("/");
        }catch(error){
            alert(error);
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center items-center h-screen">
            
            <div className="w-1/4 border text-center p-4 space-y-8 rounded-lg">
                <h3 className="text-2xl">Login</h3>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="border p-2 rounded-md w-full" type="email" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded-md w-full" type="password" />
                    {loading && <small>Loading...</small>}
                    <button type="submit" className="text-white p-3 border rounded-lg text-xl w-full bg-violet-500">Login</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;