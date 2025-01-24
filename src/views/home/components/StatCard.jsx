import { LikeOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

export default function StatCard() {
  return (
    <Card hoverable>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
        </Col>
        <Col span={12}>
          <Statistic title="Unmerged" value={93} suffix="/ 100" />
        </Col>
      </Row>
    </Card>
  );
}
