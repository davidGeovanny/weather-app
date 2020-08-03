import citiesJson from '../data/cities.list.json';

export const filterCities = ( search, count = 15 ) => {
    const items = citiesJson
        .filter( item => item.city.concat( ` - ${ item.admin }` )
                                .toLowerCase()
                                .match( search.toLowerCase() )
        ).slice( 0, count );

    return items;
};

export const findForecastByDate = ( forecast = [], date ) => {
    const item = forecast.find( item => item.dt === date );

    return item || null;
};