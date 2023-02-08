import { Button, Input } from '../../components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { login } from '../../redux/actions/auth'
import { useNavigate } from 'react-router-dom'

function Login() {
  const dispatch = useDispatch()
  const nav = useNavigate()

  const [inputs, setInputs] = useState({
    phone: '',
    password: '',
  })
  const { phone, password } = inputs
  const onChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      dispatch(login(inputs))
      nav('/')
    } catch (error) {}
  }

  return (
    <div className='p-[30px] pb-[100px] max-w-[600px] mx-auto my-0 bg-white border border-[#dedede] rounded-lg'>
      <h1 className='text-[28px] font-bold mb-[15px]'>Đăng nhập</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          label='số điện thoại'
          name='phone'
          value={phone}
          onChange={onChange}
          autoComplete='on'
        />
        <Input
          type='password'
          label='Mật khẩu'
          name='password'
          value={password}
          onChange={onChange}
          autoComplete='on'
        />
        <Button className='bg-[#3961fb] text-white w-full h-[45px] mb-[30px] font-bold hover:text-white'>
          Đăng nhập
        </Button>
      </form>
      <div className='mb-5 flex justify-between'>
        <Link to='/'>Bạn quên mật khẩu?</Link>
        <Link to='/register'>Tạo tại khoản mới</Link>
      </div>
    </div>
  )
}

export default Login
