import React from 'react';
import classes from './MaterialUI.module.scss';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import Typography from '@material-ui/core/Typography';
        
class MaterialUI extends React.PureComponent
{

    useStyles = null;

    state = {
        isShowModal: false
    };

    constructor(props){

        super(props);

        this.useStyles = makeStyles({
            card: {
                maxWidth: 345,
            },
            media: {
                height: 140,
            },
        });

    }

    onShowFormButtonClick = (event) => {

        this.setState(prevState => {

            if(prevState.isShowModal === false){
                return { isShowModal: true };
            }

            return null;

        });

    };

    onHideFormButtonClick = (event) => {

        this.setState(prevState => {

            if(prevState.isShowModal === false){
                return { isShowModal: true };
            }

            return null;

        });

    };

    render(){

        const UiClasses = this.useStyles();

        return (
        
            <div className={classes.MaterialUI}>

                <Button variant="outlined" color="primary">
                    Show form.
                </Button>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.isShowModal}

                >
                    <Card className={UiClasses.card}>
                        <CardActionArea>
                            <CardMedia
                                className={UiClasses.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Close
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Modal>

            </div>
            
        );
    }
}

MaterialUI.propTypes = {

    //hasControls: PropTypes.bool.isRequired,
 
};

export default MaterialUI;
        