import React from 'react';
    import './index.css';
    import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';


const AntAvarar: React.FC = () => (
  <Space direction="vertical" size={16}>
    <Space wrap size={16}>
      <Avatar size={64} icon={<UserOutlined />} />
    </Space>
  </Space>
);

export default AntAvarar;