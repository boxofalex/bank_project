import React, { Fragment } from 'react';
import Article from 'components/molecules/Article';
import Banner from 'components/organisms/Banner';
import Element from 'components/atoms/Element';
import Button from 'components/atoms/Button';
import Image from 'components/atoms/Image';
import Table from 'components/molecules/Table';
import Text from 'components/atoms/Text';
import List from 'components/molecules/List';
import LinkTypeChecker from 'components/organisms/LinkTypeChecker';


const TypeChecker = (props) => {
     
    let element = props.element ? props.element : '';
    let sublist = props.element.details.sublist ? props.element.details.sublist : '';
    let additional = sublist ?  <div className="sublist"> <List elements={sublist}/> </div> : '';

    switch(element.type) {
        
        case 'image': 
           return <Fragment>
                <Image source={element.details.src}/>
                {additional}
           </Fragment> 
        case 'text':
            return <Fragment>
                  <Text text={element.details.text}/>
                  {additional}
            </Fragment>
        case 'list':
            return <Fragment>
                <List />
                {additional}
            </Fragment>
        case 'banner':
             return <Fragment>
                 <Banner image={element.details.image.src}/>
             </Fragment>
        case 'button':
            return <Fragment>
                <Button type={element.details.type} text={element.details.text}/>
                {additional}
            </Fragment>
        case 'article':
            return <Fragment>
                <Article titleTag={element.details.title.tag} titleText={element.details.title.text} text={element.details.text}/>
            </Fragment>
        case 'table':
              
            return <Fragment>
                <Table elements={element.details.table}/>
            </Fragment>
            
        case 'block':
            return <Fragment>
                {
                    Object.entries(element.details.items).map(([item, details]) => {
                         return <span>
                             <LinkTypeChecker element={details}/>
                         </span>
                    })
                }
            </Fragment>
        default:
            return <Fragment>
                <Element tag={element.details.tag} text={element.details.text}/>
                {additional}
            </Fragment>
    }
}

export default TypeChecker;