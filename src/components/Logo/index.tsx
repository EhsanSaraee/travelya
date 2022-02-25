import tw from "twin.macro"

const Logo = () => {
  return (
    <LogoContainer>TRAVELYA</LogoContainer>
  )
}

const LogoContainer = tw.div`
  font-family["ZCOOL KuaiLe"]
  font-black
  text-2xl
  text-white
`

export default Logo