var grade_dict = {};
var students = document.getElementsByClassName("DC55n")

for (i=0; i <= students.length; i++ ) {
	if (students.item(i) != null) {
		var grade = students[i].getElementsByClassName("SxMnzc").item(0).textContent.substr(0,2);
		var name = students[i].getElementsByClassName("YVvGBb").item(0).textContent;

		res = name.split(' ');
		name = res[1];

		if (/^[a-zA-Z]+$/.test(grade)) {
			grade_dict[name] = null;
			continue;
		}
		if (grade.charAt(grade.length-1) == "/") {
			mod_g = grade.slice(0,-1);
			grade_dict[name] = mod_g;
		} else {
			grade_dict[name] = grade;
		}
	}
}

console.log(grade_dict);
//chrome.storage.local.set({'newStorage': grade_dict});
chrome.storage.local.set({grade_dict});
