import './UserCard.css';
import React, { useState } from 'react';

function ProductCard({ employee, onDelete }) {
  
  return (
    <article id="product-card" key={employee.id}>
      <h3>{employee.name}</h3>
      <p>Usuario: {employee.username}</p>
      <p>Correo Electrónico: {employee.email}</p>
      <p>Ciudad: {employee.address.city}</p>
      <p>Teléfono: {employee.phone}</p>
      <p>Empresa: {employee.company.name}</p>
    </article>
  );
}

export default ProductCard;
