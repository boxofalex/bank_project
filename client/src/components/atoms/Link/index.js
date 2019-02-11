import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Element from 'components/atoms/Element';
import Text from 'components/atoms/Text';
import Image from 'components/atoms/Image';

import styles from './Link.module.scss';

const Link_ = (props) => {

    let to = props.to ? props.to : '';
    let inside = props.inside ? props.inside : '';
    let children = props.children ? props.children : '';
    let content;

    if (children) {
        content = children;
    } else {
        if (inside.type === 'image') {
            content = <Image source={inside.details.src}/>
        } else if (inside.type === "text") {
            content = <Text text={inside.details.text}/>
        } else if (inside.type === "title") {
            content = <Element tag={inside.details.tag} text={inside.details.text}/>
        }
    }

    return <Fragment>
         <Link to={to} >
              {content}
         </Link>
     </Fragment>
} 

export default Link_;