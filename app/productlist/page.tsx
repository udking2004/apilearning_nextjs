"use client";
import { useEffect, useState } from 'react';
import styles from "../styles/Productlist.module.css";

interface ListProduct{
  id: number;
  title: String;
  description: String;
  price: number;
}

const Productlst = () => {

  const FetchData = async ()=>{
    let data = await fetch("https://dummyjson.com/products");
    let selfdata = await data.json();
    console.log(selfdata);
    setProduct(selfdata.products);
  }
  const [products,setProduct] = useState([]);
    useEffect(()=>{
      FetchData();
    },[]);
  return (
    <div className={styles.container}>
      <h1 className="text-2xl font-bol">Product Details</h1>
      <table className='border-collapse border border-slate-500 table-auto'>
        <thead>
          <tr>
            <th className="border border-slate-700 px-4 py-4">Id</th>
            <th className="border border-slate-700 px-4 py-4">Product Name</th>
            <th className="border border-slate-700 px-4 py-4">Price</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((item: ListProduct,index)=>{ 
              return <tr key={index}>
                      <td className="border border-slate-700 px-4 py-4">{item.id}</td>
                      <td className="border border-slate-700 px-4 py-4">{item.title}</td>
                      <td className="border border-slate-700 px-4 py-4">{item.price}</td>
                    </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Productlst
