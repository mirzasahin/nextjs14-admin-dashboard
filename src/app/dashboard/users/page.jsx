import React from 'react'
import styles from '@/ui/dashboard/users/users.module.css'
import Search from '@/ui/dashboard/search/search'

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="hırto" />
      </div>
      <table className={styles.table}></table>
    </div>
  )
}

export default UsersPage