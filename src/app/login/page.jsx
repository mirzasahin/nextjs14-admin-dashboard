import React from 'react'
import styles from '@/ui/login/login.module.css'
import { authenticate } from '../lib/actions'
import LoginForm from './loginForm/loginForm'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  )
}

export default LoginPage