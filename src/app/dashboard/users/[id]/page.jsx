import React from 'react'
import styles from '@/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt='' fill />
        </div>
        Michael Tally
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name='username' placeholder='Michael Tally' />
          <label>Email</label>
          <input type="email" name='email' placeholder='michael@gmail.com' />
          <label>Password</label>
          <input type="password" name='password' placeholder='********' />
          <label>Phone</label>
          <input type="text" name='phone' placeholder='+2054933324' />
          <label>Address</label>
          <input type="text" name='address' placeholder='Istanbul' />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>

      </div>
    </div>
  )
}

export default SingleUserPage