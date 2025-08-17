import styles from "./AddProduct.module.css"
import {useAddProduct} from "../../services/mutate"
import toast from "react-hot-toast"
import { useForm} from "react-hook-form"

function AddProduct({setAddModal}) {
  const {mutate} =useAddProduct()

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        setAddModal(false)
        toast.success("محصول با موفقیت افزوده شد")
      }
    })
  }


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.add}>
         <h2>ایجاد محصول جدید</h2>
     <form className={styles.form}>
      <div className={styles.inputContainer}>
        <label className={styles.title}>نام کالا</label>
      <input type="text" placeholder="نام کالا"  className={styles.input}  {...register("name", {required:true})}/>
      </div>
     <div  className={styles.inputContainer}>
         <label  className={styles.title}>تعداد موجودی</label>
      <input type="text" placeholder="موجودی"  className={styles.input}  {...register("quantity", {required:true})}/>
     </div>
    <div  className={styles.inputContainer}>
         <label  className={styles.title}>قیمت</label>
      <input type="text" placeholder="قیمت"  className={styles.input} {...register("price", {required:true})}/>
    </div>
     </form>
     <div className={styles.buttons}>
      <button className={styles.create} type="submit">ایجاد</button>
      <button className={styles.exit} onClick={() => {setAddModal(false)}}>انصراف</button>
     </div>
    </div>
      </form>
    </div>
  )
}

export default AddProduct