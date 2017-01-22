import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Login from './login';

describe('Login component', () => {
  it('should render default text', () => {
    const login = TestUtils.renderIntoDocument(<Login/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(login, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
