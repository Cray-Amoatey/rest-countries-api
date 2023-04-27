import styled from 'styled-components';

export const CountryData = styled.div`
  display: grid;
  grid-tempelate-colums: repeat(2, 1fr);

  img {
    width: 440px;
    height: 300px;
  }

  .data--area {
    display: flex;
    flex-directon: column;
    justify-content: center;

    h1 {
      margin: 0px;
    }

    .data--firstArea {
      didplay: grid;
      grid-tempelate-colums: repeat(2, 1fr);
      margin-top: 20px;

      p{
        margin: 5px 0px;
        span{
            font-weight: bold
        }
      }

      .language {
        font-weight: normal;
        margin-right: 5px
      }
    }
    
    .border--area{
      margin-top: 20px;
      p{
        font-weight: bold
      }

      .bordes {
        display: grid;
        grid-template-colums: repeat(4, 1fr);
        grid-gap: 5px;
        width:100%
      }

      a{
        text-decoration: none;
        color:#000;
        display:flex;
        min-height:29px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size:13px;
        font-weight:300px;
        box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2)


      }

    }
  }
`