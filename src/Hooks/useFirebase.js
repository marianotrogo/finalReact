import { useEffect, useState } from 'react'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase';


const useFirebase = () => {

    const [catalogo, setCatalogo] = useState([])
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProductos()

        return () => {
        }
    }, [])

    useEffect(() => {

    }, [catalogo])


    const getProductos = async () => {

        try {
            setLoading(true)
            const prodCol = collection(db, 'productos')
            await getDocs(prodCol).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log('bd empity')
                }
                setLoading(false)
                setCatalogo(snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getProduct = async (id) => {

        try {
            setLoading(true)
            const document = doc(db, "productos", id)
            const response = await getDoc(document)
            setProducto({ id: response.id, ...response.data() })
            setLoading(false)
        } catch (error) {
            console.log(error)
        }

    };

    const getTicket = async ({ datos }) => {
        try {
            const col = collection(db, "ordenes")
            const order = await addDoc(col, datos)
            return (
                setTimeout(() => {
                    alert(order.id)
                }, 2000));
        } catch (error) {
            console.log(error)
        }
    }

    return {
        loading,
        catalogo,
        producto,
        getProductos,
        getProduct,
        getTicket
    }
}

export default useFirebase