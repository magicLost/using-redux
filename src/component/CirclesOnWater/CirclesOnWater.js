import React from 'react';
import classes from './CirclesOnWater.module.scss';
import PropTypes from "prop-types";
        
class CirclesOnWater extends React.PureComponent {

    ref = React.createRef();

    componentDidMount(){

        this.ref.current.addEventListener('animationend', () => {
            //this.effect.current.classList.remove(classes["Effect--Animation"]);
            //console.log("animationend1");
            this.props.onAnimationEnd();
        }, false);


    }

    render(){

        return (

            <div style={this.props.style} className={classes.CirclesOnWater}>

                <div ref={this.ref} className={classes.Circle}></div>
                {/*<div className={classes.Circle}></div>*/}
                {/*<div className={classes.Circle}></div>*/}

            </div>

        );

    }

}

CirclesOnWater.propTypes = {

    onAnimationEnd: PropTypes.func.isRequired,
    style: PropTypes.object

};

export default CirclesOnWater;
        