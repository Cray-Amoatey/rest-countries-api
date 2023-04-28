import styled from "styled-components";

export const CountriesArea = styled.main`
  min-height: calc(100vh) - 90px;

  .countries {
    display: grid;
    width: 1024px;
    margin: auto;
    gird-template-columns: repear(4, 1fr);
    grid-gap: 30px;
  }

  @media (max-width: 1024px) {
    .countries {
      width: auto;
      padding: 0px 20px;
    }
  }

  @media(max-width: 768px){
    .countries {
        grid-template-columns: repeat(2, 1fr);
    }
  }
`;