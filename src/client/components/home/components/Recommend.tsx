import React, { Component } from 'react';
import { recommendList } from '../../../constants/clientData';
import '../styles.less';

const Recommend: React.FunctionComponent = () => {
  return (
    <div className="recommend-wrapper">
      {recommendList.map((item) => {
        return <div className="recommend-item" key={item.id}></div>;
      })}
    </div>
  );
};

export default Recommend;
