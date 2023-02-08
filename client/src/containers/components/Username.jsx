import Avatar from '../../components/Avatar'

function Username() {
  return (
    <a className='inline-flex mr-[50px] items-center text-charcoal'>
      <Avatar />
      <div>
        <span className='block mb-[3px] max-[300px] truncate text-[1.2em]'>
          Xin chào, <strong>namkhanh</strong>
        </span>
        <span className='text-[0.9em]'>
          Mã tài khoản: <strong>127442</strong>. TK Chính: <strong>0 VNĐ</strong>
        </span>
      </div>
    </a>
  )
}

export default Username
