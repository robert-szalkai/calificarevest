import React, { useEffect, useState } from 'react'

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    // apiKey: 'keyZ1VYaUy7YU9dR3'
    apiKey: process.env.AIRTABLE_API_KEY
});
var base = Airtable.base('appYlXCqc6Y5QOkQG');

const useAirtable = (isDisabled) => {
    const [cursuri, setCursuri] = useState([]);

    useEffect(() => {
        if (!isDisabled) {
            let listaTemp = [];

            base('Calificari vest').select({ view: "Grid view" }).eachPage(function page(records, fetchNextPage) {
                // This function (`page`) will get called for each page of records.

                records.forEach(function (record) {
                    if (Object.keys(record.fields).length > 0) {
                        listaTemp.push(record.fields)
                    }
                });

                // To fetch the next page of records, call `fetchNextPage`.
                // If there are more records, `page` will get called again.
                // If there are no more records, `done` will get called.
                fetchNextPage();

            }, function done(err) {
                if (err) { console.error(err); return; }

                setCursuri(listaTemp)
            });
        }

    }, [isDisabled])

    return cursuri;
}

export default useAirtable
