import { useState } from 'react'

import Button from './Button';
import CustomInput from './Input';


export default function Inputs(){
    const [email,setEmail] = useState('');
    const [password,setPasswrod] = useState('');
   
    const [isSubmitted,setIsSubmitted]= useState(false);
   
    const emailNotValid =isSubmitted && !email.includes('@');
    const passwordNotValid =isSubmitted && !(password.trim().length>4&&password.trim().length<10);
    
    return (
        <main>
            <div id="inputs" className=' max-w-md mx-auto my-10 shadow-md bg-gradient-to-b from-stone-700 to-stone-800  w-full px-4 py-8 rounded-xl'>
                <div className='flex flex-col gap-2 mb-6 w-full'>
               
                    <CustomInput 
                        label='EMAIL' 
                        invalid={emailNotValid} 
                         type='email'  
                         value={email} 
                         onChange={(e)=>setEmail(e.target.value)}/>
                   
                
                       <CustomInput 
                        label='PASSWORD' 
                        invalid={passwordNotValid} 
                         type='password'  
                         value={password} 
                         onChange={(e)=>setPasswrod(e.target.value)}/>
        
                </div>
              

                <div className='w-full flex justify-end items-center gap-3'>
                    <button className=' text-amber-400 hover:text-amber-500' >Create a new account</button>
                    <Button onClick={(e)=>{  
                      setIsSubmitted(true)}}>SIGN IN</Button>
                </div>
            </div>
        </main>
    )
}