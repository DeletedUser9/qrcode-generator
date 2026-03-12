"use client";
import QrCode from "./components/QrCode";

export default function page() {
  
  return (
    <div className="flex justify-center items-center h-dvh bg-blue-100">
      <div className="flex flex-col justify-center p-5 bg-white w-80 rounded-xl">
         <QrCode/>
      </div>

      
    </div>
  )
}