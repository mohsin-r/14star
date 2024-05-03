export default function Service(props: { title: string; content: string }) {
  return (
    <div className="rounded-xl border-2 border-solid border-[#02C37E] bg-[#263237] p-3 text-center">
      <h3 className="m-0 p-0 text-xl font-bold text-[#02C37E]">
        {props.title}
      </h3>
      <p className="m-0 mt-2 p-0">{props.content}</p>
    </div>
  )
}
