
import logo from '../assets/logo.png';
// import header from'./Header.module.css'; 
import {styled } from 'styled-components';

const HeaderContainer = styled.header`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;


 & img{
    width: 160px;
    height: 160px;
    object-fit: contain;
  }
  
 & h1{
    font-family: 'Pacifico', cursive;
    text-transform: uppercase;
    color: #9a3412;
    letter-spacing: 8px;
    font-weight: 600;
    
  }
  & p{
    text-align: center;
      color: #a39191;
      margin: 0;
  }
  

  @media (min-width:768px) {
    & {
        margin-bottom: 4rem;
    }
    & h1{
      font-size: 2.26rem;
    }

  }
`


export default function Header(){
    return (
        <HeaderContainer>
                <img src={logo} alt='logo'></img>
                <h1>ReactArt</h1>
                <p>A community of Artists and lovers.</p>
                {/* className={header.paragraph} */}
        </HeaderContainer>
    )
}