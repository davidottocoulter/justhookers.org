
(function(n){
 var pages = ['http://www.kochindustriesinc.com/', 'http://www.lobbyists.info/', 'http://www.halliburton.com/en-US/about-us/corporate-governance/board-of-directors/default.page?node-id=hgeyxt6f'];
 n = n < 3? 0 : n < 8? 1 : 2;
 window.location.replace(pages[n]);
})(Math.floor(Math.random() * 10));
