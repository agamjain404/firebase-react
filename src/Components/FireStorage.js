import React, {useState} from 'react'
import { storage } from '../firebase';

function FireStorage() {

  const [file, setFile] = useState('');

  const upload = async() => {
    // Defining task that where should file get uploaded inside firebase storage
    const uploadTask = storage.ref(`/data/${file.name}`).put(file);

    // Getting event of state change on uploadTask
    // Here this fn1 function keep called at the time of progress of a upload
    // fn2 function gets called when the uploadTask hits any error and get the process terminated there itself
    // fn3 function gets called when the uploadTask hits success and file gets uploaded successfully on firebase storage 
    uploadTask.on('state_changed', fn1, fn2, fn3);

    function fn1 (snapshot) {
        // Calculate progress
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
        console.log(`Upload is ${progress} done`);
    }

    function fn2 (error) {
        console.log('Error', error);
    }

    function fn3 () {
        // Download the url of the uploaded file
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            console.log(url);
        })
    }
  }

  return (
    <div>
      <label htmlFor='file'>File:</label>
      <input type='file' accept='image/*' onChange={(event) => setFile(event.target.files[0])}/>
      <button onClick={upload}>Upload</button>
    </div>
  )
}

export default FireStorage
