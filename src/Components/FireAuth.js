import React, { useState, useEffect } from 'react'
import { auth } from '../firebase';

function FireAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

//   Create a user inside firebase auth
  const create = async () => {
    await auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    // onAuthStateChanged is a subscribe event inside firebase auth
    // which get called when the current auth state get changed
    // If we create or sign in a user then its state get changed that's why we are setting user here 
    const unsub = auth.onAuthStateChanged((user) => setUser(user));

    // This return statement works a componentWillUnmount. By calling unsub() this will remove the subscription when this component gets destroyed.
    return () => {
        unsub();
    }
  }, []);

  const logout = async () => {
    // Firebase auth logout method
    await auth.signOut();
  }

  const signIn = async () => {
    // Firebase auth sign in method
    await auth.signInWithEmailAndPassword(email, password);
  }

  return (
    <div>
      {
        user === null ?
        <div>
            <label htmlFor='email'>Email</label>
            <input type='text' value={email} onChange={(event) => setEmail(event.target.value) }/>
            <label htmlFor='password'>Password</label>
            <input type='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
            {/* <button onClick={create}>Create</button> */}
            <button onClick={signIn}>Sign In</button>
        </div> :
        <div>
            <div>{user.email}</div>
            <button onClick={logout}>Log Out</button>
        </div>

      }
    </div>
  )
}

export default FireAuth
