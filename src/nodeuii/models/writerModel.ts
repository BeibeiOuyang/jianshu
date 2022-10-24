/* eslint-disable no-underscore-dangle */
import log4js from 'log4js';
import { FilterQuery } from 'mongoose';
import DbHelper from '../utils/dbHelper';

const mongoose = DbHelper.connect();
const logger = log4js.getLogger('globallog');

// 创建数据库
const WriterSchema = new mongoose.Schema({
  id: Number,
  name: String,
  writeNum: Number,
  star: Number,
  imgUrl: String,
});

// 创建表
const WriterCol = mongoose.model('writer', WriterSchema);

const writerModel = {
  async add(item: jianShu.WriterData): Promise<boolean | jianShu.WriterData> {
    let result: boolean | jianShu.WriterData = item;
    const findItem = await this.find({ id: item.id });
    if (findItem.length > 0) {
      // 如果状态变更执行更新操作
      this.findOneAndUpdate(item);
    } else {
      const writer = new WriterCol(item);
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
   * 更新一个writer信息
   */
  findOneAndUpdate(item: Partial<jianShu.WriterData>,query: FilterQuery<jianShu.WriterData> = { id: item.id }): void {
    WriterCol.findOneAndUpdate(
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

  update(query: FilterQuery<jianShu.WriterData>,item: Partial<jianShu.WriterData>): void {
    WriterCol.updateOne(
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


  find(query: FilterQuery<jianShu.WriterData>): jianShu.WriterData[] {
    return WriterCol.find(query, err => {
      if (err) {
        logger.error(JSON.stringify(err));
      }
    });
  }
};

export default writerModel;
