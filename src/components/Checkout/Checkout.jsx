import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId,writeBatch,addDoc, Timestamp } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseconfig"
import CheckoutForm from "../CheckoutForm/CheckoutForm"



const Checkout =()=> {
    const [loading,setLoading]=useState(false)
    const [orderId, setOrderId]=useState('')

    const {cart, total, clearCart }= useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        try{
            const objOrder= {
                buyer: {
                    name, phone,email
                },
                items: cart,
                total,
                date: Timestamp.fromDate(new Date())
            }
    
            const batch= writeBatch(db)
            const outOfStotck =[]
    
    
            const ids= cart.map(prod=>prod.id)
            
    
            const productsRef= query(collection(db,'products'),where(documentId(), 'in', ids))
    
           const {docs} = await getDocs(productsRef)
    
           docs.forEach(async documentSnapshot=>{
            const fields = documentSnapshot.data()
            const stockDb = fields.stock
    
            const productAddedTOcart = cart.find(prod=>prod.id===documentSnapshot.id)
            const prodQuantity = productAddedTOcart.quantity
    
            if(stockDb>= prodQuantity){
                batch.update(documentSnapshot.ref, {stock: stockDb - prodQuantity})
            }else{
                outOfStotck.push({id: documentSnapshot.id, ...fields})
            }
            if(outOfStotck.length===0){
                const orderRef = collection(db,'orders')
                const {id}=await addDoc(orderRef, objOrder)
                batch.commit()
                setOrderId(id)
                clearCart()
                console.log( `el id de su orden es ${id}`)
            }else{console.log('no hay stock de algun producto')}
    
           })
        }catch(error) {
            console.error('hubo un error generando la orden')
        } finally{setLoading(false)}
 


    }
    if(loading){
        return <h1>Se esta generando su orden...</h1>
    }
    if(orderId){
        return(
            <h1>El id de su orden es: {orderId}</h1>
        )
    }



    return (
        <>
            <h1>Chechout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </>
    )
}

export default Checkout