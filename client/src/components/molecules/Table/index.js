import React, { Fragment } from 'react';
import Text from 'components/atoms/Text';

import styles from './Table.module.scss';

const Table = (props) => {
    
    let elements = props.elements ? props.elements : '';
    let head = elements.head ? elements.head : '';
    let body = elements.body ? elements.body : '';
    let table;

    if (head && body) {
        table = <Fragment>
            {<table>
                <thead>
                    {Object.entries(head.items).map(([row, details]) => {

                        return <tr>
                            {Object.entries(details.items).map(([item, details]) => {
                            
                            return <th><Text text={details.text}/></th>
                        })}

                        </tr>
                    })}
                </thead>

                <tbody>
                    {Object.entries(body.items).map(([row, details]) => {

                        return <tr>
                            {Object.entries(details.items).map(([item, details]) => {

                                return <td><Text text={details.text}/></td>
                            })}
                        </tr>
                    })}
                </tbody>
           
            </table>}
        </Fragment>
    } else {
        table = "";
    }

    return <Fragment>
        {table}
    </Fragment>

}

export default Table;