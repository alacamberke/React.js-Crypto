import React, { useContext } from 'react'
import { useState } from 'react';
import { ThemeContext } from '../../Context/Context';
import Getcoins from '../Coins/Getcoins';
import '../../css-files/Coins.css'

const Coins = () => {

    const { coinsValue } = useContext(ThemeContext);
    const [coins, setCoins] = coinsValue;

    //Search-Input options.
    const [searchCoin, setSearchCoin] = useState("");


    //Pagination process.
    let coinsPerPage = null;
    const pagination = (currentPage, coinsPerpage, searchCoin) => {

        coinsPerPage = coinsPerpage;
        const indexOfLastCoin = currentPage * coinsPerpage;
        const indexOfFirstCoin = (indexOfLastCoin - coinsPerpage);

        let currentCoins = [];
        if (searchCoin === "") {
            currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);
            return currentCoins;
        } else {
            currentCoins = coins;
            return currentCoins;
        }
    }
    

    const pageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i < Math.ceil(coins.length / coinsPerPage); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    }
    

    const handleSearchCoin = (e) => {
        setSearchCoin(e.target.value)
    }

    return (
        <div>

            <input
                className="form-control searchCoin"
                type="text"
                placeholder="Search..."
                value={searchCoin}
                onChange={(e) => handleSearchCoin(e)}>
            </input>

            {/* Get coins with option of perpage. */}
            <Getcoins
                perpage={10}
                searchCoin={searchCoin}
                paginationFunction={pagination}
                pageNumbersFunction={pageNumbers}
            />

        </div>
    )
}

export default Coins
