import React, { Component } from 'react';

// react-bootstarpのライブラリを使用する
import { Container, Navbar } from 'react-bootstrap';

import App from './component/App';
ReactDOM.render(<App/>,document.getElementById('root'));

// Appコンポーネントを定義する
class Register extends Component {

  // renderの中身がWebページに描画（レンダリング）されます。
  render() {
    function registerAccount() {
      // テキストボックスから入力内容を取得する
      var userName = document.getElementById("userName").value;
      var userEmail = document.getElementById("userEmail").value;
  
      // コントラクトの呼び出し
      return contract.methods.registerAccount(userName, userEmail).send({ from: coinbase });
  }

    return (
        <div>
          <Container>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="#home">大森</Navbar.Brand>
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
export default Register;