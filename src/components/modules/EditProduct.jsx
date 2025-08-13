import { useState } from "react"
import styles from "./EditProduct.module.css"

function EditProduct({setEditModal}) {
  
  return (
     <div className={styles.container}>
            <div className={styles.edit}>
             <h2>ویرایش اطلاعات</h2>
         <form className={styles.form}>
          <div className={styles.inputContainer}>
            <label className={styles.title}>نام کالا</label>
          <input type="text" placeholder="نام کالا"  className={styles.input}/>
          </div>
         <div  className={styles.inputContainer}>
             <label  className={styles.title}>تعداد موجودی</label>
          <input type="text" placeholder="موجودی"  className={styles.input}/>
         </div>
        <div  className={styles.inputContainer}>
             <label  className={styles.title}>قیمت</label>
          <input type="text" placeholder="قیمت"  className={styles.input}/>
        </div>
         </form>
         <div className={styles.buttons}>
          <button className={styles.create}> ثبت اطلاعات جدید</button>
          <button className={styles.exit} onClick={() => {setEditModal(false)}}>انصراف</button>
         </div>
        </div>
        </div>
  )
}

export default EditProduct