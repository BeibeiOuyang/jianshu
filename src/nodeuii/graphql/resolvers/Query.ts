// import { ObjectID } from 'mongodb'
import writerModel from '../../models/writerModel';
import articalModel from '../../models/articalModel'
import _ from 'lodash'

interface IdDetail {
  id: number;
}

export default {
  /* 
  * 右侧writer
  */
  writerFive: async (
  ): Promise<jianShu.WriterData[]> => {
    let writerFive;
    if (process.env.NODE_ENV === 'test') {
      writerFive = [
        {
          id: 1,
          name: 'is ok',
          writeNum: 1213,
          star: 1234,
          imgUrl: 'String',
        }
      ];
    } else {
      // 查找前5个收藏最多的writer
      writerFive = await writerModel.find().sort({star: -1}).limit(5);
      
    }
    return writerFive;
  },
  /* 
  * 左侧下部分，文章缩写列表
  */
  // artical: async (
  // ): Promise<jianShu.ArticalData[]> => {
  //   let articalList;
  //   if (process.env.NODE_ENV === 'test') {
  //     articalList = [
  //       {
  //         id: 1,
  //         title: 'test artical abbr title',
  //         desc: 'test artical abbr desc',
  //         imgUrl: 'test artical abbr imgurl',
  //       }
  //     ];
  //   } else {

  //     articalList = await articalModel.find({}).limit(3);
  //   }
  //   return articalList;
  // },
  artical: async (
    _parent: never, // 不使用第一个变量
    args: IdDetail
    ): Promise<jianShu.ArticalData[]> => {
      let articalList;
      if (process.env.NODE_ENV === 'test') {
        articalList = [
          {
            id: 1,
            title: 'test artical abbr title',
            desc: 'test artical abbr desc',
            imgUrl: 'test artical abbr imgurl',
          }
        ];
      } else {
        if (args.id){
          articalList = await articalModel.find({id: args.id}).limit(3);
        }
        else{articalList = await articalModel.find({}).limit(3);}
      }
      return articalList;
    },
  
};
