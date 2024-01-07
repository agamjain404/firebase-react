import logo from './logo.svg';
import './App.css';
import FireAuth from './Components/FireAuth';
import Firestore from './Components/Firestore';
import FireStorage from './Components/FireStorage';

function App() {
  return (
    <>
      {/* Authentication method using firebase */}
      <FireAuth/>

      {/* CRUD operation in firestore database */}
      {/* <Firestore/> */}

      {/* Upload Images/Videos in Firebase Storage */}
      <FireStorage/>
    </>
  );
}

export default App;
