import React from 'react'

export const Button = ( {
    variant,
    onClick,
    children,
    block = false,
    aditionalClass = '',
    type = 'button',
    ...rest
} ) => {

    let btnVariant;
    let typeButton;

    switch ( variant ) {
        case 'primary':
            btnVariant = 'btn-primary';
            break;
        case 'success':
            btnVariant = 'btn-success';
            break;
        case 'warning':
            btnVariant = 'btn-warning';
            break;
        case 'danger':
            btnVariant = 'btn-danger';
            break;
        case 'info':
            btnVariant = 'btn-info';
            break;
        case 'secondary':
            btnVariant = 'btn-secondary';
            break;
        case 'dark':
            btnVariant = 'btn-dark';
            break;
        case 'light':
            btnVariant = 'btn-light';
            break;
        case 'outline-primary':
            btnVariant = 'btn-outline-primary';
            break;
        case 'outline-success':
            btnVariant = 'btn-outline-success';
            break;
        case 'outline-warning':
            btnVariant = 'btn-outline-warning';
            break;
        case 'outline-danger':
            btnVariant = 'btn-outline-danger';
            break;
        case 'outline-info':
            btnVariant = 'btn-outline-info';
            break;
        case 'outline-secondary':
            btnVariant = 'btn-outline-secondary';
            break;
        case 'outline-dark':
            btnVariant = 'btn-outline-dark';
            break;
        case 'outline-light':
            btnVariant = 'btn-outline-light';
            break;
        default:
            btnVariant = 'btn-primary';
            break;
    }

    switch ( type ) {
        case 'button':
            typeButton = 'button';
            break;
        case 'submit':
            typeButton = 'submit';
            break;
        default:
            typeButton = 'button';
            break;
    }

    return (
        <button
            type={ typeButton }
            className={`btn ${ btnVariant } ${ block && 'btn-block' } ${ aditionalClass }`}
            onClick={ onClick }
            { ...rest }
        >
            { children }
        </button>
    )
}
