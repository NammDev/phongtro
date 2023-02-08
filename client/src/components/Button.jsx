import { Link } from 'react-router-dom'

function Button({ className, color, to, href, left, right, children, ...passProp }) {
  const attributes = { ...passProp }
  let Comp = 'button'
  if (to) {
    attributes.to = to
    Comp = Link
  } else if (href) {
    attributes.href = href
    Comp = 'a'
  }

  return (
    <Comp
      {...attributes}
      className={`${color} font-normal hover:underline cursor-pointer h-[40px] rounded-[5px] inline-flex items-center justify-center px-[10px] text-[14px] ${className}`}
    >
      {left && <i className='inline-block mr-[5px] text-[16px] scale-125'>{left}</i>}
      {children}
      {right && <i className='inline-block ml-[5px] text-[16px] scale-125'>{right}</i>}
    </Comp>
  )
}

export default Button
