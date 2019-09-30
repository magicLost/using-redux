
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import CirclesOnWater from "./CirclesOnWater";

configure({adapter: new Adapter()});

describe("CirclesOnWater", () => {

    let wrapper = null;
    
    describe("Render and props test", () => {
    
        beforeEach(() => {
        
            wrapper = shallow(<CirclesOnWater />);
        
        });
    
        describe("", () => {
    
            test("", () => {
            
                
            
            });
    
        });
    
    });

});

        