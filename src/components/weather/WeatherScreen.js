import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Search } from '../search/Search'
import { Result } from './Result'
import { NoFound } from './NoFound'
import { Empty } from './Empty'
import { Loading } from '../ui/Loading/Loading'

export const WeatherScreen = () => {

    const { loading, error, current } = useSelector(state => state.weather);

    return (
        <Fragment>
            <Search/>

            {
                ( loading )
                    ? <Loading type="grow" />
                    : ( error )
                        ? <NoFound />
                        : ( !current )
                            ? <Empty />
                            : <Result />
            }
        </Fragment>
    )
}
