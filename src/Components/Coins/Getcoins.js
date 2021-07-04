import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../Context/Context';
import "../../css-files/Getcoins.css";
import { BeatLoader } from 'react-spinners';

const Getcoins = (props) => {

    //Destructing.
    const { perpage, searchCoin, paginationFunction, pageNumbersFunction } = props;

    //Context value.
    const { loaderValue } = useContext(ThemeContext);
    const [loader, setLoader] = loaderValue;


    const [currentPage, setCurrentPage] = useState(1);
    const [coinsPerpage, setCoinsPerpage] = useState(perpage);

    const currentCoins = paginationFunction(currentPage, coinsPerpage, searchCoin);
    const pageNumbers = pageNumbersFunction();


    return (
        <div>

            {
                loader ?
                    <div className="mt-3 text-center">
                        <BeatLoader></BeatLoader> <br />
                        <p>This process may take time..</p>
                    </div> : null
            }


            <div className="page-numbers mt-3">
                {pageNumbers.map(number => {
                    return <button
                        className={currentPage === number ? "bg-dark text-white" : null}
                        onClick={() => setCurrentPage(number)}>{number}</button>
                })}
            </div>

            <ul className="coin-list mt-4">

                {
                    currentCoins.filter(coins => coins.name.toLowerCase().indexOf(props.searchCoin) !== -1)
                        .map((filteredCoin, index) => {
                            return <div key={filteredCoin}>

                                <li className="coin-list-item" >
                                    <div className="row">
                                        <div className="col-sm">
                                            <img src={filteredCoin.image} className="coin-image"></img>
                                        </div>
                                        <div className="col-sm">
                                            <h4>{filteredCoin.name}</h4>
                                        </div>
                                        <div className="col-sm">
                                            <h4>{filteredCoin.current_price} $</h4>
                                        </div>
                                        <div className="col-sm">
                                            <a href={"/Detail/" + filteredCoin.id} className="myButton mr-5 mb-1">Detail</a>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </li>

                            </div>
                        })
                }
            </ul>


        </div>
    )
}

export default Getcoins
