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
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">ResearchGPT</h1>

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

