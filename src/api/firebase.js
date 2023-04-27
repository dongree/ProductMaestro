import { initializeApp } from 'firebase/app';
import { get, getDatabase, ref, set } from 'firebase/database';

export default class Firebase {
  constructor() {
    this.app = initializeApp({
      apiKey: 'AIzaSyCbM7qHX4tUr8jdKA6yJ4v5o6flKssK2To',
      authDomain: 'productmaestro-1cfb4.firebaseapp.com',
      databaseURL:
        'https://productmaestro-1cfb4-default-rtdb.asia-southeast1.firebasedatabase.app',
      projectId: 'productmaestro-1cfb4',
      storageBucket: 'productmaestro-1cfb4.appspot.com',
      messagingSenderId: '897821286938',
      appId: '1:897821286938:web:abb2068c5807bdd05667a3',
      measurementId: 'G-YP5T5VJ4XP',
    });
    this.db = getDatabase();
  }

  addItem = (
    id,
    time,
    projectname,
    username,
    teamname,
    title,
    description,
    url
  ) => {
    set(ref(this.db, 'products/' + id), {
      id,
      time,
      projectname,
      username,
      teamname,
      title,
      description,
      url,
    });
  };

  getItems = () =>
    get(ref(this.db, 'products')).then(snapshot => {
      const arr = Object.values(snapshot.val());
      arr.sort((prev, cur) => {
        if (prev.time < cur.time) return 1;
        if (prev.time > cur.time) return -1;
      });
      return arr;
    });
}
