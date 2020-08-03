import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListAutocomplete } from "./ListAutocomplete";
import { CustomDropdown } from "../ui/Dropdown/CustomDropdown";
import { Button } from "../ui/Button/Button";
import { useForm } from "../../hooks/useForm";

import { 
    setCity, 
    setError, 
    cleanError, 
    setTemperature, 
    startLoadForecast 
} from "../../actions/weatherActions";
import { filterCities } from "../../helpers/filter";

import options from '../../data/temperature.list.json';

export const Search = () => {

    const dispatch = useDispatch();

    const searchRef = useRef();

    const { temp } = useSelector(state => state.weather);

    const [cities, setCities] = useState( [] );
    const [isFocus, setIsFocus] = useState( true );

    const [ formValues, handleInputChange, reset ] = useForm({
        city: 'Mazatlán'
    });

    const { city } = formValues;

    const onSubmit = (e) => {
        e.preventDefault();

        if( !cities[0] ) {
            return dispatch( setError() );
        }

        searchRef.current.blur();

        dispatch( cleanError() );
        dispatch( setCity( cities[0] ) );
        dispatch( startLoadForecast() );
    };

    const onClickAutocomplete = ( search ) => {
        reset({ city: search });
        searchRef.current.focus();
    };

    const onSelect = ( index ) => {
        dispatch( setTemperature( index ) );
    };

    const handleFocus = ( value ) => {
        setTimeout(() => {
            setIsFocus( value );
        }, 100);
    };

    useEffect(() => {
        if( city.trim().length > 1 ) {
            setCities( filterCities( city ) );
        } else {
            setCities( [] );
        }
    }, [ city, dispatch ]);

	return (
		<div className="container-fluid search__container">
            <div className="row justify-content-center pt-5">
                <div className="col-11">
                    <form onSubmit={ onSubmit }>
                        <div className="input-group pb-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese el nombre de la ciudad"
                                name='city'
                                value={ city }
                                onChange={ handleInputChange }
                                autoComplete='off'
                                autoFocus={ true }
                                ref={ searchRef }
                                onFocus={ () => handleFocus( true ) }
                                onBlur={ () => handleFocus( false ) }
                            />
                            <div className="input-group-append mr-2">
                                <Button
                                    type="submit"
                                    variant='light'
                                >
                                    Buscar
                                </Button>
                            </div>
                            <div className="input-group-append mr-2">
                                <CustomDropdown
                                    variant='info'
                                    items={ options }
                                    label={ options[ temp ].short }
                                    onSelect={ onSelect }
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ListAutocomplete
                items={[ ...cities ]}
                onClick={ onClickAutocomplete }
                show={ isFocus }
            />
		</div>
	);
};
