import React from 'react';
import { Avatar, List } from 'antd';


type ListType = {
    
    name:string;
    type:string
}

const data = [
  {
    title:'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const App: React.FC<ListType> = ({name,type}) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={name}
          description={type}
        />
      </List.Item>
    )}
  />
);

export default App;