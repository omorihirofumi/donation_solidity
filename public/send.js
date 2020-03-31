function send() {
  // テキストボックスから入力内容を取得する
  var facility = document.getElementById("facility").value;
  var description = document.getElementById("description").value
  var price = document.getElementById("price").value;

  // コントラクトの呼び出し
  return contract.methods.send(facility,description,price).send({ from: coinbase });
}