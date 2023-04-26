import React from 'react';

export default function Card({ info }) {
  const { projectname, username, teamname, date, title, description } = info;
  return (
    <li className="flex flex-col bg-white p-6 cursor-pointer my-5 border-2 ">
      <div className="flex justify-between">
        <p className="text-xl font-bold">{projectname}</p>
        <p className="mr-5 text-gray-500">{date}</p>
      </div>
      <div className="flex">
        <p>{username}</p>
        <p className="ml-2 text-gray-500">{teamname}</p>
      </div>
      {/* <div>{date}</div> */}
      <p className="text-2xl font my-2 font-semibold">{title}</p>
      <pre className="line-clamp-3 font-sans">{description}</pre>
    </li>
  );
}
