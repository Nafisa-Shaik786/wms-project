import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const API = "http://localhost:8081/products";

function Products() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", sku: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  // FETCH PRODUCTS
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get(API).then(res => setProducts(res.data));
  };

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SAVE / UPDATE
  const saveProduct = () => {
    if (editingId) {
      axios.put(`${API}/${editingId}`, form).then(() => {
        fetchProducts();
        resetForm();
      });
    } else {
      axios.post(API, form).then(() => {
        fetchProducts();
        resetForm();
      });
    }
  };

  // EDIT
  const editProduct = (p) => {
    setForm(p);
    setEditingId(p.id);
  };

  // DELETE
  const deleteProduct = (id) => {
    axios.delete(`${API}/${id}`).then(() => fetchProducts());
  };

  const resetForm = () => {
    setForm({ name: "", sku: "", description: "" });
    setEditingId(null);
  };

  return (
    <div className="container">
      <h2>Product Management</h2>

      {/* FORM */}
      <div className="form">
        <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="input" />
        <input name="sku" placeholder="SKU" value={form.sku} onChange={handleChange} className="input" />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="input" />

        <button onClick={saveProduct} className="add-btn">
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </div>

      {/* TABLE */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No products available
              </td>
            </tr>
          ) : (
            products.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.sku}</td>
                <td>{p.description}</td>
                <td>
                  <button onClick={() => editProduct(p)} className="edit-btn">Edit</button>
                  <button onClick={() => deleteProduct(p.id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Products;