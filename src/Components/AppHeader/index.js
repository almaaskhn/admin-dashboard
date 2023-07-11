import React, { useEffect, useState } from 'react'
import { Badge, Image, Space, Typography, Drawer, List } from 'antd';
import { BellFilled, MailOutlined } from '@ant-design/icons'
import { getComments, getOrders } from '../../API';
function AppHeader() {
  const[comments, setComments] = useState([]);
  const[orders, setOrders] = useState([]);
  const[commentsOpen, setCommentsOpen] = useState(false);
  const[notifsOpen, setNotifsOpen] = useState(false);
  useEffect(()=>{
getComments().then(res=>{
setComments(res.comments)
})
  },[])
  useEffect(()=>{
    getOrders().then(res=>{
    setOrders(res.products)
    })
      },[])
  return (
    <div className='AppHeader'>
    <Image width = {40} src='https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'></Image>
   <Typography.Title>Almaas's Dashboard</Typography.Title>
    <Space> <Badge count={comments.length} dot>
      <MailOutlined style={{fontSize: 24}} onClick={()=>setCommentsOpen(true)}/>
      </Badge>
      <Badge count={orders.length}>
      <BellFilled style={{fontSize: 24}} onClick={()=>setNotifsOpen(true)}/>
      </Badge>
    </Space>
    <Drawer title="Comments" open={commentsOpen} onClose={()=>{setCommentsOpen(false)}}
    maskClosable
    >
      <List dataSource={comments} renderItem={(item)=>{return(<List.Item>{item.body}</List.Item>);}}></List>
    </Drawer>
    <Drawer title="Notifications" open={notifsOpen} onClose={()=>{setNotifsOpen(false)}}
    maskClosable
    >
      <List dataSource={orders} renderItem={(item)=>{return(<List.Item>{item.title} has been ordered</List.Item>);}}></List>
    </Drawer>
    </div>
  );
}

export default AppHeader;