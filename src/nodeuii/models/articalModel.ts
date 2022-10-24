/* eslint-disable no-underscore-dangle */
import log4js from 'log4js';
import { FilterQuery } from 'mongoose';
import DbHelper from '../utils/dbHelper';

const mongoose = DbHelper.connect();
const logger = log4js.getLogger('globallog');

// 创建数据库
const ArticalSchema = new mongoose.Schema({
  id: Number,
  title: String,
  desc: String,
  imgUrl: String,
  content: String,
});

// 创建表
const ArticalCol = mongoose.model('artical', ArticalSchema);

const articalModel = {
  async add(item: jianShu.ArticalData): Promise<boolean | jianShu.ArticalData> {
    let result: boolean | jianShu.ArticalData = item;
    const findItem = await this.find({ id: item.id });
    if (findItem.length > 0) {
      // 如果状态变更执行更新操作
      this.findOneAndUpdate(item);
    } else {
      const writer = new ArticalCol(item);
      result = await new Promise(resolve => {
        writer.save(err => {
          if (err) {
            logger.error(JSON.stringify(err));
            resolve(false);
          }
        });
      });
    }
    return result;
  },

  /*
   * 更新一个artical信息
   */
  findOneAndUpdate(item: Partial<jianShu.ArticalData>,query: FilterQuery<jianShu.ArticalData> = { id: item.id }): void {
    ArticalCol.findOneAndUpdate(
      query,
      item,
      null,
      (err) => {
        if (err) {
          logger.error(JSON.stringify(err));
        }
      }
    );
  },

  update(query: FilterQuery<jianShu.ArticalData>,item: Partial<jianShu.ArticalData>): void {
    ArticalCol.updateOne(
      query,
      item,
      null,
      (err) => {
        if (err) {
          logger.error(JSON.stringify(err));
        }
      }
    );
  },

  
  find(query: FilterQuery<jianShu.ArticalData>): jianShu.ArticalData[] {
    return ArticalCol.find(query, err => {
      if (err) {
        logger.error(JSON.stringify(err));
      }
    });
  }
};

export default articalModel;
