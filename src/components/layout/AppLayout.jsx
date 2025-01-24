import { Layout, Breadcrumb, theme, ConfigProvider } from 'antd';
import { Outlet } from 'react-router';
import LayoutHeader from '@/components/layout/LayoutHeader';
import LayoutSide from '@/components/layout/LayoutSide';

const { Content } = Layout;

export default function AppLayout() {
  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimaryBg },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: colorPrimaryBg,
          },
        },
      }}
    >
      <Layout>
        <LayoutHeader />
        <Layout>
          <LayoutSide />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb
              items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
              style={{ margin: '16px 0' }}
            />
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
