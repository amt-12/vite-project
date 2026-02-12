import axios from 'axios';
import React, { useState,useEffect } from 'react'
import axiosInstance from '../../utils/axiosInstance';

const Users = () => {
    const [data, setData] =useState();

    console.log("users list data", data);

    useEffect(
        
        ()=>{
        try {
             axiosInstance.get("/adhaarTeam/getAdhaarRegisterUser")
             .then((res)=>{
                setData(res?.data)
            }).catch((error)=>{
                console.log("error in users list", error?.response);
            })
        } catch (error) {
            console.log("error in users list backend", error?.response);
        }
    }
    ,[])

  return (
    <div>
    <h1>Users list:</h1>
    <p>{data?.message}</p>
    <div>
        {data?.registerUserList.map((items,index)=>{
            return(
                <div key={index} className=''>
                <div className='border mt-2 bg-amber-200'>
                <p>{items?.username}</p>
                    <p>{items?.phoneNumber}</p>
                    <p>{items?.password}</p>
                </div>
                 

                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Users