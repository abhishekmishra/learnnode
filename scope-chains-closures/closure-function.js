function foo() {
	var bar = "hello";
    quux = 3;
	function zip() {
        bar = true;
		var quux = 2;
	}
    return zip;
}
