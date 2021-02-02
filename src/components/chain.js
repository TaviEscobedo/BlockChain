import React, { useEffect, useState } from 'react';


const url = "http://localhost:5000/chain";

const Chain = () => {

    const [cadena, setCadena] = useState([]);

    const getData = async () => {

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setCadena(data.chain);

        } catch (error) {
            console.log(error.message);
        }

    }

    useEffect(() => {
        getData();
    }
        , [])

    return (
        <div className="container mt-4 pt-4">

            <div className="row ">
                <div className="col-6 offset-3">

                    <table className="table mt-4">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cadena.map((item) => {
                                    return (
                                        <tr key={item.index}>
                                            <th scope="row">{item.index}</th>
                                            <td>{item.transactions.map((t, index) =>
                                            (
                                                <ul key={index}>
                                                    <li>código: {t.code}</li>
                                                    <li>emisor :{t.sender}</li>
                                                    <li>receptor{t.recipient}</li>
                                                </ul>
                                            ))

                                            }</td>

                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Chain;