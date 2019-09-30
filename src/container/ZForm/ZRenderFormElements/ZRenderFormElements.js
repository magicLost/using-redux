import React from 'react';
import classes from './ZRenderFormElements.module.scss';
import PropTypes from 'prop-types';
//import Input from "../../../component/UI/Form/Input/Input";
import Textarea from "../../../component/UI/Form/Textarea/Textarea";
import FileInput from "../../../component/UI/Form/FileInput/FileInput";
import Select from "../../../component/UI/Form/Select/Select";
import Input from "../../../component/UI/MaterialForm/MInput/MInput";
        
class ZRenderFormElements extends React.PureComponent
{
    render(){

        //console.log("ZRenderFormElements ", this.props.elements);

        const elements = this.renderElements();

        return (

            <div className={classes.ZRenderFormElements}>

                { elements }

            </div>

        );
    }

    renderElements = () => {

        const elements = [];

        for(let element in this.props.elements){

            let config = this.props.elements[element];

            switch(config.elementType){

                case 'input':
                    elements.push(<Input
                        key={classes.ZRenderFormElements + element}
                        elementAttrs={config.elementAttrs}
                        labelValue={config.labelValue}
                        value={
                            this.props.formElementsState !== undefined && this.props.formElementsState[element] !== undefined
                                ? this.props.formElementsState[element].value
                                : ''}
                        changeHandler={this.props.inputChangeHandler}
                        error={this.props.formElementsState !== undefined && this.props.formElementsState[element] !== undefined
                            ? this.props.formElementsState[element].error
                            : ''}
                    />); break;

                case 'textarea':
                    elements.push(<Textarea
                        key={classes.ZRenderFormElements + element}
                        resize={config.resize}
                        elementAttrs={config.elementAttrs}
                        labelValue={config.labelValue}
                        value={
                            this.props.formElementsState !== undefined && this.props.formElementsState[element] !== undefined
                                ? this.props.formElementsState[element].value
                                : ''}
                        changeHandler={this.props.inputChangeHandler}
                        error={this.props.formElementsState !== undefined && this.props.formElementsState[element] !== undefined
                            ? this.props.formElementsState[element].error
                            : ''}
                    />); break;
                case 'file': elements.push(<FileInput
                        key={classes.ZRenderFormElements + element}
                        elementAttrs={config.elementAttrs}
                        labelValue={config.labelValue}
                        value={
                            this.props.formElementsState !== undefined && this.props.formElementsState[element] !== undefined
                                ? this.props.formElementsState[element].value
                                : ''}
                        changeHandler={this.props.inputChangeHandler}
                        error={this.props.formElementsState !== undefined && this.props.formElementsState[element] !== undefined
                            ? this.props.formElementsState[element].error
                            : ''}
                    />); break;
                case 'select':
                    elements.push(<Select
                        key={classes.ZRenderFormElements + element}
                        elementAttrs={config.elementAttrs}
                        labelValue={config.labelValue}
                        value={
                            this.props.formElementsState !== undefined && this.props.formElementsState[element] !== undefined
                                ? this.props.formElementsState[element].value
                                : ''}
                        changeHandler={this.props.inputChangeHandler}
                        options={config.options}
                        error={this.props.formElementsState !== undefined && this.props.formElementsState[element] !== undefined
                            ? this.props.formElementsState[element].error
                            : ''}
                    />); break;
                case 'checkbox': console.log('checkbox'); break;

            }

        }

        return elements;

    };
}

ZRenderFormElements.propTypes = {

    elements: PropTypes.object.isRequired,
    inputChangeHandler: PropTypes.func.isRequired,
    formElementsState: PropTypes.object

};

export default ZRenderFormElements;
        