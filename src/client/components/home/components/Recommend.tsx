import React, { Component } from 'react';
import { recommendList } from '../../../constants/clientData';
import '../styles.less';

const Recommend: React.FunctionComponent = () => (
  <div className="recommend-wrapper">
    {recommendList.map((item) => (
      <div className="recommend-item" key={item.id} />
    ))}
  </div>
);

export default Recommend;
