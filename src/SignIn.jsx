// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin component
// import { FaGoogle, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons

// function SignIn() {
//   const [loading, setLoading] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false); // State to toggle between sign-in and sign-up form
//   const [showEmailSignIn, setShowEmailSignIn] = useState(false); // State to toggle email sign-in fields
//   const navigate = useNavigate();

//   // Simulate async sign-in process (replace with actual logic)
//   const handleSignIn = (method) => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       alert(`${method} Sign-in Successful!`);
//       navigate('/dashboard'); // Redirect to dashboard after sign-in
//     }, 2000);
//   };

//   // Handle sign-up form submission
//   const handleSignUp = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       alert('Sign-up successful!');
//       navigate('/dashboard'); // Redirect to dashboard after sign-up
//     }, 2000);
//   };

//   // Handle GitHub Sign-In
//   const handleGitHubSignIn = () => {
//     setLoading(true);

//     // Replace with your GitHub OAuth Client ID
//     const GITHUB_CLIENT_ID = 'Ov23lig50mky1Fvq5vNZ';

//     // Redirect the user to GitHub's OAuth authorization page
//     const redirectUri = encodeURIComponent(window.location.origin + '/github/callback');
//     const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&scope=user`;

//     // Open GitHub's OAuth page in a new window or redirect
//     window.location.href = githubAuthUrl;
//   };

//   return (
//     <div className="bg-blue-500 h-screen flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-2xl w-full sm:w-96">
//         <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Intelliod</h1>

//         <p className="text-center text-gray-500 mb-6">
//           {isSignUp || showEmailSignIn ? 'Sign In' : 'Sign Up'} or{' '}
//           <span
//             onClick={() => {
//               setIsSignUp(!isSignUp);
//               setShowEmailSignIn(false); // Reset email sign-in state when toggling
//             }}
//             className="text-blue-600 cursor-pointer"
//           >
//             {isSignUp || showEmailSignIn ? 'Sign Up' : 'Sign In'}
//           </span>
//         </p>

//         {/* Show sign-up or sign-in form based on isSignUp state */}
//         {isSignUp ? (
//           <form onSubmit={handleSignUp} className="flex flex-col gap-4">
//             {/* Sign Up Form Fields */}
//             <input
//               type="text"
//               placeholder="First Name"
//               required
//               className="p-3 border-2 rounded-xl focus:outline-none"
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               required
//               className="p-3 border-2 rounded-xl focus:outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               className="p-3 border-2 rounded-xl focus:outline-none"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               className="p-3 border-2 rounded-xl focus:outline-none"
//             />

//             <button
//               type="submit"
//               className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all"
//               disabled={loading}
//             >
//               {loading ? 'Signing Up...' : 'Sign Up'}
//             </button>
//           </form>
//         ) : showEmailSignIn ? (
//           // Email Sign-In Form
//           <form className="flex flex-col gap-4">
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               className="p-3 border-2 rounded-xl focus:outline-none"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               className="p-3 border-2 rounded-xl focus:outline-none"
//             />
//             <div className="flex gap-4">
//               <button
//                 type="submit"
//                 className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all"
//                 disabled={loading}
//               >
//                 {loading ? 'Signing In...' : 'Sign In'}
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setShowEmailSignIn(false)} // Hide email sign-in form
//                 className="w-full py-3 px-6 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         ) : (
//           <div className="flex flex-col items-center gap-4">
//             {/* Google Sign-In Button */}
//             <GoogleLogin
//               onSuccess={(response) => {
//                 alert('Google sign-in successful');
//                 navigate('/dashboard');
//               }}
//               onError={() => {
//                 alert('Google sign-in failed');
//               }}
//               useOneTap
//               theme="filled_black"
//               text="continue_with"
//               render={(renderProps) => (
//                 <button
//                   onClick={renderProps.onClick}
//                   disabled={renderProps.disabled || loading}
//                   className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-[#4285F4] text-white font-semibold rounded-xl hover:bg-[#357ae8] transition-all"
//                 >
//                   <FaGoogle className="text-lg" /> Continue with Google
//                 </button>
//               )}
//             />

//             {/* GitHub Sign-In Button */}
//             <button
//               onClick={handleGitHubSignIn}
//               className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all"
//               disabled={loading}
//             >
//               <FaGithub className="text-lg" /> Continue with GitHub
//             </button>

//             {/* Email Sign-In Button */}
//             <button
//               onClick={() => setShowEmailSignIn(true)} // Open email sign-in fields
//               className="w-full py-3 px-6 flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all"
//               disabled={loading}
//             >
//               <FaEnvelope className="text-lg" /> Sign In with Email
//             </button>
//           </div>
//         )}

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             By signing in, you agree to our{' '}
//             <span className="text-blue-600 cursor-pointer">Terms & Conditions</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GoogleLogin } from '@react-oauth/google';
// import { FaGoogle, FaGithub, FaEnvelope } from 'react-icons/fa';
// import { auth } from '../src/firebase'; // Import Firebase authentication
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   GithubAuthProvider,
// } from 'firebase/auth';

// function SignIn() {
//   const [loading, setLoading] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [showEmailSignIn, setShowEmailSignIn] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   // Handle Email/Password Authentication
//   const handleAuth = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       if (isSignUp) {
//         await createUserWithEmailAndPassword(auth, email, password);
//         alert('Sign-up successful!');
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//         alert('Sign-in successful!');
//       }
//       navigate('/dashboard');
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle Google Sign-In
//   const handleGoogleSignIn = async () => {
//     setLoading(true);
//     try {
//       const provider = new GoogleAuthProvider();
//       await signInWithPopup(auth, provider);
//       alert('Google sign-in successful!');
//       navigate('/dashboard');
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle GitHub Sign-In
//   const handleGitHubSignIn = async () => {
//     setLoading(true);
//     try {
//       const provider = new GithubAuthProvider();
//       await signInWithPopup(auth, provider);
//       alert('GitHub sign-in successful!');
//       navigate('/dashboard');
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-blue-500 h-screen flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-2xl w-full sm:w-96">
//         <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Intelliod</h1>

//         <p className="text-center text-gray-500 mb-6">
//           {isSignUp ? 'Sign Up' : 'Sign In'} or{' '}
//           <span
//             onClick={() => {
//               setIsSignUp(!isSignUp);
//               setShowEmailSignIn(false);
//             }}
//             className="text-blue-600 cursor-pointer"
//           >
//             {isSignUp ? 'Sign In' : 'Sign Up'}
//           </span>
//         </p>

//         {/* Email Sign-In / Sign-Up Form */}
//         <form onSubmit={handleAuth} className="flex flex-col gap-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="p-3 border-2 rounded-xl focus:outline-none"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="p-3 border-2 rounded-xl focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all"
//             disabled={loading}
//           >
//             {loading ? (isSignUp ? 'Signing Up...' : 'Signing In...') : isSignUp ? 'Sign Up' : 'Sign In'}
//           </button>
//         </form>

//         <div className="flex flex-col items-center gap-4 mt-6">
//           {/* Google Sign-In Button */}
//           <button
//             onClick={handleGoogleSignIn}
//             className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-[#4285F4] text-white font-semibold rounded-xl hover:bg-[#357ae8] transition-all"
//             disabled={loading}
//           >
//             <FaGoogle className="text-lg" /> Continue with Google
//           </button>

//           {/* GitHub Sign-In Button */}
//           <button
//             onClick={handleGitHubSignIn}
//             className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all"
//             disabled={loading}
//           >
//             <FaGithub className="text-lg" /> Continue with GitHub
//           </button>
//         </div>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             By signing in, you agree to our{' '}
//             <span className="text-blue-600 cursor-pointer">Terms & Conditions</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
// import { auth } from '../src/firebase';
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   signInWithPopup,
//   GoogleAuthProvider,
//   GithubAuthProvider
// } from 'firebase/auth';

// function SignIn() {
//   const [loading, setLoading] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   // Handle Email/Password Sign-Up & Sign-In
//   const handleAuth = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       if (isSignUp) {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;

//         // Send Email Verification
//         await sendEmailVerification(user);
//         alert('Verification email sent! Please check your inbox.');

//       } else {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;

//         if (!user.emailVerified) {
//           alert('Please verify your email before signing in.');
//           return;
//         }
//         alert('Sign-in successful!');
//         navigate('/dashboard');
//       }
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Google Sign-In
//   const handleGoogleSignIn = async () => {
//     setLoading(true);
//     try {
//       const provider = new GoogleAuthProvider();
//       await signInWithPopup(auth, provider);
//       alert('Google sign-in successful!');
//       navigate('/dashboard');
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // GitHub Sign-In
//   const handleGitHubSignIn = async () => {
//     setLoading(true);
//     try {
//       const provider = new GithubAuthProvider();
//       await signInWithPopup(auth, provider);
//       alert('GitHub sign-in successful!');
//       navigate('/dashboard');
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-blue-500 h-screen flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-2xl w-full sm:w-96">
//         <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Intelliod</h1>

//         <p className="text-center text-gray-500 mb-6">
//           {isSignUp ? 'Sign Up' : 'Sign In'} or{' '}
//           <span onClick={() => setIsSignUp(!isSignUp)} className="text-blue-600 cursor-pointer">
//             {isSignUp ? 'Sign In' : 'Sign Up'}
//           </span>
//         </p>

//         {/* Email Sign-In / Sign-Up Form */}
//         <form onSubmit={handleAuth} className="flex flex-col gap-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="p-3 border-2 rounded-xl focus:outline-none"
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="p-3 border-2 rounded-xl w-full focus:outline-none"
//             />
//             <span
//               className="absolute top-3 right-3 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all"
//             disabled={loading}
//           >
//             {loading ? (isSignUp ? 'Signing Up...' : 'Signing In...') : isSignUp ? 'Sign Up' : 'Sign In'}
//           </button>
//         </form>

//         <div className="flex flex-col items-center gap-4 mt-6">
//           {/* Google Sign-In Button */}
//           <button
//             onClick={handleGoogleSignIn}
//             className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-[#4285F4] text-white font-semibold rounded-xl hover:bg-[#357ae8] transition-all"
//             disabled={loading}
//           >
//             <FaGoogle className="text-lg" /> Continue with Google
//           </button>

//           {/* GitHub Sign-In Button */}
//           <button
//             onClick={handleGitHubSignIn}
//             className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all"
//             disabled={loading}
//           >
//             <FaGithub className="text-lg" /> Continue with GitHub
//           </button>
//         </div>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             By signing in, you agree to our{' '}
//             <span className="text-blue-600 cursor-pointer">Terms & Conditions</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
// import { auth } from '../src/firebase';
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   signInWithPopup,
//   GoogleAuthProvider,
//   GithubAuthProvider
// } from 'firebase/auth';

// function SignIn() {
//   const [loading, setLoading] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   // Handle Email/Password Sign-Up & Sign-In
//   const handleAuth = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       if (isSignUp) {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;

//         // Send Email Verification
//         await sendEmailVerification(user);
//         alert('Verification email sent! Please check your inbox.');

//       } else {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;

//         if (!user.emailVerified) {
//           alert('Please verify your email before signing in.');
//           return;
//         }
//         alert('Sign-in successful!');
//         navigate('/dashboard');
//       }
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Google Sign-In
//   const handleGoogleSignIn = async () => {
//     setLoading(true);
//     try {
//       const provider = new GoogleAuthProvider();
//       await signInWithPopup(auth, provider);
//       alert('Google sign-in successful!');
//       navigate('/dashboard');
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // GitHub Sign-In
//   const handleGitHubSignIn = async () => {
//     setLoading(true);
//     try {
//       const provider = new GithubAuthProvider();
//       await signInWithPopup(auth, provider);
//       alert('GitHub sign-in successful!');
//       navigate('/dashboard');
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-blue-500 h-screen flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-2xl w-full sm:w-96">
//         <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Intelliod</h1>

//         <p className="text-center text-gray-500 mb-6">
//           {isSignUp ? 'Sign Up' : 'Sign In'} or{' '}
//           <span onClick={() => setIsSignUp(!isSignUp)} className="text-blue-600 cursor-pointer">
//             {isSignUp ? 'Sign In' : 'Sign Up'}
//           </span>
//         </p>

//         {/* Email Sign-In / Sign-Up Form */}
//         <form onSubmit={handleAuth} className="flex flex-col gap-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="p-3 border-2 rounded-xl focus:outline-none"
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="p-3 border-2 rounded-xl w-full focus:outline-none"
//             />
//             <span
//               className="absolute top-3 right-3 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all"
//             disabled={loading}
//           >
//             {loading ? (isSignUp ? 'Signing Up...' : 'Signing In...') : isSignUp ? 'Sign Up' : 'Sign In'}
//           </button>
//         </form>

//         <div className="flex flex-col items-center gap-4 mt-6">
//           {/* Google Sign-In Button */}
//           <button
//             onClick={handleGoogleSignIn}
//             className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-[#4285F4] text-white font-semibold rounded-xl hover:bg-[#357ae8] transition-all"
//             disabled={loading}
//           >
//             <FaGoogle className="text-lg" /> Continue with Google
//           </button>

//           {/* GitHub Sign-In Button */}
//           <button
//             onClick={handleGitHubSignIn}
//             className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all"
//             disabled={loading}
//           >
//             <FaGithub className="text-lg" /> Continue with GitHub
//           </button>
//         </div>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             By signing in, you agree to our{' '}
//             <span className="text-blue-600 cursor-pointer">Terms & Conditions</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import { auth } from '../src/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider
} from 'firebase/auth';
import { doc, setDoc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from './firebase';  // Make sure to import the Firestore database reference

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Save user data in Firestore
  const saveUserDataToFirestore = async (user) => {
    const userRef = doc(db, "users", user.uid);

    try {
      await setDoc(userRef, {
        email: user.email,
        lastSignIn: Timestamp.now(),
      }, { merge: true });
    } catch (error) {
      console.error("Error saving user data to Firestore: ", error);
    }
  };

  // Handle Email/Password Sign-Up & Sign-In
  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let user;
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        user = userCredential.user;

        // Send Email Verification
        await sendEmailVerification(user);
        alert('Verification email sent! Please check your inbox.');

      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        user = userCredential.user;

        if (!user.emailVerified) {
          alert('Please verify your email before signing in.');
          return;
        }
        alert('Sign-in successful!');
        navigate('/dashboard');
      }

      // Save the user data to Firestore
      await saveUserDataToFirestore(user);

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      
      // Save the user data to Firestore
      await saveUserDataToFirestore(user);

      alert('Google sign-in successful!');
      navigate('/dashboard');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // GitHub Sign-In
  const handleGitHubSignIn = async () => {
    setLoading(true);
    try {
      const provider = new GithubAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      // Save the user data to Firestore
      await saveUserDataToFirestore(user);

      alert('GitHub sign-in successful!');
      navigate('/dashboard');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-500 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full sm:w-96">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Intelliod</h1>

        <p className="text-center text-gray-500 mb-6">
          {isSignUp ? 'Sign Up' : 'Sign In'} or{' '}
          <span onClick={() => setIsSignUp(!isSignUp)} className="text-blue-600 cursor-pointer">
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </p>

        {/* Email Sign-In / Sign-Up Form */}
        <form onSubmit={handleAuth} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border-2 rounded-xl focus:outline-none"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 border-2 rounded-xl w-full focus:outline-none"
            />
            <span
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all"
            disabled={loading}
          >
            {loading ? (isSignUp ? 'Signing Up...' : 'Signing In...') : isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div className="flex flex-col items-center gap-4 mt-6">
          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-[#4285F4] text-white font-semibold rounded-xl hover:bg-[#357ae8] transition-all"
            disabled={loading}
          >
            <FaGoogle className="text-lg" /> Continue with Google
          </button>

          {/* GitHub Sign-In Button */}
          <button
            onClick={handleGitHubSignIn}
            className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all"
            disabled={loading}
          >
            <FaGithub className="text-lg" /> Continue with GitHub
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            By signing in, you agree to our{' '}
            <span className="text-blue-600 cursor-pointer">Terms & Conditions</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
// import { auth } from '../src/firebase';
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   signInWithPopup,
//   GoogleAuthProvider,
//   GithubAuthProvider
// } from 'firebase/auth';

// function SignIn() {
//   const [loading, setLoading] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   // Save user data to the backend
//   const saveUserDataToBackend = async (user) => {
//     try {
//       const response = await fetch('http://localhost:5000/signin', {  // Modify to /signup if signing up
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: user.email,
//           password: password,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log('User data saved:', data.message);
//         navigate('/dashboard');
//       } else {
//         console.error('Error:', data.error);
//       }
//     } catch (error) {
//       console.error('Error saving user data to backend:', error);
//     }
//   };

//   // Handle Email/Password Sign-Up & Sign-In
//   const handleAuth = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       let user;
//       if (isSignUp) {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         user = userCredential.user;

//         await sendEmailVerification(user);
//         alert('Verification email sent! Please check your inbox.');
//         await saveUserDataToBackend(user); // Save user data to backend
//       } else {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         user = userCredential.user;

//         if (!user.emailVerified) {
//           alert('Please verify your email before signing in.');
//           return;
//         }
//         alert('Sign-in successful!');
//         await saveUserDataToBackend(user); // Save user data to backend
//       }
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Google Sign-In
//   const handleGoogleSignIn = async () => {
//     setLoading(true);
//     try {
//       const provider = new GoogleAuthProvider();
//       const userCredential = await signInWithPopup(auth, provider);
//       const user = userCredential.user;

//       await saveUserDataToBackend(user);  // Save user data to backend
//       alert('Google sign-in successful!');
//       navigate('/dashboard');
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // GitHub Sign-In
//   const handleGitHubSignIn = async () => {
//     setLoading(true);
//     try {
//       const provider = new GithubAuthProvider();
//       const userCredential = await signInWithPopup(auth, provider);
//       const user = userCredential.user;

//       await saveUserDataToBackend(user);  // Save user data to backend
//       alert('GitHub sign-in successful!');
//       navigate('/dashboard');
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-blue-900 to-purple-900 h-screen flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-2xl w-full sm:w-96">
//         <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Research-GPT</h1>

//         <p className="text-center text-gray-500 mb-6">
//           {isSignUp ? 'Sign Up' : 'Sign In'} or{' '}
//           <span onClick={() => setIsSignUp(!isSignUp)} className="text-blue-600 cursor-pointer">
//             {isSignUp ? 'Sign In' : 'Sign Up'}
//           </span>
//         </p>

//         {/* Email Sign-In / Sign-Up Form */}
//         <form onSubmit={handleAuth} className="flex flex-col gap-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="p-3 border-2 rounded-xl focus:outline-none"
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="p-3 border-2 rounded-xl w-full focus:outline-none"
//             />
//             <span
//               className="absolute top-3 right-3 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all"
//             disabled={loading}
//           >
//             {loading ? (isSignUp ? 'Signing Up...' : 'Signing In...') : isSignUp ? 'Sign Up' : 'Sign In'}
//           </button>
//         </form>

//         <div className="flex flex-col items-center gap-4 mt-6">
//           {/* Google Sign-In Button */}
//           <button
//             onClick={handleGoogleSignIn}
//             className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-[#4285F4] text-white font-semibold rounded-xl hover:bg-[#357ae8] transition-all"
//             disabled={loading}
//           >
//             <FaGoogle className="text-lg" /> Continue with Google
//           </button>

//           {/* GitHub Sign-In Button */}
//           <button
//             onClick={handleGitHubSignIn}
//             className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all"
//             disabled={loading}
//           >
//             <FaGithub className="text-lg" /> Continue with GitHub
//           </button>
//         </div>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             By signing in, you agree to our{' '}
//             <span className="text-blue-600 cursor-pointer">Terms & Conditions</span>
//           </p>
//         </div>
//       </div>
  

//     </div>
//   );
// }

// export default SignIn;
