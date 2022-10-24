import gql from 'graphql-tag';
import config from '../config';



interface IwriterFive {
  writerFive: jianShu.WriterData[];
}

interface Iartical {
  artical: jianShu.ArticalData[];
}

interface Idetail {
  detail: jianShu.DetaillData;
}

const { getGraphqlClient } = config;

export function requestWriterFive(callback: (...args: any[]) => void): void {
  getGraphqlClient()
    .query<IwriterFive>({
      query: gql`
        {
          writerFive{
            id
            name
            writeNum
            star
            imgUrl
          }
        }
      `
    })
    .then(result => {
      callback(result.data.writerFive);
    });
}

export function requestAritcal(callback: (...args: any[]) => void): void {
  getGraphqlClient()
    .query<Iartical>({
      query: gql`
        {
          artical{
            id
            title
            desc
            imgUrl
          }
        }
      `
    })
    .then(result => {
      callback(result.data.artical);
    });
}

export function requestDetail(id: string, callback: (...args: any[]) => void): void {
  getGraphqlClient()
    .query<Iartical>({
      query: gql`
        {
          detail(id: ${id}){
            id
            desc
            title
            content
            imgUrl
          }
        }
      `
    })
    .then(result => {
      callback(result.data.artical);
    });
}
