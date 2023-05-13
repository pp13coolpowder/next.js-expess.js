import { useState, useEffect } from "react"
import { datapost, updatepost } from "@/pages/api/axios"

export default function Post_edit({visible,onClose,id,lod}) {
  const click =(e)=>{if(e.target.id === 'contaner') onClose()}
  if(!visible)return null;
  const [postlist, setpostlist] = useState([])
  useEffect(() => {
    datapost(id)
      .then((res) => { setpostlist([res.data]) })
      .catch((err) => console.log(err))
  }, []);
  const [post, setpost] = useState({ title: '', post: '' })
  const handlechang = (e) => {setpost({ ...post, [e.target.name]: e.target.value})}
  const submit =(e)=>{
    e.preventDefault()
    updatepost(id,post)
    lod()
    onClose()
  }
  return (
    <div id="contaner" onClick={click} className='fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center'>
      <div className="relative">
        <div className="my-5 p-5  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          {postlist.map((item, i) => (
            <div key={i}>
              <div className="flex items-center justify-center">
                Edit Post
              </div>
              <div className="flex py-2 items-center">
                <img className="mr-2 w-[30px] h-[30px] rounded-full " src={item.image} />
                {item.user_name} {item.user_lastname}
              </div>
              {item.title}
              <br></br>
              {item.post}
            </div>
          ))}
        </div>
        <form onSubmit={submit} className="p-4  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <input className="placeholder:text-center text-center border-2 rounded-full"
            onChange={handlechang} name="title" placeholder="title" required />
          <input className="placeholder:text-center text-center border-2 rounded-full"
            onChange={handlechang} name="post" placeholder="post" required />
          <button type="submit" className="m-4 bg-blue-800 text-white w-28 h-8 rounded-full">Submit</button>
        </form>
    </div>
    </div>
  )
}
