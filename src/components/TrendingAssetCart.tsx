
type TrendingProps = {
  icon: string,
  title: string,
  current:number,
  returns: number
}

function TrendingAssetCart(props:TrendingProps) {
  return (
    <div className='relative flex items-center justify-center'>
        <img draggable="false" src={props.icon} alt="bitcoin" className=' absolute -top-9 sm:-top-10 w-[31%] sm:w-[35%]' />
      <img draggable="false" src="/assets/curvybox.svg" alt="boximage"  />
      <div className='absolute top-20 sm:top-12  w-full flex items-center justify-center flex-col '>
        <h1 className=' font-semibold text-xs text-[#737BAE] leading-8 opacity-90 '>{props.title}</h1>
        <div className='bg-[#14172B] rounded-[17px] text-[#ECF0FF] opacity-90 text-base font-semibold leading-8 py-1 w-[90%] text-center'>
          ${props.current} <span className={`${props.returns> 0 ?"text-[#00FFA3]":'text-red-600'} opacity-90 text-xs ml-3`}>{props.returns > 0 ? `+${props.returns}`: props.returns}%</span>
        </div>
        <h1 className='text-[#5A5F7D] opacity-90 text-xs font-semibold leading-8'>Price</h1>

        <div className='bg-[#14172B] rounded-[17px] text-[#ECF0FF] opacity-90 text-base font-semibold leading-8 py-1 w-[90%] text-center'>
          $60,000
        </div>
        <h1 className=' text-[#5A5F7D] opacity-90 leading-8 font-semibold text-xs'>TVL</h1>
        <div className='flex items-center justify-center gap-5 bg-[#14172B] rounded-[29.5px] py-2 w-[60%]'>
          <img draggable="false" src="/assets/sol.svg" alt="icon" />
          <img draggable="false" src="/assets/eth.svg" alt="icon" />
          <img draggable="false" src="/assets/bnb.svg" alt="icon" />
        </div>
      <h1 className=' text-[#5A5F7D] opacity-90 leading-8 font-semibold text-xs'>Popular pairs</h1>
      </div>
      </div>
  )
}

export default TrendingAssetCart