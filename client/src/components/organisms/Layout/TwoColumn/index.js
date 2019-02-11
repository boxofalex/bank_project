import React, { Fragment } from 'react';

import styles from './TwoColumn.module.scss';


const TwoColumn = (props) => {

    let containerClass = props.classes && props.classes[0] ? props.classes[0] : '';
    let leftBlockClass = props.classes && props.classes[1] ? props.classes[1] : '';
    let rightBlockClass = props.classes && props.classes[2] ? props.classes[2] : '';
    let children = props.children ? props.children : '';


     return <Fragment>
         <div className={[styles.container, containerClass].join(' ')}>
                { 
                    React.Children.map(children, (child, i) => {
                        if (i == 0) {
                           return <div className={[styles.leftBlock, leftBlockClass].join(' ')}>
                               {child}
                           </div>
                        } else {
                            return <div className={[styles.rightBlock, rightBlockClass].join(' ')}>
                               {child}
                           </div>
                        }
                    })
                }
         </div>
     </Fragment>
}

export default TwoColumn;