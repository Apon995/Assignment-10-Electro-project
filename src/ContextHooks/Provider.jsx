
import React, { createContext, useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import auth from '../../firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const globalContext = createContext(null)


function Provider({ children }) {

    const [user, setUser] = useState(null)
    const [Mycartitems, setMycartitems] = useState([]);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const RegisterEmailorPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginEmailorPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            }
            else {
                setUser(null)
                setLoading(false)
            }
        })


        return () => {
            unsubscribe();
        }
    }, [])






    const HandleAddtoCart = (id) => {

        Swal.fire({
            title: ' you want buy this product ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/products/${id}`)
                    .then(res => res.json())
                    .then(data => {
                        delete data._id

                        fetch('https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/buyproducts', {
                            method: "POST",
                            headers: {
                                "content-type": 'Application/json'
                            },
                            body: JSON.stringify(data)
                        })
                            .then(res => res.json())
                            .then(result => {
                                if (result.acknowledged == true) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'succesfully added to cart !',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })

                                }
                            })

                    })





            }
        })



    }

    const HandleDeletetoCart = (id) => {
        Swal.fire({
            title: ' can you sure delete this ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes ! sure'
        }).then((result => {
            if (result.isConfirmed) {
                fetch(`https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/buyproducts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount == 1) {
                            Swal.fire({
                                icon: 'success',
                                title: 'product has been deleted !',
                                showConfirmButton: false,
                                timer: 2000
                            })

                            const restitems = Mycartitems.filter(product => product._id != id)
                            setMycartitems(restitems)
                        }
                        else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'something worng try again!',
                                showConfirmButton: true,

                            })
                        }
                    })
            }
        }))

    }


    useEffect(() => {
        fetch('https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/buyproducts')
            .then(res => res.json())
            .then(result => setMycartitems(result))
    }, [HandleAddtoCart, HandleDeletetoCart])
















    const dataobj = {
        HandleAddtoCart,
        HandleDeletetoCart,
        Mycartitems,
        user,
        loading,
        RegisterEmailorPass,
        LoginEmailorPass,
        Logout,
        GoogleLogin


    }
    return (
        <globalContext.Provider value={dataobj}>
            {children}
        </globalContext.Provider>
    )
}

export default Provider