import React, { useEffect, useState } from 'react';
import Ship from '../Ship/Ship';
import './Home.css';

const Home = () => {
    const [ships, setShips] = useState([]);
    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/ships")
            .then((res) => res.json())
            .then((data) => setShips(data));
    }, []);
    console.log(ships)
    return (
        <div>
            <header className="homeHeader">
                <h1 className="titleText">
                    Welcome to <span className="siteName">Sailor King!</span>
                </h1>
            </header>
            <main>{ships.map((ship) => ship.image && <Ship ship={ship} key={ship.id} />)}</main>
        </div>
    );
};

export default Home;