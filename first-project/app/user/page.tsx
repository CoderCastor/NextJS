//now developing SSR
import axios from "axios";

interface UserDataType {
  id: number;
  name: string;
  email: string;
  username: string;
  website: string;
}

async function page() {
  const response = await axios.get(
    "http://localhost:3000/api/user"
  );
  
  const data : UserDataType = response.data;

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {data?.name}</div>
          {data?.email}
        </div>
      </div>
    </div>
  );
}

export default page;

/*

bad practice when we use this approch - This is client side rendering

"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface UserDataType {
  id: number;
  name: string;
  email: string;
  username: string;
  website: string;
}

function page() {
  const [data, setData] = useState<UserDataType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {data?.name}</div>
          {data?.email}
        </div>
      </div>
    </div>
  );
}

export default page;

*/
