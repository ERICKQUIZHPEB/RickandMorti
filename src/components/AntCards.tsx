import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const { Meta } = Card;

type CardType = {
    name: string;
    episode:string;
}

const AntCard:React.FC<CardType> = ({name, episode}:CardType) => (
    <Card 
        style={{ width: 200 }}
      
        actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}
    >
        <Meta
            title={name}
            description={episode}
        />
    </Card>
);

export default AntCard;
