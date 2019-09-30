
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import Step from "./Step";

configure({adapter: new Adapter()});

describe("Step", () => {

    let wrapper = null;
    
    describe("Render and props test", () => {
    
        beforeEach(() => {
        
            wrapper = shallow(<Step />);
        
        });
    
        describe("", () => {
    
            test("", () => {
            
                
            
            });
    
        });
    
    });

});

        