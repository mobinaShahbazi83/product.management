import {useEditProducts} from "../../services/mutate"
import styles from "./EditProduct.module.css"
import toast from "react-hot-toast"
import { useForm} from "react-hook-form"
import { useEffect } from "react";

function EditProduct({setEditModal, product}) {
   const {mutate} =useEditProducts()

     const {
       register,
       handleSubmit,
       reset,
       formState: { errors },
     } = useForm({defaultValues: {
      name: product.name,
      quantity: product.quantity,
      price: product.price,
     }})

      useEffect(() => {
    if (product) {
      
      
      reset({
        name: product.name,
      quantity: product.quantity,
      price: product.price,
      });
    }
  }, [product, reset]);

  const  onSubmit  = (data) => {
     mutate({id:product.id,data}, {
      onSuccess: () => {
        setEditModal(false)
        toast.success("محصول با موفقیت ویرایش شد")
      }
    })
  }

 
  
  return (
     <div className={styles.container}>
            <div className={styles.edit}>
             <h2>ویرایش اطلاعات</h2>
         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputContainer}>
            <label className={styles.title}>نام کالا</label>
          <input type="text" placeholder="نام کالا"  className={styles.input} {...register("name", {required:true})}/>
          </div>
         <div  className={styles.inputContainer}>
             <label  className={styles.title}>تعداد موجودی</label>
          <input type="text" placeholder="موجودی"  className={styles.input} {...register("quantity", {required:true})}/>
         </div>
        <div  className={styles.inputContainer}>
             <label  className={styles.title}>قیمت</label>
          <input type="text" placeholder="قیمت"  className={styles.input} {...register("price", {required:true})}/>
        </div>
        <div className={styles.buttons}>
          <button className={styles.create}  type="submit"> ثبت اطلاعات جدید</button>
          <button className={styles.exit} onClick={() => {setEditModal(false)}}>انصراف</button>
         </div>
         </form>
         
        </div>
        </div>
  )
}

export default EditProduct