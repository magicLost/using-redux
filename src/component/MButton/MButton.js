import React from 'react';
import classes from './MButton.module.scss';
import PropTypes from 'prop-types';
import CirclesOnWater from "../CirclesOnWater/CirclesOnWater";

export const button_type = {
    TEXT: 'TEXT',
    OUTLINED: 'OUTLINED',
    CONTAINED: 'CONTAINED'
};

class MButton extends React.PureComponent {

    buttonElement = React.createRef();

    state = {
        effects: [], //{id: 0.34564, style: {top: 0, left: 23}}
    };

    onClick = (event) => {

        event.stopPropagation();
        event.preventDefault();

        let rect = this.buttonElement.current.getBoundingClientRect();

        //console.log(xPosition, yPosition);

        const style = {};
        style.top = event.pageY - rect.top;
        style.left = event.pageX - rect.left;
/*
        this.setState((prevState) => {
            const newCount = prevState.showCount + 1;
            this.checkShowCount = newCount;
            return { showCount: newCount };
        });*/

        this.setState((prevState) => {

            const id = Math.random();

            prevState.effects.push({id: id, style: style});
            let effects = [...prevState.effects];
            return { effects: effects };

        });

        if(this.props.onClick)
            this.props.onClick();

    };

    onEffectAnimationEnd = () => {

        //this.setState( { isShowEffect: false });
        this.setState((prevState) => {

            prevState.effects.shift();

            let effects = [...prevState.effects];

            return { effects: effects };

        });


    };

    getEffects = () => {

        return this.state.effects.map((value) => {

            return (

                <CirclesOnWater
                    key={value.id}
                    onAnimationEnd={this.onEffectAnimationEnd}
                    style={value.style}
                />

            );

        })

    };

    render(){

        const effects = this.getEffects();

        let buttonClasses = classes.M_Button;

        switch(this.props.type){
            case button_type.TEXT: buttonClasses += ' ' + classes["M_Button--Text"];break;
            case button_type.OUTLINED: buttonClasses += ' ' + classes["M_Button--Outlined"];break;
            case button_type.CONTAINED: buttonClasses += ' ' + classes["M_Button--Contained"];break;

            default:
                console.error("Bad button type " + this.props.type);
                buttonClasses += ' ' + classes["M_Button--Text"];
                break;
        }

        return (

            <button
                ref={this.buttonElement}
                className={buttonClasses}
                onClick={this.onClick}
                style={this.props.style}
                disabled={this.props.disabled}
            >
                <span className={classes.Label}>{ this.props.label }</span>
                { effects }
            </button>

        );

    }

}

//= ({label, type, onClick, style = null}) =>
MButton.propTypes = {

    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,

};

export default MButton;
        