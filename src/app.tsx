import { Sidebar } from 'sidebar'
import { Content } from 'content'
import * as S from './app-styles'

function App () {
  return (
    <S.Container>
      <Sidebar />
      <Content />
    </S.Container>
  )
}

export { App }
