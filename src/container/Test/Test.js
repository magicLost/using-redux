import React from 'react';
import classes from './Test.module.scss';
import PropTypes from 'prop-types';

import {requestTestData, setTestData} from "../../store/actions/test";

import { connect } from 'react-redux';
        
class Test extends React.PureComponent
{
    /*constructor(props){
        super(props);
    }*/
    
    render(){

        console.log('render test');

        let elements = this.getElementToRender();

        return (

            <div className={classes.Test}>

                { elements }

            </div>
            
        );
    }

    getElementToRender = () => {

        if(this.props.isLoading){
            return (
                <p>Loading...</p>
            );
        }

        if(this.props.data === null){
            return (
                <>
                    <button
                        className={classes.Button}
                        onClick={this.props.getData}
                    >Get post data.</button>

                    <p>No data</p>
                </>
            );
        }

        return (
            <>
                <p><span>{ this.props.data.name }</span>: <span>{ this.props.data.value }</span></p>
                <button
                    className={classes.Button}
                    onClick={this.props.clearData}
                >Clear data.</button>
            </>
        );

    };


}

const mapStateToProps = state => {

    return {
        data: state.test.postData,
        isLoading: state.test.isLoading
    };

};

const mapDispatchToProps = dispatch => {
    return {
        getData: event => {
            event.stopPropagation();
            event.preventDefault();

            return dispatch(requestTestData({name: "Valgala", value: "Forever"}));
        },
        clearData: () => dispatch(setTestData(null))
    }
};

Test.propTypes = {

    //hasControls: PropTypes.bool.isRequired,
 
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
        