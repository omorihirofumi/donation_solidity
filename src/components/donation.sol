pragma solidity ^0.4.25;

contract EthereumDonation {

    address owner;        // コントラクトオーナーのアドレス
    uint public numItems; // 寄付数
    bool public stopped;  // trueの場合Circuit Breakerが発動し，全てのコントラクトが使用不可能になる

    // コンストラクタ
    constructor() public {
        owner = msg.sender; // コントラクトをデプロイしたアドレスをオーナーに指定する
        numItems = 0;
        stopped = false;
    }

    // 呼び出しがコントラクトのオーナーか確認
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    // 呼び出しがアカウント登録済みのEthアドレスか確認
    modifier onlyUser {
        require(accounts[msg.sender].resistered);
        _;
    }

    // ===========================
    // 取引を行うためのステートと関数
    // ===========================

    // アカウント情報
    struct account {
        string name;          // 名前
        string email;         // emailアドレス
        bool resistered;      // アカウント未登録:false, 登録済み:true
    }
    
    mapping(address => account) public accounts;
    

    // アカウント登録する関数
    function registerAccount(string _name, string _email) public isStopped {
        require(!accounts[msg.sender].resistered); // 未登録のEthアドレスか確認

	accounts[msg.sender].resistered = true;
        accounts[msg.sender].name = _name;   // 名前
        accounts[msg.sender].email = _email; // emailアドレス
    }

    // 商品情報
    struct donation {
        address senderAddr;  // 送金者のEthアドレス
        string sender;       // 送金者名
        string facility;     // 寄付先の施設
        string description;  // 寄付の希望用途
        uint price;          // 送金額(単位：wei)
    }
    
    mapping(uint => donation) public donations;
    
    // 送金する関数
    function send(string _facility, string _description, uint _price) public onlyUser isStopped {
        donations[numItems].senderAddr = msg.sender;            // 送金者のEthアドレス
        donations[numItems].sender = accounts[msg.sender].name; // 送金者名
        donations[numItems].facility = _facility;               // 寄付先の施設
        donations[numItems].description = _description;         // 寄付の希望用途
        donations[numItems].price = _price;                     // 送金額
        numItems++;                                             // 寄付数を１つ増やす
    }

    // ===============================
    // 例外処理を行うためのステートと関数
    // ===============================

    // アカウント情報を修正する関数
    function modifyAccount(string _name, string _email) public onlyUser isStopped {
        accounts[msg.sender].name = _name;   // 名前
        accounts[msg.sender].email = _email; // emailアドレス
    }
    
    // 送金内容を変更する関数
    function modifyDonation(uint _numItems, string _facility, string _description, uint _price) public onlyUser isStopped {
        require(donations[_numItems].senderAddr == msg.sender);  // コントラクトの呼び出しが送金者か確認
       

        donations[_numItems].sender = accounts[msg.sender].name; // 送金者名
        donations[_numItems].facility = _facility;               // 寄付先の施設
        donations[_numItems].description = _description;         // 寄付の希望用途
        donations[_numItems].price = _price;                     // 送金額
    }

    // ================
    // セキュリティー対策
    // ================

    // Circuit Breaker
    modifier isStopped {
        require(!stopped);
        _;
    }
    
    // Circuit Breakerを発動，停止する関数
    function toggleCircuit(bool _stopped) public onlyOwner {
        stopped = _stopped;
    }

    // コントラクトを破棄して，残金をオーナーに送る関数
    // クラッキング対策
    function kill() public onlyOwner {
        selfdestruct(owner);
    }
}