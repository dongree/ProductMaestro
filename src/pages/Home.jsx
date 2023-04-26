import React from 'react';
import Card from '../components/Card';

export default function Home() {
  const data = [
    {
      projectname: 'Cool Project',
      username: '김승빈',
      teamname: 'teamname',
      date: '23.04.28 09:20',
      title: '[Update] 새로운 기능을 추가했어요',
      description:
        'Product Maestro에 새롭게 추가된 기능들이에요\n프로필에 Role을 표시할 수 있도록 바뀌었어요!\n관심있는 프로덕트를 구독할 수 있어요!\n 하하',
    },
    {
      projectname: 'Cool Project',
      username: '김승빈',
      teamname: 'teamname',
      date: '23.04.28 09:20',
      title: '[Update] 새로운 기능을 추가했어요',
      description:
        'Product Maestro에 새롭게 추가된 기능들이에요\n프로필에 Role을 표시할 수 있도록 바뀌었어요!\n관심있는 프로덕트를 구독할 수 있어요!\n 하하',
    },
    {
      projectname: 'Cool Project',
      username: '김승빈',
      teamname: 'teamname',
      date: '23.04.28 09:20',
      title: '[Update] 새로운 기능을 추가했어요',
      description:
        'Product Maestro에 새롭게 추가된 기능들이에요\n프로필에 Role을 표시할 수 있도록 바뀌었어요!\n관심있는 프로덕트를 구독할 수 있어요!\n 하하',
    },
    {
      projectname: 'Cool Project',
      username: '김승빈',
      teamname: 'teamname',
      date: '23.04.28 09:20',
      title: '[Update] 새로운 기능을 추가했어요',
      description:
        'Product Maestro에 새롭게 추가된 기능들이에요\n프로필에 Role을 표시할 수 있도록 바뀌었어요!\n관심있는 프로덕트를 구독할 수 있어요!\n 하하',
    },
    {
      projectname: 'Cool Project',
      username: '김승빈',
      teamname: 'teamname',
      date: '23.04.28 09:20',
      title: '[Update] 새로운 기능을 추가했어요',
      description:
        'Product Maestro에 새롭게 추가된 기능들이에요\n프로필에 Role을 표시할 수 있도록 바뀌었어요!\n관심있는 프로덕트를 구독할 수 있어요!\n 하하',
    },
    {
      projectname: 'Cool Project',
      username: '김승빈',
      teamname: 'teamname',
      date: '23.04.28 09:20',
      title: '[Update] 새로운 기능을 추가했어요',
      description:
        'Product Maestro에 새롭게 추가된 기능들이에요\n프로필에 Role을 표시할 수 있도록 바뀌었어요!\n관심있는 프로덕트를 구독할 수 있어요!\n 하하',
    },
  ];

  return (
    <section className="basis-4/5 bg-gray-100 px-28 py-10 flex flex-col justify-center">
      {/* 구독까지 구현 가능할까..? */}
      {/* <p className="text-2xl font-bold ">내가 구독하는 프로덕트</p>
      <ul className="flex my-7">
        <li className="flex flex-col items-center mr-5">
          <div className="flex rounded-full p-5 border-2 border-green-400 bg-white font-bold cursor-pointer">
            PM
          </div>
          <p className="text-xs font-bold my-2">Product Maestro</p>
        </li>
        <li className="flex flex-col items-center mr-5">
          <div className="flex rounded-full p-5 border-2 border-green-400 bg-white font-bold cursor-pointer">
            PM
          </div>
          <p className="text-xs font-bold my-2">Product Maestro</p>
        </li>
        <li className="flex flex-col items-center mr-5">
          <div className="flex rounded-full p-5 border-2 border-green-400 bg-white font-bold cursor-pointer">
            PM
          </div>
          <p className="text-xs font-bold my-2">Product Maestro</p>
        </li>
      </ul> */}
      <ul className="flex flex-col overflow-scroll h-5/6 overflow-x-hidden">
        {data.map(item => (
          <Card info={item} />
        ))}
      </ul>
    </section>
  );
}