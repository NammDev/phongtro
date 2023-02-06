import { Link } from 'react-router-dom'

function Button({ className, color, to, left, right, children }) {
  return (
    <Link
      to={to}
      className={`${color} font-normal hover:underline cursor-pointer h-[40px] rounded-[5px] inline-flex items-center justify-center px-[10px] text-[14px] ${className}`}
    >
      {left && <i className='inline-block mr-[5px] text-[16px]'>{left}</i>}
      {children}
      {right && <i className='inline-block ml-[5px] text-[16px]'>{right}</i>}
    </Link>
  )
}

export default Button
