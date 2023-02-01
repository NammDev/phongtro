import Button from '../../components/Button'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { BiHeart, BiLogIn, BiLogOut } from 'react-icons/bi'

function Header() {
  return (
    <div className='w-1100 my-0 mx-auto flex justify-between items-start'>
      <a href='/' className='w-[240px] h-[70px] bg-logo bg-center bg-no-repeat bg-contain'></a>
      <div className='mt-3 flex'>
        <Button className='mr-[5px]' to={'/'} left={<BiHeart />}>
          Yêu thích
        </Button>
        <Button className='mr-[5px]' to={'/'} left={<BiLogIn />}>
          Đăng nhập
        </Button>
        <Button className='mr-[5px]' to={'/'} left={<BiLogOut />}>
          Đăng ký
        </Button>
        <Button
          className='ml-[10px] bg-tertiary'
          color='white'
          to={'/'}
          right={<IoMdAddCircleOutline />}
        >
          Đăng tin mới
        </Button>
      </div>
    </div>
  )
}

export default Header
