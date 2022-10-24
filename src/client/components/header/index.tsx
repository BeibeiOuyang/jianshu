import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, CalendarOutlined } from '@ant-design/icons';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { tabKeyRouterMap } from '../../constants';
import './styles.less';

const { useState, useEffect, useContext } = React;

const Header: React.FunctionComponent<RouteComponentProps> = ({
  history,
  location,
}) => {
  const selectedPage = tabKeyRouterMap[location.pathname];

  useEffect(() => {}, []);

  // 根据理由选中对应 menu 项
  const defaultPage = [selectedPage];

  // 路由切换
  const clickMenu = ({ key }: { key: string }) => {
    if (selectedPage !== key) console.log('change route');
    // history.push(tabKeyRouterMap[key]);
  };

  return (
    <div className="header-wrapper">
      <div className="logo" key="logo" />
      <Menu
        className="menu"
        theme="light"
        mode="horizontal"
        selectedKeys={defaultPage}
        onClick={clickMenu}
        style={{ lineHeight: '56px' }}
      >
        <Menu.Item key="home" className="menu-item ">
          首页
        </Menu.Item>
        <Menu.Item key="download" className="menu-item ">
          下载APP
        </Menu.Item>
        <Menu.Item key="member" className="menu-item ">
          会员
        </Menu.Item>
        <Menu.Item key="it" className="menu-item ">
          IT技术
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(Header);
