import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
     e.preventDefault();
    axios
      .post('http://localhost:3030/login', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === 'Success') {
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
  };

  //Password Eye
  const [eye, setEye] = useState('password');
  
  return (
    <>
      <div className='select-none flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 md:mb-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-auto'
            src={logo}
            alt='Your Company'
          />
          <h2 className='mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>
        <div className='mt-0 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            onSubmit={handleSubmit}
            className='space-y-6'
            action='#'
            method='POST'
          >
            <div></div>
            <button
              aria-label='Continue with google'
              className='justify-center focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10'
            >
              <svg
                width='19'
                height='20'
                viewBox='0 0 19 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z'
                  fill='#4285F4'
                />
                <path
                  d='M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z'
                  fill='#34A853'
                />
                <path
                  d='M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z'
                  fill='#FBBC05'
                />
                <path
                  d='M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z'
                  fill='#EB4335'
                />
              </svg>
              <p className='text-base font-medium ml-4 text-gray-700'>
                Continue with Google
              </p>
            </button>
            <button
              aria-label='Continue with github'
              className='justify-center focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4'
            >
              <svg
                width='21'
                height='20'
                viewBox='0 0 21 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.1543 0C4.6293 0 0.154298 4.475 0.154298 10C0.153164 12.0993 0.813112 14.1456 2.04051 15.8487C3.26792 17.5517 5.00044 18.8251 6.9923 19.488C7.4923 19.575 7.6793 19.275 7.6793 19.012C7.6793 18.775 7.6663 17.988 7.6663 17.15C5.1543 17.613 4.5043 16.538 4.3043 15.975C4.1913 15.687 3.7043 14.8 3.2793 14.562C2.9293 14.375 2.4293 13.912 3.2663 13.9C4.0543 13.887 4.6163 14.625 4.8043 14.925C5.7043 16.437 7.1423 16.012 7.7163 15.75C7.8043 15.1 8.0663 14.663 8.3543 14.413C6.1293 14.163 3.8043 13.3 3.8043 9.475C3.8043 8.387 4.1913 7.488 4.8293 6.787C4.7293 6.537 4.3793 5.512 4.9293 4.137C4.9293 4.137 5.7663 3.875 7.6793 5.163C8.49336 4.93706 9.33447 4.82334 10.1793 4.825C11.0293 4.825 11.8793 4.937 12.6793 5.162C14.5913 3.862 15.4293 4.138 15.4293 4.138C15.9793 5.513 15.6293 6.538 15.5293 6.788C16.1663 7.488 16.5543 8.375 16.5543 9.475C16.5543 13.313 14.2173 14.163 11.9923 14.413C12.3543 14.725 12.6673 15.325 12.6673 16.263C12.6673 17.6 12.6543 18.675 12.6543 19.013C12.6543 19.275 12.8423 19.587 13.3423 19.487C15.3273 18.8168 17.0522 17.541 18.2742 15.8392C19.4962 14.1373 20.1537 12.0951 20.1543 10C20.1543 4.475 15.6793 0 10.1543 0Z'
                  fill='#333333'
                />
              </svg>
              <p className='text-base font-medium ml-4 text-gray-700'>
                Continue with Github
              </p>
            </button>
            <button
              aria-label='Continue with twitter'
              className='justify-center focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M22.1623 5.656C21.3989 5.9937 20.5893 6.21548 19.7603 6.314C20.634 5.79144 21.288 4.96902 21.6003 4C20.7803 4.488 19.8813 4.83 18.9443 5.015C18.3149 4.34158 17.4807 3.89497 16.5713 3.74459C15.6618 3.59421 14.7282 3.74849 13.9156 4.18346C13.1029 4.61842 12.4567 5.30969 12.0774 6.1498C11.6981 6.9899 11.607 7.93178 11.8183 8.829C10.1554 8.74566 8.52863 8.31353 7.04358 7.56067C5.55854 6.80781 4.24842 5.75105 3.1983 4.459C2.82659 5.09745 2.63125 5.82323 2.6323 6.562C2.6323 8.012 3.3703 9.293 4.4923 10.043C3.82831 10.0221 3.17893 9.84278 2.5983 9.52V9.572C2.5985 10.5377 2.93267 11.4736 3.54414 12.2211C4.15562 12.9685 5.00678 13.4815 5.9533 13.673C5.33691 13.84 4.6906 13.8647 4.0633 13.745C4.33016 14.5762 4.8503 15.3032 5.55089 15.8241C6.25147 16.345 7.09742 16.6338 7.9703 16.65C7.10278 17.3313 6.10947 17.835 5.04718 18.1322C3.98488 18.4294 2.87442 18.5143 1.7793 18.382C3.69099 19.6114 5.91639 20.2641 8.1893 20.262C15.8823 20.262 20.0893 13.889 20.0893 8.362C20.0893 8.182 20.0843 8 20.0763 7.822C20.8952 7.23017 21.6019 6.49702 22.1633 5.657L22.1623 5.656Z'
                  fill='#1DA1F2'
                />
              </svg>
              <p className='text-base font-medium ml-4 text-gray-700'>
                Continue with Twitter
              </p>
            </button>

            <div className='w-full flex items-center justify-between py-5'>
              <hr className='w-full bg-gray-400' />
              <p className='text-base font-medium leading-4 px-2.5 text-gray-400'>
                OR
              </p>
              <hr className='w-full bg-gray-400' />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-0 focus:border-gray-700'
                />
              </div>
            </div>
            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>

                {/* <div className='text-sm'>
                  <a
                    href='/'
                    className=' font-semibold text-gray-600 hover:text-gray-500'
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className='mt-2'>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id='password'
                  name='password'
                  type={eye ? 'password' : 'text'}
                  autoComplete='current-password'
                  required
                  className='px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-0 focus:border-gray-700'
                />
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember_me'
                  name='remember_me'
                  type='checkbox'
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                />
                <label
                  htmlFor='remember_me'
                  className='ml-2 block text-sm text-gray-900'
                >
                  Remember me
                </label>
              </div>
              <div className='text-sm'>
                <Link
                  to='/forgot-password'
                  className='font-medium text-gray-900 hover:text-gray-700'
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 mb-2'
              >
                Sign in
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Not yet Register?{' '}
            <Link
              to='/signup'
              className='font-semibold leading-6 text-gray-600 hover:text-gray-500'
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;


// import logo from '../assets/logo.png';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';
// // import {useHistory} from "react-router-dom";

// const Login = ({setLoginUser}) => {
  
//   // const history = useHistory()

//   const [user , setUser] = useState({
//     email:"",
//     password:"",    
//   })

//   const handleChange =(e)=>{
//      const{name, value} = e.target
//      setUser({...user , //... it is spread operator
//       [name]:value})  //to store the value we are giving in name - email ..
//   }

//   const login =()=>{
//     axios.post("http://localhost:3030/login", user) 
//     .then(res => {alert(res.data.message)
//      setLoginUser(res.data.user)
//   })
// };

//   return (
//     <>
//       {/* {console.log(user)} */}
//       <div className='select-none flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 md:mb-8'>
//         <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
//           <img
//             className='mx-auto h-10 w-auto'
//             src={logo}
//             alt='Your Company'
//           />
//           <h2 className='mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
//             Sign in to your account
//           </h2>
//         </div>
//         <div className='mt-0 sm:mx-auto sm:w-full sm:max-w-sm'>
//           <form
//             className='space-y-6'
//             action='#'
//             method='POST'
//           >
//             <div>
//               <button
//                 aria-label='Continue with google'
//                 className=' justify-center focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10'
//               >
//                 <svg
//                   width='19'
//                   height='20'
//                   viewBox='0 0 19 20'
//                   fill='none'
//                   xmlns='http://www.w3.org/2000/svg'
//                 >
//                   <path
//                     d='M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z'
//                     fill='#4285F4'
//                   />
//                   <path
//                     d='M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z'
//                     fill='#34A853'
//                   />
//                   <path
//                     d='M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z'
//                     fill='#FBBC05'
//                   />
//                   <path
//                     d='M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z'
//                     fill='#EB4335'
//                   />
//                 </svg>
//                 <p class='text-base font-medium ml-4 text-gray-700'>
//                   Continue with Google
//                 </p>
//               </button>
//               <button
//                 aria-label='Continue with github'
//                 className=' justify-center  focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4'
//               >
//                 <svg
//                   width='21'
//                   height='20'
//                   viewBox='0 0 21 20'
//                   fill='none'
//                   xmlns='http://www.w3.org/2000/svg'
//                 >
//                   <path
//                     d='M10.1543 0C4.6293 0 0.154298 4.475 0.154298 10C0.153164 12.0993 0.813112 14.1456 2.04051 15.8487C3.26792 17.5517 5.00044 18.8251 6.9923 19.488C7.4923 19.575 7.6793 19.275 7.6793 19.012C7.6793 18.775 7.6663 17.988 7.6663 17.15C5.1543 17.613 4.5043 16.538 4.3043 15.975C4.1913 15.687 3.7043 14.8 3.2793 14.562C2.9293 14.375 2.4293 13.912 3.2663 13.9C4.0543 13.887 4.6163 14.625 4.8043 14.925C5.7043 16.437 7.1423 16.012 7.7163 15.75C7.8043 15.1 8.0663 14.663 8.3543 14.413C6.1293 14.163 3.8043 13.3 3.8043 9.475C3.8043 8.387 4.1913 7.488 4.8293 6.787C4.7293 6.537 4.3793 5.512 4.9293 4.137C4.9293 4.137 5.7663 3.875 7.6793 5.163C8.49336 4.93706 9.33447 4.82334 10.1793 4.825C11.0293 4.825 11.8793 4.937 12.6793 5.162C14.5913 3.862 15.4293 4.138 15.4293 4.138C15.9793 5.513 15.6293 6.538 15.5293 6.788C16.1663 7.488 16.5543 8.375 16.5543 9.475C16.5543 13.313 14.2173 14.163 11.9923 14.413C12.3543 14.725 12.6673 15.325 12.6673 16.263C12.6673 17.6 12.6543 18.675 12.6543 19.013C12.6543 19.275 12.8423 19.587 13.3423 19.487C15.3273 18.8168 17.0522 17.541 18.2742 15.8392C19.4962 14.1373 20.1537 12.0951 20.1543 10C20.1543 4.475 15.6793 0 10.1543 0Z'
//                     fill='#333333'
//                   />
//                 </svg>

//                 <p class='text-base font-medium ml-4 text-gray-700'>
//                   Continue with Github
//                 </p>
//               </button>
//               <button
//                 aria-label='Continue with twitter'
//                 className=' justify-center  focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4'
//               >
//                 <svg
//                   width='24'
//                   height='24'
//                   viewBox='0 0 24 24'
//                   fill='none'
//                   xmlns='http://www.w3.org/2000/svg'
//                 >
//                   <path
//                     d='M22.1623 5.656C21.3989 5.9937 20.5893 6.21548 19.7603 6.314C20.634 5.79144 21.288 4.96902 21.6003 4C20.7803 4.488 19.8813 4.83 18.9443 5.015C18.3149 4.34158 17.4807 3.89497 16.5713 3.74459C15.6618 3.59421 14.7282 3.74849 13.9156 4.18346C13.1029 4.61842 12.4567 5.30969 12.0774 6.1498C11.6981 6.9899 11.607 7.93178 11.8183 8.829C10.1554 8.74566 8.52863 8.31353 7.04358 7.56067C5.55854 6.80781 4.24842 5.75105 3.1983 4.459C2.82659 5.09745 2.63125 5.82323 2.6323 6.562C2.6323 8.012 3.3703 9.293 4.4923 10.043C3.82831 10.0221 3.17893 9.84278 2.5983 9.52V9.572C2.5985 10.5377 2.93267 11.4736 3.54414 12.2211C4.15562 12.9685 5.00678 13.4815 5.9533 13.673C5.33691 13.84 4.6906 13.8647 4.0633 13.745C4.33016 14.5762 4.8503 15.3032 5.55089 15.8241C6.25147 16.345 7.09742 16.6338 7.9703 16.65C7.10278 17.3313 6.10947 17.835 5.04718 18.1322C3.98488 18.4294 2.87442 18.5143 1.7793 18.382C3.69099 19.6114 5.91639 20.2641 8.1893 20.262C15.8823 20.262 20.0893 13.889 20.0893 8.362C20.0893 8.182 20.0843 8 20.0763 7.822C20.8952 7.23017 21.6019 6.49702 22.1633 5.657L22.1623 5.656Z'
//                     fill='#1DA1F2'
//                   />
//                 </svg>

//                 <p class='text-base font-medium ml-4 text-gray-700'>
//                   Continue with Twitter
//                 </p>
//               </button>

//               <div class='w-full flex items-center justify-between py-5'>
//                 <hr class='w-full bg-gray-400' />
//                 <p class='text-base font-medium leading-4 px-2.5 text-gray-400'>
//                   OR
//                 </p>
//                 <hr class='w-full bg-gray-400  ' />
//               </div>

//               <label
//                 htmlFor='email'
//                 className='block text-sm font-medium leading-6 text-gray-900'
//               >
//                 Email address
//               </label>
//               <div className='mt-2'>
//                 <input
//                   onChange={handleChange}
//                   value={user.email}
//                   id='email'
//                   name='email'
//                   type='email'
//                   autoComplete='email'
//                   required
//                   className='px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
//                 />
//               </div>
//             </div>

//             <div>
//               <div className='flex items-center justify-between'>
//                 <label
//                   htmlFor='password'
//                   className='block text-sm font-medium leading-6 text-gray-900'
//                 >
//                   Password
//                 </label>
//                 <div className='text-sm'>
//                   <a
//                     href='/'
//                     className=' font-semibold text-gray-600 hover:text-gray-500'
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div className='mt-2'>
//                 <input
//                   onChange={handleChange}
//                   value={user.password}
//                   id='password'
//                   name='password'
//                   type='password'
//                   autoComplete='current-password'
//                   required
//                   className='px-3  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//               onClick={login}
//                 type='submit' 
//                 // type='button'
//                 className='flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 mb-2'
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p className='mt-10 text-center text-sm text-gray-500'>
//             Not yet Register?{' '}
//             <Link
//               to='/signup'
//               className='font-semibold leading-6 text-gray-600 hover:text-gray-500'
//             >
//               Create Account
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;


