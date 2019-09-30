import React from 'react';
import classes from './TantamareskiModalFormsManager.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { callMe, calcTantamareskiPrice } from "../../data/forms";
import { formTypes } from "../../data/form_types";
import CallMeForm from "../Forms/CallMeForm/CallMeForm";
import CalcTantamareskiPriceForm from "../Forms/CalcTantamareskiPriceForm/CalcTantamareskiPriceForm";

class TantamareskiModalFormsManager extends React.PureComponent
{
    /*constructor(props){
        super(props);
    }*/
    
    render(){

        const form = this.renderForm();

        return (
        
            <div className={classes.TantamareskiModalFormsManager}>

                { form }

            </div>
            
        );
    }

    renderForm = () => {

        if(this.props.isShowFeedBackForm !== true){
            return null;
        }

        switch(this.props.feedBackFormType){
            case formTypes.CALL_ME:
                return (
                    <CallMeForm
                        url={this.props.urlCallMeForm}
                        elements={callMe}
                        submitButtonValue={"Отправить"}
                        successOKButtonClickHandler={this.props.successOKButtonClickHandler}
                    />
                );
            case formTypes.CALL_ME_WITH_SAMPLE:
                return (
                    <CallMeForm
                        url={this.props.urlCallMeForm}
                        elements={callMe}
                        submitButtonValue={"Отправить"}
                        successOKButtonClickHandler={this.props.successOKButtonClickHandler}
                        hiddenFields={this.props.hiddenFields}
                    />
                );
            case formTypes.CALC_TANTAMARESKI_PRICE:
                return (
                    <CalcTantamareskiPriceForm
                        elements={calcTantamareskiPrice}
                        submitButtonValue={"Рассчитать стоимость."}
                    />
                );

            default: console.error("Wrong form type = ", this.props.feedBackFormType); return null;
        }

    };

}

const mapStateToProps = state => {

    return {
        isShowFeedBackForm: state.tantamareski.isShowFeedBackForm,
        feedBackFormType: state.tantamareski.feedBackFormType,
        hiddenFields: state.tantamareski.hiddenFields
    };

};

TantamareskiModalFormsManager.propTypes = {

    //hasControls: PropTypes.bool.isRequired,
    urlCallMeForm: PropTypes.string.isRequired,
    urlCallMeFormWithSample: PropTypes.string.isRequired,
    successOKButtonClickHandler: PropTypes.func.isRequired
 
};

export default connect(mapStateToProps)(TantamareskiModalFormsManager);
        