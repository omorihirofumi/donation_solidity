var _numItems; 
var col = 2;   

contract.methods.numItems().call()
.then(function(numItems) {
    _numItems = numItems;

}).then(function() {
    var rows = [];
    var table = document.getElementById("table"); 
    var row = Math.ceil(_numItems / col); 
    var idx = 0; 

    for (i = 0; i < row; i++) {
        rows.push(table.insertRow(-1)); 
        for (j = 0; j < col; j++) {
            cell = rows[i].insertCell(-1); 

            if (idx < _numItems) {
                var description = document.createElement("div"); 
                description.id = "description" + idx;
                cell.appendChild(description);
                idx++; 
            }
        }
    }
}).then(function() {
    for (idx = 0; idx < _numItems; idx++) {
        showDescription(idx); 
    }
});

function showDescription(idx) {
    itemKeyList = ["送金者のEthアドレス","送金者名","寄付先の施設","寄付の希望用途", "送金額"];
    itemIdxList = [0, 1, 2, 3, 4,]; // keyに対応するインデックス

    contract.methods.donations(idx).call().then(function(donations) {
        for (var i = 0; i < itemIdxList.length; i++) {
            var elem = document.createElement("p");
            elem.textContent = itemKeyList[i] + " : " + donations[itemIdxList[i]];
            document.getElementById("description" + idx).appendChild(elem);
        }
    });
}