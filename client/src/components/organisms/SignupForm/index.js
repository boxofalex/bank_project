import React, { Fragment } from 'react';
import Form from 'components/molecules/Form';
import Button from 'components/atoms/Button';

import styles from './SignupForm.module.scss';


const SignupForm = (props) => {
    
    let form = props.data;

    return <Fragment>
        <div>
            <form>
                <Form data={form}/>
                <Button text={form.details.button.text} type={form.details.button.type}/>
            </form>
        </div>
    </Fragment>
 
}

export default SignupForm;