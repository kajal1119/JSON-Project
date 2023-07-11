import { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    
    useEffect(() => {
        fetch("http://localhost:3001/products")
        .then(response => response.json())
        .then(data => console.log(setProducts(data)));
        
    }, []);

  return (
    <div>ProductList</div>
  )
}
