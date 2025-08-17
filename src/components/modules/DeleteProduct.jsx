import { useDeleteProduct } from "../../services/mutate"
import styles from "./DeleteProduct.module.css"
import toast from "react-hot-toast"

function DeleteProduct({setDeletModal, id}) {
  const {mutate} = useDeleteProduct()

  const deleteHandler = () => {
    mutate(id, {
      onSuccess: () => {
        setDeletModal(false)
        toast.success("محصول با موفقیت حذف شد")
      }
    })
  }

  
  return (
    <div className={styles.container}>
      <div className={styles.delete}>
         <div className={styles.icon}>
           <img src="/images/Close.png" className={styles.img}/>
        </div>
        <h2 className={styles.title}>آیا از حذف این محصول مطمئنید؟</h2>
        <div className={styles.buttons}>
          <button className={styles.deletemodal} onClick={deleteHandler}>حذف</button>
           <button className={styles.cancelmodal} onClick={() => {setDeletModal(false)}}>لغو</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteProduct