import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, DownOutlined } from '@ant-design/icons';
import { Image, Typography, FloatButton, Button, Flex, Avatar, Card, Col, Row, Layout, Menu, theme, Anchor, Dropdown, Space } from 'antd';
import Antd1 from './../../assets/img/antd1.jpg'
import Antd2 from './../../assets/img/antd2.jpg'
import Antd3 from './../../assets/img/antd3.jpg'
import Antd4 from './../../assets/img/antd4.jpg'
import Antd5 from './../../assets/img/antd5.jpg'
import Aavtar from './../../assets/img/aavtar.jpg'
import './style.css'

const { Header, Sider, Content } = Layout;

const { Meta } = Card;

const cardData = [
    { img: Antd1 },
    { img: Antd2 },
    { img: Antd3 },
    { img: Antd4 }
]

const cardStyle = {
    width: 620,
};
const imgStyle = {
    display: 'block',
    width: 273,
};

const flexCard = [
    {}, {}
]
const Text = [
    {}, {}, {}
]

const items = [
    { label: <a href="https://www.antgroup.com">menu 1</a>, key: '0', },
    { label: <a href="https://www.aliyun.com">menu 2</a>, key: '1', },
    { type: 'divider', },
    { label: 'menu 3', key: '3', },
];

const AntDesign = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <div className='flot-btn'>
            <div style={{textAlign:'center', fontSize:'24px', fontWeight:'600', background:'#f7dcdc'}}>Ant Design (Components)</div>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'nav 1',
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'nav 2',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer, }}>
                        <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setCollapsed(!collapsed)} style={{ fontSize: '16px', width: 64, height: 64, }} />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG, }}>

                        {/* grid */}
                        <Row style={{ margin: '0 100px' }}>
                            {cardData.map((card) =>
                                <Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Card className='card-w' style={{ width: '304px', height: '397px' }}
                                        cover={
                                            <Image alt="img" src={card.img} />
                                        }
                                        actions={[
                                            <SettingOutlined key="setting" />,
                                            <EditOutlined key="edit" />,
                                            <EllipsisOutlined key="ellipsis" />,
                                        ]}>
                                        <Meta avatar={<Avatar src={Aavtar} style={{ height: '50px', width: '50px' }} />}
                                            title="Card title"
                                            description="This is the description." />
                                    </Card>
                                </Col>
                            )}
                        </Row>

                        {/* button */}
                        <Flex style={{ marginTop: '50px', justifyContent: 'center' }} gap="small" wrap="wrap">
                            <Button className='first-btn' style={{ padding: '21px 63px' }} type="primary">Primary Button</Button>
                            <Button style={{ padding: '21px 63px' }}>Default Button</Button>
                            <Button style={{ padding: '21px 63px' }} type="dashed">Dashed Button</Button>
                            <Button style={{ padding: '21px 52px' }} type="text">Text Button</Button>
                            <Button style={{ padding: '21px 52px' }} type="link">Link Button</Button>
                        </Flex>

                        {/* flex */}
                        <div className='flex' style={{ margin: '50px 0', gap: '20px'}}>
                            {flexCard.map((flex) =>
                                <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden', } }}>
                                    <Flex justify="space-between">
                                        <img className='img-border' alt="img" src={Antd5} style={imgStyle} />
                                        <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32, }}>
                                            <Typography.Title level={3}>
                                                “antd is an enterprise-class UI design language and React UI library.”
                                            </Typography.Title>
                                            <Button className='card-btn' type="primary" href="https://ant.design" target="_blank">Get Started</Button>
                                        </Flex>
                                    </Flex>
                                </Card>
                            )}
                        </div>

                        {/* Dropdown-menu */}
                        <Dropdown menu={{ items, }} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}><Space style={{ position: 'relative', color: 'red', margin: '10px 0' }}>Click me<DownOutlined className='next-icon' /></Space></a>
                        </Dropdown>

                        {/* anchor and Typography */}
                        <Row>
                            <Col span={21}>
                                <div id="part-1" style={{ background: '#ffeded', }}>
                                    {Text.map(() =>
                                        <Typography style={{ fontSize: '24px', color: 'burlywood', padding: '20px', }}>
                                            Ant Design, a design language for background applications, is refined by Ant UED Team. AntDesign, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                                            Design, a design language for background applications, is refined by Ant UED Team.
                                        </Typography>
                                    )}
                                </div>
                                <div id="part-2" style={{ background: '#909090', }}>
                                    {Text.map(() =>
                                        <Typography style={{ fontSize: '24px', color: 'white', padding: '20px', }}>
                                            Ant Design, a design language for background applications, is refined by Ant UED Team. AntDesign, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                                            Design, a design language for background applications, is refined by Ant UED Team.
                                        </Typography>
                                    )}
                                </div>
                                <div id="part-3" style={{ background: '#ffeded', }}>
                                    {Text.map(() =>
                                        <Typography style={{ fontSize: '24px', color: 'burlywood', padding: '20px', }}>
                                            Ant Design, a design language for background applications, is refined by Ant UED Team. AntDesign, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                                            Design, a design language for background applications, is refined by Ant UED Team.
                                        </Typography>
                                    )}
                                </div>
                            </Col>
                            <Col span={3}>
                                <Anchor
                                    items={[
                                        { key: 'part-1', href: '#part-1', title: 'Part 1', },
                                        { key: 'part-2', href: '#part-2', title: 'Part 2', },
                                        { key: 'part-3', href: '#part-3', title: 'Part 3', },
                                    ]}
                                />
                            </Col>
                        </Row>

                        {/* scroll-btn */}
                        <FloatButton.BackTop />

                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}
export default AntDesign;