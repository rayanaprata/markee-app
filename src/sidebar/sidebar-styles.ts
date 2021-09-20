import styled, { css } from 'styled-components/macro'

export const Sidebar = styled.aside`${({ theme }) => css`
  background-color: ${theme.colors.black};
  width: 332px;
  display: flex;
  justify-content: center;
`}`

export const Button = styled.button`${({ theme }) => css`
  background-color: ${theme.colors.primary};
  border-radius: 3.38806px;
  border: none;
  width: 80%;
  height: 25px;
  color: ${theme.colors.lightBlack};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${theme.colors.gray};
  }

`}`
