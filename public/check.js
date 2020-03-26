// メタマスクがインストールされているかチェックする
// メタマスクがインストールされている場合は，ウェブページを開いたときに，web3というグローバル変数にWeb3オブジェクトが自動的に代入される。
// メタマスクがインストールされていない場合，web3はundefinedとなります。
if (typeof web3 !== "undefined") {
  web3js = new Web3(web3.currentProvider);
} else {
  alert("MetaMaskをインストールして下さい。");
}
  
// メタマスクのアドレスを取得する
web3js.eth.getAccounts(function(err, accounts) {
  coinbase = "0xe7033f2E216c787fa5677a852Aa63BDF03eE90A7";
  console.log("coinbase is " + coinbase);
  if (typeof coinbase === "undefined") {
      alert("MetaMaskを起動してください。")
  }
});

// スマートコントラクトのアドレスを指定する
const address = "0x28423da89cdab74a7fba52e4b57e0df7215d5823";

// スマートコントラクトのインスタンスを生成する
contract = new web3js.eth.Contract(abi, address);