function dscount(string, firstLetter, secondLetter) {
	var counts = 0;
	for (var i = 0; i < string.length; i++) {
		if((string[i] == firstLetter) && (string[i+1] == secondLetter)){
			counts++
		}
	}
	alert("Number of repeats: " + counts);
}

dscount('ab_ab_ab', 'a', 'b')