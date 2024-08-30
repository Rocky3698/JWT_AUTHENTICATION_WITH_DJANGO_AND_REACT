
import { useState } from 'react';
import Navbar from '../components/Navbar';
import api from '../api';
const Registration = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [loading, setLoading] = useState('');
    const handleRegistration = async(e) =>{
        e.preventDefault();
        setLoading(true);
        const data = {
            email,
            password,
            role
        }
        const res = api.post("/api/user/register/",data);
        console.log(res.status);
    }
    return (
        <div>

            <Navbar></Navbar>
            <div className="flex justify-center items-center h-screen">
            
            <div className="w-1/4 border text-center p-4 space-y-8 rounded-lg">
                <h3 className="text-2xl">Registration</h3>
                <form className="space-y-4" onSubmit={handleRegistration}>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="border p-2 rounded-md w-full" type="email" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded-md w-full" type="password" />
                    <select name="role" value={role} onChange={(e) => setRole(e.target.value)} className=" w-full py-2 outline-none focus:outline-none ">
                        <option className="bg-gray-800 text-white" value="" disabled>Select Role</option>
                        <option className="bg-gray-800 text-white" value="shelter">Shelter</option>
                        <option className="bg-gray-800 text-white" value="adopter">Adopter</option>
                        <option className="bg-gray-800 text-white" value="admin">Admin</option>
                    </select>
                    {loading && <small>Loading...</small>}
                    <button type="submit" className="text-white p-3 border rounded-lg text-xl w-full bg-violet-500">Register</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Registration;
