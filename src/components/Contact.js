
import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Contact() {
    const [name, setName ]= useState ("") 
    const [email, setEmail ]= useState ("") 
    const [comment, setComment ]= useState ("") 
    const his = useHistory()

    const handleSubmit = (e) => {
      e.preventDefault();
      const info = { name, email, comment };

      fetch('https://vast-atoll-64871.herokuapp.com/contacts', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info)
      }).then(() => {
        his.push('/')
      })
    }

  return (
    // <div>Contact</div>
    <div className = "post-feedback">
            <h1> Leave feedback</h1>
            <form onSubmit={handleSubmit}>
                <label> Name</label>
                <input
                 type="text" 
                 required
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 />
                 <label> Email</label>
                 <input 
                 required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 >
                 </input>
                 <label> comment</label>
                <textarea
                 type="text" 
                 required
                 value={comment}
                 onChange={(e) => setComment(e.target.value)}
                 />
                 <button>Submit </button>
            </form>
            </div>
     );
}
export default Contact;
  

