import styled from "styled-components";

export const Header = styled.header<{ theme: string }>`
height:90px;
background-color:$ {props => props.theme === 'light'? '' : 'rgb(43, 55,67)'};
color: ${(props) => (props.theme === "light" ? "" : "#FFF")};
transition: all ease 0.2s;
box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);


.container {
    display: flex;
    width: 1200px;
    margin: auto;
    justify-content: space-between;
    align-itmes: center;
    color:black;
    

    p{
        cursor: pointer;
         display: flex;
         flex-direction: row;
         align-items: center;
        }
        
        .moonOutline{
            margin-right: 10px;
            margin-top: 5px; 
           background: transparent;
    }
    img{
        filter:${(props) => (props.theme === "dark" ? "invert(1)" : "none")}
        
    }
}

@media(max-width: 1024px){
    &{
        padding: 0px 20px;

        .container{
            width: auto
        }
    }
}
@media(max-width: 767px){
    .container{
        height: 100%;
        h1 {
            font-size: 17px
        }
        p{
            font-size: 14px
        } 
    }
}

@media(max-width:425px){
    h1{
        align-item:center;
        margin-top: 35px
    }

}
 `;