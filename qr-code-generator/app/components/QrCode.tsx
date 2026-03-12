import { useState } from "react";
import { generateQr } from "../lib/generateQr";


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
    <div className="py-4">
        <img src={imgSrc} alt="QR code" />
      <input placeholder="Enter site URL..." className="outline-2" value={url} onChange={(e) => setUrl(e.target.value)}/>
      <button className="bg-blue-400 rounded-2xl" onClick={handleGenerateQr}>
        {loading ? "Generating...": "Generate"}</button>
      <p>{error}</p>
    </div>
  );
}