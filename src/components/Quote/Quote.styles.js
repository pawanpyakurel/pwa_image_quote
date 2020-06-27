import styled from 'styled-components';

import { colors } from '../../config/theme';

const QuoteWrapper = styled.p`
  margin: 0rem;
  padding: 2rem 0;
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: ${colors.text};
  width: 100%;
  max-width: 50rem;
  z-index: 1;
  align-self: center;
  border-top: solid 1px;
  border-bottom: solid 1px;
  text-align: center;
  :after {
    position: absolute;
    content: '”';
    color: rgba(255, 255, 255, 1);
    font-size: 10rem;
    line-height: 0;
    bottom: -26px;
    right: 0px;
    text-shadow: 0px 0px 3px black;
  }
  h1 {
    position: relative;
    color: ${colors.text};
    font-size: 3rem;
    font-weight: 800;
    line-height: 1;
    margin: 0;
    text-shadow: 0px 0px 3px black;

    @media all and (min-width: 600px) {
      font-size: 4rem;
    }
  }

  h4 {
    text-align: right;
    text-transform: capitalize;
    position: relative;
    color: ${colors.textSecondary};
    font-size: 2rem;
    font-weight: bold;
    line-height: 1;
    margin: 0;
    padding-top: 20px;
    z-index: 1;
    text-shadow: 0px 0px 3px black;
  }
`;

export { QuoteWrapper };
