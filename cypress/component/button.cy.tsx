import React from 'react';
import { mount } from 'cypress/react18';
import Button from '../../src/components/button';

describe('Button component test', () => {
  it('renders correctly with the given title', () => {
    mount(<Button active title="test-button" onClick={() => ({})} />);
    cy.contains('test-button').should('be.visible');
  });

  it('renders correctly', () => {
    mount(<Button title="Test Button" onClick={cy.stub()} active={false} testId="test-button" />);
    cy.get('[data-cy="test-button"]').should('contain', 'Test Button');
  });

  it('triggers onClick when clicked', () => {
    const onClickStub = cy.stub().as('clickHandler');
    mount(<Button title="Test Button" onClick={onClickStub} active={false} testId="test-button" />);
    cy.get('[data-cy="test-button"]').click();
    cy.get('@clickHandler').should('have.been.calledOnce');
  });

  it('has active styles when active prop is true', () => {
    mount(<Button title="Test Button" onClick={cy.stub()} active={true} testId="test-button" />);
    cy.get('[data-cy="test-button"]').should('have.class', 'ring-4').and('have.class', 'outline-none');
  });
});
