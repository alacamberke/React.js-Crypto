import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router'
import { ThemeContext } from '../Context/Context';

const DetailPage = (props) => {

    //Context values.
    const { coinsValue } = useContext(ThemeContext);
    const [coins, setCoins] = coinsValue;

    const { id } = useParams();

    const coin = coins.find(c => c.id === id);

    return (
        <div>
            <div>
                <p><strong>Coin Id: </strong>{coin?.id}</p>
                <p><strong>Coin Price: </strong>{coin?.current_price}</p>
                <p><strong>Coin Name: </strong>{coin?.name}</p>
            </div>
        </div>
    )
}

export default DetailPage


