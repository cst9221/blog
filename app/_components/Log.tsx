"use client"

import { useEffect } from "react"
import { db } from "../_modules/firebase"
import { addDoc, collection, getDocs } from "firebase/firestore"

const Log = () => {
  useEffect(() => {
    const log = localStorage.getItem("cst9221.log")
    if (!log) {
      addDoc(collection(db, "app"), { date: new Date() }).then((result) => {
        localStorage.setItem("cst9221.log", result.id)
        console.log(`welcome your id is ${result.id}`)
        getDocs(collection(db, "app")).then((result2) => {
          console.log(result2.size)
        })
      })
    } else {
      getDocs(collection(db, "app")).then((result2) => {
        console.log(result2.size)
      })
    }
  }, [])
  return <div />
}

export default Log
