import React, { Fragment } from 'react';
import List from 'components/molecules/List';

import styles from './Navigation.module.scss';


const Navigation = (props) => {

    let elements = props.elements ? props.elements : '';
    let children = props.children ? props.children : '';
    let classesForNavTag = props.classes && props.classes[0] ? props.classes[0].join(' ') : '';
    let classesForListTag = props.classes && props.classes[1] ? props.classes[1].join(' ') : '';
    let classesForLiTags = props.classes && props.classes[2] ? props.classes[2] : '';
    
    let items;

    if (elements) {
         items =  <List elements={elements} classesForListTag={classesForListTag} classesForLiTags={classesForLiTags}/>
    } else {
         items = <List classes={classesForListTag} classesForLiTags={classesForLiTags}>
             {children}
         </List>
    }

    return <nav className={classesForNavTag} >
        {items}
    </nav>
}


export default Navigation;