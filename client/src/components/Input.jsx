function Input({ label, type, name, value, onChange, autoComplete }) {
  return (
    <div className='mb-5'>
      <label className='block font-normal text-[0.9em] mb-[5px] uppercase'>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className='w-full h-[45px] border-none bg-[#e8f0fe] py-0 px-2.5 rounded-md text-[1.5em] font-bold'
      />
    </div>
  )
}

export default Input
