import React from "react";

const Filter = ({ filterData, cotegory, setCotegory }) => {
  const filterButton = (title) => {
    setCotegory(title);
  };

  return (
    <div className="w-11/12 flex flex-wrap justify-center space-x-4 gap-y-4 mx-auto py-4">
      {filterData.map((data) => (
        <button
          className={`bg-indigo-950 text-black font-bold p-1 rounded-md hover:bg-indigo-900 px-2 ${
            cotegory === data.title
              ? "bg-opacity-60 border-white text-white"
              : "bg-opacity-40 bg-transparent"
          }`}
          key={data.id}
          onClick={() => filterButton(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
