import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"


const AuthLayout = ({children , authentication = true}) => {
       const navigate = useNavigate()
       const authStatus = useSelector(state => state.auth.status)
       const [loader,setLoader] = useState(true)

       useEffect(() => {

              if(authentication && authStatus !== authentication){
                     navigate("/")
              }
              else if(!authentication && authStatus !== authentication)
              {
                     navigate("/")
              }
              setLoader(false)

       },[authStatus])
  return loader ? <h1>loading</h1> : <>{children}</>
}
export default AuthLayout
