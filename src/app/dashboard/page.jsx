import { supabase } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import {logout} from './actions'

export default async function Dashboard() {
  
  //Step 1 - get the user from the database


  //Step 2 - if the user is not found, redirect to the login page


  //Step 3 - if the user is found, show the dashboard
  const user = null;
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '10px',
              color: '#333'
            }}>
              Welcome! 👋
            </h1>
            <p style={{
              color: '#666',
              fontSize: '1.1rem'
            }}>
              {user?.email || 'User'}
            </p>
          </div>
          
          {/* Logout – server action */}
          <form action={logout}>
            <button
              type="submit"
              style={{
                padding: '12px 24px',
                background: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </form>
        </div>

        <div style={{
          padding: '30px',
          background: '#f8f9fa',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '1.2rem',
            color: '#28a745',
            fontWeight: '500',
            margin: 0
          }}>
            🎉 You are successfully logged in!
          </p>
        </div>
      </div>
    </div>
  )
}