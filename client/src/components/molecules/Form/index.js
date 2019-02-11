import React, { Fragment } from 'react';

import styles from './Form.module.scss';

const Form = (props) => {

    let type = props.data.type;
    let content = props.data.details;
  
    switch(type){
        
        default:
          return  <input placeholder={content.placeholder} />
    }
}

export default Form;