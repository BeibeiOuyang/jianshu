import React, { Component } from 'react';
import { requestWriterFive } from '../../../utils/request';
import '../styles.less';

const { useState, useContext, useEffect } = React;

function numFilter(numStr: string) {
  const num = Number(numStr);
  if (num > 1000) {
    return `${(num / 1000).toFixed(0)  }k`;
  }
  return numStr;
}

const Writer: React.FunctionComponent = () => {
  const initWriterList = [
    {
      id: '',
      name: '',
      writeNum: '',
      star: '',
      imgUrl: '',
    },
  ];

  const [writerList, changeWriterList] = useState(initWriterList);

  useEffect(() => {
    // 获取 writerList 仅获取一次
    requestWriterFive((writerFive) => {
      changeWriterList(writerFive);
    });
  }, []);

  return (
    <div className="writer-wrapper">
      {writerList.map((item) => (
        <div className="writer-item" key={item.id}>
          <img alt="" src={item.imgUrl} />
          <div>
            <div className="name">{item.name}</div>
            <div className="follow">+关注</div>
          </div>
          <p>
            写了
            {numFilter(item.writeNum)}字 · {numFilter(item.star)}
            喜欢
          </p>
        </div>
      ))}
    </div>
  );
};

export default Writer;
