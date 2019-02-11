import React, { Fragment } from 'react';

import styles from './OneColumn.module.scss';



const OneColumn = (props) => {

    let containerClass = props.containerClass ? props.containerClass : '';
    let children = props.children ? props.children : '';


    return <Fragment>

         <div className={[styles.container, containerClass].join(' ')}>
             {children}
         </div>
    </Fragment>
}


export default OneColumn;