import React from 'react';
import '../css-files/Titles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from '../Context/Context';
import { useState } from 'react';

const Titles = () => {

    const {miniPage} = useContext(ThemeContext);
    const [miniPageId, setMiniPageId] = miniPage;

    //Object array of titles.
    const [listItems, setListItems] = useState([
        { icon: <FontAwesomeIcon icon={faReceipt} />, name: "REFERENCES", id:1},
        { icon: <FontAwesomeIcon icon={faAddressCard} />, name: "ABOUT US", id:4},
        { icon: <FontAwesomeIcon icon={faEnvelope} />, name: "CONTACT US", id:2},
        { icon: <FontAwesomeIcon icon={faCoins} />, name: "COINS", id:3},
    ])

    const handlePageId = (id) => {
        setMiniPageId(id);
    }

    return (
        <div>
            <div className="responsive-titles">

            </div>
            <ul className="list-group list-group-flush">
                {
                    listItems.map(l => (
                        <li className={l.id === miniPageId ? "list-group-item black" : "list-group-item"} onClick={() => handlePageId(l.id)} key={l.id}>
                            {l.icon}
                            <span className="text">
                                {l.name}
                            </span>
                            <span className="right-arrow">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Titles
