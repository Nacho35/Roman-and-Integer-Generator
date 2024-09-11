const inputRoman = document.querySelector('input[name="text"]');
const inputInteger = document.querySelector('input[name="number"]');
const resultParagraph = document.getElementById("result");

function convert() {
	document.querySelector(".result").classList.remove("result-hidden");

	const roman = inputRoman.value;
	const integer = inputInteger.value;

	if (roman !== "") {
		const integerResult = romanToInt(roman);
		resultParagraph.textContent = `The Roman numeral ${roman} is equal to ${integerResult}`;
	} else if (integer !== "") {
		const romanResult = intToRoman(parseInt(integer));
		resultParagraph.textContent = `The integer ${integer} is equal to ${romanResult}`;
	} else {
		resultParagraph.textContent = "Please enter a Roman numeral or an integer";
	}
}

// Funciones para convertir de romano a entero y viceversa
let romanToInt = function (s) {
	let roman = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let result = 0;
	for (let i = 0; i < s.length; i++) {
		if (roman[s[i]] < roman[s[i + 1]]) {
			result -= roman[s[i]];
		} else {
			result += roman[s[i]];
		}
	}
	return result;
};

function intToRoman(num) {
	const romanNumerals = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};

	let result = "";

	for (const [key, value] of Object.entries(romanNumerals)) {
		while (num >= value) {
			result += key;
			num -= value;
		}
	}

	return result;
}
