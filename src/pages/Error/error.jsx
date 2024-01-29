import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledContainer = styled.div`
  text-align: center;
`

const StyledLink = styled(Link)`
  color: #FF6060;
  display: block;
  font-size: 14px;
  @media all and (min-width: 1100px) {
    font-size: 18px;
  }
`

const StyledTitle = styled.h1`
  color: #FF6060;
  font-size: 96px;
  font-weight: 700;
  margin:0;
  @media all and (min-width: 1100px) {
    font-size: 288px;
  }
`

const StyledParagraph = styled.p`
  color: #FF6060;
  font-size: 18px;
  @media all and (min-width: 1100px) {
    font-size: 36px;
  }
`

const Error = () => {
  return (
    <StyledContainer>
      <StyledTitle>404</StyledTitle>
      <StyledParagraph>
        Oups! La page que vous demandez n'existe pas
      </StyledParagraph>
      <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
    </StyledContainer>
  )
}

export default Error
