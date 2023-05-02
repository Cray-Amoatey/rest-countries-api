import styled from "styled-components";

export const CountriesArea = styled.main<{theme: string}>`
background-color:${props => props.theme === 'light' ? '' : 'rgb(32,45,67)'} ;
transition: all ease 0.2s;
  .countries {
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    grid-gap: 30px;
    width: 100%;
    max-width: 1200px; 
    margin: auto;
  }

 

  @media (max-width: 1024px) {
    .countries {
      width: auto;
      padding: 0px 20px;
    }
  }

  @media (max-width: 768px) {
    .countries {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 540px) {
    .countries {
      grid-template-columns: 1fr;
    }
  }
`;