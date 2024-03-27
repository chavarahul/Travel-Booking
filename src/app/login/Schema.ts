import {z} from 'zod'
const Schema = z.object({
   email:z.string().min(1,{message:"Email is required"}).email("Invalid email address"),
   password:z.string().min(6,{message:"Password must be min 6 letters"})
})
export default Schema