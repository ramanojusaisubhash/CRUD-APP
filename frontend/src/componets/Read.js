import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
const Read = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    async function getData() {
        const response = await fetch("http://localhost:2000/User/getData");
        const result = await response.json();

        if (!response.ok) {
            setError(result.error);
        } else {
            setData(result);
        }
    }

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:2000/User/deleteData/${id}`, {
            method: "DELETE"
        });
        const result = await response.json();

        if (!response.ok) {
            setError(result.error);
        } else {
            setError("Deleted Successfully");
            setTimeout(() => {
                setError("");
                getData();
            }, 2000);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container my-2">
            <h2 className="text-center">All Data</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="d-flex flex-wrap justify-content-center gap-3">
                {data?.map((ele) => (
                    <div key={ele._id} className="d-flex justify-content-center">
                        <div className="card h-100 shadow-sm" >
                            <div className="card-body">
                                <h5 className="card-title">{ele.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
                                <p className="text-muted">Age: {ele.age}</p>
                                <button className="btn btn-outline-danger btn-sm me-2" onClick={() => handleDelete(ele._id)}>Delete</button>
                                <Link to={`/update/${ele._id}`}><button className="btn btn-outline-primary btn-sm">Edit</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Read;
