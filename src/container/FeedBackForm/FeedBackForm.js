import React from 'react';
import classes from './FeedBackForm.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ZForm from "../ZForm/ZForm";
import Spinner from "../../component/Spinner/Spinner";


import { postRequest } from '../../store/actions/feedBackForm';
import Button from "../../component/UI/Button/Button";
import * as actionTypes from "../../store/actions/feedBackForm";
        
class FeedBackForm extends React.PureComponent
{
    /*constructor(props){
        super(props);
    }*/

    submitButtonClickHandler = (formData) => {

        const formError = this.props.validateOnSubmit(formData);

        //console.log("formError " + formError);

        if(!formError){

            formData.append('token', this.props.createToken(formData));

            //TODO
            this.props.setFormData(formData);

            //TODO init request
            //this.props.submitButtonClickHandler(formData);
            this.props.onSubmit(this.props.url, formData)


        }else{

            this.props.setFormError(formError);

        }
        
        this.props.onSubmit(this.props.url, formData)
        
    };

    render(){

        const element = this.getElementToRender();

        return (
        
            <div className={classes.FeedBackForm}>

                { element }

            </div>
            
        );
    }

    getElementToRender = () => {

        if(this.props.isRequestLoading){

            return (
                <div className={classes.Spinner}>
                    <Spinner/>
                </div>
            );

        }else if(this.props.isRequestSuccess){

            return (
                <div className={classes.Success}>
                    <p>Ваша заявка принята. Мы свяжемся с вами в течение 15 минут.</p>
                    <Button title={"OK"} onClick={this.props.successOKButtonClickHandler}/>
                </div>
            );

        }else if(this.props.isRequestError){

            return (
                <div className={classes.Error}>
                    <p>Какая-то ошибочка...</p>
                    <Button title={"Попробовать снова."} onClick={this.submitButtonClickHandler}/>
                </div>
            );

        }

        return (
            <ZForm
                elements={this.props.elements}
                submitButtonValue={this.props.submitButtonValue}
                submitButtonClickHandler={this.submitButtonClickHandler}

                hiddenFields={this.props.hiddenFields}

            />
        );

    }

}

const mapStateToProps = state => {

    return {

        //formData: state.feedBackForm.formData,
        
        isRequestSuccess: state.feedBackForm.isRequestSuccess,
        isRequestError: state.feedBackForm.isRequestError,
        isRequestLoading: state.feedBackForm.isRequestLoading

    };

};

const mapDispatchToProps = dispatch => {

    return {

        onSubmit: (url, data) => dispatch(postRequest(url, data)),
        setFormData: (formData) => dispatch({
            type: actionTypes.SET_FORM_DATA,
            formData: formData
        })

    }

};

FeedBackForm.propTypes = {

    url: PropTypes.string.isRequired,
    elements: PropTypes.object.isRequired,
    submitButtonValue: PropTypes.string.isRequired,

    validateOnSubmit: PropTypes.func.isRequired,
    createToken: PropTypes.func.isRequired,

    successOKButtonClickHandler: PropTypes.func.isRequired,

    hiddenFields: PropTypes.array,

};

export default connect(mapStateToProps, mapDispatchToProps)(FeedBackForm);
        