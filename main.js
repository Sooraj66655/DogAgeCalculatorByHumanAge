function CalculateDogAge() {

	var Humanage = document.getElementById("HumanAge").value;
	var name = document.getElementById("name").value;
	if (Humanage == '' || name == '') {
		alert("Please ! Enter  Value.....")

	} else {

		if (Humanage >= 21) {
			var earlyHumanAge = 21;
			var earlyDogAge = 2;
			var RemainHumanAge = Humanage - earlyHumanAge;
			RemainHumanAge /= 4;
			var HumanageDogYears = earlyDogAge + RemainHumanAge;

			var Year = parseInt(HumanageDogYears);
			var month = HumanageDogYears - Year;
			month *= 12;
			var formonth = parseInt(month);
			var day = month - formonth;
			day *= 30;
			day = Math.ceil(day);
			alert(day);

			var x = document.getElementsByTagName("BODY")[0];
			x.style.backgroundImage = "url(d.gif)";
			document.getElementById("message").style.display = "block";
			document.getElementById("sms").innerHTML =
				"My name is " + name + " I am " + Humanage + " Years old in Human Years, which is " + Year + " Years " + formonth + " Months " + day + " day old in Dog Years.";
			document.getElementById("res").innerHTML = 'Result has Been Shown Below...&#128071';
			document.getElementById("res").style.color = 'black';
		} else {
			var earlyHumanAge = 21;
			var earlyDogAge = 2;
			var RemainHumanAge = Humanage - earlyHumanAge;
			RemainHumanAge /= 10.5;

			var HumanageDogYears = earlyDogAge + RemainHumanAge;
			var Year = parseInt(HumanageDogYears);
			var month = HumanageDogYears - Year;
			month *= 12;
			var formonth = parseInt(month);
			var day = month - formonth;
			day *= 30;
			day = Math.ceil(day);
			var x = document.getElementsByTagName("BODY")[0];
			x.style.backgroundImage = "url(d.gif)";
			document.getElementById("message").style.display = "block";
			document.getElementById("sms").innerHTML =
				"My name is " + name + " I am " + Humanage + " Years old in Human Years, which is " + Year + " Years " + formonth + " Months " + day + " day old in Dog Years.";
			document.getElementById("res").innerHTML = 'Result has Been Shown Below...&#128071';
			document.getElementById("res").style.color = 'black';


		}
	}

}




