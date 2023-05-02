import styled from "styled-components";

export const CountryPage = styled.main`
  height: calc(100vh - 90px);

  .container {
    width: 1024px;
    margin: auto;
    padding: 40px 0px;
  }

  .loading {
    min-height: 100vh;
  }

  .back--button {
    text-decoration:none;
    color:#000;
    margin-botton: 30px;
    display:flex;
    justify-content: center
    align-items: center
    width: 120px;
    height: 40px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.2)
  }

  @media(min-width: 768px) and (max-width: 1024px){
    &{
      padding: 20px
    }
    .container{
      width: auto
    }
  }
  @media(max-width:767px){
    &{
      height: auto;
      padding: 20px
    }
    .container {
      width: auto
    }
  }
`;
