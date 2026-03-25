"use client";
import QrCode from "./components/QrCode";
import SelectColor from "./components/SelectColor";
import { useColor } from "react-color-palette";

export default function page() {
  const [color, setColor] = useColor("#000000");

 
  
  return (
    <div className="flex justify-center items-center h-dvh gap-40 bg-blue-100">
      <div className="flex flex-col justify-center p-5 bg-white w-80 rounded-xl">
         <QrCode color={color.hex}/>
      </div>

      <div className="flex flex-col justify-center p-5 bg-white w-80 rounded-xl">
         <SelectColor color={color} setColor={setColor} isBackground = {true}/>
      </div>

      
    </div>
  )
}