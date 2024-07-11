import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import ContactForm from './components/Form';
import ProductCard from './components/UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('name');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleChangeText = (text, filter) => {
    setSearchText(text.toLowerCase());
    setFilter(filter);
  };

  const handleAddUser = (newUser) => {
    const newUserWithId = {
      ...newUser,
      id: users.length + 1
    };
    setUsers([...users, newUserWithId]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredUsers = users.filter((user) => {
    if (filter === 'name') {
      return user.name.toLowerCase().includes(searchText);
    } else if (filter === 'email') {
      return user.email.toLowerCase().includes(searchText);
    } else if (filter === 'city') {
      return user.address.city.toLowerCase().includes(searchText);
    }
    return false;
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section id="users">
          <SearchBar onChangeText={handleChangeText} onFilterChange={handleFilterChange} />
          <div className="user-cards">
            {filteredUsers.map((user) => (
              <ProductCard
              key={user.id}
              employee={user}
              />
            ))}
          </div>
        </section>            
        <section id="agregar empleado">
          <ContactForm onAddUser={handleAddUser} />
        </section>
      </main>
    </>
  );
}

export default App;
