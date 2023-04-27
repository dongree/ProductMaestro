import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Firebase from '../api/firebase';

export default function Home() {
  // GET 요청하기
  const [data, setData] = useState([]);

  useEffect(() => {
    const firebase = new Firebase();
    firebase.getItems().then(d => setData(d));
  }, []);

  return (
    <section className="basis-4/5 bg-gray-100 px-28 py-10 flex flex-col sm:justify-center max-sm:h-full max-sm:px-5">
      <ul className="flex flex-col overflow-scroll h-5/6 overflow-x-hidden">
        {data.map(item => (
          <Card info={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}
