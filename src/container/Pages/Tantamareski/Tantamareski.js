import React from 'react';
import classes from './Tantamareski.module.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {formTypes} from "../../../data/form_types";
import FigureContent from "./Content/FigureContent/FigureContent";
import TantamareskiContent from "./Content/TantamareskiContent/TantamareskiContent";
import {HIDE_FEEDBACK_FORM, SET_ACTIVE_SECTION_INDEX, SHOW_FEEDBACK_FORM} from "../../../store/actions/tantamareski";
import {SET_HIDDEN_FIELDS} from "../../../store/actions/feedBackForm";
import Modal from "../../../component/UI/Modal/Modal";
import CloseButton from "../../../component/UI/CloseButton/CloseButton";
import TantamareskiModalFormsManager from "../../TantamareskiModalFormsManager/TantamareskiModalFormsManager";
import { toolbarItemsArray } from "../../../data/tantamareski_data";


class Tantamareski extends React.PureComponent
{

    html = null;
    body = null;

    isTantamareskiSectionCreated = false;
    isContactsSectionCreated = false;

    mainSectionClasses = classes.Section;
    tantamareskiSectionClasses = classes.Section;
    contactsSectionClasses = classes.Section;

    constructor(props){
        super(props);

        this.html = document.querySelector("html");
        this.body = document.body;
    }

    //SECTIONS
    toolBarButtonClick = (index) => {

        if(this.props.activeSectionIndex !== index){

            if(index === 0 && !this.isTantamareskiSectionCreated){

                this.isTantamareskiSectionCreated = true;

            }

            if(index === 2 && !this.isContactsSectionCreated){

                this.isContactsSectionCreated = true;

            }

            this.setClassesByActiveIndex(index, this.props.activeSectionIndex);

            this.html.scrollTop = 0;

            this.props.setActiveSectionIndex(index);
        }


    };

    decreaseSectionIndex = (event) => {

        if(this.props.activeSectionIndex > 0){

            const newIndex = this.props.activeSectionIndex - 1;

            if(newIndex === 0 && !this.isTantamareskiSectionCreated){

                this.isTantamareskiSectionCreated = true;

            }

            this.setClassesByActiveIndex(newIndex, this.props.activeSectionIndex);

            this.html.scrollTop = 0;

            this.props.setActiveSectionIndex(newIndex);

        }

    };

    increaseSectionIndex = (event) => {

        if(this.props.activeSectionIndex < 2){

            const newIndex = this.props.activeSectionIndex + 1;

            if(newIndex === 2 && !this.isContactsSectionCreated){

                this.isContactsSectionCreated = true;

            }

            this.setClassesByActiveIndex(newIndex, this.props.activeSectionIndex);

            this.html.scrollTop = 0;

            this.props.setActiveSectionIndex(newIndex);

        }

    };


    //FORMS
    onShowCallMeForm = () => {
        this.props.onShowFeedBackForm(formTypes.CALL_ME);
    };

    onShowCallMeFormWithSample = (photoName) => {
        this.props.setFeedBackFormHiddenFields({name: 'photo', value: photoName});
        this.props.onShowFeedBackForm(formTypes.CALL_ME_WITH_SAMPLE);
    };

    onShowCalcTantamareskiPriceForm = () => {
        this.props.onShowFeedBackForm(formTypes.CALC_TANTAMARESKI_PRICE);
    };
    
    render(){

        return (
        
            <div className={classes.Tantamareski}>

                <header>

                    <div className={classes.Switcher}>

                        <button className={classes.Button} onClick={this.decreaseSectionIndex}>Prev</button>
                        <h4 className={classes.Title}>{ toolbarItemsArray[this.props.activeSectionIndex] }</h4>
                        <button className={classes.Button} onClick={this.increaseSectionIndex}>Next</button>

                    </div>

                </header>

                <main>

                    <div>

                        <button onClick={() => { this.onShowCallMeForm(); }}>Show call me form</button>
                        <button onClick={() => { this.onShowCallMeFormWithSample('super_photo.jpeg'); }}>Show call me form with sample</button>
                        <button onClick={() => { this.onShowCalcTantamareskiPriceForm(); }}>Show calc tantamareski price form</button>

                    </div>

                    <div
                        className={this.mainSectionClasses}
                        style={(this.props.activeSectionIndex !== 1) ? { display: 'none'} : null}
                    >

                        <FigureContent/>

                    </div>

                    { this.isTantamareskiSectionCreated &&
                    <div
                        className={this.tantamareskiSectionClasses}
                        style={(this.props.activeSectionIndex !== 0) ? { display: 'none'} : null}
                    >

                        <TantamareskiContent/>

                    </div>
                    }

                    { this.isContactsSectionCreated &&
                    <div
                        className={this.contactsSectionClasses}
                        style={(this.props.activeSectionIndex !== 2) ? { display: 'none'} : null}
                    >

                        <TantamareskiContent/>

                    </div>
                    }

                </main>

                <Modal show={this.props.isShowFeedBackForm} backdropClickHandler={this.props.closeFeedBackForm}>

                    <CloseButton clickHandler={this.props.closeFeedBackForm}/>

                    <TantamareskiModalFormsManager
                        urlCallMeForm={'http://public.local/call_me'}
                        urlCallMeFormWithSample={'http://public.local/call_me_sample'}
                        successOKButtonClickHandler={this.props.closeFeedBackForm}
                    />

                </Modal>

            </div>
            
        );
    }

    setClassesByActiveIndex = (activeIndex, prevIndex) => {

        switch(activeIndex){

            case 1:

                if(prevIndex === 0){

                    this.mainSectionClasses = [ classes.Section, classes.AnimationMoveFromRightToCenter ].join(' ');
                    this.tantamareskiSectionClasses = classes.Section;
                    this.contactsSectionClasses = classes.Section;

                }else{

                    this.mainSectionClasses = [ classes.Section, classes.AnimationMoveFromLeftToCenter ].join(' ');
                    this.tantamareskiSectionClasses = classes.Section;
                    this.contactsSectionClasses = classes.Section;

                }

                break;

            case 0:

                this.mainSectionClasses = classes.Section;
                this.tantamareskiSectionClasses = [ classes.Section, classes.AnimationMoveFromLeftToCenter ].join(' ');
                this.contactsSectionClasses = classes.Section;
                break;

            case 2:
                this.mainSectionClasses = classes.Section;
                this.tantamareskiSectionClasses = classes.Section;
                this.contactsSectionClasses = [ classes.Section, classes.AnimationMoveFromRightToCenter ].join(' ');
                break;

            default: console.error("no implementation for index == " + activeIndex);

        }

    };


}

const mapStateToProps = state => {

    return {

        activeSectionIndex: state.tantamareski.activeSectionIndex,

        isTantamareskiSectionCreated: state.tantamareski.isTantamareskiSectionCreated,
        isContactsSectionCreated: state.tantamareski.isContactsSectionCreated,

        isShowFeedBackForm: state.tantamareski.isShowFeedBackForm

    }
};

const mapDispatchToProps = dispatch => {

    return {

        setFeedBackFormHiddenFields: (hiddenFields) => dispatch({
            type: SET_HIDDEN_FIELDS,
            hiddenFields: hiddenFields
        }),
        onShowFeedBackForm: (formType) => dispatch({
            type: SHOW_FEEDBACK_FORM,
            feedBackFormType: formType
        }),
        closeFeedBackForm: () => dispatch({
            type: HIDE_FEEDBACK_FORM
        }),
        setActiveSectionIndex: (activeSectionIndex) => dispatch({
            type: SET_ACTIVE_SECTION_INDEX,
            activeSectionIndex: activeSectionIndex
        })

    }

};

Tantamareski.propTypes = {

    //hasControls: PropTypes.bool.isRequired,
 
};

export default connect(mapStateToProps, mapDispatchToProps)(Tantamareski);
        