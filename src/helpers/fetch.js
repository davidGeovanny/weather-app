const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchToApi = ( endpoint, data, method = 'GET' ) => {
    const url = `${ baseUrl }/${ endpoint }&appid=${ apiKey }`;

    if( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( data ),
        });
    }
};