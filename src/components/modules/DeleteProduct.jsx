import styles from "./DeleteProduct.module.css"

function DeleteProduct() {
  return (
    <div className={styles.container}>
      <div className={styles.delete}>
         <div className={styles.icon}>
           <img src="/images/Close.png" className={styles.img}/>
        </div>
        <h2 className={styles.title}>آیا از حذف این محصول مطمئنید؟</h2>
        <div className={styles.buttons}>
          <button className={styles.deletemodal}>حذف</button>
           <button className={styles.cancelmodal}>لغو</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteProduct