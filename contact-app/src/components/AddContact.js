import React from "react";
import {Link} from "react-router-dom";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
      };

      add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert(`All fields are mandatory! Name: ${this.state.name}, Email: ${this.state.email}`);
            return;
          }
          alert(`Contact Added Successfully! Name: ${this.state.name}, Email: ${this.state.email}`);          
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
      }
    render(){
        return(
            <div className="ui main">
                <br></br>
                <h2>Add Contact
                <Link to="/">
                <button className="ui button blue right">Contact List</button>
                </Link>
                </h2>
                <form className="ui main" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"  value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    };
}

export default AddContact;