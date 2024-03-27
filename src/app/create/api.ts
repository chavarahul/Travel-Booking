export async function postImages(cloudName:any,formdata:any) {
 const res= await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,{
    method:"POST",
    body:formdata
 })
 const data = await res.json()
 const imageUrl = data["secure_url"]
 return data
}