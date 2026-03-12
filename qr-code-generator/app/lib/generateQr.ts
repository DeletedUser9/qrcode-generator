export async function generateQr(url: string): Promise<string> {
    const baseurl = process.env.NEXT_PUBLIC_QR_API_URL

    if(!baseurl) {
        throw new Error("API is not defined in environment variables")
    }

    const res = await fetch(`${baseurl}/generate_qr`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
    })

    if (!res.ok) {
        const text = await res.text()
        throw new Error(`Failed to generate QR code: ${res.status} ${text}`)
    }

    const blob = await res.blob()
    return URL.createObjectURL(blob)
}