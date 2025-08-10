
import styles from "./LoginPage.module.css"
import { Link } from "react-router-dom"
import { useForm} from "react-hook-form"
import { useLogin } from "../../services/user"
import toast from "react-hot-toast"

function LoginPage() {
  const {mutate} =useLogin()
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
   const onSubmit = (data) => {
    
    mutate(data)
   }

  
  return (
    <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <img src="/images/Union.png" className={styles.img}/>
          <h4>فرم ورود</h4>
          <input type="text" id="input" className={styles.input} placeholder="نام کاربری"  {...register("email", {required:true})}/>
           {errors.email && <span className={styles.errors}>وارد کردن نام کاربری الزامی میباشد</span>}
          <input type="password" id="input" className={styles.input} placeholder="رمز عبور" {...register("password", {required:true})} />
          {errors.password && <span className={styles.errors}>وارد کردن رمز عبور الزامی میباشد</span>}
          <button type="submit" className={styles.button}>ورود</button>
          <Link href="/register" className={styles.register}>!ایجاد حساب کاربری</Link>
        </form>
    </div>
  )
}

export default LoginPage