import styles from "./ProductPage.module.css"
import { CiSearch } from "react-icons/ci";
import { CiGrid32 } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";
import AddProduct from "../modules/AddProduct";
import { useState } from "react";
import EditProduct from "../modules/EditProduct";
import DeleteProduct from "../modules/DeleteProduct";
import { useGetProducts} from "../../services/queries"

function ProductPage() {
  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] =  useState(false)
  const [deleteModal, setDeletModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);
   const [text, setText] = useState("")
  const {data} = useGetProducts()
  console.log(data)

  

  const products = data?.data?.data
   console.log(products)

    const filteredProducts = products?.filter(p =>
    (p?.name ?? "").toLowerCase().includes(text.toLowerCase().trim())
  );

  const addmodalHandler = () => {
    setAddModal(true)
  }

  const editmodalHandler = (product) => {
    setSelectedProduct(product);
    setEditModal(true)
  }

  const deletemodalHandler = () => {
    setDeletModal(true)
  }
  return (
    <div className={styles.product}>
      <header className={styles.header}>
        <div className={styles.search}>
          <CiSearch className={styles.iconfirst}/>
          <input type="text" placeholder="جستجو کالا" className={styles.input} value={text} onChange={e => setText(e.target.value)} />
        </div>
      </header>
      <div className={styles.title}>
        <div className={styles.right}>
         <h2>مدیریت کالا</h2>
          <CiGrid32 className={styles.iconsecond}/>
        </div>
        <button onClick={addmodalHandler} className={styles.button}>افزودن محصول</button>
        { !! addModal &&  <AddProduct setAddModal={setAddModal}/>} 
        
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
          <tbody className={styles.tablebody}>
            {filteredProducts?.map(product => (
              <tr key={product?.id} className={styles.row}>
              <td>{product?.name}</td>
              <td>{product?.quantity}</td>
              <td>{product?.price}تومان</td>
              <td>{product?.id}</td>
               <td><TbEdit className={styles.edit} onClick={()=>editmodalHandler(product)}/> <HiOutlineTrash className={styles.trash} onClick={deletemodalHandler} /> </td>
                 { !! editModal &&  <EditProduct setEditModal={setEditModal} product={selectedProduct}/>} {!! deleteModal && <DeleteProduct setDeletModal={setDeletModal} id={product.id}/>}
                 
            </tr> 
            ))}    

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductPage