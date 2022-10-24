declare namespace jianShu {
  interface WriterData {
    __v?: number;
    id: number;
    name: string;
    writeNum: number;
    star: number;
    imgUrl: string;
  }

  interface ArticalData {
    __v?: number;
    id: number;
    title: string;
    desc: string;
    imgUrl: string;
    content: string;
  }

  interface DetaillData {
    title: string;
    content: string;
  }
}
