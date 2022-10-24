import * as schedule from 'node-schedule';
import log4js from 'log4js';
import writerModel from '../models/writerModel';
import { writerList, articalList } from '../mockData';
import articalModel from '../models/articalModel';

const logger = log4js.getLogger('globallog');

const getWriterListModel = function (){
  // 添加writer表单数据
  writerList.forEach(item => {
    writerModel.add(item);
  })
  // 添加artical表单数据
  articalList.forEach(item => {
    articalModel.add(item)
  })
}

getWriterListModel()

