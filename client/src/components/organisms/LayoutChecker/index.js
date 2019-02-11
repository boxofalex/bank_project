import React, { Fragment } from 'react';
import OneColumn from 'components/organisms/Layout/OneColumn';
import TwoColumn from 'components/organisms/Layout/TwoColumn';
import FlexContainer from 'components/organisms/Layout/FlexContainer';
import LinkTypeChecker from 'components/organisms/LinkTypeChecker';


const LayoutChecker = (props) => {

    let block = props.block ? props.block : '';
    let items = block.items ? block.items : '';
    let layoutType = block.layout.type ? block.layout.type : '';
    let classes = props.classes ? props.classes : '';

    switch(layoutType) {
        case('twocolumns'):
           return <Fragment>
               {
                   Object.entries(items).map(([item, details]) => {

                    return <Fragment>
                    <TwoColumn classes={classes}>
                        <LinkTypeChecker element={details.column1}/>
                        <LinkTypeChecker element={details.column2}/>
                    </TwoColumn>
                    </Fragment>
               })}
           </Fragment>
        case('flexcontainer'):
            return <Fragment>
               {
                   Object.entries(items).map(([item, details]) => {
                  
                      return <Fragment>
                          <FlexContainer containerClass={classes && classes[0] ? classes[0].join(' ') : ''}>
                                {
                                    Object.entries(details).map(([item, details]) => {
                                        return <Fragment>
                                            {Object.entries(details).map(([item, details]) => {
                                               
                                                return <div className={classes && classes[1] ? classes[1].join(' ') : ''}>
                                                        <LinkTypeChecker element={details}/>
                                                      </div>
                                            })}
                                            
                                        </Fragment>
                                      
                                    })
                                }
                          </FlexContainer>
                      </Fragment>
                   })
               }
            </Fragment>
        default:
           return <Fragment>
               {
                   Object.entries(items).map(([item, details]) => {
                    
                        return <Fragment>
                        <OneColumn containerClass={classes && classes[0] ? classes[0].join(' ') : ''}>
                            <LinkTypeChecker element={details}/>
                        </OneColumn>
                        </Fragment>
                   })
               }
           </Fragment>
    }
}

export default LayoutChecker;