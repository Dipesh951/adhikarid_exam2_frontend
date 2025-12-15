import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateContact from "../components/CreateContact";
import API from "../api";

export default function Home() {
    const [contacts, setContacts] = useState([]);

    const loadContacts = () => {
        fetch(`${API}/contacts`)
            .then((res) => res.json())
            .then((data) => setContacts(data));
    };

    useEffect(() => {
        loadContacts();
    }, []);

    const deleteContact = (name) => {
        fetch(`${API}/contacts/${name}`, { method: "DELETE" })
            .then(() => loadContacts());
    };

    return (
        <div className="container">
            <h1 className="title">Contacts CRUD App</h1>

            {/* Create Contact */}
            <h2 className="section-title">Create Contact</h2>
            <CreateContact reload={loadContacts} />

            {/* All Contacts */}
            <h2 className="section-title">All Contacts</h2>
            {contacts.map((c) => (
                <div key={c._id} className="contact-card">
                    <div className="contact-info">
                        <b>{c.name}</b> — {c.email} — {c.phone}
                    </div>

                    <div className="btn-group">
                        <Link to={`/contacts/${c.name}`}>
                            <button className="btn view-btn">View</button>
                        </Link>

                        <Link to={`/contacts/${c.name}/edit`}>
                            <button className="btn update-btn">Update</button>
                        </Link>

                        <button className="btn delete-btn" onClick={() => deleteContact(c.name)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
