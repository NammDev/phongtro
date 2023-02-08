import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { BiHeart, BiLogIn, BiUserPlus } from 'react-icons/bi'
import { GrAppsRounded } from 'react-icons/gr'
import Username from './Username'
import Button from '../../components/Button'
import { logout } from '../../redux/actions/auth'

function Header() {
  const dispatch = useDispatch()
  const nav = useNavigate()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  const handleLogOut = () => {
    try {
      dispatch(logout())
      nav('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-1100 my-0 mx-auto flex justify-between items-start'>
      <Link to='/' className='w-[240px] h-[70px] bg-logo bg-center bg-no-repeat bg-contain'></Link>
      <div className='mt-3 flex'>
        {isLoggedIn && <Username />}
        <Button color='text-black' className='mr-[5px] hover:text-black' left={<BiHeart />}>
          Yêu thích
        </Button>
        {!isLoggedIn ? (
          <>
            <Button
              color='text-black'
              className='mr-[5px] hover:text-black'
              to='/login'
              left={<BiLogIn />}
            >
              Đăng nhập
            </Button>
            <Button
              color='text-black'
              className='mr-[5px] hover:text-black'
              to='/register'
              left={<BiUserPlus />}
            >
              Đăng ký
            </Button>
          </>
        ) : (
          <Button
            color='text-black'
            className='mr-[5px] hover:text-black'
            onClick={handleLogOut}
            left={<GrAppsRounded />}
          >
            Quản lý tài khoản
          </Button>
        )}
        <Button
          className='ml-[10px] bg-tertiary'
          color='text-white hover:text-white'
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
