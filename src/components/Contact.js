
import React from 'react'

export default function Contact() {
  return (
    // <div>Contact</div>
    <div className = "post-feedback">
            <h1> Leave feedback</h1>
            <form>
                <label> Name</label>
                <input
                 type="text" 
                 required
                 />
                 <label> Email  </label>
                 <input 
                 required
                 >
                 </input>
                 <label> comment  </label>
                <textarea
                 type="text" 
                 required
                 />
                 <button>Submit </button>
            </form>
            </div>
     );
}
  

