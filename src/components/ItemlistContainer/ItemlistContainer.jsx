import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"

const ItemlistContainer = ({greeting}) => {
    const [products, setProducts]=useState([])

    const {categoryId} = useParams()

    useEffect(()=>{
        const asyncFunction = getProducts

        asyncFunction(categoryId)
        .then(Response=>{
            setProducts(Response)
        })
    },[categoryId])

    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )

}

export default ItemlistContainer