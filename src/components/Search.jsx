import React from "react";

function Search({ allMemes, setAllMemes }) {
    function handleSearch(searchedText) {
        const filteredMemes = allMemes.filter((item) =>
            item.name.toLowerCase().includes(searchedText.toLowerCase())
        );

        // Update the meme list
        setAllMemes(filteredMemes);
    }
    return (
        <div>
            <input
                className=" m-8 border text-2xl rounded-2xl p-2 max-w-lg"
                placeholder="Search Memes..."
                onChange={(e) => handleSearch(e.target.value)}
                type="text"
            />
        </div>
    );
}

export default Search;
