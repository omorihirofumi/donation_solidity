import React, { Component } from 'react';

// react-bootstarpのライブラリを使用する
import { Container, Navbar } from 'react-bootstrap';

// Appコンポーネントを定義する
class App extends Component {

  // renderの中身がWebページに描画（レンダリング）されます。
  render() {
    return (
        <div>
          <Container>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="#home">寄付アプリ</Navbar.Brand>
            </Navbar>
          </Container>
          <ul class="navbar-nav mr-auto">
           <li class="nav-item">
            <a class="nav-link" href="index.html">メイン画面<span class="sr-only">(current)</span></a>
           </li>
           <li class="nav-item">
            <a class="nav-link" href="send.html">送金画面</a>
           </li>
           <li class="nav-item active">
            <a class="nav-link" href="Register.html">会員登録</a>
           </li>
          </ul>
        </div>
    );

      
  }
  
}

// 外部読み込みを可能にする
export default App;