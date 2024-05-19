import React from "react";

const Cards = ({ item }) => {
  // console.log(card);
  return (
    <>
      <div className="mt-4 my-3 p-3 ">
        <div className="card w-92 bg-base-100 shadow-xl my-3 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">free</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer   px-2 py-1 hover:bg-pink-400 hover:text-white duration-200 border-[2px] rounded-full ">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
