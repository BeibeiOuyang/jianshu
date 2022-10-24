import * as React from 'react';
import { Layout, BackTop } from 'antd';
import Header from '../../components/Header';

import './styles.less';

const App: React.FunctionComponent = ({ children }) => (
  <div>
    <BackTop />
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      {children}
    </Layout>
  </div>
);

export default App;
