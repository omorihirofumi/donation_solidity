import React, { Component } from 'react';

// react-bootstarpのライブラリを使用する
import { Container, Navbar } from 'react-bootstrap';

// Appコンポーネントを定義する
class App extends Component {

  // renderの中身がWebページに描画（レンダリング）されます。
  render() {

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      　<a class="navbar-brand">ブロックチェーン寄付アプリ</a>
      <div class="navbar-collapse collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">ホーム<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="send.html">送金する</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="register.html">会員登録</a>
          </li>
        </ul>
      </div>
    </nav>
    );


      
  }
  
}

// 外部読み込みを可能にする
export default App;