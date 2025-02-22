import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addUser = { name, email, age };

        const response = await fetch("https://crud-app-q3s2.onrender.com//User/addData", {
            method: "POST",
            body: JSON.stringify(addUser),
            headers: { "Content-Type": "application/json" },
        });

        const result = await response.json();
        
        if (!response.ok) {
            setError(result.error);
        } else {
            setError("");
            setName("");
            setEmail("");
            setAge("");
            navigate("/all");
        }
    };

    return (
        <div className="container my-4 d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="col-lg-6 col-md-8 col-sm-10 col-12 p-4 shadow-lg rounded bg-light">
                {error && <div className="alert alert-danger">{error}</div>}
                <h2 className="text-center mb-4">Enter New User Data</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 d-flex flex-column align-items-start">
                        <label className="form-label fw-bold">Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Enter name" 
                            required 
                        />
                    </div>

                    <div className="mb-3 d-flex flex-column align-items-start">
                        <label className="form-label fw-bold">Email:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Enter email" 
                            required 
                        />
                    </div>

                    <div className="mb-3 d-flex flex-column align-items-start">
                        <label className="form-label fw-bold">Age:</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            value={age} 
                            onChange={(e) => setAge(e.target.value)} 
                            placeholder="Enter age" 
                            required 
                        />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;