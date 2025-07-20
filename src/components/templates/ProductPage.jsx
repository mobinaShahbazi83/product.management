import styles from "./ProductPage.module.css"
import { CiSearch } from "react-icons/ci";
import { CiGrid32 } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";


function ProductPage() {
  return (
    <div className={styles.product}>
      <header className={styles.header}>
        <div className={styles.search}>
          <CiSearch className={styles.iconfirst}/>
          <input type="text" placeholder="جستجو کالا" className={styles.input}/>
        </div>
      </header>
      <div className={styles.title}>
        <div className={styles.right}>
         <h2>مدیریت کالا</h2>
          <CiGrid32 className={styles.iconsecond}/>
        </div>
        <button className={styles.button}>افزودن محصول</button>
        
      </div>
      <div >
        <table className={styles.table} >
          <thead className={styles.tableheader}>
            <tr>
              <th>نام کالا</th>
              <th>موجودی</th>
              <th>قیمت</th>
              <th>شناسه کالا</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={styles.tablebody} >
            <tr className={styles.row}>
              <td>
                <span className={styles.productname}>تیشرت طرح انگولار</span>
              </td>
              <td>۲۹۳</td>
              <td>90 هزار تومان</td>
              <td>90uf9g9h7895467g974</td>
              <td><TbEdit className={styles.edit}/> <HiOutlineTrash className={styles.trash} /> </td>
              </tr>
              <tr className={styles.row}>
              <td>
                <span className={styles.productname}>تیشرت طرح انگولار</span>
              </td>
              <td>۲۹۳</td>
              <td>90 هزار تومان</td>
              <td>90uf9g9h7895467g974</td>
              <td><TbEdit className={styles.edit}/> <HiOutlineTrash className={styles.trash} /> </td>
              </tr>
              <tr className={styles.row}>
              <td>
                <span className={styles.productname}>تیشرت طرح انگولار</span>
              </td>
              <td>۲۹۳</td>
              <td>90 هزار تومان</td>
              <td>90uf9g9h7895467g974</td>
              <td><TbEdit className={styles.edit}/> <HiOutlineTrash className={styles.trash} /> </td>
              </tr>
              <tr className={styles.row}>
              <td>
                <span className={styles.productname}>تیشرت طرح انگولار</span>
              </td>
              <td>۲۹۳</td>
              <td>90 هزار تومان</td>
              <td>90uf9g9h7895467g974</td>
              <td><TbEdit className={styles.edit}/> <HiOutlineTrash className={styles.trash} /> </td>
              </tr>
                <tr className={styles.row}>
              <td>
                <span className={styles.productname}>تیشرت طرح انگولار</span>
              </td>
              <td>۲۹۳</td>
              <td>90 هزار تومان</td>
              <td>90uf9g9h7895467g974</td>
              <td><TbEdit className={styles.edit}/> <HiOutlineTrash className={styles.trash} /> </td>
              </tr>
              <tr className={styles.row} >
              <td >
                <span className={styles.productname}>تیشرت طرح انگولار</span>
              </td>
              <td>۲۹۳</td>
              <td>90 هزار تومان</td>
              <td>90uf9g9h7895467g974</td>
              <td><TbEdit className={styles.edit}/> <HiOutlineTrash className={styles.trash} /> </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductPage