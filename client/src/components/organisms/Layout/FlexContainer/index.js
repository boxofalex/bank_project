import React, { Fragment } from 'react';
import LinkTypeChecker from 'components/organisms/LinkTypeChecker';

import styles from './FlexContainer.module.scss';




const FlexContainer = (props) => {
    
    let containerClass = props.containerClass ? props.containerClass : '';
    let children = props.children ? props.children : '';

    return <Fragment >
        <div className={[styles.row, containerClass].join(' ')}>
        
            {children}
        </div>
    </Fragment>

}

export default FlexContainer;