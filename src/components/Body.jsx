import React, { useState } from "react";
import Card from "./Card";
import Search from "./Search";
import Apicalling from "./Apicalling";

function Body() {
    const allMemes = Apicalling();
    console.log(allMemes);
    const [allMemesData, setAllMemes] = useState(allMemes);
    return (
        <div>
            <div>
                <Search allMemes={allMemes} setAllMemes={setAllMemes} />
            </div>

            <div className="flex flex-wrap w-10/12 m-auto">
                {allMemesData.map((memes) => {
                    return <Card memes={memes} />;
                })}
            </div>
        </div>
    );
}

export default Body;
