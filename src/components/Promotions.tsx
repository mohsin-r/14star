import promotion1 from 'assets/promotion1.jpg'
import promotion2 from 'assets/promotion2.png'
//@ts-expect-error stupid ts
import ModalImage from 'react-modal-image'

export default function Promotions() {
  return (
    <div
      id="promotions"
      className="flex flex-col items-center bg-[#FFFFFF] p-5"
    >
      <h1 className="m-0 px-0 text-5xl font-bold text-[#02C37E]">Promotions</h1>
      <div className="my-5 grid grid-flow-row auto-rows-fr gap-4 sm:grid-cols-2 lg:w-[70%]">
        <ModalImage
          small={promotion2}
          medium={promotion2}
          large={promotion2}
          className="w-full max-w-[200px] rounded-lg border-4 border-solid border-[#02C37E]"
        />
        <ModalImage
          small={promotion1}
          medium={promotion1}
          large={promotion1}
          className="w-full max-w-[200px] rounded-lg border-4 border-solid border-[#02C37E]"
        />
      </div>
    </div>
  )
}
