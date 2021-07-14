import React from 'react';
import Number from './Number';
import Buttons from './Buttons';
import react, {useState} from "react";

function MainContent() {

        let [more, setMore] = useState(0);

    function moree(){
        setMore(more + 100000)
    }
    function less() {
        if(more != 0){
            setMore(more - 1)
        }
    }
    function trash(){
        setMore(more = 0)
    }
    return (
        <div>
            <Number more={more} />
            <Buttons moree={moree} less={less} trash={trash} />
        </div>
    )
}

export default MainContent;