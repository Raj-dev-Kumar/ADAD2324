import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { openContractCall } from '@stacks/connect';
import {
  bufferCV, UIntCV
} from '@stacks/transactions';
import { utf8ToBytes } from '@stacks/common';
import { userSession } from '../auth';
const bytes = utf8ToBytes('foo'); 
const bufCV = bufferCV(bytes);

export default function App() {
  let params = useParams();
  let [movies, setMovies] = useState([]);
  let [isloading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch(`http://localhost:3000/movies/${params.id}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        },
      });
      
      const data = await response.json();
      setMovies(data);
      console.log(data)
      setLoading(false)

    } catch (error) {
      console.error('Error:', error);
    }
  }


  const submitMessage = async (e) => {
    e.preventDefault();
    
    const functionArgs = [
      bufCV
    ];
    
    const options = {
      contractAddress: 'STAZ0PNVXVHEM7R4XF5EZ4SS5JFM1ZMAJRPZGVK0',
      contractName: 'upper-teal-fox',
      functionName: 'test-emit-event',
      functionArgs: [],
      appDetails: {
        name: 'Movies App Rating',
        icon: window.location.origin + '/my-app-logo.svg',
      },
      onFinish: data => {
        console.log('Stacks Transaction:', data.stacksTransaction);
        console.log('Transaction ID:', data.txId);
        console.log('Raw transaction:', data.txRaw);


        //window.location.reload();
      },
    };

    const response = await openContractCall(options);
    
  };

  useEffect(() => {
    getMovies();
  }, [movies]);

  if (isloading){
    return (<h2>carregar</h2>)
  }
  else
  return (
    <div className="container pt-5 pb-5">
      <h2>Movie page - {movies[0].title}</h2>
      <p>{movies? movies.title : "a carregar"}</p>
      {console.log(movies)}

      {userSession.isUserSignedIn() ? <a href="#" onClick={submitMessage }>Blockchain transaction</a> : null}
      
    </div>
  )
}