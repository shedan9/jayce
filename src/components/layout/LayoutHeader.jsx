import {
  Layout,
  Menu,
  Flex,
  Avatar,
  Dropdown,
  Button,
  ConfigProvider,
  theme,
} from 'antd';
import { UserOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';
import logo from '@/assets/img/logo.svg';
import { useAppStore } from '@/store';
import { useNavigate, useLocation } from 'react-router';

const { Header } = Layout;
const { useToken } = theme;

const useStyle = createStyles(({ token }, { theme }) => ({
  logo: {
    height: 36,
  },
  title: {
    fontSize: 32,
    color: theme === 'dark' ? token.colorText : token.colorPrimary,
  },
}));

const items1 = [
  { key: '/', label: 'Home' },
  { key: '/about', label: 'About' },
  { key: '/setting', label: 'Setting' },
].map((item) => ({
  key: item.key,
  label: item.label,
}));

const items = [
  {
    key: '1',
    label: 'logout',
  },
];

export default function LayoutHeader() {
  const { token } = useToken();
  const navigate = useNavigate();
  const location = useLocation();
  const themeState = useAppStore((state) => state.theme);
  const changeTheme = useAppStore((state) => state.changeTheme);
  const { styles } = useStyle({ theme: themeState });

  const isLight = themeState !== 'dark';
  let selectedKeys = [location.pathname];

  function handleThemeChange() {
    changeTheme(isLight ? 'dark' : 'light');
  }

  function handleSelect({ key }) {
    navigate(key);
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: token.colorPrimaryBg,
            horizontalItemHoverBg: token.colorPrimaryBgHover,
          },
        },
      }}
    >
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Flex align="center">
          <Flex
            gap={8}
            align="center"
            style={{ marginRight: 64, cursor: 'pointer' }}
          >
            <img className={styles.logo} alt="logo" src={logo} />
            <h1 className={styles.title}>Jayce</h1>
          </Flex>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={selectedKeys}
            items={items1}
            style={{ width: 300 }}
            onSelect={handleSelect}
          />
        </Flex>

        <Flex align="center">
          <Button
            type="text"
            style={{ marginRight: 24, height: 48 }}
            onClick={handleThemeChange}
          >
            {isLight ? (
              <SunOutlined style={{ fontSize: 24 }} />
            ) : (
              <MoonOutlined style={{ fontSize: 24 }} />
            )}
          </Button>

          <Dropdown
            placement="bottom"
            menu={{
              items,
            }}
          >
            <Avatar size={48} icon={<UserOutlined />} />
          </Dropdown>
        </Flex>
      </Header>
    </ConfigProvider>
  );
}
