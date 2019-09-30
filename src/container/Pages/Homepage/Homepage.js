import React from 'react';
import classes from './Homepage.module.scss';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

//import { CSSTransition, Transition } from 'react-transition-group';
//import { TransitionGroup } from 'react-transition-group' // ES6
import MButton, { button_type } from "../../../component/MButton/MButton";

import Button from '@material-ui/core/Button';

class Homepage extends React.PureComponent
{

    render(){

        return (
            <div className={classes.Homepage}>

                <MButton label={'Click'} type={button_type.OUTLINED}/>

                <Button variant="outlined" >
                    Default
                </Button>

            </div>
        );

    }


}

const mapStateToProps = state => {

    return {
        //isShowFeedBackForm: state.homepage.isShowFeedBackForm
    }
};

const mapDispatchToProps = dispatch => {

    return {
      /*  onShowFeedBackForm: (formType) => dispatch({
            type: SHOW_FEEDBACK_FORM,
            feedBackFormType: formType
        })*/
    }
};

Homepage.propTypes = {
 
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
        