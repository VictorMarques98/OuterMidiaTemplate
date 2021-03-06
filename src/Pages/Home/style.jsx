import styled,{createGlobalStyle} from 'styled-components'

export const Loader = styled.div`
height:100%;
width:100%;


.pai-loader {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;

  img,span{
    position: absolute;
    top: calc(50vh - 25px);
    left: calc(50vw - 151px);
    width: 300px;
  }

  span{
    height:50px;
    width:306px;
  }
}

.flex-center {
  height: 100%;
  background-color: #ffffff;
}

@keyframes dashAnimation {
  to {
    stroke-dashoffset: 0px;
  }
}

@keyframes placeHolderShimmer{
  0%{
      background-position: -500px 0px;
  }
  100%{
      background-position: 500px 0px;
  }
}

.animated-background {
  animation-name: placeHolderShimmer;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.55, 0.06, 0.68, 0.19);
  background: #f6f7f8;
  background: linear-gradient(-45deg, transparent 70%,white 15px, transparent );
  background-size: 500px 500px ;
}

`

export const Global = createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:"Raleway";

}

body{

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background:rgba(90, 90, 90);
  border-radius:5px;
}

::-webkit-scrollbar-track {
  background: black;
}

&:hover{
  ::-webkit-scrollbar-thumb {
  background: rgba(90, 90, 90);
  border-radius:5px;
  }
}
}
`

export const Default = styled.div`
display:flex;
flex-direction:column;
align-items:center;

@media(max-width:480px)
{
  width:100vw;
}

`

export const Footer = styled.footer`
height: 50px;
width:100%;
background-color: white;
order: 7;
display: flex;
padding: 0 90px;
justify-content: space-between;
align-items: center;

a{
text-decoration: none;
color: black;
transition: all 1s;
display:flex;
align-items: center;

  :hover {
    color: green;
  }

  i {
    margin-right: 5px;
  }

  img{
    margin-left: 10px;
    padding-bottom:5px;
  }
}

@media(max-width: 480px)
{
  height: max-content;
    flex-direction: column;
    padding: 15px;
    align-items: flex-start;

    a {
      margin-bottom: 10px;
    }
}
`

