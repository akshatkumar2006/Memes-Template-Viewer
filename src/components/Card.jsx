import React from "react";

function Card(memes) {
    console.log(memes, "rest");
    return (
        <div className="m-2 w-58">
            <img className="w-58 h-42 rounded-2xl" src={memes.memes.url} />
            <div className="ml-4">{memes.memes.name}</div>
        </div>
    );
}

export default Card;
