import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className=" basis-1/5 p-6">
      <div className="mt-24">
        <p className="text-3xl font-light">Product</p>
        <p className="text-3xl font-semibold">Maestro</p>
      </div>
      <ul className="mt-12 font">
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? '600' : '',
              color: isActive ? 'black' : 'gray',
            };
          }}
          exact
          to="/"
        >
          <li className="my-5">Home</li>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? '600' : '',
              color: isActive ? 'black' : 'gray',
            };
          }}
          to="/add"
        >
          <li className="my-5">Make product</li>
        </NavLink>
      </ul>
    </nav>
  );
}
