import { useState } from "react";
import { generateQr } from "../lib/generateQr";
import Button from "./Button"
import Image from "next/image";
import {getWebName} from "../lib/getName"

type QrCodeProps = {
  color: string;
}

export default function QrCode({color}: QrCodeProps) {
  const [url, setUrl] = useState("");
  const [imgSrc, setImgSrc] = useState("/qr-code.png");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateQr = async () => {
    setLoading(true);
    setError("")

    try{
      const objectUrl = await generateQr(url, color)
      setImgSrc((prev) => {
      if (prev.startsWith("blob:")) {
        URL.revokeObjectURL(prev);
      }
        return objectUrl;
      });
      } catch (err){
        console.error(err)
        setError("Enter a Valid URL")

      } finally{
        setLoading(false)
    }  
    } 
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-2xl font-bold">QR Code Generator</h1>
        <Image className="rounded-xl" src={imgSrc} alt="QR Code" width={300} height={350}/> 
         
      <input placeholder="Enter site URL..." className="outline-1 w-40 text-center rounded-lg" value={url} onChange={(e) => setUrl(e.target.value)}/>
      <Button className="bg-blue-700 text-white rounded-2xl w-30 outline-1 hover:bg-blue-300 hover:text-black" onClick={handleGenerateQr}>
        {loading ? "Generating...": "Generate"}</Button>
      <p className="text-blue-700 font-bold"> {url ? getWebName(url): error}</p>
    </div>
  );
}