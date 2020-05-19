$(document).ready(function(e) {
//$.get('501-02-21.html', chargementOK)
//$.post('501-02-21.html', chargementOK)
var donnees = {

info:'b'
}
//$.post('501-02-22.php', donnees, chargementOK)
$('body').text($.get('501-02-22.php', donnees, chargementOK))
});
function chargementOK(arg){
console.log(arg)
}
