import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './productlist.css';

function ProductList() {
  const [userForm, setUserForm] = useState([]);

  const deleteStudent = (_id) => {
    axios
      .delete("http://localhost:4000/products/delete-product/" + _id)
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/products/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);




  return (
    <div>
      <div className="main-container">
      <h1 className="product-list-header">Product List</h1>
      {/* <input type="text" placeholder="Search products" className="search-product-box" ></input> */}
      <table className="table"  style={{ border: '1px solid black', borderColor: 'skyblue', width:'1200px'}}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th> 
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Categorey</th>
            <th scope="col"> Operati0ns</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.description}</td>
                <td>{user.price}</td>
                <td>{user.categorey}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm btttn"
                    to={"/edit-product/" + user._id}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteStudent(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      
    </div>
  );
}

export default ProductList;
