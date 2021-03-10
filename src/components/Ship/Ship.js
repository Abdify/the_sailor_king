import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Ship.css';

const Ship = (props) => {
    const {name, type, image, id} = props.ship;
    return (
        <div className="ship">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>Type: {type}</p>
                <Link to={`/ship/${id}`}>
            <button className="exploreBtn">
                    Explore <FontAwesomeIcon icon={faAngleDoubleRight} />
            </button>
                </Link>
        </div>
    );
};

export default Ship;