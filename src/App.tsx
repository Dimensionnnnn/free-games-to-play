import { Layout } from 'antd'
import HeaderCustom from './components/Header/Header'
import AppRouter from './components/AppRouter/AppRouter'


function App() {
  return (
    <Layout>
      <HeaderCustom>
        Hello
      </HeaderCustom>
      <AppRouter/>
    </Layout>
  )
}

export default App
