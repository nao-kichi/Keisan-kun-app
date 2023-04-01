function calculate(event) {
	event.preventDefault();

	// type
	const gender = document.getElementById("gender").value;
	const age = document.getElementById("age").value;
	const height = document.getElementById("height").value;
	const weight = document.getElementById("weight").value;
	const activityLevel = document.getElementById("activity-level").value;

	// body burn
	let bmr;
	if (gender === "male") {
		bmr = 10 * weight + 6.25 * height - 5 * age + 5;
	} else {
		bmr = 10 * weight + 6.25 * height - 5 * age - 161;
	}

	// burn calorie
	const tdee = bmr * activityLevel;
	const calorieIntake = tdee - 500; // 1週間で1kg減量するために必要な1日のカロリー削減量は500kcal

	// result
	const resultDiv = document.getElementById("result");
	resultDiv.innerHTML = `
		<p>あなたの基礎代謝は ${bmr.toFixed(2)} kcalです。</p>
		<p>あなたの1日の消費カロリーは ${tdee.toFixed(2)} kcalです。</p>
		<p>1週間で1kg減量するためには、1日あたり ${calorieIntake.toFixed(2)} kcalのカロリー削減が必要です。</p>
	`;
}