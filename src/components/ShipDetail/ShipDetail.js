import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faClock, faHome, faShip, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ShipDetail.css';

const ShipDetail = () => {
    const {shipId} = useParams();
    const [ship, setShip] = useState({});
    useEffect(() => {
        fetch(`https://api.spacexdata.com/v4/ships/${shipId}`)
            .then((res) => res.json())
            .then((data) => setShip(data));
    }, [shipId]);
    // console.log(ship);
    const {name, type, mass_kg, year_built, home_port, image} = ship;

    //Conditional format
    const activeStyle = ship.active ? { filter: "blur(0px)" } : { filter: "blur(5px)" };
    const activeStatus = ship.active ? "active" : "not active";
    const weight = mass_kg ? mass_kg+" kg" : "Unknown";
    const year = year_built ? year_built : "Unknown";

    return (
        <div>
            <header className="shipHeader">
                <h1 className="titleText">The {name}!</h1>
            </header>
            <main>
                <div className="features">
                    <div>
                        <h3>{name}</h3>
                        <h4><FontAwesomeIcon icon={faShip} /> Type: {type}</h4>
                        <h4><FontAwesomeIcon icon={faHome} /> Home port: {home_port}</h4>
                        <h4>
                            <FontAwesomeIcon icon={faWeightHanging} /> Weight: <i>{weight}</i>
                        </h4>
                        <h4><FontAwesomeIcon icon={faClock} /> Built in: {year}</h4>
                    </div>
                    <h4>This ship is currently {activeStatus}.</h4>
                    <img src={image} alt="" style={activeStyle} />
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, molestias fugit
                    at alias illo sunt dolorem pariatur, veritatis commodi omnis in ex deleniti ut
                    impedit accusamus recusandae illum voluptates repellendus labore sed? Quod,
                    magni! Tenetur quis debitis non assumenda quo distinctio, architecto vel aperiam
                    consequatur provident vero vitae eligendi animi ducimus quaerat, ex possimus
                    omnis error. Tenetur beatae quaerat eos dolore sequi voluptatum quibusdam est
                    natus excepturi, eligendi reiciendis alias maxime necessitatibus omnis quis
                    animi voluptatibus deleniti cupiditate blanditiis, aliquid modi? Sequi quo sunt
                    doloremque! Eius, vel recusandae?
                    <br />
                    <br /> Doloribus atque culpa possimus aliquam perspiciatis! Ipsa quaerat
                    explicabo, ex rerum praesentium veritatis voluptatem adipisci totam fugit in
                    aliquam quam! Veritatis reprehenderit earum, molestiae illo aliquam nam quaerat?
                    In, fugit, illum modi sit non cum odit eius quaerat, possimus quas adipisci
                    libero voluptate dolore totam expedita nisi! Quidem est dicta nisi enim
                    voluptas, recusandae, eligendi, maxime molestiae expedita sint aspernatur
                    voluptatem dolorum illum aut. Maxime, perferendis? Aut rerum praesentium aliquam
                    reprehenderit, illum, similique magnam odit, voluptatibus adipisci eveniet
                    dolore exercitationem eaque officiis porro necessitatibus. Error inventore
                    facere autem consequatur ex cum quae ducimus quos quam repellat aliquid
                    recusandae repellendus aut aliquam odit ullam mollitia sapiente, quidem enim
                    ipsa, dolore quis. Eius, veniam. <br />
                </div>
                <div className="socialIcons">
                    <a href={ship.link} target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href={ship.link} target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href={ship.link} target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </main>
        </div>
    );
};

export default ShipDetail;