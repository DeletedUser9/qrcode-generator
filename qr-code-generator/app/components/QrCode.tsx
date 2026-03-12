import { useState } from "react";
import { generateQr } from "../lib/generateQr";
import Button from "./Button"
import Image from "next/image";
import {getWebName} from "../lib/getName"


export default function QrCode() {
  const [url, setUrl] = useState("");
  const [imgSrc, setImgSrc] = useState("/qr-code.png");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateQr = async () => {
    setLoading(true);
    setError("")

    try{
      const objectUrl = await generateQr(url)
      setImgSrc((prev) => {
      if (prev.startsWith("blob:")) {
        URL.revokeObjectURL(prev);
      }
        return objectUrl;
      });
      } catch (err){
        console.error(err)
        setError("could not generate")

      } finally{
        setLoading(false)
    }  
    } 
  return (
    <div className="flex flex-col items-center gap-3 py-4">
        <Image className="rounded-xl" src={imgSrc} alt="QR Code" width={300} height={350}/> 
        <h1 className="text-2xl">QR Code generator</h1>
      <input placeholder="Enter site URL..." className="outline-1 w-40 text-center" value={url} onChange={(e) => setUrl(e.target.value)}/>
      <Button className="bg-blue-300 rounded-2xl w-40 outline-1" onClick={handleGenerateQr}>
        {loading ? "Generating...": "Generate"}</Button>
      <p>{getWebName(url)}</p>
    </div>
  );
}