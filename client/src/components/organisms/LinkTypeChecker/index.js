import React, { Fragment } from 'react';
import LinkChecker from 'components/molecules/LinkChecker';
import TypeChecker from 'components/molecules/TypeChecker';


const LinkTypeChecker = (props) => {
   
    let element = props.element ? props.element : '';
    let link = element.link ? element.link : '';

    return <Fragment>
        <LinkChecker link={link}>
            <TypeChecker element={element} />
        </LinkChecker>
    </Fragment>

}

export default LinkTypeChecker;