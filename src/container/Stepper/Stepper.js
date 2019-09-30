import React from 'react';
import classes from './Stepper.module.scss';
import PropTypes from 'prop-types';
import Step from "./Step/Step";
import Button, {button_type} from "../../component/MButton/MButton";

const steps = [
    {
        index: 1,
        title: 'Select campaign settings',
        success: '&#10003;',
        desc: 'Step 1: Select campaign...',
        info: ''
    },
    {
        index: 2,
        title: 'Select an ad group',
        success: '&#10003;',
        desc: 'Step 2: Select an ad group...',
        info: 'Campaign selected'
    },
    {
        index: 3,
        title: 'Select an ad',
        success: '&#10003;',
        desc: 'Step 3: Select an ad...',
        info: 'Ad group selected'
    }
];
        
class Stepper extends React.PureComponent
{

    state = {
        activeIndex: 0
    };

   /* constructor(props){
        super(props);
    }*/

    nextButtonClickHandler = (event) => {

    /*    event.stopPropagation();
        event.preventDefault();*/

        this.setState((prevState => {

            if(prevState.activeIndex < steps.length){
                return { activeIndex: prevState.activeIndex + 1 };
            }

            return null;

        }));

    };

    backButtonClickHandler = (event) => {

       /* event.stopPropagation();
        event.preventDefault();*/

        this.setState((prevState => {

            if(prevState.activeIndex > 0){
                return { activeIndex: prevState.activeIndex - 1 };
            }

            return null;

        }));

    };

    finishButtonClickHandler = (event) => {

      /*  event.stopPropagation();
        event.preventDefault();*/

        console.log('finish');

    };
    
    render(){

        const stepElements = this.getSteps();

        const mainInfo = this.state.activeIndex >= steps.length ? (
            <p>{ this.props.successMessage }</p>
        ) : (
            <p>{ steps[this.state.activeIndex].desc }</p>
        );

        return (
        
            <div className={classes.Stepper}>

                <div className={classes.Steps}>
                    { stepElements }
                </div>

                <div className={classes.Info}>
                    <div className={classes.MainInfo}>
                        { mainInfo }
                    </div>
                    <div className={classes.Buttons}>
                        <Button
                            label={"Back"}
                            type={button_type.TEXT}
                            disabled={this.state.activeIndex === 0}
                            onClick={this.backButtonClickHandler}
                        />
                       {/* <button
                            className={classes.Button}
                            disabled={this.state.activeIndex === 0}
                            onClick={this.backButtonClickHandler}
                        >BACK</button>
*/}
                        {/*<button
                            className={classes.Button}
                            disabled={this.state.activeIndex === steps.length }
                            onClick={this.nextButtonClickHandler}
                        >NEXT</button>*/}
                        <Button
                            label={"Next"}
                            type={button_type.CONTAINED}
                            disabled={this.state.activeIndex === steps.length }
                            onClick={this.nextButtonClickHandler}
                        />

                        {
                            ( this.state.activeIndex === steps.length ) ?
                                <Button
                                    label={"Finish"}
                                    type={button_type.CONTAINED}
                                    onClick={this.finishButtonClickHandler}
                                /> : null
                        }
                        {/*<p>{ steps[this.state.activeIndex].info }</p>*/}
                    </div>

                </div>

            </div>
            
        );
    }

    getSteps = () => {

        return steps.map((value, index) => {

            let isFirst = index === 0;
            let isSuccess = index < this.state.activeIndex;
            //let stepIndex = index < this.state.activeIndex ? value.success : value.index;

            return (
                <Step
                    key={classes.Steps + index}
                    isFirst={isFirst}
                    isSuccess={isSuccess}
                    title={value.title}
                    index={value.index}
                />
            );

        });

    };

}

Stepper.propTypes = {

    //hasControls: PropTypes.bool.isRequired,
    successMessage: PropTypes.string.isRequired
 
};

export default Stepper;
        