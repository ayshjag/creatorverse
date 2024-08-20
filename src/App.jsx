// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ViewCreator from './pages/ViewCreator';
import './styles.css';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add Creator</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/add" element={<AddCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
        <Route path="/creators/:id" element={<ViewCreator />} />
      </Routes>
    </Router>
  );
};

export default App;
