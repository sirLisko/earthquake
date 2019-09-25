import styled from '@emotion/styled/macro';

import theme from './theme';

export const StyledButton = styled.button`
  display: inline-block;
  min-width: 4.2em;
  padding: 0.55em;
  border: 0;
  margin: 0.55em 0;
  background: ${theme.colors.alternate};
  color: #fff;
  font-size: 1.125em;
  text-align: center;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.4s opacity;
  &:hover {
    background: ${theme.colors.alternate};
    opacity: 1;
    text-decoration: none;
  }
`;
