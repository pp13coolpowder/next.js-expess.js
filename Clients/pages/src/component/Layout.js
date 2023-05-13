
export default function Layout(props) {
  return (
    <div className='bg-fixed bg-bottom  bg-Rectangle_96 fixed w-full h-full overflow-auto -z-50' >
      <div className="mb-32 grid justify-center overflow-x-hidden">{props.children}</div>
    </div>
  )
}
