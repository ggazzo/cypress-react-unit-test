import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'cypress-react-unit-test'

const RenderInPortal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body)
}

const MyComponent = () => (
  <div id="component">
    <p>Hello World!</p>
    <RenderInPortal>
      <p> I am in portal </p>
    </RenderInPortal>
  </div>
)

describe('Portals', () => {
  it('renders content inside the portal', () => {
    mount(<MyComponent />)

    cy.contains('#component', 'Hello World!')
    cy.get('#component').should('not.contain', 'I am in portal')
    cy.get('body').contains('I am in portal')
  })
})
