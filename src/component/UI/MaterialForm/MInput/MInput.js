import React from 'react';
import classes from './MInput.module.scss';

const mInput = ({elementAttrs, value, labelValue, changeHandler, error}) => {

    let inputClass = classes.Input;
    let errorElement = null;

    if(error){

        inputClass += ' ' + classes["Input--Error"];
        errorElement = (
            <div
                className={classes.Error}
            >
                <p>{error}</p>
            </div>
        );

    }


    return (

        <div className={classes.InputWrapper}>

            <label htmlFor={elementAttrs.id} className={classes.Label}>{labelValue}</label>

            <input
                className={inputClass}
                {...elementAttrs}
                value={value}
                onChange={changeHandler}
            />

            {errorElement}

        </div>

    );
};

export default mInput;
        