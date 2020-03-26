    function registerAccount() {
      // テキストボックスから入力内容を取得する
      var userName = document.getElementById("name").value;
      var userEmail = document.getElementById("email").value;
  
      // コントラクトの呼び出し
      return contract.methods.registerAccount(userName, userEmail).send({ from: coinbase });
  }