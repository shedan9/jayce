import RouterRender from '@/router/index.jsx';
import { App as AntdApp, ConfigProvider, theme } from 'antd';
import { useAppStore } from '@/store';
import zhCN from 'antd/es/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import './styles/global.css';
import { BrowserRouter } from 'react-router';
import { StyleProvider } from '@ant-design/cssinjs';

export default function App() {
  const themeState = useAppStore((state) => state.theme);
  const primaryColor = useAppStore((state) => state.primaryColor);

  const algorithm =
    themeState === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm;

  return (
    <StyleProvider layer>
      <ConfigProvider
        locale={zhCN}
        theme={{
          algorithm,
          hashed: false,
          zeroRuntime: true,
          token: {
            colorPrimary: primaryColor,
          },
        }}
      >
        <AntdApp>
          <BrowserRouter>
            <RouterRender />
          </BrowserRouter>
        </AntdApp>
      </ConfigProvider>
    </StyleProvider>
  );
}
