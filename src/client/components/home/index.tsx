import React, { Component } from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
// import {BackTop} from '../../common/tools'
import './styles.less';

const Home: React.FunctionComponent = () => (
    <div className="home-wrapper">
      <div className="home-left">
        <img
          className="banner-img"
          src="https://upload.jianshu.io/admin_banners/web_images/5067/5c739c1fd87cbe1352a16f575d2df32a43bea438.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          alt="封面"
        />
        <List />
      </div>
      <div className="home-right">
        <Recommend />
        <Writer />
      </div>
    </div>
  );

export default Home;
