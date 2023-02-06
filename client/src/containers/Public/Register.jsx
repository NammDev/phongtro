import { Button, Input } from '../../components'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='p-[30px] pb-[100px] max-w-[600px] mx-auto my-0 bg-white border border-[#dedede] rounded-lg'>
      <h1 className='text-[28px] font-bold mb-[15px]'>Tạo tài khoản mới</h1>
      <div>
        <Input type='text' label='Họ tên' />
        <Input type='text' label='số điện thoại' />
        <Input type='password' label='tạo Mật khẩu' />
        <Button
          to='/'
          className='bg-[#3961fb] text-white w-full h-[45px] mb-[30px] font-bold hover:text-white'
        >
          Tạo tài khoản
        </Button>
        <div className='mb-5'>
          <p className='py-[5px] mb-[14px] leading-normal'>
            Bấm vào nút đăng ký tức là bạn đã đồng ý với <Link to='/'>quy định sử dụng</Link> của
            chúng tôi
          </p>
          <p className='py-[5px] mb-[14px] leading-normal'>
            Bạn đã có tài khoản? <Link to='/login'>Đăng nhập ngay</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register