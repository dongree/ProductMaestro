import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav>
      <div onClick={() => navigate('/', {})}>home</div>
      <div onClick={() => navigate('/add', {})}>make product</div>
    </nav>
  );
}
