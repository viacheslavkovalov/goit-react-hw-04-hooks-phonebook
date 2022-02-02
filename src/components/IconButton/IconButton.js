import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <StyledIconButton onClick={onClick} {...allyProps}>
    {children}
  </StyledIconButton>
);

const StyledIconButton = styled.button`
  position: absolute;
  top: 7.5px;
  left: 7.5px;
  margin: 0;
  padding: 10px;
  border: none;
  border-radius: 50%;
  color: white;
  font: inherit;
  background-color: rgb(57, 133, 168);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 250ms cubic-bezier(0.2, 0, 0.7, 1);
  &:hover {
    transform: rotate(45deg);
  }
`;

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
