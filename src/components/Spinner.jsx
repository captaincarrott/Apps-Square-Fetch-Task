import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Spinner = () => (
  <div>
    <Spin indicator={<LoadingOutlined style={{ fontSize: 48, }} spin/>}/></div>
);
export default Spinner;