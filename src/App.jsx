import RouterRender from '@/router/index.jsx';
import { App as AntdApp, ConfigProvider, theme } from 'antd';
import { useAppStore } from '@/store'
import dayjs from 'dayjs';
import zhCN from 'antd/es/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { BrowserRouter } from 'react-router';

dayjs.locale('zh-cn');

export default function App() {
  const themeState = useAppStore((state) => state.theme);

  const algorithm = themeState === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm;

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm,
        cssVar: true,
        hashed: false,
      }}
    >
      <AntdApp>
        <BrowserRouter>
          <RouterRender />
        </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  );
}
