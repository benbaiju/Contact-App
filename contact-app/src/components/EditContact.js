import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom"; 

const EditContact = ({ editContactHandler }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    if (location.state && location.state.contact) {
      setContact(location.state.contact);
    } else {
      navigate("/");
    }
  }, [location.state, navigate]);

  const update = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert(`All fields are mandatory! Name: ${contact.name}, Email: ${contact.email}`);
      return;
    }
    alert(`Contact Updated Successfully! Name: ${contact.name}, Email: ${contact.email}`);
    editContactHandler(contact);
    navigate("/");
  };

  return (
    <div className="ui main">
      <br />
      <h2>
        Update Contact
        <Link to="/">
          <button className="ui button blue right">Contact List</button>
        </Link>
      </h2>
      <form className="ui main" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
