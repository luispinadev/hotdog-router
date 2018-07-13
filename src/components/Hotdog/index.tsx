// Hotdog art by https://dribbble.com/shots/3275208-Pure-CSS-Hotdog
import * as React from 'react'

import './Hotdog.css'

// -----------------------------------------------------------------------------
// Styled
// -----------------------------------------------------------------------------

const StyledBread: React.StatelessComponent = ({ children }) => (
  <React.Fragment>
    <div className="hotdog-bread hotdog-left" />
    {children}
    <div className="hotdog-bread hotdog-right" />
  </React.Fragment>
)

const StyledWurst: React.StatelessComponent = ({ children }) => (
  <div className="hotdog-hotdog">{children}</div>
)

const StyledMustard: React.StatelessComponent = () => (
  <div className="hotdog-mustard" />
)

const StyledHover: React.StatelessComponent<{
  animated?: boolean
  shadow?: boolean
}> = ({ animated, children, shadow }) => (
  <div className="hotdog-flex-container">
    <div className="hotdog-unit">
      <div
        className={`hotdog-hotdog-unit${animated ? ' hotdog-animated' : ''}`}
      >
        {children}
      </div>
      {shadow && <div className="hotdog-shadow" />}
    </div>
  </div>
)

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------

export const Hotdog: React.StatelessComponent = () => (
  <StyledHover shadow animated>
    <StyledBread>
      <StyledWurst>
        <StyledMustard />
      </StyledWurst>
    </StyledBread>
  </StyledHover>
)

export const Bread: React.StatelessComponent = () => (
  <StyledHover>
    <StyledBread>
      <div style={{ width: '1px', margin: '0 12px' }} />
    </StyledBread>
  </StyledHover>
)

export const Mustard: React.StatelessComponent = () => (
  <StyledHover>
    <div
      style={{
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        width: '40px',
        height: '80px',
      }}
    >
      <StyledMustard />
    </div>
  </StyledHover>
)

export const Wurst: React.StatelessComponent = () => (
  <StyledHover>
    <StyledWurst />
  </StyledHover>
)
