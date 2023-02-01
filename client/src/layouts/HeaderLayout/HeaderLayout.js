import Header from '../components/Header'
import Navi from '../components/Navi'

function HeaderOnly({ children }) {
  return (
    <>
      <Header />
      <Navi />
      {children}
    </>
  )
}

export default HeaderOnly
