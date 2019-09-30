
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import MInput from "./MInput";

configure({adapter: new Adapter()});

describe("MInput", () => {

    let wrapper = null;
    
    describe("Render and props test", () => {
    
        beforeEach(() => {
        
            wrapper = shallow(<MInput />);
        
        });
    
        describe("", () => {
    
            test("", () => {
            
                
            
            });
    
        });
    
    });

});

        