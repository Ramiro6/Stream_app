import React, { Component } from 'react';
import StreamCreate from './components/StreamCreate';
import StreamDelete from './components/StreamDelete';
import StreamEdit from './components/StreamEdit';
import StreamShow from './components/StreamShow';
import StremList from './components/StremList';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={StremList} />
            <Route path='/stream/new' exact component={StreamCreate} />
            <Route path='/stream/delete' exact component={StreamDelete} />
            <Route path='/stream/edit' exact component={StreamEdit} />
            <Route path='/stream/show' exact component={StreamShow} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}


export default App
