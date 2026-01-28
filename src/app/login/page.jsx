'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  //Step 1 - create the supabase client
  async function handleSignIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
  
    if (error) {
      setError(error.message)
    } else {
      setError("✅ Signed in successfully")
      window.location.href = "/dashboard"
    }
  }
  
  async function handleSignUp() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
  
    if (error) {
      setError(error.message)
    } else {
      setError("✅ Account created. Check your email.")
    }
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
        background: '#8B4513',
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