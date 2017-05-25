import { expect } from 'chai';
import React from 'react';
import sinon from 'sinon';
import ace from 'brace';
import { mount } from 'enzyme';
import SplitEditor from '../../src/split.jsx';
import brace from 'brace'; // eslint-disable-line no-unused-vars

describe('Split Component', () => {

  // Required for the document.getElementById used by Ace can work in the test environment
  const domElement = document.getElementById('app');
  const mountOptions = {
    attachTo: domElement,
  };

  describe('General', () => {

    it('should render without problems with defaults properties', () => {
      const wrapper = mount(<SplitEditor />, mountOptions);
      expect(wrapper).to.exist;
    });
  });
});