import Header from "@/components/Header";
import React from "react";

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;

  return (
    <div className="wrapper page">
      <Header
        subHeader="shreyansh@gmail.com"
        title="Shreyansh Pandey"
        userImg="/assets/images/dummy.jpg"
      />{" "}
      <h1 className="text-2xl font-karla">User Id: {id}</h1>
    </div>
  );
};

export default page;
