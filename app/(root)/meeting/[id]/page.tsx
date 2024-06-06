import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  return <div> Room No# {params.id}</div>;
};

export default Meeting;
