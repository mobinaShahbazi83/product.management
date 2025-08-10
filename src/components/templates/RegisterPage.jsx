import { Link } from "react-router-dom"
import styles from "./RegisterPage.module.css"
import { useForm} from "react-hook-form"
import { useRegister } from "../../services/user"
import toast from "react-hot-toast"



function RegisterPage() {
  const {mutate} =useRegister()
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
   const onSubmit = (data) => {
     if (data.password !== data.repassword) {
      toast.error("رمز و تکرار ان برابر نیست")
      return;
    }
    mutate(data)

   }
  return (
   <div className={styles.form}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <img src="/images/Union.png" className={styles.img}/>
      <h4>فرم ثبت نام</h4>
     <input type="text" id="input" className={styles.input} placeholder="نام کاربری" {...register("email", {required:true})}/>
      {errors.email && <span className={styles.errors}>وارد کردن نام کاربری الزامی میباشد</span>}
     <input type="password" id="input" className={styles.input} placeholder="رمز عبور"  {...register("password", {required:true})}/>
      {errors.password && <span className={styles.errors}>وارد کردن رمز عبور الزامی میباشد</span>}
     <input type="password" id="input" className={styles.input} placeholder="تکرار رمز عبور"  {...register("repassword", {required:true})}/>
      {errors.repassword && <span className={styles.errors}>تکرار رمز عبور الزامی میباشد</span>}

     <button type="submit" className={styles.button}>ثبت نام</button>
      <Link href="/login" className={styles.login}>حساب کاربری دارید؟</Link>
    </form>
   </div>
  )
}

export default RegisterPage