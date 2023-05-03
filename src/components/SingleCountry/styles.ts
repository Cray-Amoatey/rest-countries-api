import styled from 'styled-components';

export const CountryData = styled.div<{theme: string}>`
  display: grid;
  grid-tempelate-colums: repeat(2, 1fr);
  color: ${props => props.theme === 'light' ? '' : '#FFF'} ;
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
        color: ${props => props.theme === 'light' ? '#000' : '#FFF'} ;
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

  @media(min-width:768px) and (max-widht: 1023px){
    &{
      img {
        width: 340px;
        height: 200px;
      }

      .data-area {
        h1 {
          font-size: 14px
        }
        .data--firstArea {
          p, span {
            font-size: 14px
          }
        }
        .border--area {
          p, span, a{
            font-size: 14px
          }
        }
      }
    }
  }

  @media(max-width: 767px) {
    &{
      grid-template-columns: 1fr;

      img {
        width: 280px;
        height:180px;
        margin: auto
      }

      .data--area {
        width: 280px;
        margin: auto;
        margin-top: 30px;

        h1{
          font-size:
        }

        .data--firstArea {
          grid-template-columns: 1fr;
          p, span {
            font-size: 12px
          }
          .topLevel{
            margin-top: 40px;
          }
        }
        .border--area{
          .border{
            grid-template-column: (repeat 3, 1fr);
            p, span, a {
              font-size: 14px
            }
          }
        }
      }
    }
  }
`