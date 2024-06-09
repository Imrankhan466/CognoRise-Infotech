document.addEventListener('DOMContentLoaded', function() {
    var weight = document.getElementById("weight");
    var height = document.getElementById("height");
    var result = document.getElementById("result");
    var maleChart = document.getElementById("male-bmi-chart");
    var femaleChart = document.getElementById("female-bmi-chart");
    var genderInputs = document.querySelectorAll('input[name="gender"]');

    function calculateBMI() {
        var weightVal = parseInt(weight.value);
        var heightVal = parseInt(height.value);
        var bmi = (weightVal / Math.pow((heightVal / 100), 2)).toFixed(1);
        result.textContent = bmi;

        var category;
        if (bmi < 18.5) {
            category = "Underweight 😒";
            result.style.color = "#ffc44d";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal Weight 😍";
            result.style.color = "#0be881";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Overweight 😮";
            result.style.color = "#ff884d";
        } else {
            category = "Obese 😱";
            result.style.color = "#ff5e57";
        }
        document.getElementById("category").textContent = category;
    }

    function updateGenderDisplay() {
        var gender = document.querySelector('input[name="gender"]:checked').value;
        if (gender === "male") {
            maleChart.style.display = "block";
            femaleChart.style.display = "none";
        } else {
            maleChart.style.display = "none";
            femaleChart.style.display = "block";
        }
    }

    weight.addEventListener('input', function() {
        document.getElementById("weight-val").textContent = weight.value + " kg";
        calculateBMI();
    });

    height.addEventListener('input', function() {
        document.getElementById("height-val").textContent = height.value + " cm";
        calculateBMI();
    });

    genderInputs.forEach(function(input) {
        input.addEventListener('change', function() {
            updateGenderDisplay();
            calculateBMI();
        });
    });

    // Initialize the display
    updateGenderDisplay();
    calculateBMI();
});
