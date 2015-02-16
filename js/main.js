var urls = new Array("//kochindustriesinc.com/",
                     "//lobbyists.info/",
                     "//halliburton.com/en-US/about-us/corporate-governance/board-of-directors/default.page?node-id=hgeyxt6f");

function hookercannon(){
    window.location = urls[Math.floor(urls.length*Math.random())];
}

var temp = setInterval("hookercannon()", 3000);
