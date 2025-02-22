import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    const getSingleUser = async () => {

        const response = await fetch(`https://crud-app-q3s2.onrender.com/User/getData/${id}`);

        const result = await response.json();

        if (!response.ok) {
            setError(result.error);
        } else {
            setError("");
            console.log("updated user data", result)
            setName(result.name);
            setEmail(result.email);
            setAge(result.age);
        }
    };

    const handleUpdate = async(e)=>{
        e.preventDefault();

        const UpdatedUser = { name, email, age };

        const response = await fetch(`https://crud-app-q3s2.onrender.com/User/updateData/${id}`, {
            method: "PATCH",
            body: JSON.stringify(UpdatedUser),
            headers: { "Content-Type": "application/json" },
        });

        const result = await response.json();
        
        if (!response.ok) {
            setError(result.error);
        } else {
            setError("");
            navigate("/all");
        }
    }


    useEffect(() => {
        getSingleUser()
    },[])


    return (
        <div className="container my-4 d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="col-lg-6 col-md-8 col-sm-10 col-12 p-4 shadow-lg rounded bg-light">
                {error && <div className="alert alert-danger">{error}</div>}
                <h2 className="text-center mb-4">Update User Data</h2>
                <form onSubmit={handleUpdate}>
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
    )
};

export default Update; 