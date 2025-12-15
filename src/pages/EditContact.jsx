import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

export default function EditContact() {
    const { name } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", phone: "" });

    const submit = (e) => {
        e.preventDefault();
        fetch(`${API}/contacts/${name}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        }).then(() => navigate("/"));
    };

    return (
        <div className="edit-container">
            <h2 className="edit-title">Update {name}</h2>

            <form className="edit-form" onSubmit={submit}>
                <input
                    className="edit-input"
                    placeholder="New Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    className="edit-input"
                    placeholder="New Phone"
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />

                <button className="update-btn">Update</button>
            </form>

            <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}
