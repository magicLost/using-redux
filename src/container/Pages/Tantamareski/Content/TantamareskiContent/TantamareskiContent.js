import React from 'react';
import classes from './TantamareskiContent.module.scss';
import PropTypes from 'prop-types';
        
class TantamareskiContent extends React.PureComponent
{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
        
            <div className={classes.TantamareskiContent}>
                <h3>Тантамарески</h3>
            </div>
            
        );
    }
}

TantamareskiContent.propTypes = {

    //hasControls: PropTypes.bool.isRequired,
 
};

export default TantamareskiContent;
        