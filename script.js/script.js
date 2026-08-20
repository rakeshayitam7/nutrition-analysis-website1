// =====================================================
// GYMFOOD NUTRITION CALCULATOR
// =====================================================


// =====================================================
// FOOD DATABASE
// Values are approximate per 100g
// Raw and cooked values are separated
// =====================================================

const foods = {

    carrot: {

        raw: {
            calories: 41,
            protein: 0.9,
            carbs: 9.6,
            fat: 0.2,
            fiber: 2.8,
            vitamins: {
                "Vitamin A": 835,
                "Vitamin C": 5.9,
                "Vitamin K": 13.2
            },
            minerals: {
                "Potassium": 320,
                "Calcium": 33,
                "Iron": 0.3
            }
        },

        cooked: {
            calories: 35,
            protein: 0.8,
            carbs: 8.2,
            fat: 0.2,
            fiber: 3.0,
            vitamins: {
                "Vitamin A": 852,
                "Vitamin C": 3.6,
                "Vitamin K": 13.9
            },
            minerals: {
                "Potassium": 235,
                "Calcium": 30,
                "Iron": 0.2
            }
        }

    },


    rice: {

        raw: {
            calories: 360,
            protein: 7.1,
            carbs: 79,
            fat: 0.7,
            fiber: 1.3,
            vitamins: {
                "Vitamin B1": 0.07,
                "Vitamin B3": 1.6
            },
            minerals: {
                "Iron": 0.8,
                "Magnesium": 25,
                "Potassium": 115
            }
        },

        cooked: {
            calories: 130,
            protein: 2.7,
            carbs: 28.2,
            fat: 0.3,
            fiber: 0.4,
            vitamins: {
                "Vitamin B1": 0.02,
                "Vitamin B3": 0.4
            },
            minerals: {
                "Iron": 0.2,
                "Magnesium": 12,
                "Potassium": 35
            }
        }

    },


    egg: {

        raw: {

            calories: 143,

            protein: 12.6,

            carbs: 0.7,

            fat: 9.5,

            fiber: 0,

            vitamins: {
                "Vitamin A": 160,
                "Vitamin D": 2,
                "Vitamin B12": 1.1
            },

            minerals: {
                "Iron": 1.8,
                "Calcium": 56,
                "Phosphorus": 198
            }

        },

        cooked: {

            calories: 155,

            protein: 12.6,

            carbs: 1.1,

            fat: 10.6,

            fiber: 0,

            vitamins: {
                "Vitamin A": 149,
                "Vitamin D": 2.0,
                "Vitamin B12": 1.1
            },

            minerals: {
                "Iron": 1.2,
                "Calcium": 50,
                "Phosphorus": 172
            }

        }

    },


    "chicken breast": {

        raw: {

            calories: 120,

            protein: 22.5,

            carbs: 0,

            fat: 2.6,

            fiber: 0,

            vitamins: {
                "Vitamin B3": 9.0,
                "Vitamin B6": 0.6,
                "Vitamin B12": 0.2
            },

            minerals: {
                "Phosphorus": 210,
                "Potassium": 256,
                "Selenium": 27
            }

        },

        cooked: {

            calories: 165,

            protein: 31,

            carbs: 0,

            fat: 3.6,

            fiber: 0,

            vitamins: {
                "Vitamin B3": 13.7,
                "Vitamin B6": 0.6,
                "Vitamin B12": 0.3
            },

            minerals: {
                "Phosphorus": 228,
                "Potassium": 256,
                "Selenium": 36
            }

        }

    },


    potato: {

        raw: {

            calories: 77,

            protein: 2,

            carbs: 17.5,

            fat: 0.1,

            fiber: 2.2,

            vitamins: {
                "Vitamin C": 19.7,
                "Vitamin B6": 0.3
            },

            minerals: {
                "Potassium": 425,
                "Magnesium": 23,
                "Iron": 0.8
            }

        },

        cooked: {

            calories: 87,

            protein: 1.9,

            carbs: 20.1,

            fat: 0.1,

            fiber: 1.8,

            vitamins: {
                "Vitamin C": 13,
                "Vitamin B6": 0.3
            },

            minerals: {
                "Potassium": 379,
                "Magnesium": 22,
                "Iron": 0.3
            }

        }

    },


    oats: {

        raw: {

            calories: 389,

            protein: 16.9,

            carbs: 66.3,

            fat: 6.9,

            fiber: 10.6,

            vitamins: {
                "Vitamin B1": 0.76,
                "Vitamin B5": 1.3,
                "Vitamin B6": 0.12
            },

            minerals: {
                "Iron": 4.3,
                "Magnesium": 177,
                "Zinc": 4
            }

        },

        cooked: {

            calories: 71,

            protein: 2.5,

            carbs: 12,

            fat: 1.5,

            fiber: 1.7,

            vitamins: {
                "Vitamin B1": 0.08,
                "Vitamin B6": 0.05
            },

            minerals: {
                "Iron": 0.9,
                "Magnesium": 27,
                "Zinc": 1
            }

        }

    },


    banana: {

        raw: {

            calories: 89,

            protein: 1.1,

            carbs: 22.8,

            fat: 0.3,

            fiber: 2.6,

            vitamins: {
                "Vitamin C": 8.7,
                "Vitamin B6": 0.4
            },

            minerals: {
                "Potassium": 358,
                "Magnesium": 27
            }

        },

        cooked: {

            calories: 116,

            protein: 1.3,

            carbs: 29.6,

            fat: 0.4,

            fiber: 2.8,

            vitamins: {
                "Vitamin C": 7,
                "Vitamin B6": 0.4
            },

            minerals: {
                "Potassium": 330,
                "Magnesium": 25
            }

        }

    },


    apple: {

        raw: {

            calories: 52,

            protein: 0.3,

            carbs: 13.8,

            fat: 0.2,

            fiber: 2.4,

            vitamins: {
                "Vitamin C": 4.6,
                "Vitamin K": 2.2
            },

            minerals: {
                "Potassium": 107,
                "Magnesium": 5
            }

        },

        cooked: {

            calories: 56,

            protein: 0.3,

            carbs: 15,

            fat: 0.2,

            fiber: 2.1,

            vitamins: {
                "Vitamin C": 3,
                "Vitamin K": 2
            },

            minerals: {
                "Potassium": 100,
                "Magnesium": 5
            }

        }

    },


    paneer: {

        raw: {

            calories: 265,

            protein: 18.3,

            carbs: 6.1,

            fat: 20.8,

            fiber: 0,

            vitamins: {
                "Vitamin A": 210,
                "Vitamin B12": 1.2
            },

            minerals: {
                "Calcium": 208,
                "Phosphorus": 138
            }

        },

        cooked: {

            calories: 296,

            protein: 20,

            carbs: 5,

            fat: 23,

            fiber: 0,

            vitamins: {
                "Vitamin A": 190,
                "Vitamin B12": 1.1
            },

            minerals: {
                "Calcium": 220,
                "Phosphorus": 145
            }

        }

    },


    peanuts: {

        raw: {

            calories: 567,

            protein: 25.8,

            carbs: 16.1,

            fat: 49.2,

            fiber: 8.5,

            vitamins: {
                "Vitamin E": 8.3,
                "Vitamin B3": 12.1
            },

            minerals: {
                "Magnesium": 168,
                "Phosphorus": 376,
                "Potassium": 705
            }

        },

        cooked: {

            calories: 585,

            protein: 25.7,

            carbs: 21,

            fat: 49.7,

            fiber: 8.4,

            vitamins: {
                "Vitamin E": 6.9,
                "Vitamin B3": 13
            },

            minerals: {
                "Magnesium": 178,
                "Phosphorus": 376,
                "Potassium": 700
            }

        }

    },


    almonds: {

        raw: {

            calories: 579,

            protein: 21.2,

            carbs: 21.6,

            fat: 49.9,

            fiber: 12.5,

            vitamins: {
                "Vitamin E": 25.6,
                "Vitamin B2": 1.1
            },

            minerals: {
                "Magnesium": 270,
                "Calcium": 269,
                "Iron": 3.7
            }

        },

        cooked: {

            calories: 598,

            protein: 21,

            carbs: 20,

            fat: 53,

            fiber: 11,

            vitamins: {
                "Vitamin E": 24,
                "Vitamin B2": 1
            },

            minerals: {
                "Magnesium": 270,
                "Calcium": 260,
                "Iron": 3.5
            }

        }

    },


    broccoli: {

        raw: {

            calories: 34,

            protein: 2.8,

            carbs: 6.6,

            fat: 0.4,

            fiber: 2.6,

            vitamins: {
                "Vitamin C": 89,
                "Vitamin K": 102,
                "Vitamin A": 31
            },

            minerals: {
                "Potassium": 316,
                "Calcium": 47,
                "Iron": 0.7
            }

        },

        cooked: {

            calories: 35,

            protein: 2.4,

            carbs: 7.2,

            fat: 0.4,

            fiber: 3.3,

            vitamins: {
                "Vitamin C": 64,
                "Vitamin K": 141,
                "Vitamin A": 31
            },

            minerals: {
                "Potassium": 293,
                "Calcium": 40,
                "Iron": 0.7
            }

        }

    },


    spinach: {

        raw: {

            calories: 23,

            protein: 2.9,

            carbs: 3.6,

            fat: 0.4,

            fiber: 2.2,

            vitamins: {
                "Vitamin A": 469,
                "Vitamin C": 28,
                "Vitamin K": 483
            },

            minerals: {
                "Iron": 2.7,
                "Magnesium": 79,
                "Potassium": 558
            }

        },

        cooked: {

            calories: 23,

            protein: 2.9,

            carbs: 3.8,

            fat: 0.4,

            fiber: 2.4,

            vitamins: {
                "Vitamin A": 524,
                "Vitamin C": 9.8,
                "Vitamin K": 493
            },

            minerals: {
                "Iron": 3.6,
                "Magnesium": 87,
                "Potassium": 466
            }

        }

    },

    "chicken biryani": {
        raw: { calories: 165, protein: 8.5, carbs: 18.5, fat: 6.5, fiber: 1.2, vitamins: { "Vitamin B3": 2.8, "Vitamin B6": 0.2, "Vitamin B12": 0.2 }, minerals: { Iron: 1.1, Phosphorus: 105, Potassium: 145, Sodium: 310 } },
        cooked: { calories: 190, protein: 10.5, carbs: 20.5, fat: 7.2, fiber: 1.1, vitamins: { "Vitamin B3": 3.5, "Vitamin B6": 0.25, "Vitamin B12": 0.25 }, minerals: { Iron: 1.3, Phosphorus: 125, Potassium: 165, Sodium: 350 } }
    },

    "vegetable biryani": {
        raw: { calories: 135, protein: 3.2, carbs: 21, fat: 4.2, fiber: 2.4, vitamins: { "Vitamin A": 180, "Vitamin C": 8, "Vitamin B6": 0.15 }, minerals: { Iron: 1.1, Potassium: 150, Magnesium: 22, Sodium: 260 } },
        cooked: { calories: 155, protein: 3.5, carbs: 24, fat: 4.8, fiber: 2.5, vitamins: { "Vitamin A": 210, "Vitamin C": 7, "Vitamin B6": 0.18 }, minerals: { Iron: 1.2, Potassium: 175, Magnesium: 25, Sodium: 290 } }
    },

    "paneer curry": {
        raw: { calories: 185, protein: 8.5, carbs: 7.5, fat: 13.5, fiber: 1.5, vitamins: { "Vitamin A": 120, "Vitamin C": 8, "Vitamin B12": 0.5 }, minerals: { Calcium: 105, Iron: 1.2, Potassium: 180, Sodium: 330 } },
        cooked: { calories: 210, protein: 9.5, carbs: 8.5, fat: 15.5, fiber: 1.4, vitamins: { "Vitamin A": 135, "Vitamin C": 7, "Vitamin B12": 0.55 }, minerals: { Calcium: 115, Iron: 1.3, Potassium: 195, Sodium: 370 } }
    }

};

const foodAliases = {
    biryani: "chicken biryani",
    "chicken biriyani": "chicken biryani",
    biriyani: "chicken biryani",
    "panner curry": "paneer curry"
};

function resolveFoodName(input) {
    const normalized = input.trim().toLowerCase().replace(/\s+/g, " ");
    if (foods[normalized]) return normalized;
    if (foodAliases[normalized]) return foodAliases[normalized];
    return Object.keys(foods).find(name => normalized.includes(name) || name.includes(normalized));
}


// =====================================================
// CALCULATE FOOD
// =====================================================

function calculateFood() {

    const enteredFood = document.getElementById("foodInput").value;
    const foodName = resolveFoodName(enteredFood);
    const lookupMode = document.getElementById("lookupMode").value;


    const state =
        document
            .getElementById("foodState")
            .value;


    let weight =
        parseFloat(
            document
                .getElementById("foodWeight")
                .value
        );


    const unit =
        document
            .getElementById("foodUnit")
            .value;


    if (!weight || weight <= 0) {

        alert("Enter a valid quantity.");

        return;

    }


    // Convert kg to grams

    if (unit === "kg") {

        weight =
            weight * 1000;

    }

    if (!foodName && lookupMode === "ai") {
        calculateWithAI(enteredFood, weight, unit, state);
        return;
    }

    if (!foodName) {
        alert("Food not found. Try biryani, paneer curry, rice, chicken, fruits or vegetables, or select AI recipe estimate.");
        return;
    }


    const base =
        foods[foodName][state];


    const multiplier =
        weight / 100;


    const nutrition = {

        calories:
            base.calories * multiplier,

        protein:
            base.protein * multiplier,

        carbs:
            base.carbs * multiplier,

        fat:
            base.fat * multiplier,

        fiber:
            base.fiber * multiplier

    };


    const vitamins = {};

    for (
        const vitamin in base.vitamins
    ) {

        vitamins[vitamin] =
            base.vitamins[vitamin]
            * multiplier;

    }


    const minerals = {};

    for (
        const mineral in base.minerals
    ) {

        minerals[mineral] =
            base.minerals[mineral]
            * multiplier;

    }


    showFoodResult(
        foodName,
        state,
        weight,
        nutrition,
        vitamins,
        minerals
    );

}


// =====================================================
// SHOW FOOD RESULT
// =====================================================

function showFoodResult(
    food,
    state,
    weight,
    nutrition,
    vitamins,
    minerals
) {

    const result =
        document.getElementById(
            "foodResult"
        );


    result.classList.remove(
        "hidden"
    );


    result.innerHTML = `

        <h3>
            ${capitalize(food)}
            — ${capitalize(state)}
        </h3>

        <p>
            Nutrition for
            <strong>${weight}g</strong>
        </p>

        <br>

        <div class="nutrient-grid">

            <div class="nutrient">

                <div class="nutrient-icon">
                    🔥
                </div>

                <span>
                    Calories
                </span>

                <strong>
                    ${nutrition.calories.toFixed(1)}
                    kcal
                </strong>

            </div>


            <div class="nutrient">

                <div class="nutrient-icon">
                    💪
                </div>

                <span>
                    Protein
                </span>

                <strong>
                    ${nutrition.protein.toFixed(1)}
                    g
                </strong>

            </div>


            <div class="nutrient">

                <div class="nutrient-icon">
                    ⚡
                </div>

                <span>
                    Carbohydrates
                </span>

                <strong>
                    ${nutrition.carbs.toFixed(1)}
                    g
                </strong>

            </div>


            <div class="nutrient">

                <div class="nutrient-icon">
                    🥑
                </div>

                <span>
                    Fat
                </span>

                <strong>
                    ${nutrition.fat.toFixed(1)}
                    g
                </strong>

            </div>


            <div class="nutrient">

                <div class="nutrient-icon">
                    🌾
                </div>

                <span>
                    Fiber
                </span>

                <strong>
                    ${nutrition.fiber.toFixed(1)}
                    g
                </strong>

            </div>

        </div>

        <br>

        <h3>
            Vitamins
        </h3>

        <div class="micro-grid">

            ${createMicroCards(vitamins)}

        </div>

        <br>

        <h3>
            Minerals
        </h3>

        <div class="micro-grid">

            ${createMicroCards(minerals)}

        </div>

    `;

}


// =====================================================
// MICRO CARDS
// =====================================================

function createMicroCards(data) {

    return Object.entries(data)

        .map(
            ([name, value]) => `

                <div class="micro">

                    <span>
                        ${name}
                    </span>

                    <strong>
                        ${value.toFixed(2)}
                    </strong>

                </div>

            `
        )

        .join("");

}


// =====================================================
// NUTRITION LABEL ANALYZER
// =====================================================

function analyzeLabel() {

    const text =
        document
            .getElementById(
                "labelInput"
            )
            .value
            .toLowerCase();


    if (!text.trim()) {

        alert(
            "Paste a nutrition label first."
        );

        return;

    }


    const data = {

        calories:
            findNumber(
                text,
                [
                    "energy",
                    "calories",
                    "kcal"
                ]
            ),

        protein:
            findNumber(
                text,
                ["protein"]
            ),

        carbs:
            findNumber(
                text,
                [
                    "carbohydrate",
                    "carbohydrates"
                ]
            ),

        fat:
            findNumber(
                text,
                [
                    "total fat",
                    "fat"
                ]
            ),

        sugar:
            findNumber(
                text,
                ["sugar"]
            ),

        sodium:
            findNumber(
                text,
                ["sodium"]
            ),

        fiber:
            findNumber(
                text,
                [
                    "fiber",
                    "fibre"
                ]
            )

    };


    const recommendation =
        getRecommendation(data);


    showLabelResult(
        data,
        recommendation
    );

}


// =====================================================
// FIND NUMBER
// =====================================================

function findNumber(
    text,
    keywords
) {

    for (
        const keyword of keywords
    ) {

        const regex =
            new RegExp(
                keyword +
                "\\s*[:\\-]?\\s*" +
                "(\\d+(?:\\.\\d+)?)"
            );

        const match =
            text.match(regex);


        if (match) {

            return parseFloat(
                match[1]
            );

        }

    }


    return 0;

}


// =====================================================
// RECOMMENDATION
// =====================================================

function getRecommendation(data) {

    /*
        Simple heuristic.

        This is NOT a medical diagnosis.
        It is a general food-quality estimate.
    */


    let score = 50;


    // Protein

    if (
        data.protein >= 20
    ) {

        score += 20;

    }

    else if (
        data.protein >= 10
    ) {

        score += 10;

    }


    // Fiber

    if (
        data.fiber >= 5
    ) {

        score += 10;

    }


    // Sugar

    if (
        data.sugar > 20
    ) {

        score -= 20;

    }

    else if (
        data.sugar > 10
    ) {

        score -= 10;

    }


    // Sodium

    if (
        data.sodium > 600
    ) {

        score -= 15;

    }


    // Saturated/fat proxy

    if (
        data.fat > 35
    ) {

        score -= 10;

    }


    if (
        score >= 75
    ) {

        return {

            title: "GOOD CHOICE",
            className: "good",
            message:
                "Good nutritional profile for most people."

        };

    }


    if (
        score >= 55
    ) {

        return {

            title: "OKAY",
            className: "okay",
            message:
                "Can be included occasionally depending on your goals."

        };

    }


    if (
        score >= 35
    ) {

        return {

            title: "NOT IDEAL",
            className: "bad",
            message:
                "Consider limiting the portion or frequency."

        };

    }


    return {

        title: "WORST CHOICE",
        className: "worst",
        message:
            "Very poor nutritional profile based on the supplied values."

    };

}


// =====================================================
// SHOW LABEL RESULT
// =====================================================

function showLabelResult(
    data,
    recommendation
) {

    const result =
        document.getElementById(
            "labelResult"
        );


    result.innerHTML = `

        <div
            class="
                recommendation
                ${recommendation.className}
            "
        >

            <h3>
                ${recommendation.title}
            </h3>

            <p>
                ${recommendation.message}
            </p>

        </div>


        <div class="label-stats">

            <div class="label-stat">

                <span>
                    Calories
                </span>

                <strong>
                    ${data.calories}
                    kcal
                </strong>

            </div>


            <div class="label-stat">

                <span>
                    Protein
                </span>

                <strong>
                    ${data.protein}
                    g
                </strong>

            </div>


            <div class="label-stat">

                <span>
                    Carbohydrates
                </span>

                <strong>
                    ${data.carbs}
                    g
                </strong>

            </div>


            <div class="label-stat">

                <span>
                    Fat
                </span>

                <strong>
                    ${data.fat}
                    g
                </strong>

            </div>


            <div class="label-stat">

                <span>
                    Sugar
                </span>

                <strong>
                    ${data.sugar}
                    g
                </strong>

            </div>


            <div class="label-stat">

                <span>
                    Sodium
                </span>

                <strong>
                    ${data.sodium}
                    mg
                </strong>

            </div>


            <div class="label-stat">

                <span>
                    Fiber
                </span>

                <strong>
                    ${data.fiber}
                    g
                </strong>

            </div>

        </div>

    `;

}


// =====================================================
// CAPITALIZE
// =====================================================

function capitalize(text) {

    return text
        .replace(
            /\b\w/g,
            letter =>
                letter.toUpperCase()
        );

}

async function calculateWithAI(food, weight, unit, state) {
    const result = document.getElementById("foodResult");
    result.classList.remove("hidden");
    result.innerHTML = "<p>Asking the nutrition service for an estimate...</p>";

    try {
        const response = await fetch("/api/nutrition", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ food, weight, unit, state })
        });
        if (!response.ok) throw new Error("Nutrition service unavailable");
        const data = await response.json();
        showFoodResult(data.food || food, data.state || state, data.weight || weight, data.nutrition, data.vitamins || {}, data.minerals || {});
        result.insertAdjacentHTML("afterbegin", "<p class=\"ai-note\">AI estimate. Verify the recipe, serving size and ingredients for accuracy.</p>");
    } catch (error) {
        result.innerHTML = "<p>AI lookup is not connected yet. Start a server with a POST /api/nutrition endpoint, or use the curated database.</p>";
    }
}