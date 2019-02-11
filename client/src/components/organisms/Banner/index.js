import React, { Fragment } from 'react';
import images from 'assets';

import styles from './Banner.module.scss';


const Banner = (props) => {

    let source = Object.keys(images).filter(key => key === props.image);
    let sourceImg = images[source];

    let imageStyle = {

        backgroundImage: 'url(' + sourceImg  + ')',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    };

    let children = props.children ? props.children : '';

    return <Fragment>
       <div className={styles.banner} style={imageStyle}>
               {children}
       </div>
    </Fragment>
}

export default Banner;