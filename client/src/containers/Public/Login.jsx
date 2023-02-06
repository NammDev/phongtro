import { Button, Input } from '../../components'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='p-[30px] pb-[100px] max-w-[600px] mx-auto my-0 bg-white border border-[#dedede] rounded-lg'>
      <h1 className='text-[28px] font-bold mb-[15px]'>Đăng nhập</h1>
      <div>
        <Input type='text' label='số điện thoại' />
        <Input type='password' label='Mật khẩu' />
        <Button
          to='/'
          className='bg-[#3961fb] text-white w-full h-[45px] mb-[30px] font-bold hover:text-white'
        >
          Đăng nhập
        </Button>
        <div className='mb-5 flex justify-between'>
          <Link to='/'>Bạn quên mật khẩu?</Link>
          <Link to='/register'>Tạo tại khoản mới</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
