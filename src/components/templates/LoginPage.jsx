import { useState } from "react"
import styles from "./LoginPage.module.css"
import { Link } from "react-router-dom"

function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("") 

  const submitHandler = () => {
    event.preventDefault()
  }
  return (
    <div className={styles.form}>
        <form onSubmit={submitHandler}>
          <img src="/images/Union.png" className={styles.img}/>
          <h4>فرم ورود</h4>
          <input type="text" id="input" className={styles.input} placeholder="نام کاربری" value={username} onChange={e => setUsername(e.target.value)}/>
          <input type="number" id="input" className={styles.input} placeholder="رمز عبور" value={password} onChange={e =>setPassword(e.target.value)}/>
          <button type="submit" className={styles.button}>ورود</button>
          <Link href="/register" className={styles.register}>!ایجاد حساب کاربری</Link>
        </form>
    </div>
  )
}

export default LoginPage