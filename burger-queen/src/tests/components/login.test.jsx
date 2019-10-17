import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'; 
import PFooter from '../../components/pieces/PFooter.jsx';

describe('Footer Component', () => {
 
    it('has an p tag', () => {
			const component = document.createElement('div');    
			ReactDOM.render(<PFooter />, component);
			ReactDOM.unmountComponentAtNode(component);
      // var p = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'p');
    });
   
    // it('is wrapped inside a title class', () => {
    //  //Test here
    // })
})
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });