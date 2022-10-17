import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

export const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method that update content into the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  const contactDb = await openDB('jate', 1);

  const tx = contactDb.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');
  
  const request = store.put({ id: id, content: content});
  const result = await request;
  console.log('Thw data was saved to the database', result);
};

// Method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database database and version we want to use.
  const contactDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = contactDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
