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
          <a class="nav-link" href="main.html">メイン画面<span class="sr-only">(current)</span></a>
         </li>
         <li class="nav-item">
          <a class="nav-link" href="send.html">送金画面</a>
         </li>
         <li class="nav-item active">
          <a class="nav-link" href="register.html">会員登録</a>
         </li>
        </ul>
      </div>
    );

    return(
      <div class="col-md-6">
        <div class="form-group">
         <label for="userName">ユーザー名を入力して下さい。</label>
         <input type="text" class="form-control" id="userName" placeholder="">
        </div>
        <div class="form-group">
         <label for="userEmail">Eメールアドレスを入力して下さい。</label>
         <input type="email" class="form-control" id="userEmail" placeholder="">
        </div>
       <p><button onclick="registerAccount()" class="btn btn-default">登録</button></p><br>
      </div>
    )
  }
  
}

// 外部読み込みを可能にする
export default App;