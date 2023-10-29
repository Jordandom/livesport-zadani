import React from 'react';
import { mount } from 'cypress/react18';
import TestResultsComponent from '../../src/components/test-results';
import { QueryClientProvider } from '../../src/utils/data-fetching/react-query';
import mockedData from '../fixtures/mocked-results-data.json';

const URL =
  'https://s.livesport.services/api/v2/search?lang-id=1&project-id=602&project-type-id=1&sport-ids=1,2,3,4,5,6,7,8,9&type-ids=1%2C2%2C3%2C4&q=aa';

describe('useResultsQuery Hook', () => {
  it('shows loading, then data', () => {
    cy.intercept('GET', URL, {
      body: {
        mockedData,
      },
      delay: 500, // optional delay to simulate network latency
    }).as('fetchResults');

    mount(
      <QueryClientProvider>
        <TestResultsComponent />
      </QueryClientProvider>
    );

    cy.get('[data-cy="loading"]').should('be.visible');
    cy.wait('@fetchResults');
    cy.get('[data-cy="data"]').should('be.visible');
    cy.get('[data-cy="loading"]').should('not.exist');
  });
});
