import React from "react";
import axios from "axios";

export default async function page({
  params,
}: {
  params: {
    blogId: string;
  };
}) {
  const blogId = (await params).blogId;

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div>
      <br />
      <br />
      Title - {response.data.title} <br />
      Body - {response.data.body}
      <br />
    </div>
  );
}
