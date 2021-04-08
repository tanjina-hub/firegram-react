import { useState, useEffect } from 'react';
import { projectFirestore, projectStorage } from '../firebase/config';

const useStorage = (file) => {
   const [progress, setProgress] = useState(0);
   const [error, setError] = useState(null); 
   const [url, setUrl] = useState(null);

    useEffect(() => {
     //references   
     const storageRef = projectStorage.Ref(file.name); 
     const collectionRef = projectFirestore.collection('images'); 
     
     storageRef.put(file).on('state_changed', (snap) => {
         let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
         setProgress(percentage);
     }, (err) => {
         setError(err);
     }, async () => {
         const url = await storageRef.getDownloadUrl();
         setUrl();
     })
     
    }, [file]);

    return { progress, error, url }
}

export default useStorage;

