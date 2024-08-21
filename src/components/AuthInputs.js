import { useState } from 'react'

import {styled} from 'styled-components';
import Button from './Button';
import CustomInput from './Input';

const ControlContainer=styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  padding:1rem 1.5rem;
`


const ActionContainer =styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding:1rem 1.5rem;


`

const TextButton= styled.button`

  background-color: transparent;
  border: none;
  color: #f0b322;

  &:hover{
    color: #f0920e;
  }
`

export default function Inputs(){
    const [email,setEmail] = useState('');
    const [password,setPasswrod] = useState('');
   
    const [isSubmitted,setIsSubmitted]= useState(false);
   
    const emailNotValid =isSubmitted && !email.includes('@');
    const passwordNotValid =isSubmitted && !(password.trim().length>4&&password.trim().length<10);
    
    return (
        <main>
            <form id='inputs' onSubmit={(event)=>{
                event.preventDefault();
                setIsSubmitted(true);
            }}>
                <ControlContainer>
              
                        {/*  일부클래스는 정적으로 추가하고 일부 클래스는 조건에따라 동적으로 추가하는 방법 */}
                        {/* <p>
                          <Label $invalid={emailNotValid}>EMAIL</Label>
                          className={ `label ${emailNotValid? 'invalid' :''}`}
                          <Input
                          $invalid={emailNotValid} 
                          type='email'  
                          value={email} 
                          onChange={(e)=>setEmail(e.target.value)}/>    
                          className={ emailNotValid? 'invalid' :''}
                        </p> */}
                      
                  
                    <CustomInput 
                        label='EMAIL' 
                        invalid={emailNotValid} 
                         type='email'  
                         value={email} 
                         onChange={(e)=>setEmail(e.target.value)}/>
        
                    

                      {/* <p>
                          <Label $invalid={passwordNotValid}>PASSWORD</Label>
                        className={ passwordNotValid? 'invalid' :''}
                        <Input 
                        $invalid={passwordNotValid}
                        type='password' 
                        value={password} onChange={(e)=>setPasswrod(e.target.value)}/>    
                         className={ passwordNotValid? 'invalid' :''}
                      </p> */}
                       
                       <CustomInput 
                        label='PASSWORD' 
                        invalid={passwordNotValid} 
                         type='password'  
                         value={password} 
                         onChange={(e)=>setPasswrod(e.target.value)}/>
        
                </ControlContainer>
              

                <ActionContainer>
                    <TextButton >Create a new account</TextButton>
                    {/* className='text-button' */}
                    <Button>SIGN IN</Button>
                    {/* className='button' */}
                </ActionContainer>
            </form>
        </main>
    )
}