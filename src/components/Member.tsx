export default function Member(props: {
  name: string
  bio: string
  image: string
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border-2 border-solid bg-[#F4F4F4] p-3 text-center">
      <img src={props.image} className="max-w-32 rounded-full" />
      <h3 className="m-0 mt-2 p-0 text-xl font-bold text-[#02C37E]">
        {props.name}
      </h3>
      <p className="m-0 mt-2 p-0 text-black">{props.bio}</p>
    </div>
  )
}
