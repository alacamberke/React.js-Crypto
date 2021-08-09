import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router'
import { ThemeContext } from '../Context/Context';
import { BeatLoader } from 'react-spinners';
import '../css-files/DetailPage.css';

const DetailPage = (props) => {

    //Context values.
    const { coinsValue } = useContext(ThemeContext);
    const [coins, setCoins] = coinsValue;

    //Context value.
    const { loaderValue } = useContext(ThemeContext);
    const [loader, setLoader] = loaderValue;

    const { id } = useParams();
    const coin = coins.find(c => c.id === id);

    return (
        loader === true ?
            <div className="mt-3 text-center">
                <BeatLoader></BeatLoader> <br />
                <p>Please Wait..</p>
            </div> :

            <div>
                <div className="header">
                    <img src={coin.image} className="coin-img"></img>
                </div>
                <div>
                    <p><strong>Coin Id: </strong>{coin?.id}</p>
                    <p><strong>Coin Price: </strong>{coin?.current_price}</p>
                    <p><strong>Coin Name: </strong>{coin?.name}</p>
                </div>
            </div>
    )
}

export default DetailPage


