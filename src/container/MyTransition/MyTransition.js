import React from 'react';
import classes from './MyTransition.module.scss';
import PropTypes from 'prop-types';
import Button, {button_type} from "../../component/MButton/MButton";
        
class MyTransition extends React.PureComponent
{

    state = {
        elements: [{id: '123hello', value: 'hello'}]
    };

  /*  constructor(props){
        super(props);
    }*/

    componentDidMount(){
        //add transition class
    }

    componentDidUpdate(){
        //start timeout
    }

    onAddElementButtonClick = (event) => {

        this.setState((prevState) => {

            const random = Math.random();
            prevState.elements.push({id: random, value: 'Value_' + random});

            return { elements: [...prevState.elements]};

        });

    };

    onAnimationEnd = (event) => {

        this.setState((prevState) => {

            prevState.elements.shift();

            return { elements: [...prevState.elements]};

        });

    };

    getElements = () => {

        return this.state.elements.map((value, index) => {

            return (
                <div
                    key={value.id}
                    className={classes.Element}
                    onAnimationEnd={this.onAnimationEnd}
                >

                    <h3>{value.value}</h3>

                </div>
            );

        });

    };
    
    render(){

        const elements = this.getElements();

        return (
        
            <div
                onClick={this.onAddElementButtonClick}
                className={classes.MyTransition}>


                <Button label={"Add element"} type={button_type.CONTAINED} />


                { elements }

            </div>
            
        );
    }
}

MyTransition.propTypes = {

    //transitionClass: PropTypes.string.isRequired,
    //duration: PropTypes.number.isRequired
 
};

export default MyTransition;
        