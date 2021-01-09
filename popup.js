function doContent(){
chrome.tabs.executeScript(null, {file: "getgrades.js"});
};

function doTarget(){
chrome.tabs.executeScript(null, {file: "putgrades.js"});
};

document.getElementById("btnSource").onclick = doContent;
document.getElementById("btnTarget").onclick = doTarget;
