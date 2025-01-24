import { Row, Col } from 'antd';
import StatCard from '@/views/home/components/StatCard';
import TableCard from '@/views/home/components/TableCard';
import CalendarCard from '@/views/home/components/CalendarCard';
import FormCard from '@/views/home/components/FormCard';

export default function HomeIndex() {
  return (
    <div>
      <StatCard />
      <Row gutter={12} style={{ margin: '12px 0' }}>
        <Col span={12}>
          <FormCard />
        </Col>
        <Col span={12}>
          <CalendarCard />
        </Col>
      </Row>

      <TableCard />
    </div>
  );
}
