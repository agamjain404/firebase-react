import React, { useState, useEffect } from 'react'
import { database } from '../firebase';

function Firestore() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const createUserInDB = async () => {
    // this will add data inside firestore database with a unique id
    const res = await database.users.add({name, age});
    console.log(res.id);

    // If you want to give your own unique id then you can give it using this way
    // This will always return undefined
    // await database.users.doc('11111111').set({name, age});
  }

  useEffect(() => {
    async function fetchData() {
        // IF you want to fetch data for a particular ID
        const data = await database.users.doc('11111111').get();
        console.log(data.data());

        // If you want to fetch the complete data
        const completeData = await database.users.get();
        completeData.forEach((data) => console.log(data.data()));

        // If you want to get a sorted data on a particular key then can get it using order
        // const data = await database.users.orderBy(<KEY>, <ORDER(ASC/DESC)>).get();

        // Also there is an event functionality available called onSnapShot which can put an event on collection
        // And will subscribe the event when any new doc get pushed inside the particular collection
        // Will be studied while making reels clone.
    }
    fetchData();
  })

  const updateDataInDb = async() => {
    const uid = '11111111';
    await database.users.doc(uid).update({name, age});
  }

  const deleteDataFromDb = async() => {
    const uid = 'gMezpWeteKQgKQwEqBoK';
    await database.users.doc(uid).delete();
  }

  return (
    <div>
      <label htmlFor='name'>Name</label>
      <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
      <label htmlFor='age'>Age</label>
      <input type='number' value={age} onChange={(event) => setAge(event.target.value)}/>
      <button onClick={createUserInDB}>Add</button>
      <button onClick={updateDataInDb}>update</button>
      <button onClick={deleteDataFromDb}>Delete</button>
    </div>
  )
}

export default Firestore
