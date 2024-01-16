// //----------------------------- Custom hooks ---------------------

import {useEffect, useState} from 'react'

function useCurrency(currency) {
    const [data , setData] = useState({})           // passing empty obj in case fetch will not give anything so app will not crash..
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)  // since this json data is in string format so we've to change into json..
        
        .then((response) => response.json())                // taking json data into response and changing to json format.
        .then((response) => setData(response[currency]))      // holding response into setData. can't use var bcz we dont know user which currency will use..
        console.log(data);
    } , [currency])
    console.log(data);
    return data;
}

export default useCurrency;         // returning directly whole method...

