var names : string[] = ['Nicole', 'Mike', 'Carol'];
var counter : number = 0;

(function() {
	for (let name in names) {
		counter++;
	}
})();


console.log(counter);

