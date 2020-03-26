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
            <a class="nav-link" href="Register.html">会員登録</a>
          </li>
        </ul>
      </div>
    </nav>
    );

    // var _numItems; // 出品されている商品数
    // var col = 3;   // 商品一覧を表示する際の列数

    // // 1.寄付数を取得する
    // contract.methods.numItems().call()
    // .then(function(numItems) {
    //     _numItems = numItems;
        
    // // 2.寄付情報を表示するDOMや取引を進めるためのボタンを配置する。
    // }).then(function() {
    //     var rows = [];
    //     var table = document.getElementById("table"); // bodyのテーブル要素を取得する
    //     var row = Math.ceil(_numItems / col); // 商品を表示する際の行数
    //     var idx = 0; // 商品番号

    //     // 寄付の数だけテーブルにセルを追加する
    //     for (i = 0; i < row; i++) {
    //         rows.push(table.insertRow(-1)); // 行の追加
    //         for (j = 0; j < col; j++) {
    //             cell = rows[i].insertCell(-1); // 列の追加

    // // 寄付情報を表示する
    // function showDescription(idx) {
    //     itemKeyList = ["商品名", "価格(wei)", "商品説明", "出品状態", "出品者", "出品者のアドレス", "購入者のアドレス"];
    //     itemIdxList = [3, 5, 4, 11, 2, 0, 1]; // keyに対応するインデックス

    //     contract.methods.items(idx).call().then(function(item) {
    //         for (var i = 0; i < itemIdxList.length; i++) {
    //             var elem = document.createElement("p");
    //             // 出品状態のみ，true⇒売切れ，false⇒出品中に表示を変更する
    //             if (i == 3) {
    //                 if (item[itemIdxList[i]] == true) {
    //                     elem.textContent = itemKeyList[i] + " : 売切れ";
    //                 } else {
    //                     elem.textContent = itemKeyList[i] + " : 出品中";
    //                 }
    //             } else {
    //                 elem.textContent = itemKeyList[i] + " : " + item[itemIdxList[i]];
    //             }
    //             document.getElementById("description" + idx).appendChild(elem);
    //         }
    //     });
    // }

      
  }
  
}

// 外部読み込みを可能にする
export default App;