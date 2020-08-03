import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";

import './dropdown.css'

export const CustomDropdown = ( {
    variant,
    label = 'Seleccione',
    onSelect,
    items = [],
} ) => {

    const [show, setShow] = useState( false );
    const [labelText, setLabelText] = useState( label );

    let dropdownVariant;

    switch ( variant ) {
        case 'primary':
            dropdownVariant = 'dropdown-primary';
            break;
        case 'success':
            dropdownVariant = 'dropdown-success';
            break;
        case 'warning':
            dropdownVariant = 'dropdown-warning';
            break;
        case 'danger':
            dropdownVariant = 'dropdown-danger';
            break;
        case 'info':
            dropdownVariant = 'dropdown-info';
            break;
        case 'secondary':
            dropdownVariant = 'dropdown-secondary';
            break;
        case 'dark':
            dropdownVariant = 'dropdown-dark';
            break;
        default:
            dropdownVariant = 'dropdown-primary';
            break;
    }

    const handleShowDropdown = () => {
        setShow( !show );
    };

    const onClick = ( text, index ) => {
        setLabelText( text );
        setShow( false );
        onSelect( index );
    };

	return (
		<div className="dropdown">
            <Button
                variant={ variant }
                onClick={ handleShowDropdown }
            >
                { labelText } <i className="fas fa-angle-down"></i>
            </Button>

            <div className={`dropdown-menu ${ dropdownVariant } ${ show && 'show' }`}>
                {
                    items.map( ( item, index ) => (
                        <li
                            key={ index }
                            className="dropdown-item pointer"
                            onClick={ () => onClick( item.short, index ) }
                        >
                            { item.text }
                        </li>
                    ))
                }
			</div>
		</div>
	);
};
