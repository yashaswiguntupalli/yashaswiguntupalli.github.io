import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Home</Link> |{' '}
      <Link to="/about">About</Link> |{' '}
      <Link to="/services">Services</Link> |{' '}
      <Link to="/blog">Blog</Link> |{' '}
      <Link to="/research">Research</Link> |{' '}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}