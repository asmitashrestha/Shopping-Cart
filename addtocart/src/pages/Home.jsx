import { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'

const Home = () => {
  const [product, setProduct] = useState([])
  const[loading, setLoading] = useState(false)

  const fetchProduct = async() =>{
    setLoading(true)
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data);
      if(data && data.product){
        setProduct(data)
      }
      setProduct(data)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchProduct()
  },[])
  console.log(product);

  return (
    <div className='product-container'>
      {
        product && product.length > 0? 
        product.map((item,index)=>
        <ProductList key={index} item={item}/>) 
        :null
      }
    </div>
  )
}

export default Home
