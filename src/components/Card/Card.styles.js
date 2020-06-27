import styled from 'styled-components';

const CardWrapper = styled.div`
  margin: 0rem;
  padding: 0rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .CardImage {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    background: url(${(props) => props.bg});
    height: 60rem;
    width: 100rem;
    background-size: cover;
    background-position: center;
    border-radius: 2rem;
    box-shadow: 0rem 0rem 3rem #000000;
  }
`;

export { CardWrapper };
