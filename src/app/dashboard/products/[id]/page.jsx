import React from 'react'
import styles from '@/ui/dashboard/products//singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt='' fill />
        </div>
        IPhone
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name='title' placeholder='Michael Tally' />
          <label>Price</label>
          <input type="number" name='price' placeholder='$999' />
          <label>Stock</label>
          <input type="number" name='stock' placeholder='74' />
          <label>Color</label>
          <input type="text" name='size' placeholder='Red' />
          <label>Size</label>
          <input type="text" name='address' placeholder='Istanbul' />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder='description'></textarea>
          <button>Update</button>
        </form>

      </div>
    </div>
  )
}

export default SingleProductPage