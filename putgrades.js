var fields = document.getElementsByClassName("keypad-link");

var students = document.querySelectorAll('tr[id^=std]');
var len = students.length;

var stored_grades = chrome.storage.local.get('grade_dict', function (items) {
	
	for (i=0; i<= len; i++) {
		var ps_student = students.item(i);
		if (ps_student != null) {
			var psName = students.item(i).getElementsByClassName("student-name").item(0).innerText;
			psName = psName.split(',')[0];
			var psGrade = ps_student.getElementsByClassName("keypad-link").item(0);
			
			for (let name in items['grade_dict']) {
				if (psName == name) {
					console.log("found it");
					console.log(items['grade_dict'][name]);
					psGrade.textContent = items['grade_dict'][name];
				}
			}
		}
	} 
});


