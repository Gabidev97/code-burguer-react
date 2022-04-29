import styled from "styled-components"


export const Body = styled.body `
display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;
background-color: blueviolet;
height: 100vh;



`

export const Container = styled.div `
background: #0A0A10;
width: 500px;
height: 1000px;

align-items: center;
flex-direction: column;
border-radius: 10px;



`

export const Image  = styled.img `
display: flex;
justify-content: center;
width: 342px;
height: 354px;
margin: 0 auto;
padding-top: 20px;
padding-bottom: 30px ;


`


export const H1 = styled.h1 `
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
text-align: center;
color: #FFFFFF;
padding-bottom: 90px;
margin-top: 20px;


`




export const Button = styled.button `
width: 342px;
height: 68px;
background: rgba(255, 255, 255, 0.14);
font-style: normal;
font-weight: 300;
font-size: 17px;
line-height: 2px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
margin: 0 auto;
margin-top: 60px ;
padding-left: 140px;
cursor: pointer;
border: none;
letter-spacing: 1px;

&:hover {
    opacity: 0.5;
}

&:active {
    opacity: 0.5;

}


`

export const User = styled.li`
display: flex;
justify-content: center;
margin: 0 auto;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
width: 380px;
height: 110px;
padding-left: 30px;
justify-content: space-between;
padding-right: 15px;
margin-bottom: 15px;





p {
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
color: #FFFFFF;
display: flex;
text-transform:capitalize;




}

button {
    background: none;
    border: none;
    cursor: pointer;
}

.inputResponse{
    display: flex;
    flex-direction: column;
    justify-content: space-around; 

    
    

}


.request{
    display: flex;
    
  
   
}


`

