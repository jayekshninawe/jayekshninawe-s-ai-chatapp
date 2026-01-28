'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  //Step 1 - create the supabase client
  const supabase = createClient()

  async function handleSignIn() {
    console.log("Signing in");
    //Step 1 - create the supabase client
    //Step 2 - sign in the user
    //Step 3 - redirect to the dashboard
    //Step 4 - show a success message
  }

  async function handleSignUp() {
    console.log("Signing up");
    //Step 1 - create the supabase client
    //Step 2 - sign up the user
    //Step 3 - redirect to the dashboard
    //Step 4 - show a success message
    //Step 5 - show an error message if the user already exists
  }

  return (
    <>
      <style>{`
        input::placeholder {
          color: #999;
          opacity: 1;
        }
        input::-webkit-input-placeholder {
          color: #999;
        }
        input::-moz-placeholder {
          color: #999;
          opacity: 1;
        }
        input:-ms-input-placeholder {
          color: #999;
        }
      `}</style>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '40px',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
        }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '10px',
          color: '#333',
          textAlign: 'center'
        }}>
          Welcome Back
        </h1>
        <p style={{
          color: '#666',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '0.95rem'
        }}>
          Sign in to your account or create a new one
        </p>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            display: 'block',
            width: '100%',
            margin: '15px 0',
            padding: '12px 16px',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '1rem',
            boxSizing: 'border-box',
            color: '#000'
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            display: 'block',
            width: '100%',
            margin: '15px 0',
            padding: '12px 16px',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '1rem',
            boxSizing: 'border-box',
            color: '#000'
          }}
        />
        
        <div style={{
          display: 'flex',
          gap: '12px',
          marginTop: '25px'
        }}>
          <button
            onClick={handleSignIn}
            style={{
              flex: 1,
              padding: '12px 24px',
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#5568d3'}
            onMouseOut={(e) => e.target.style.background = '#667eea'}
          >
            Sign In
          </button>
          <button
            onClick={handleSignUp}
            style={{
              flex: 1,
              padding: '12px 24px',
              background: '#f0f0f0',
              color: '#333',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#e0e0e0'}
            onMouseOut={(e) => e.target.style.background = '#f0f0f0'}
          >
            Sign Up
          </button>
        </div>
        
        {error && (
          <div style={{
            marginTop: '20px',
            padding: '12px',
            background: error.startsWith('✅') ? '#d4edda' : '#f8d7da',
            color: error.startsWith('✅') ? '#155724' : '#721c24',
            borderRadius: '8px',
            fontSize: '0.9rem',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}
        </div>
      </div>
    </>
  )
}