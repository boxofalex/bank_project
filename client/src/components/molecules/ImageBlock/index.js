import React, { Fragment } from 'react';
import Image from 'components/atoms/Image';

import styles from './Logo.module.scss';


const ImageBlock = (props) => {

    let classes = props.classes ? props.classes : '';
    let image = props.image ? props.image : ''

    return <Fragment>
       <div className={classes}>
            <Image source={image} />
       </div>
    </Fragment>
}

export default ImageBlock;