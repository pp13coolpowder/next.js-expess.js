import Swal from "sweetalert2"
import Menu_Navbar from "../src/component/Menu_Navbar"
import Layout from "../src/component/Layout"
import Footter from "../src/component/Footter"
import { useEffect, useState } from "react"
import { GETPOST, POST, auth, deletepost } from "../api/axios"
import Post_edit from "../src/element/Post_edit"

export default function Review() {
  const [Datauser, setDatauser] = useState([])
  const ID = Object.fromEntries(Datauser.map(ID => ['id', ID.user_id]))
  const name = Object.fromEntries(Datauser.map(name => ['name', name.user_name]))
  const lastname = Object.fromEntries(Datauser.map(lastname => ['lastname', lastname.user_lastname]))
  const image = Object.fromEntries(Datauser.map(image => ['image', image.image]))
  const GetUser = () => {
    const id = localStorage.jwt
    auth(id)
      .then(res => { setDatauser([res.data]) })
      .catch(err => { console.log(err) })
  }
  useEffect(() => {
    GetUser()
  }, [])
  // post
  const [listPost, setlistPost] = useState([])
  const GetData = () => {
    GETPOST()
      .then(res => { setlistPost(res.data) })
      .catch(err => { console.log(err) })
  }
  useEffect(() => {
    GetData()
  }, [])
  const value = { title: '', post: '', id_user: '', user_name: '', user_lastname: '', image: '' }
  const [post, setpost] = useState(value)
  const handlechang = (e) => {
    setpost({ ...post, [e.target.name]: e.target.value, id_user: ID.id, user_name: name.name, user_lastname: lastname.lastname, image: image.image })
  }
  const submitPost = (e) => {
    e.preventDefault()
    try {
      POST(post)
      setpost(value)
      GetData()
      GetData()
      GetData()
    } catch (error) {
      console.log(error)
    }
  }
  // popup
  const [idpost, setidpost] = useState()
  const [popup, setpopup] = useState(false)
  const handclose = () => { setpopup(false), GetData(), GetData() }

  return (
    <div>
      <Menu_Navbar />
      <Layout>
        <form onSubmit={submitPost} className="w-96 my-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          {Datauser.map((item, i) => (
            <div key={i} className="flex space-x-2 text-xl p-2">
              <img className="w-[30px] h-[30px] rounded-full " src={item.image} />
              <div>{item.user_name}</div>
              <div>{item.user_lastname}</div>
            </div>
          ))}
          <input className="placeholder:text-center text-center border-2 rounded-full"
            onChange={handlechang} name="title" value={post.title} placeholder="title" required />
          <input className="placeholder:text-center text-center border-2 rounded-full"
            onChange={handlechang} name="post" value={post.post} placeholder="post" required />
          <button type="submit" className="m-4 bg-blue-800 text-white w-28 h-8 rounded-full">Send</button>
        </form>
        {listPost.sort((a, b) => b._id.localeCompare(a._id)).map((item, i) => (
          <div key={i} className="relative mb-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex justify-between">
              <div className="flex py-2 items-center">
                <img className="mr-2 w-[30px] h-[30px] rounded-full " src={item.image} />
                {item.user_name} {item.user_lastname}
              </div>
              {(idpost != item._id) && (
                <button onClick={() => { if (ID.id === item.id_user) { setidpost(item._id) } }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>)}
              {(idpost == item._id) && (
                <div className="absolute right-6 py-3 flex flex-col space-y-1">
                  <button onClick={() => { setidpost('') }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button onClick={() => { setpopup(true); setidpost(item._id) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </button>
                  <button onClick={() => {
                    Swal.fire(
                      'Good job!',
                      'Delete success',
                      'success'
                    ), deletepost(item._id), GetData(), GetData()
                  }} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            {item.title}
            <br></br>
            {item.post}
          </div>
        ))}
        <Post_edit onClose={handclose} visible={popup} id={idpost} lod={GetData} />
      </Layout>
      <Footter />
    </div>
  )
}
