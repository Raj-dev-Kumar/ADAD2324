import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { openContractCall } from '@stacks/connect';
import {
  bufferCV,
} from '@stacks/transactions';
import { utf8ToBytes } from '@stacks/common';
import { userSession } from '../auth';
const bytes = utf8ToBytes('foo'); 
const bufCV = bufferCV(bytes);

export default function App() {
  let params = useParams();

  const submitMessage = async (e) => {
    e.preventDefault();
    
    const functionArgs = [
      bufCV
    ];
    
    const options = {
      contractAddress: '',
      contractName: '',
      functionName: 'set-value',
      functionArgs,
      appDetails: {
        name: 'Movies App Rating',
        icon: window.location.origin + '/my-app-logo.svg',
      },
      onFinish: data => {
        console.log('Stacks Transaction:', data.stacksTransaction);
        console.log('Transaction ID:', data.txId);
        console.log('Raw transaction:', data.txRaw);


        window.location.reload();
      },
    };

    const response = await openContractCall(options);
    
  };

  useEffect(() => {
    console.log(params.id);
  }, []);

  return (
    <div className="container pt-5 pb-5">
      <h2>Movie page</h2>
      <p>use /movies/:id endpoint</p>

      {userSession.isUserSignedIn() ? <a href="#" onClick={submitMessage }>Blockchain transaction</a> : null}
      
    </div>
  )
}