import './home.css';
import React, { useEffect, useState } from 'react'

import axios from "axios";

 


function Home() {

    const [userForm, setUserForm] = useState({
        name: "",
        description: "",
        price: "",
        categorey: "",
    
      });
    
      const inputsHandler = (e) => {
        setUserForm((prevNext) => ({
          ...prevNext,
          [e.target.name]: e.target.value,
    
        }));
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:4000/products/create-product", userForm)
          .then((res) => {
            console.log(res.data);
            setUserForm({
              name: "",
              description: "",
              price: "",
              categorey: ""
            });
          });
      };
    
      useEffect(() => { }, []);
      


  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Add New Product</h3>
        </div>

        <div className='main-cards'>
           
        
        
        <div className="form-wrapper">
        
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label namee ">Name:</label>
              <input
                type="text"
                className="form-control input-box1"
                name="name"
                id="name"
                value={userForm.name}
                onChange={inputsHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label namee">Description:</label>
              <input
                type="text"
                className="form-control input-box1"
                name="description"
                id="email"
                value={userForm.description}
                onChange={inputsHandler}
              />


            </div>



            <div className="mb-3">
              <label className="form-label namee">Price:</label>
              <input
                type="text"
                className="form-control input-box1"
                name="price"
                id="rollno"
                value={userForm.price}
                onChange={inputsHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label namee">Categorey:</label>
              <input
                type="text"
                className="form-control input-box1"
                name="categorey"
                id="rollno"
                value={userForm.categorey}
                onChange={inputsHandler}
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

        

       
    </main>
  )
}

export default Home