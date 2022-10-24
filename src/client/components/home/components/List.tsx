import React, { Component, useEffect, useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router';
import { requestAritcal } from '../../../utils/request'

import '../styles.less'

const ArticalList: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  const initArticalList = [{
    id: '',
    title: '',
    desc: '',
    imgUrl: '',
    content: '',
  }]

  const [articleList, changeArticalList] = useState(initArticalList);

  useEffect(() => {
    // 获取 articalList
    requestAritcal((artical) => {
      changeArticalList(artical);
    })
  },[])

  const selectProvice = (e: any) => {
    history.push(`/detail/${e.currentTarget.getAttribute("artical-id")}`)
  }

  return(
    <ul className="list-wrapper">
      {articleList.map((item, index) => {
        return (
          <div 
          onClick={(e)=>selectProvice(e)}
          artical-id={item.id}
          key={item.id}
          >
            <li className="list-item" >
              <div className="list-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              {item.imgUrl && (
                <img alt="img" src={item.imgUrl} />
              )}
            </li>
         </div>
        )
      })}
      {/* <div className="load-more" onClick={() => getMoreList(page)}>更多文字</div> */}
      <div className="load-more">更多文字</div>
    </ul>
  )
}

export default withRouter(ArticalList)
