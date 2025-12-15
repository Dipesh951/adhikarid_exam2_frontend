import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

export default function ViewContact() {
    const { name } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState(null);

    useEffect(() => {
        fetch(`${API}/contacts/${name}`)
            .then((res) => res.json())
            .then((data) => setContact(data))
            .catch((err) => console.error("Error loading contact:", err));
    }, [name]);

    if (!contact) return <p className="loading-text">Loading...</p>;

    return (
        <div className="view-container">
            <h2 className="view-title">Contact Details</h2>

            <div className="view-card">
                <p><b>Name:</b> {contact.name}</p>
                <p><b>Email:</b> {contact.email}</p>
                <p><b>Phone:</b> {contact.phone}</p>
            </div>

            <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}
