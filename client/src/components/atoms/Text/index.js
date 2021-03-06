import React, { Fragment } from 'react';
import utils from 'utils';

import styles from './Text.module.scss';

const Text_ = (props) => {
    
    return <Fragment>
          <span dangerouslySetInnerHTML={utils.convertToJSX(props.text)} ></span>
    </Fragment>
}

export default Text_;