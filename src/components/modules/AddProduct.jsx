import styles from "./AddProduct.module.css"

function AddProduct() {
  return (
    <div className={styles.container}>
        <div className={styles.add}>
         <h2>ایجاد محصول جدید</h2>
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
      <button className={styles.create}>ایجاد</button>
      <button className={styles.exit}>انصراف</button>
     </div>
    </div>
    </div>
  )
}

export default AddProduct