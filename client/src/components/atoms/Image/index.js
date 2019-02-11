import React, { Fragment } from 'react';
import images from 'assets';

import styles from './Image.module.scss';



const Image = (props) => {

    let source = Object.keys(images).filter(key => key === props.source);
    let sourceImg = images[source];

    return <Fragment>
        <img className={styles.image} src={sourceImg}/>
    </Fragment>
}

export default Image;