import React from "react"
import { useWindowScroll } from "react-use"
import { theme } from "../../styles/theme"

import * as S from "./styles"

const Header = () => {
  const { y } = useWindowScroll()
  let headerHeight = y < 120 ? "94px" : "70px"
  let imageWidth = y < 120 ? "140px" : "115px"
  let transparentToWhite = y < 120 ? "transparent" : `${theme.white}`
  let whiteToDaintree = y < 120 ? `${theme.white}` : `${theme.daintree}`
  let daintreeToWhite = y < 120 ? `${theme.daintree}` : `${theme.white}`
  let boxShadow = y > 120 && `0px 2px 8px ${theme.daintree}`

  return (
    <S.Header
      style={{
        height: headerHeight,
        background: transparentToWhite,
        boxShadow: boxShadow,
      }}
    >
      <S.Container>
        <svg
          style={{ width: imageWidth, fill: whiteToDaintree }}
          xmlns="http://www.w3.org/2000/svg"
          width="233"
          height="99"
          viewBox="0 0 233 99"
        >
          <g>
            <path d="M90.33 40.187h20.047v23.356l8.558-8.547V40.187h19.933l.116 57.95-24.347-24.234L90.33 98.208v-58.02M90.33 32.18h20.08V17.827h8.558v6.017l-8.345 8.334h28.424c0-10.16.01-21.941.01-32.104H90.33v32.104M10.904 40.149h2.983v2.983h-2.983c-2.062 0-3.818.728-5.274 2.189-1.456 1.456-2.184 3.212-2.184 5.269 0 2.061.728 3.817 2.184 5.273 1.456 1.456 3.212 2.184 5.274 2.184h2.983v2.983h-2.983c-2.887 0-5.345-1.018-7.382-3.06-2.041-2.035-3.06-4.494-3.06-7.38 0-2.882 1.019-5.345 3.06-7.382 2.037-2.036 4.495-3.06 7.382-3.06zm6.678 20.881h-3.09l5.831-21.02h2.389l5.83 21.02h-3.084l-3.94-13.81-3.936 13.81zM28.914 40.15h5.966c2.057 0 3.813.728 5.274 2.189 1.456 1.456 2.184 3.212 2.184 5.269 0 2.061-.728 3.817-2.184 5.273-1.461 1.456-3.217 2.184-5.274 2.184h-2.983v5.966h-2.983V40.15zm2.983 2.983v8.95h2.983c1.232 0 2.286-.439 3.161-1.314.876-.876 1.314-1.93 1.314-3.161 0-1.232-.438-2.286-1.314-3.162-.875-.875-1.929-1.313-3.16-1.313h-2.984zm26.323-2.983h2.983v17.898h10.441v2.983H58.22V40.15zM75.34 61.03h-3.09l5.83-21.02h2.389l5.83 21.02h-3.084l-3.94-13.81-3.935 13.81zM56.729 60.892v-2.983h-10.44v-8.95h10.44v-2.982h-10.44v-2.983h10.44V40.01H43.305v20.882zM157.338 53.573V40.149h2.983v13.424c0 2.056-.728 3.818-2.184 5.274-1.461 1.455-3.217 2.183-5.274 2.183s-3.818-.728-5.274-2.183c-1.456-1.456-2.184-3.218-2.184-5.274V40.149h2.984v13.424c0 1.232.437 2.285 1.313 3.16.875.876 1.93 1.314 3.161 1.314 1.232 0 2.286-.438 3.161-1.313.876-.876 1.314-1.93 1.314-3.161zm8.185-10.441v8.95h2.983c1.232 0 2.286-.439 3.162-1.314.875-.876 1.313-1.93 1.313-3.161 0-1.232-.438-2.286-1.313-3.162-.876-.875-1.93-1.313-3.162-1.313h-2.983zm0 9.977v7.921h-2.983V40.15h5.966c2.057 0 3.813.728 5.274 2.189 1.456 1.456 2.184 3.212 2.184 5.269 0 2.061-.728 3.812-2.179 5.263-.774.779-1.634 1.35-2.58 1.716l6.444 6.444h-4.205l-7.92-7.92zm27.51 7.921h-3.089l5.83-21.02h2.39l5.83 21.02h-3.085l-3.94-13.81-3.935 13.81zm14.316-14.004V61.03h-2.984V40.01h2.41l8.031 14.143V40.149h2.983v20.953h-2.448l-7.992-14.076zm13.927 14.004h-3.09l5.831-21.02h2.389l5.83 21.02h-3.085l-3.94-13.81-3.935 13.81zM180.747 48.96h2.983c1.232 0 2.286.438 3.161 1.313.876.876 1.313 1.93 1.313 3.161 0 1.232-.437 2.286-1.313 3.162-.875.875-1.93 1.313-3.161 1.313h-2.983v-8.95zm-2.983 11.932h5.966c2.057 0 3.813-.728 5.274-2.189 1.456-1.456 2.184-3.212 2.184-5.269 0-2.061-.728-3.813-2.18-5.263a7.633 7.633 0 0 0-1.552-1.212c.5-.723.748-1.547.748-2.474 0-1.232-.437-2.286-1.313-3.161-.875-.876-1.93-1.314-3.161-1.314h-5.966v20.882zm2.983-14.915v-2.983h2.983c.407 0 .759.147 1.049.437.295.295.442.647.442 1.054 0 .407-.15.756-.442 1.049a1.435 1.435 0 0 1-1.05.443h-2.982z" />
          </g>
        </svg>
        <nav>
          <S.ToggleInput />
          <S.Toggle />
          <S.NavLinks style={{ color: whiteToDaintree }}>
            <S.NavLinksItem>
              <S.NavLinksLink to="/">Encontros</S.NavLinksLink>
            </S.NavLinksItem>
            <S.NavLinksItem>
              <S.NavLinksLink to="/">Mensagens</S.NavLinksLink>
            </S.NavLinksItem>
            <S.NavLinksItem>
              <S.NavLinksLink to="/">Ouça e Reflita</S.NavLinksLink>
            </S.NavLinksItem>
            <S.NavLinksItem>
              <S.NavLinksLink to="/">Contribua</S.NavLinksLink>
            </S.NavLinksItem>
            <S.NavLinksItem>
              <S.NavLinksLinkEspecial
                style={{ background: whiteToDaintree, color: daintreeToWhite }}
                to="/"
              >
                Conecte-se
              </S.NavLinksLinkEspecial>
            </S.NavLinksItem>
          </S.NavLinks>
        </nav>
      </S.Container>
    </S.Header>
  )
}

export default Header