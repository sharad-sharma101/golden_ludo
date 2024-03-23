import React from 'react'

const SupportPage = () => {
  return (
    <div className='flex flex-col gap-4 h-[calc(100vh_-_200px)] items-center justify-center' >
        <img src="https://d37om4gxfn0aox.cloudfront.net/static-content/front/images/support.jpg" width="280px" alt="" />
        <div className="flex flex-col gap-2 text-sm text-blue-500 font-semibold items-center justify-center">
            <span>Whatsapp@ XXXXX-XXXXX</span>
            <span>Whatsapp@ XXXXX-XXXXX</span>
            <span>Whatsapp@ XXXXX-XXXXX</span>
        </div>
        <div className="flex gap-1 flex-col items-center justify-center">
            <p className='text-sm text-black font-normal' >Support timing is from 10:00 AM to 06:00 PM</p>
            <p className='text-sm text-black font-normal' >Monday to Saturday</p>
        </div>
    </div>
  )
}

export default SupportPage
