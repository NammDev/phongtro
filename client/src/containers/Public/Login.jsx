import { Button, Input } from '../../components'

function Login() {
  return (
    <div className='p-[30px] pb-[100px] max-w-[600px] mx-auto my-0 bg-white border border-[#dedede] rounded-lg'>
      <h1 className='text-[28px] font-bold mb-[15px]'>Đăng nhập</h1>
      <div>
        <Input type='text' label='số điện thoại' />
        <Input type='password' label='Mật khẩu' />
        <Button to='/'>Đăng nhập</Button>
        <div>
          <div>Bạn quên mật khẩu?</div>
          <div>Tạo tại khoản mới</div>
        </div>
      </div>
    </div>
  )
}

export default Login
