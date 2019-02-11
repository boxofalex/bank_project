import React, { Fragment } from 'react';
import LinkTypeChecker from 'components/organisms/LinkTypeChecker';


const List = (props) => {

    let elements = props.elements ? props.elements : '';
    let children = props.children ? props.children : '';
    let classesForListTag = props.classesForListTag ? props.classesForListTag : '';
    let classesForLiTags = props.classesForLiTags ? props.classesForLiTags : '';
    let items;
    let count = 0;

    if (elements) {
        items = <ul className={classesForListTag}>

                { Object.entries(elements).map(([element, details]) => {
                        count +=1;
                        return <li className={classesForLiTags[count-1] ? classesForLiTags[count-1] : ''} ><LinkTypeChecker element={details}/></li>
             })}</ul>
    } else {
        items = <ul className={classesForListTag}>
                { 
                    React.Children.map(children, (child, i) => {
                        return <li>{child}</li>
                    })
                }</ul>
    }
    
    return <Fragment>
          {items}
    </Fragment>
}

export default List;