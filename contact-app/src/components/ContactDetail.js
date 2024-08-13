import React from "react";
import user from "../images/user.png";
import { useLocation, useNavigate } from "react-router-dom";

const ContactDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, email } = location.state?.contact || {};

  if (!name || !email) {
    return <p>No contact details available</p>;
  }

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="email">{email}</div>
        </div>
      </div>
      <div className="center div">
        <button 
          className="ui button blue center" 
          onClick={() => navigate('/')}
        >
          Back to Contact List
        </button>
      </div>
    </div>
  );
};

export default ContactDetail;
