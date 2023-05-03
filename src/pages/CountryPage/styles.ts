import styled from "styled-components";

export const CountryPage = styled.main<{theme: string}>`
  height: calc(100vh - 90px);
  background-color: ${props => props.theme === 'light' ? '#FFF' : 'rgb(32,45, 54)'};
  transition: all ease 0.2s;
  .container {
    width: 1024px;
    margin: auto;
    padding: 40px 0px;
  }

  .loading {
    min-height: 100vh;
    color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
  }

  .back--button {
    text-decoration:none;
    color:${props => props.theme === 'light' ? '#000' : '#FFF'};
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
