import { App, Space, Button } from 'antd';
import homePng from '@/assets/icon/home.png';
import homeSvg from '@/assets/icon/home.svg';

export default function SettingIndex() {
  const { message } = App.useApp();

  function handleMessageShow(type) {
    message[type]('This is a message');
  }

  return (
    <div>
      <Space>
        <Button onClick={() => handleMessageShow('info')}>Message</Button>
        <Button
          variant="solid"
          color="green"
          onClick={() => handleMessageShow('success')}
        >
          Message
        </Button>
        <Button
          variant="solid"
          color="yellow"
          onClick={() => handleMessageShow('warning')}
        >
          Message
        </Button>
        <Button
          variant="solid"
          color="danger"
          onClick={() => handleMessageShow('error')}
        >
          Message
        </Button>
      </Space>

      <div style={{ marginTop: 24 }}>
        <img className="img-home" src={homeSvg} alt="home" title="img-svg" />
        <img className="img-home" src={homePng} alt="home" title="img-png" />
        <i className="icon-home svg" title="icon-svg"></i>
        <i className="icon-home png" title="icon-png"></i>
      </div>
    </div>
  );
}
