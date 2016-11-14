import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import ReactDom from 'react-dom';
import React from 'react';
import Weather from '../weather';

let component = null;

describe('Weather component', () => {
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
      <Weather />
    );
  });

  it('should mount', () => {
    expect(component).to.exist;
  });
});
