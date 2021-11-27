import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 20px;
line-height: 20px;
padding: 10px;

&:hover img {
  transform: rotate(20deg);
}
`

const Logo = () => {
  const logoImg = `/images/icon${useColorModeValue('-light', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <img src={logoImg} width={20} height={20} alt="Website logo" />
          <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontWeight="bold" ml={3}>
            Nikolaj Jensen
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
