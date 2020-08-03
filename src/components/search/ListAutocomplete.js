import React, { Fragment } from 'react';
import flag from '../../assets/images/mexico.svg';
import './autocomplete.css';

export const ListAutocomplete = ( {
    items = [],
    onClick,
    show = true
} ) => {
    return (
        <div className={`row justify-content-center ${ (!show || items.length < 1) && 'd-none' }`}>
            <div className="col-11">
                <ul className="autocomplete__wrap autocomplete__height square scrollbar-dusty-grass thin">
                    {
                        items.map( ( item, index ) => (
                            <Fragment key={ index }>
                                <li onClick={ () => onClick( `${ item.city } - ${ item.admin }` ) } >
                                    <img 
                                        src={ flag } 
                                        alt="Bandera de México"
                                        className="img-fluid"
                                    />
                                    { item.city } - { item.admin }
                                </li>
                            </Fragment>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
