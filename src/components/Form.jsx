import React, { useState } from 'react';
import './Form.css';

function ContactForm({ onAddUser }) {
  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
    address: {
      city: ''
    },
    phone: '',
    company: {
      name: ''
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.username && newUser.email && newUser.address.city && newUser.phone && newUser.company.name) {
      onAddUser(newUser);
      setNewUser({
        name: '',
        username: '',
        email: '',
        address: {
          city: ''
        },
        phone: '',
        company: {
          name: ''
        }
      });
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  return (
    <div className="container">
      <h1>Agregar nuevo empleado</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Ciudad:</label>
          <input
            type="text"
            id="city"
            value={newUser.address.city}
            onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, city: e.target.value } })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="text"
            id="phone"
            value={newUser.phone}
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Empresa:</label>
          <input
            type="text"
            id="company"
            value={newUser.company.name}
            onChange={(e) => setNewUser({ ...newUser, company: { ...newUser.company, name: e.target.value } })}
            required
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
