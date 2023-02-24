import { useState } from "react";

export default function Flashcard(props){
    const [content, setContent] = useState("What's 9+10?")
    function handleOnClick(){
        setContent("you stupid");
    }
    return(
        <button className="mt-16 block mx-auto max-w-sm p-16 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" onClick={handleOnClick}> {/* Div for Entire Card */}
            <span></span>
            <div>  {/* Div for question */}
                <h1 class="flex text-center justify-center">{content}</h1>
            </div>
        </button>
    )
}