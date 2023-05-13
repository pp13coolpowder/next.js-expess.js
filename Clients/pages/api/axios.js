import axios from "axios";

//User
export const register = async (value)=>
await axios.post('http://localhost:4040/register',value)
export const login = async (value)=>
await axios.post('http://localhost:4040/login',value)
export const auth = async(id_token)=>
await axios.post('http://localhost:4040/Auth',{},
    { headers:{id_token} })
export const GetUserTable = async ()=>
await axios.get('http://localhost:4040/list&user')

//Post
export const POST = async (value)=>
await axios.post('http://localhost:4040/post',value)
export const GETPOST = async ()=>
await axios.get('http://localhost:4040/postlist')
export const mypost =async (id)=>
await axios.get('http://localhost:4040/postlist/user/'+id)
export const datapost =async (id)=>
await axios.get('http://localhost:4040/postlist/'+id)
export const updatepost =async (id,value)=>
await axios.put('http://localhost:4040/post&update/'+id,value)
export const deletepost =async (id)=>
await axios.delete('http://localhost:4040/post&delete/'+id)
