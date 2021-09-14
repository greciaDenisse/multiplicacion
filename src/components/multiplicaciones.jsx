import React from 'react'


export function Multiplicaciones({listResult, multiplicador}) {
    let i = 1;
    return (
        <div>
            <table>
                <tbody>
                        {listResult.map((result) => {
                            return ( <tr>
                                    <th>{result}</th>
                                    <th>X</th>
                                    <th>{i++}</th>
                                    <th>=</th>
                                    <th>{result}</th>
                               </tr>)
                        })}
                   
                </tbody>
            </table>
        </div>
    )
}
