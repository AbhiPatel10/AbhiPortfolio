import React from "react";

const Heading = (props) => {
  return (
    <>
      <div class="flex flex-col text-center w-full my-8">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          {props.title}
        </h1>
      </div>
    </>
  );
};

export default Heading;
