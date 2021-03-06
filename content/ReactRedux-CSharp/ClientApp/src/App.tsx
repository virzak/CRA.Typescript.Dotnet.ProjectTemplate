import * as React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Layout>
        <Route exact={true} path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
      </Layout>
    );
  }
}

export default App;
