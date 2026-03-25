import { useState } from 'react';
import { App, Space, Button, Modal, Drawer } from 'antd';
import homePng from '@/assets/icon/home.png';
import homeSvg from '@/assets/icon/home.svg';

export default function SettingIndex() {
  const { message } = App.useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleMessageShow(type) {
    message[type]('This is a message');
  }

  function handleModalOpen() {
    setModalOpen(true);
  }

  function handleDrawerOpen() {
    setDrawerOpen(true);
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

      <div className="mt-[24px]">
        <Space>
          <Button type="primary" onClick={handleModalOpen}>
            Modal
          </Button>
          <Button type="primary" onClick={handleDrawerOpen}>
            Drawer
          </Button>
        </Space>
      </div>

      <div className="mt-[24px]">
        <img className="img-home" src={homeSvg} alt="home" title="img-svg" />
        <img className="img-home" src={homePng} alt="home" title="img-png" />
        <i className="icon-home svg" title="icon-svg"></i>
        <i className="icon-home png" title="icon-png"></i>
      </div>

      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      <Drawer
        title="Basic Drawer"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}
