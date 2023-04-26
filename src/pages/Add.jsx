import React, { useState } from 'react';

export default function Add() {
  const [projectName, setProjectName] = useState('');
  const [username, setUsername] = useState('');
  const [teamname, setTeamname] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const init = () => {
    setProjectName('');
    setUsername('');
    setTeamname('');
    setTitle('');
    setDescription('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(description);

    // post 요청하기
    // fetch(url, {method:POST}).then()

    init();
  };

  return (
    <section className="basis-4/5 bg-gray-100 px-28 py-10 flex flex-col justify-center ">
      <div className="flex flex-col h-5/6 bg-white justify-center rounded-lg p-5">
        <form
          action=""
          className="flex flex-col h-full items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="w-4/5 flex flex-col items-center ">
            <input
              type="text"
              value={projectName}
              onChange={e => {
                setProjectName(e.target.value);
              }}
              placeholder="프로젝트명"
              className="border-2 w-full p-3 mb-6 text-sm"
              required
            />
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="작성자명"
              className="border-2 w-full p-3 mb-6 text-sm"
              required
            />
            <input
              type="text"
              value={teamname}
              onChange={e => setTeamname(e.target.value)}
              placeholder="팀명"
              className="border-2 w-full p-3 mb-6 text-sm"
              required
            />
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="제목"
              className="border-2 w-full p-3 mb-6 text-sm"
              required
            />

            <textarea
              name=""
              id=""
              cols="5"
              rows="10"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="설명"
              className="border-2 w-full p-3 mb-6 text-sm resize-none"
              required
            ></textarea>
          </div>

          <button className="bg-gray-800 w-9/12 text-xl text-white font-semibold my-4 p-2 rounded-lg">
            게시글 만들기
          </button>
        </form>
      </div>
    </section>
  );
}
