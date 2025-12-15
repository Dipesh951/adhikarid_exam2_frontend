import { useState } from "react";
import API from "../api";

export default function CreateContact({ reload }) {
    const [form, setForm] = useState({ name: "", email: "", phone: "" });

    const submit = (e) => {
        e.preventDefault();
        fetch(`${API}/contacts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        }).then(() => reload());
    };

    return (
        <form className="create-form" onSubmit={submit}>
            <div className="input-row">
                <input
                    className="input-field"
                    placeholder="Name"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    className="input-field"
                    placeholder="Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                    className="input-field"
                    placeholder="Phone"
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <button className="add-btn">Add</button>
            </div>
        </form>
    );
}
