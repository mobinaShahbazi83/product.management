// import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./RegisterPage.module.css"
// import { useAddpost } from "../../services/authmutation"


function RegisterPage() {
  // const result = useMutation(useAddpost)
    // const {mutate, data} = useMutation(useAddpost)

  const submitHandler = () => {
    event.preventDefault()
    mutate()

  }
  
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("") 
    const [repassword, setRePassword] = useState("") 
  return (
   <div className={styles.form}>
     <form onSubmit={submitHandler}>
      <img src="/images/Union.png" className={styles.img}/>
      <h4>فرم ثبت نام</h4>
     <input type="text" id="input" className={styles.input} placeholder="نام کاربری" value={username} onChange={e => setUsername(e.target.value)}/>
     <input type="number" id="input" className={styles.input} placeholder="رمز عبور" value={password} onChange={e =>setPassword(e.target.value)}/>
     <input type="number" id="input" className={styles.input} placeholder="تکرار رمز عبور" value={repassword} onChange={e => setRePassword(e.target.value)}/>
     <button type="submit" className={styles.button}>ثبت نام</button>
      <Link href="/login" className={styles.login}>حساب کاربری دارید؟</Link>
    </form>
   </div>
  )
}

export default RegisterPage