import styled from "styled-components";

export const CountriesArea = styled.main<{ theme: string }>`
  background-color: ${(props) =>
    props.theme === "light" ? "" : "rgb(32,45,67)"};
  transition: all ease 0.2s;

  .countries {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    width: 100%;
    max-width: 1200px;
    margin: auto;

    .loading {
      min-height: 100vh;
    }
  }

  .loading {
    color: ${(props) => (props.theme === "light" ? "" : "#FFF")};
  }

  .pagination {
    display: flex;
    list-style: none;
    justify-content: center;
    margin: 0px;
    padding: 20px 0px;

    button {
      height: 40px;
      width: 40px;
      background-color: ${(props) =>
        props.theme === "light" ? "#FFF" : "rgb(43, 55, 67)"};
      color: ${(props) => (props.theme === "light" ? "#000" : "#FFF")};
      border: none;
      box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);
      margin: 0px 5px;
      cursor: pointer;
    }

    .active {
      font-weight: bold;
    }
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