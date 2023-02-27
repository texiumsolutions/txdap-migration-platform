import { Table } from 'antd';
import React from 'react';

const Test = ({colDefs,data}) => {
  return (
    <div>
     <Table columns={colDefs} dataSource={data}
     ></Table>
    </div>
  );
};

export default Test;