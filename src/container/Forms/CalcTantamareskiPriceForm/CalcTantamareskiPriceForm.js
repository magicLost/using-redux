import React from 'react';
import classes from './CalcTantamareskiPriceForm.module.scss';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import ZForm from "../../ZForm/ZForm";

import {price} from "../../../data/tantamareski_data";

import * as actionTypes from "../../../store/actions/tantamareski";

class CalcTantamareskiPriceForm extends React.PureComponent
{
    /*constructor(props){
        super(props);
    }*/

    componentWillUnmount(){

        this.onClearDataOrInputChange();

    }

    submitButtonClickHandler = (formData) => {

        let result = { result: '', value: ''};

        let typeMultiplier  = 0;
        let materialMultiplier = 0;

        let error = '';

        //calc price
        const type = formData.get('type');
        const material = formData.get('material');
        const width = parseFloat(formData.get('width'));
        const height = parseFloat(formData.get('height'));

        console.log(type, material, width, height);

        if(price[type] !== undefined){
            typeMultiplier = price[type];
        }else{
            error = "Неверные данные";
        }

        if(price[material] !== undefined){
            materialMultiplier = price[material];
        }else{
            error = "Неверные данные";
        }

        if(error !== ''){

            result.result = 'error';
            result.value = error;

        }else{

            result.result = 'success';
            result.value = typeMultiplier * materialMultiplier * width * height;

        }

        this.props.setResult(result);

    };

    onClearDataOrInputChange = () => {

        if(Object.keys(this.props.result).length > 1)
            this.props.setResult({});

    };
    
    render(){

        const result = this.getResult();

        return (
        
            <div className={classes.CalcTantamareskiPriceForm}>

                { result }

                <ZForm
                    elements={this.props.elements}
                    submitButtonValue={this.props.submitButtonValue}
                    submitButtonClickHandler={this.submitButtonClickHandler}
                    onClearData={this.onClearDataOrInputChange}
                    onInputChangeOutside={this.onClearDataOrInputChange}
                />

            </div>
            
        );
    }

    getResult = () => {

        if(Object.keys(this.props.result).length === 0)
            return null;

        if(this.props.result.result === 'error'){

            return (
                <div className={classes.Error}>
                    <p>{ this.props.result.value }</p>
                </div>
            );

        }else{

            return (
                <div className={classes.Success}>
                    <p>{ 'Стоимость исполнения = ' + this.props.result.value + 'р.' }</p>
                </div>
            );

        }

    }

}

const mapStateToProps = state => {

    return {
        result: state.tantamareski.calcTantamareskiPriceResult
    }

};

const mapDispatchToProps = dispatch => {

    return {
        setResult: result => (dispatch({
            type: actionTypes.SET_CALC_TANTAMARESKI_RESULT,
            result: result
        }))
    }

};

CalcTantamareskiPriceForm.propTypes = {

    //hasControls: PropTypes.bool.isRequired,
    elements: PropTypes.object.isRequired,
    submitButtonValue: PropTypes.string.isRequired,
    //submitButtonClickHandler: PropTypes.func.isRequired,
 
};

export default connect(mapStateToProps, mapDispatchToProps)(CalcTantamareskiPriceForm);
        