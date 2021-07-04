import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Layout from './Layout/Layout';
import axios from "axios";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from '../src/Context/Context';
import DetailPage from './Components/DetailPage';

const App = () => {

  const coinCount = 100;

  const [coins, setCoins] = useState([]);
  const [miniPageId, setMiniPageId] = useState(1);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/coins/markets',
        params: { vs_currency: "usd", page: '1', per_page: coinCount, order: 'market_cap_desc' },
        headers: {
            'x-rapidapi-key': 'c1a521026bmsh856fd9231f4afffp1a52fdjsnba7bf49b177b',
            'x-rapidapi-host': 'coingecko.p.rapidapi.com'
        }
    };

    setInterval(() => {
        axios.request(options).then(function (response) {
            setCoins(response.data)
            
        }).catch(function (error) {
            // console.error(error);
        });

        if(coins.length === coinCount){
          setLoader(false);
        }
    }, 2000)

}, [coins.length])


  return (
    <ThemeContext.Provider
      value={{
        //Context states.
        miniPage: [miniPageId, setMiniPageId],
        coinsValue: [coins, setCoins],
        loaderValue: [loader, setLoader]
      }}>
      <Layout>
        <Router>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Detail/:id" exact component={DetailPage}></Route>
        </Router>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
