import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({ children, authentication = true
}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    // video 23 55 chya aadhi
    useEffect(() => {

        // No.      conditions                                      Result
        //  1.      true && (true !== true)                         
        //          true && false                                   false

        //  2.      true && (false !== true)                       
        //          true && true                                    true

        //  3.      false && (true !== false)                       
        //          false && true                                   false

        //  4.      false && (false !== false)                      
        //          false && false                                  false


        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected