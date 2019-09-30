import React from 'react';
import classes from './FigureContent.module.scss';
import PropTypes from 'prop-types';
        
class FigureContent extends React.PureComponent
{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
        
            <div className={classes.FigureContent}>
                <h3>Ростовые фигуры</h3>
            </div>
            
        );
    }
}

FigureContent.propTypes = {

    //hasControls: PropTypes.bool.isRequired,
 
};

export default FigureContent;
        