import React from 'react';
import classes from './Step.module.scss';
        
const step = ({isFirst, isSuccess, title, index}) => {

    const connector = isFirst ? null :  (
        <div className={classes.Connector}></div>
    );

    const indexElement = isSuccess ? (
        <p>&#10003;</p>
    ) : (
        <p>{ index }</p>
    );

    const countClasses = isSuccess ? [classes.Count, classes["Count--Success"]].join(' ') : classes.Count;

    return (


        
        <div className={classes.Step}>

            { connector }

            <div className={classes.Content}>
                <div className={countClasses}>
                    { indexElement }
                </div>
                <div className={classes.Title}>
                    <p>{ title }</p>
                </div>
            </div>

        </div>
            
    );
};

export default step;
        