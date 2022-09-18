import React, { useEffect, useState } from 'react';

const FetchAPI = () => {
const [myData, setMyData] = useState([]);

const apiCall = async () =>{
   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
   setMyData(await response.json());
}

// useEffect(() =>{
//     apiCall();
// }, [])

  return (
    <div>
        {myData.map((data) => {
            return (
                <div key={data.id}>
                    <h3>{data.name}</h3>
                    <p>{data.email}</p>
                    <p>{data.body}</p>
                </div>
            )
        })}
        <button onClick={apiCall}>Load data</button>
    </div>
  )
}

export default FetchAPI