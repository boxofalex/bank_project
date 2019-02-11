import React, { Fragment } from 'react';
import Element from 'components/atoms/Element';
import Text from 'components/atoms/Text';

import styles from './Article.module.scss';

const Article = (props) => {

    return <Fragment>
        <div className={styles.article}>
          <Element tag={props.titleTag} text={props.titleText}/>
          <Text text={props.text}/>
        </div>
    </Fragment> 
}

export default Article;