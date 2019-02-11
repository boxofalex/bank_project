import React, { Fragment } from 'react';

import Link from 'components/atoms/Link';


const LinkChecker = (props) => {
     
    let link = props.link ? props.link : '';
    let children = props.children ? props.children : '';
    let item;

    if(link) {
        item = <Fragment>
          <Link to={link.to}>
             {children}
          </Link>
        </Fragment>
    } else {
        item = <Fragment>
              {children}
        </Fragment>
    }

    return item;
}

export default LinkChecker;