import React from 'react';

function Buttons(props) {
    return (
        <div>
            <div className="buttons">
            <a href="#"><div onClick={props.moree} className="b-1">Увеличить</div></a>
            <a href="#"><div onClick={props.less} className="b-2">Уменьшить</div></a>
            <a href="#"><div onClick={props.trash} className="b-3">Сбросить</div></a>
        </div>
        </div>
    )
}

export default Buttons