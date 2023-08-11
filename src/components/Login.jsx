import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'





const PWD_REGEX = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,24}$/;
const EMA_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;







const Login = (e) => {



    const [email,setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

  
    
    const [errMsg, setErrMsg] = useState('');
   




  useEffect(() => {
      setValidEmail(EMA_REGEX.test(email));
  }, [email])



  useEffect(() => {
      setErrMsg('');
  }, [email, pwd])

  async function handleSubmit(e) {
    e.preventDefault();
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMA_REGEX.test(email);
    if ( !v2|| !v3) {
      setErrMsg("Invalid Entry");
      return;
    } 
    try{ 
          const userData = { email:email, password:pwd}
             await fetch('https://goldblv.com/api/hiring/tasks/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
              })
              .then((res) => {
                if (res.status === 200) {
                  localStorage.setItem('email', userData.email)
                  window.location.href='/Wellcome'
                  return res;
                } else {
                  throw new Error()
                }
                })
                
            
          }
          catch(error) {
            console.error('Error:', error)
          }

}


 
  return (
    <>
       <form onSubmit={handleSubmit} className="register-form form-wraper ">
     
          <div className="form-title">
            <h2>Login </h2>
            

          </div>
          
           
             <div className="input-wraper">
                <input placeholder='Email' type="email"
                    id="email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}/>
                <i className="bx bxs-envelope "></i>
                {emailFocus && email && !validEmail &&(
                <span className='err-message' >Email is not valid! Please enter a correct email address</span>)
                }

            </div>
            <div className="input-wraper">
                
               <input   placeholder="Password" type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    />
                    <i className="bx bxs-lock"></i>
                    {pwdFocus && pwd && !validPwd &&(<span className='err-message'>
                  Password cannot have less than eight characters Must be numbers and special characters !
                  </span>)
                 }
            </div>
          

          <div className="action-wraper">
            <button className="action-button "  type={'submit'} value={"login"}>
            Login
            <i className='bx bxs-chevrons-right' ></i>  
            </button>   
            </div>
          <div className="link">
            <a href="#" >Forget Password</a>
          </div>
</form>
    </ >
  )
}

export default Login
