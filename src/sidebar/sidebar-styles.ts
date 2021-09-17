import styled, { css } from 'styled-components/macro'

export const Sidebar = styled.aside`${({ theme }) => css`
  background-color: ${theme.colors.black};
  width: 332px;
`}`
