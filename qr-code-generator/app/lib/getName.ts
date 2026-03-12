export function  getWebName(siteUrl: string): string {
    if(!siteUrl.trim()){
        return "Enter a URL"
    }
    try{
        const url = new URL(siteUrl)
        return url.hostname
    } catch{
        return "Invalid Url"
    }

}

 