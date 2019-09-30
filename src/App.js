import React from 'react';
import './App.css';
//import Stepper from "./container/Stepper/Stepper";
//import Button, {button_type} from "./component/M_Button/M_Button";
//import CirclesOnWater from "./component/CirclesOnWater/CirclesOnWater";
//import MaterialUI from "./container/MaterialUI/MaterialUI";
//import Homepage from "./container/Pages/Homepage/Homepage";
import Tantamareski from "./container/Pages/Tantamareski/Tantamareski";


function App() {
  return (
    <div className="App">

       {/* <div style={{width: '800px', margin: '100px auto', backgroundColor: '#f3f3f3'}}>
            <Stepper
                successMessage={"Congratulations! You made it..."}
            />

        </div>

        <Button type={button_type.TEXT} label={"Text"}/>
        <Button type={button_type.OUTLINED} label={"Outlined"}/>
        <Button type={button_type.CONTAINED} label={"Contained"}/>

        <div style={{position: 'relative', width: '800px', margin: '100px auto'}}>

            <CirclesOnWater isAnimation={false}/>

        </div>*/}

        <Tantamareski/>


    </div>
  );
}

export default App;
