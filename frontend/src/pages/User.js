import React, {useState, useEffect} from "react";
import Editbutton from '../components/Editbutton'
import { useParams, useNavigate } from "react-router-dom";
import { openContractCall } from '@stacks/connect';
import {
  bufferCV, UIntCV
} from '@stacks/transactions';
import { utf8ToBytes } from '@stacks/common';
import { userSession } from '../auth';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
const bytes = utf8ToBytes('foo'); 
const bufCV = bufferCV(bytes);

const genreBubbleStyle = {
  display: 'inline-block',
  borderRadius: '10px',
  backgroundColor: 'lightgreen',
  padding: '5px',
  margin: '5px',
};

const genreColorMap = {
  "Action": '#f3241f',
  "Drama": '#48a5fa', 
  "Comedy": '#ffa07a', 
  "Children's": '#4caf50', 
  "Thriller": '#f555f5', 
  "Sci-Fi": '#00ffff', 
  "Romance": '#FF4081', 
  "Adventure": '#FF6F61', 
  "Crime": '#bf6239',
  "Horror": '#7a7b8e', 
  "Musical": '#b1ff00', 
  "Documentary": '#87ceeb',  
  "Mystery": '#a165a1',
  "Animation": '#ffd700', 
};

function getGenreBubbleStyle(genre){
  return{
    ...genreBubbleStyle,
    backgroundColor: genreColorMap[genre] || 'lightgreen'
  }
}


const ratingBubbleStyle = {
  display: 'inline-block',
  backgroundColor: 'darkblue',
  color: 'white',
  borderRadius: '10px',
  fontWeight: 'bold',
  padding: '5px',
  margin: '5px',
};


export default function App() {
  let params = useParams();
  let [users, setUsers] = useState([]);
  const [comment_index, setCommentIndex] = useState(0);

  const [loadingText, setLoadingText] = useState("Loading");
  let [isloading, setLoading] = useState(true);
  
  const handleClickDelete = async () => {

    try {
      const response = await fetch(`http://localhost:3000/users/${params.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }



    } catch (err) {
      console.log("d")
    } finally {
      console.log("d")
    }
  };

  function handleClickUp() {
    setCommentIndex(comment_index + 1);
  }

  function handleClickDown() {
    setCommentIndex(comment_index - 1);
  }

  const getUsers = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users/${params.id}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        },
      });
      
      const data = await response.json();
      setUsers(data);
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
    getUsers();
  }, [users]);

  useEffect(() => {
    setLoading(true); // Set loading to true when params.id changes
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        switch (prevText) {
          case "Loading.":
            return "Loading..";
          case "Loading..":
            return "Loading...";
          default:
            return "Loading.";
        }
      });
    }, 500); // Update every 500 milliseconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [params.id]);

  if (isloading){
    return (
      <div className="container pt-5 pb-5">
        <h2>{loadingText}</h2>
      </div>
    );
  }
  else
  return (
    <div className="container pt-5 pb-5" >
      <h2>Users</h2>
        <div className="row">
            {users && users.map((user) => {
              return(
               <div className="col-lg-12">
               <Editbutton u={user} />
               
               {console.log(user)}
               <button onClick={handleClickDelete}>Delete</button>
                </div>
                )
            })}
            </div>
    </div>
  )
}