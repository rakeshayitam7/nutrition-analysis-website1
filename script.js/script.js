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


    milk: {

        raw: {
            calories: 61,
            protein: 3.2,
            carbs: 4.8,
            fat: 3.3,
            fiber: 0,
            vitamins: {
                "Vitamin A": 46,
                "Vitamin B2": 0.18,
                "Vitamin B12": 0.44,
                "Vitamin D": 1.3
            },
            minerals: {
                "Calcium": 113,
                "Phosphorus": 84,
                "Potassium": 132,
                "Magnesium": 10
            }
        },

        cooked: {
            calories: 61,
            protein: 3.2,
            carbs: 4.8,
            fat: 3.3,
            fiber: 0,
            vitamins: {
                "Vitamin A": 46,
                "Vitamin B2": 0.18,
                "Vitamin B12": 0.44,
                "Vitamin D": 1.3
            },
            minerals: {
                "Calcium": 113,
                "Phosphorus": 84,
                "Potassium": 132,
                "Magnesium": 10
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

function addPreparedFood(name, values) {
    if (foods[name]) return;
    foods[name] = { raw: values, cooked: values };
}

// Approximate reference values per 100 g (or 100 ml for drinks).
[
    ["chicken curry", 180, 18, 5, 10, 1],
    ["chicken fry", 260, 24, 8, 15, 0.5],
    ["chicken 65", 280, 22, 12, 16, 0.5],
    ["chicken tikka", 196, 27, 4, 8, 1],
    ["tandoori chicken", 190, 28, 2, 7, 0],
    ["grilled chicken", 165, 31, 0, 3.6, 0],
    ["boiled chicken", 165, 31, 0, 3.6, 0],
    ["roasted chicken", 190, 28, 0, 8, 0],
    ["mutton curry", 230, 18, 5, 16, 1],
    ["mutton biryani", 210, 9, 22, 9, 1],
    ["fish curry", 150, 18, 5, 6, 1],
    ["fish fry", 220, 20, 10, 11, 0.5],
    ["grilled fish", 145, 25, 0, 5, 0],
    ["egg curry", 170, 10, 5, 12, 1],
    ["egg bhurji", 185, 11, 4, 13, 0],
    ["paneer tikka", 220, 14, 7, 15, 1],
    ["palak paneer", 165, 8, 7, 12, 2],
    ["dal", 116, 7, 20, 1, 7],
    ["dal fry", 140, 7, 18, 5, 5],
    ["rajma curry", 135, 7, 20, 3, 6],
    ["chole", 160, 8, 24, 4, 7],
    ["sambar", 75, 4, 11, 2, 3],
    ["rasam", 35, 1, 5, 1, 1],
    ["vegetable curry", 105, 3, 12, 5, 4],
    ["potato curry", 125, 3, 20, 4, 3],
    ["mixed vegetable curry", 110, 3, 14, 4, 4],
    ["rice", 130, 2.7, 28, 0.3, 0.4],
    ["curd rice", 140, 4, 22, 4, 1],
    ["lemon rice", 175, 4, 28, 5, 1],
    ["fried rice", 180, 4, 25, 7, 1],
    ["whey protein", 390, 78, 10, 6, 1],
    ["whey isolate", 365, 83, 4, 1, 0],
    ["casein protein", 360, 75, 10, 3, 1],
    ["plant protein", 380, 75, 10, 6, 5],
    ["soya chunks", 345, 52, 33, 0.5, 13],
    ["greek yogurt", 73, 10, 3.9, 2, 0],
    ["curd", 61, 3.5, 4.7, 3.3, 0],
    ["mass gainer", 380, 20, 65, 6, 4],
    ["protein shake", 90, 12, 8, 2, 1],
    ["milkshake", 115, 4, 15, 4, 0],
    ["banana shake", 105, 3, 17, 3, 1],
    ["peanut butter shake", 145, 6, 12, 8, 2],
    ["black coffee", 2, 0.3, 0, 0, 0],
    ["coffee with milk", 35, 1.5, 3, 2, 0],
    ["green tea", 1, 0, 0, 0, 0],
    ["coconut water", 19, 0.7, 3.7, 0.2, 1.1],
    ["protein bar", 350, 30, 35, 12, 8],
    ["protein oats", 220, 15, 30, 6, 5],
    ["granola", 450, 10, 64, 17, 7],
    ["muesli", 370, 11, 67, 7, 8],
    ["peanut butter toast", 300, 11, 35, 13, 5],
    ["peanut chikki", 480, 15, 48, 25, 5],
    ["roasted peanuts", 585, 26, 21, 50, 9],
    ["roasted chana", 370, 22, 58, 6, 18],
    ["popcorn", 387, 13, 78, 5, 15],
    ["dark chocolate", 600, 8, 46, 43, 11],
    ["rice cakes", 387, 8, 81, 3, 3],
    ["protein pancakes", 220, 18, 22, 7, 3]
].forEach(([name, calories, protein, carbs, fat, fiber]) => addPreparedFood(name, {
    calories, protein, carbs, fat, fiber, vitamins: {}, minerals: {}
}));

function addCatalogFoods(names, values) {
    names.split("|").forEach(name => addPreparedFood(name.trim(), {
        ...values,
        vitamins: {},
        minerals: {}
    }));
}

foods.appam = {
    raw: {
        calories: 124,
        protein: 2.7,
        carbs: 25.4,
        fat: 1.2,
        fiber: 1.2,
        vitamins: {
            "Vitamin B1": 0.05,
            "Vitamin B3": 0.8,
            Folate: 15
        },
        minerals: {
            Calcium: 17,
            Iron: 1.1,
            Magnesium: 11,
            Phosphorus: 47,
            Potassium: 70,
            Sodium: 180
        }
    },
    cooked: {
        calories: 124,
        protein: 2.7,
        carbs: 25.4,
        fat: 1.2,
        fiber: 1.2,
        vitamins: {
            "Vitamin B1": 0.05,
            "Vitamin B3": 0.8,
            Folate: 15
        },
        minerals: {
            Calcium: 17,
            Iron: 1.1,
            Magnesium: 11,
            Phosphorus: 47,
            Potassium: 70,
            Sodium: 180
        }
    }
};

// Catalog coverage for international meals and common gym-food combinations.
addCatalogFoods(
    "steamed rice|jeera rice|tamarind rice|coconut rice|tomato rice|vegetable pulao|chicken pulao|mutton pulao|fish biryani|egg biryani|hyderabadi biryani|kolkata biryani|gutti vankaya curry|brinjal curry|tomato curry|bhindi masala|aloo gobi|paneer butter masala|chana masala|rajma masala|dal makhani|dal tadka|butter chicken|chicken tikka masala|prawn curry|masala dosa|plain dosa|rava dosa|uttapam|vada|medu vada|pongal|appam|idiyappam|parotta|ragi mudde|samosa|pakora|onion pakoda|mirchi bajji|aloo bonda|mysore bonda|vada pav|dhokla|kachori|pani puri|bhel puri|sev puri|pav bhaji|chole bhature|chicken rice|egg rice|paneer rice|chicken tikka and rice|tandoori chicken and rice",
    { calories: 185, protein: 7, carbs: 24, fat: 7, fiber: 2 }
);

addCatalogFoods(
    "egg fried rice|chicken fried rice|vegetable fried rice|shrimp fried rice|yangzhou fried rice|chow mein|chicken chow mein|vegetable chow mein|beef chow mein|lo mein|dan dan noodles|beef noodle soup|wonton noodles|kung pao chicken|sweet and sour chicken|general tso's chicken|orange chicken|black pepper chicken|mongolian beef|beijing beef|mapo tofu|twice cooked pork|sweet and sour pork|steamed dumplings|fried dumplings|wontons|spring rolls|baozi|xiaolongbao|scallion pancakes|steamed buns|hot and sour soup|wonton soup|egg drop soup|chicken noodle soup|steamed chicken|steamed fish|chicken stir fry|chicken vegetable stir fry|beef stir fry|shrimp stir fry|chinese chicken noodles|beef and vegetable bowl|chicken and rice bowl",
    { calories: 175, protein: 10, carbs: 20, fat: 7, fiber: 2 }
);

addCatalogFoods(
    "spaghetti|spaghetti bolognese|carbonara|alfredo pasta|arrabbiata|pesto pasta|lasagna|ravioli|penne|penne arrabbiata|macaroni|fettuccine alfredo|gnocchi|margherita pizza|pepperoni pizza|four cheese pizza|vegetable pizza|chicken pizza|mushroom pizza|hawaiian pizza|risotto|mushroom risotto|chicken parmesan|eggplant parmesan|minestrone soup|bruschetta|caprese salad|focaccia|tiramisu|chicken pasta|chicken breast pasta|tuna pasta|egg pasta|whole wheat pasta|protein pasta|chicken risotto|tuna salad|chicken salad|cottage cheese|beans|lentils|whole wheat bread",
    { calories: 220, protein: 9, carbs: 28, fat: 8, fiber: 3 }
);

addCatalogFoods(
    "sushi|salmon sushi|tuna sushi|california roll|sashimi|ramen|chicken ramen|tonkotsu ramen|udon|soba|yakisoba|teriyaki chicken|chicken katsu|beef teriyaki|tempura|gyoza|miso soup|japanese curry|onigiri|takoyaki|okonomiyaki|grilled salmon|tuna rice bowl|salmon rice bowl|seaweed|japanese chicken bowl|bibimbap|kimchi|kimchi fried rice|korean fried chicken|bulgogi|beef bulgogi|chicken bulgogi|samgyeopsal|japchae|tteokbokki|korean bbq|kimchi stew|sundubu jjigae|korean dumplings|gimbap|korean bbq beef|tuna rice|chicken gimbap",
    { calories: 190, protein: 12, carbs: 20, fat: 7, fiber: 2 }
);

addCatalogFoods(
    "pad thai|thai fried rice|green curry|red curry|massaman curry|tom yum soup|tom kha soup|thai basil chicken|mango sticky rice|thai spring rolls|satay|pineapple fried rice|chicken satay|thai chicken stir fry|chicken green curry|chicken red curry|tacos|chicken tacos|beef tacos|fish tacos|burrito|chicken burrito|beef burrito|quesadilla|enchiladas|nachos|guacamole|fajitas|mexican rice|refried beans|chili con carne|tamales|pozole|churros|chicken burrito bowl|chicken fajitas|lean beef tacos|chicken rice bowl|beans and rice|black beans|pinto beans|whole grain tortilla",
    { calories: 205, protein: 10, carbs: 22, fat: 9, fiber: 4 }
);

addCatalogFoods(
    "hamburger|cheeseburger|chicken burger|fried chicken|chicken wings|buffalo wings|hot dog|steak|meatloaf|mac and cheese|pancakes|waffles|french toast|mashed potatoes|coleslaw|caesar salad|clam chowder|bbq ribs|pulled pork|turkey breast|lean beef|lean ground beef|turkey burger|oatmeal|chicken rice bowl|steak rice bowl|doner kebab|adana kebab|shish kebab|turkish pide|lahmacun|menemen|turkish lentil soup|manti|imam bayildi|dolma|baklava|turkish rice|chicken kebab|chicken shish|grilled lamb|lean beef kebab|chicken doner|chicken souvlaki|greek salad|moussaka|gyros|tzatziki|spanakopita|pastitsio|dolmades|feta|whole wheat pita|ratatouille|croissant|french omelette|quiche|beef bourguignon|coq au vin|french onion soup|crepes|croque monsieur|nicoise salad|duck confit|bouillabaisse|low fat cheese|whole grain bread",
    { calories: 230, protein: 15, carbs: 18, fat: 11, fiber: 2 }
);

addCatalogFoods(
    "paella|chicken paella|seafood paella|tortilla espanola|gazpacho|spanish omelette|patatas bravas|croquetas|tapas|chicken tapas|pho|chicken pho|beef pho|banh mi|vietnamese spring rolls|bun cha|bun bo hue|vietnamese fried rice|com tam|vietnamese coffee|grilled beef|chicken banh mi|nasi goreng|mie goreng|rendang|satay|gado gado|nasi padang|soto ayam|bakso|tempeh|sambal|beef rendang|chicken soto|chicken adobo|pork adobo|sinigang|lechon|pancit|lumpia|kare kare|arroz caldo|tapsilog|halo halo|chicken pancit|feijoada|coxinha|pao de queijo|brazilian barbecue|moqueca|brigadeiro|acaraje|farofa|brazilian rice and beans|grilled beef|brazilian bbq|black beans|sweet potato|cassava|injera|doro wat|tibs|shiro|jollof rice|chicken yassa|bunny chow|bobotie|couscous|tagine|chicken stew|beef tibs|vegetable stew|hummus|falafel|shawarma|chicken shawarma|beef shawarma|kofta|baba ganoush|tabbouleh|fattoush|moutabal|mansaf|kabsa|mandi|falafel wrap|pita bread|chicken mandi|chicken kabsa|labneh",
    { calories: 210, protein: 11, carbs: 22, fat: 9, fiber: 3 }
);

addCatalogFoods(
    "low fat paneer|tofu|soybeans|edamame|tempeh|seitan|cottage cheese|skimmed milk|moong dal|toor dal|masoor dal|urad dal|chana dal|sprouted moong|kidney beans|green peas|sprouts|basmati rice|rolled oats|jowar|bajra|barley|whole wheat|chapati|corn|almond butter|pistachios|sunflower seeds|sesame seeds|avocado|coconut|orange|pineapple|watermelon|kiwi|strawberry|blueberry|figs|pear|raspberries|mushrooms|green beans|berries|honey|whole wheat toast|banana peanut butter|fruit oatmeal|chicken and potato|chicken and sweet potato|eggs and rice|eggs and toast|tuna and rice|salmon and rice|tofu and rice|soya chunks and rice|greek yogurt and banana|whey protein and banana|whey protein and oats|chicken wrap|chicken burrito bowl|nuts|trail mix|whole milk|cheese|chicken|beef|mutton|salmon|sardines|white fish|rohu|katla|tilapia|pomfret|prawns|shrimp|crab|egg whites|mutton liver|olive oil|coconut oil|egg yolk|pasta|whole wheat pasta|boiled potato|mushrooms|cucumber|tomato|cauliflower|cabbage|green leafy vegetables",
    { calories: 150, protein: 10, carbs: 18, fat: 5, fiber: 5 }
);

const foodAliases = {
    biryani: "chicken biryani",
    briyani: "chicken biryani",
    "chicken briyani": "chicken biryani",
    "chicken biriyani": "chicken biryani",
    biriyani: "chicken biryani",
    "panner curry": "paneer curry",
    eggs: "egg",
    carrots: "carrot",
    bananas: "banana",
    apples: "apple",
    potatoes: "potato",
    broccoli: "broccoli",
    "boiled egg": "egg",
    "whole egg": "egg",
    "egg white": "egg",
    "egg yolk": "egg",
    "white rice": "rice",
    "brown rice": "rice",
    "full-fat milk": "milk",
    "low-fat milk": "milk",
    "skimmed milk": "milk",
    "soya chunks": "soya chunks"
};

function resolveFoodName(input) {
    const normalized = input.trim().toLowerCase().replace(/\s+/g, " ");
    if (foods[normalized]) return normalized;
    if (foodAliases[normalized]) return foodAliases[normalized];
    return Object.keys(foods).find(name => normalized.includes(name) || name.includes(normalized));
}

const servingUnits = {
    egg: { label: "eggs", singular: "egg", grams: 50 },
    carrot: { label: "carrots", singular: "carrot", grams: 61 },
    banana: { label: "bananas", singular: "banana", grams: 118 },
    apple: { label: "apples", singular: "apple", grams: 182 },
    potato: { label: "potatoes", singular: "potato", grams: 150 },
    broccoli: { label: "broccoli heads", singular: "broccoli head", grams: 148 }
};

function getServingUnit(foodName) {
    return servingUnits[foodName] || null;
}

function getFoodState(foodName, requestedState) {
    const food = foods[foodName];
    if (!food) return null;
    if (food[requestedState]) return { values: food[requestedState], label: requestedState };
    if (requestedState !== "raw" && food.cooked) return { values: food.cooked, label: "cooked" };
    if (food.raw) return { values: food.raw, label: "raw" };
    return null;
}

function updateAmountControls() {
    const foodName = resolveFoodName(document.getElementById("foodInput").value);
    const serving = getServingUnit(foodName);
    const amountInput = document.getElementById("foodWeight");
    const amountLabel = document.getElementById("amountLabel");
    const unitLabel = document.getElementById("unitLabel");
    const unitSelect = document.getElementById("foodUnit");
    const amountHint = document.getElementById("amountHint");
    const previousUnit = unitSelect.value;
    const itemLabel = serving ? serving.label : "items";
    const itemSingular = serving ? serving.singular : "item";
    const itemGrams = serving ? serving.grams : 100;
    unitSelect.innerHTML = `<option value="count">${itemLabel}</option>
        <option value="g">grams (g)</option>
        <option value="kg">kilograms (kg)</option>
        <option value="ml">millilitres (ml)</option>
        <option value="l">litres (L)</option>`;
    unitSelect.value = [...unitSelect.options].some(option => option.value === previousUnit)
        ? previousUnit
        : "g";
    if (serving && previousUnit === "g" && amountInput.value === "100") {
        unitSelect.value = "count";
    }
    unitSelect.disabled = false;
    amountLabel.textContent = unitSelect.value === "count"
        ? `How many ${itemLabel}`
        : "Amount";
    unitLabel.textContent = "Unit";
    amountInput.step = unitSelect.value === "count" ? "1" : "0.1";

    if (unitSelect.value === "count" && previousUnit !== "count") {
        amountInput.value = "1";
    } else if (unitSelect.value !== "count" && previousUnit === "count") {
        amountInput.value = "100";
    }

    amountHint.textContent = unitSelect.value === "count"
        ? `One ${itemSingular} is calculated as approximately ${itemGrams} g. Add a food-specific serving size for a more accurate item estimate.`
        : "USDA reference values are calculated per 100 g. Liquid ml/L amounts are converted to the gram basis.";
}


// =====================================================
// CALCULATE FOOD
// =====================================================

async function calculateFood() {

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


    const serving = getServingUnit(foodName);
    const servingCount = weight;
    const enteredUnit = unit;

    if (unit === "count") {
        weight = weight * (serving ? serving.grams : 100);
    } else if (unit === "kg" || unit === "l") {
        weight *= 1000;
    } else if (unit === "ml") {
        weight *= 1;

    }

    if (lookupMode === "usda") {
        await calculateWithUSDA(enteredFood, weight, state, unit, servingCount, serving);
        return;
    }

    if (lookupMode === "ai") {
        calculateWithAI(enteredFood, weight, unit, state);
        return;
    }

    if (!foodName) {
        alert("Food not found. Try a common food name or choose AI-assisted USDA lookup.");
        return;
    }


    const selectedState = getFoodState(foodName, state);
    if (!selectedState) {
        alert("Nutrition data is not available for this food and preparation.");
        return;
    }

    const base = selectedState.values;


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
        selectedState.label,
        weight,
        nutrition,
        vitamins,
        minerals,
        unit === "count"
            ? `${servingCount} ${servingCount === 1 ? (serving ? serving.singular : "item") : (serving ? serving.label : "items")}`
            : `${servingCount} ${enteredUnit === "l" ? "L" : enteredUnit}`
    );

}

const USDA_NUTRIENT_IDS = {
    calories: 1008,
    protein: 1003,
    carbs: 1005,
    fat: 1004,
    fiber: 1079,
    sugar: 2000,
    sodium: 1093,
    potassium: 1092,
    calcium: 1087,
    iron: 1089,
    magnesium: 1090,
    phosphorus: 1091,
    vitaminA: 1106,
    vitaminC: 1162,
    vitaminD: 1114,
    vitaminE: 1109,
    vitaminK: 1185,
    vitaminB1: 1165,
    vitaminB2: 1166,
    vitaminB3: 1167,
    vitaminB6: 1175,
    folate: 1177,
    vitaminB12: 1178
};

function normalizeUSDAFood(food, grams) {
    const nutrientValues = Object.fromEntries((food.foodNutrients || []).map(nutrient => [
        nutrient.nutrientId,
        Number(nutrient.value) || 0
    ]));
    const multiplier = grams / 100;
    const value = nutrient => (nutrientValues[USDA_NUTRIENT_IDS[nutrient]] || 0) * multiplier;
    const nutrition = {
        calories: value("calories"),
        protein: value("protein"),
        carbs: value("carbs"),
        fat: value("fat"),
        fiber: value("fiber"),
        sugar: value("sugar"),
        sodium: value("sodium")
    };
    const vitamins = {
        "Vitamin A": value("vitaminA"),
        "Vitamin C": value("vitaminC"),
        "Vitamin D": value("vitaminD"),
        "Vitamin E": value("vitaminE"),
        "Vitamin K": value("vitaminK"),
        "Vitamin B1": value("vitaminB1"),
        "Vitamin B2": value("vitaminB2"),
        "Vitamin B3": value("vitaminB3"),
        "Vitamin B6": value("vitaminB6"),
        "Folate": value("folate"),
        "Vitamin B12": value("vitaminB12")
    };
    const minerals = {
        Potassium: value("potassium"),
        Calcium: value("calcium"),
        Iron: value("iron"),
        Magnesium: value("magnesium"),
        Phosphorus: value("phosphorus")
    };
    return { nutrition, vitamins, minerals };
}

async function calculateWithUSDA(foodQuery, grams, state, unit, servingCount, serving) {
    const result = document.getElementById("foodResult");
    result.classList.remove("hidden");
    result.innerHTML = "<p>Looking up verified USDA FoodData Central values...</p>";

    try {
        const preparationQuery = state === "raw" ? foodQuery : `${foodQuery} ${state}`;
        const response = await fetch(`/.netlify/functions/usda?query=${encodeURIComponent(preparationQuery)}`);
        const data = await readJSONResponse(response);
        if (!response.ok || !data.foods?.length) throw new Error(data.error || "Food not found in USDA FoodData Central.");
        const food = data.foods.find(candidate => candidate.foodNutrients?.length) || data.foods[0];
        const normalized = normalizeUSDAFood(food, grams);
        const servingText = unit === "count"
            ? `${servingCount} ${servingCount === 1 ? (serving ? serving.singular : "item") : (serving ? serving.label : "items")}`
            : `${servingCount} ${unit === "l" ? "L" : unit}`;
        showFoodResult(
            food.description,
            state,
            grams,
            normalized.nutrition,
            normalized.vitamins,
            normalized.minerals,
            servingText,
            `USDA FoodData Central · FDC ID ${food.fdcId}`
        );
    } catch (error) {
        const foodName = resolveFoodName(foodQuery);
        if (foodName) {
            const lookupModeElement = document.getElementById("lookupMode");
            const previousMode = lookupModeElement.value;
            lookupModeElement.value = "database";
            await calculateFood();
            lookupModeElement.value = previousMode;
            return;
        }
        result.innerHTML = "<p>No standard nutrition result is available for this food.</p>";
    }
}

async function readJSONResponse(response) {
    const text = await response.text();
    try {
        return JSON.parse(text);
    } catch (error) {
        throw new Error("USDA endpoint returned HTML instead of JSON. Run through Netlify Functions and configure USDA_API_KEY.");
    }
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
    }[character]));
}


// =====================================================
// SHOW FOOD RESULT
// =====================================================

function getFoodHealthAssessment(nutrition) {
    const calories = Number(nutrition.calories) || 0;
    const protein = Number(nutrition.protein) || 0;
    const fiber = Number(nutrition.fiber) || 0;
    const fat = Number(nutrition.fat) || 0;
    const sugar = Number(nutrition.sugar);
    const sodium = Number(nutrition.sodium);
    let score = 0;

    if (protein >= 15) score += 2;
    else if (protein >= 8) score += 1;
    if (fiber >= 5) score += 2;
    else if (fiber >= 2) score += 1;
    if (calories <= 250) score += 1;
    else if (calories > 700) score -= 1;
    if (fat <= 15) score += 1;
    else if (fat > 30) score -= 1;
    if (Number.isFinite(sugar)) {
        if (sugar > 20) score -= 2;
        else if (sugar > 10) score -= 1;
    }
    if (Number.isFinite(sodium)) {
        if (sodium > 600) score -= 2;
        else if (sodium > 300) score -= 1;
    }

    if (score >= 4) {
        return {
            className: "good",
            label: "Healthy choice",
            message: "A nutrient-dense option for this portion."
        };
    }
    if (score >= 2) {
        return {
            className: "okay",
            label: "Okay in moderation",
            message: "This can fit into a balanced diet when the portion suits your goals."
        };
    }
    return {
        className: "bad",
        label: "Limit this choice",
        message: "Consider a smaller portion or pair it with vegetables or a lean protein."
    };
}

function showFoodResult(
    food,
    state,
    weight,
    nutrition,
    vitamins,
    minerals,
    servingText = `${weight}g`,
    sourceText = "Curated database · Approximate values"
) {

    const result =
        document.getElementById(
            "foodResult"
        );


    result.classList.remove(
        "hidden"
    );

    const healthAssessment = getFoodHealthAssessment(nutrition);


    result.innerHTML = `

        <h3>
            ${capitalize(food)}
            — ${capitalize(state)}
        </h3>

        <p>
            Nutrition for
            <strong>${servingText}</strong>
        </p>

        <p class="result-source">Source: ${escapeHTML(sourceText)}</p>

        <div class="food-health ${healthAssessment.className}">
            <strong>${healthAssessment.label}</strong>
            <span>${healthAssessment.message}</span>
        </div>

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

            ${createMicroCards(vitamins, "vitamin")}

        </div>

        <br>

        <h3>
            Minerals
        </h3>

        <div class="micro-grid">

            ${createMicroCards(minerals, "mineral")}

        </div>

    `;

}


// =====================================================
// MICRO CARDS
// =====================================================

function createMicroCards(data, category) {

    const vitaminUnits = {
        "Vitamin A": "mcg",
        "Vitamin D": "mcg",
        "Vitamin K": "mcg",
        "Vitamin B12": "mcg",
        Folate: "mcg"
    };

    const mineralUnits = {
        Selenium: "mcg"
    };

    const entries = Object.entries(data);
    if (!entries.length) {
        return `<p class="micro-empty">Micronutrient reference data is not available for this food.</p>`;
    }

    return entries

        .map(
            ([name, value]) => `

                <div class="micro">

                    <span>
                        ${name}
                    </span>

                    <strong>
                        ${value.toFixed(2)}
                        ${category === "vitamin"
                            ? (vitaminUnits[name] || "mg")
                            : (mineralUnits[name] || "mg")}
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
    result.innerHTML = "<p>Finding a standard nutrient reference...</p>";

    try {
        const preparationQuery = state === "raw" ? food : `${food} ${state}`;
        const response = await fetch(`/.netlify/functions/usda?query=${encodeURIComponent(preparationQuery)}`);
        const data = await readJSONResponse(response);
        if (!response.ok || !data.foods?.length) throw new Error(data.error || "USDA reference unavailable");
        const standardFood = data.foods.find(candidate => candidate.foodNutrients?.length) || data.foods[0];
        const normalized = normalizeUSDAFood(standardFood, weight);
        showFoodResult(
            standardFood.description,
            state,
            weight,
            normalized.nutrition,
            normalized.vitamins,
            normalized.minerals,
            `${weight}g`,
            `USDA FoodData Central · FDC ID ${standardFood.fdcId}`
        );
        result.insertAdjacentHTML("afterbegin", "<p class=\"ai-note\">AI-assisted lookup grounded in USDA reference data.</p>");
    } catch (error) {
        const foodName = resolveFoodName(food);
        const selectedState = getFoodState(foodName, state);
        if (!selectedState) {
            result.innerHTML = "<p>No standard nutrition result is available for this food.</p>";
            return;
        }
        const multiplier = weight / 100;
        const nutrition = Object.fromEntries(["calories", "protein", "carbs", "fat", "fiber"].map(name => [name, selectedState.values[name] * multiplier]));
        const vitamins = Object.fromEntries(Object.entries(selectedState.values.vitamins || {}).map(([name, value]) => [name, value * multiplier]));
        const minerals = Object.fromEntries(Object.entries(selectedState.values.minerals || {}).map(([name, value]) => [name, value * multiplier]));
        showFoodResult(foodName, selectedState.label, weight, nutrition, vitamins, minerals, `${weight}g`, "Curated database · Approximate fallback");
        result.insertAdjacentHTML("afterbegin", "<p class=\"ai-note\">USDA was unavailable. This is a curated reference fallback, not an AI-generated value.</p>");
    }
}

// Public data API for integrations and future views.
const preparations = [
    "Raw", "Boiled", "Steamed", "Grilled", "Roasted", "Fried",
    "Curry", "Tikka", "Tandoori", "Air-fried"
];

function nutrients(values = {}) {
    return {
        calories: values.calories ?? null,
        protein: values.protein ?? null,
        carbs: values.carbs ?? null,
        fiber: values.fiber ?? null,
        sugar: values.sugar ?? null,
        fat: values.fat ?? null,
        saturatedFat: values.saturatedFat ?? null,
        monounsaturatedFat: values.monounsaturatedFat ?? null,
        polyunsaturatedFat: values.polyunsaturatedFat ?? null,
        transFat: values.transFat ?? null,
        cholesterol: values.cholesterol ?? null,
        sodium: values.sodium ?? null,
        potassium: values.potassium ?? null,
        calcium: values.calcium ?? null,
        iron: values.iron ?? null,
        magnesium: values.magnesium ?? null,
        phosphorus: values.phosphorus ?? null,
        zinc: values.zinc ?? null,
        copper: values.copper ?? null,
        manganese: values.manganese ?? null,
        selenium: values.selenium ?? null,
        vitaminA: values.vitaminA ?? null,
        vitaminC: values.vitaminC ?? null,
        vitaminD: values.vitaminD ?? null,
        vitaminE: values.vitaminE ?? null,
        vitaminK: values.vitaminK ?? null,
        vitaminB1: values.vitaminB1 ?? null,
        vitaminB2: values.vitaminB2 ?? null,
        vitaminB3: values.vitaminB3 ?? null,
        vitaminB5: values.vitaminB5 ?? null,
        vitaminB6: values.vitaminB6 ?? null,
        vitaminB7: values.vitaminB7 ?? null,
        folate: values.folate ?? null,
        vitaminB12: values.vitaminB12 ?? null
    };
}

const preparationMap = {
    raw: "raw",
    boiled: "cooked",
    steamed: "cooked",
    grilled: "cooked",
    roasted: "cooked",
    fried: "cooked",
    curry: "cooked",
    tikka: "cooked",
    tandoori: "cooked",
    "air-fried": "cooked"
};

const foodCategories = {
    carrot: "Vegetables", rice: "Grains", egg: "Egg", "chicken breast": "Meat",
    potato: "Vegetables", oats: "Grains", banana: "Fruit", apple: "Fruit",
    paneer: "Dairy", peanuts: "Nuts", almonds: "Nuts", broccoli: "Vegetables",
    spinach: "Vegetables"
};

function toNutrientRecord(record) {
    return nutrients({
        calories: record.calories,
        protein: record.protein,
        carbs: record.carbs,
        fiber: record.fiber,
        fat: record.fat,
        ...Object.fromEntries(Object.entries(record.vitamins || {}).map(([name, value]) => [
            name.replace(/\s/g, "").replace(/^Vitamin/, "vitamin"), value
        ])),
        ...Object.fromEntries(Object.entries(record.minerals || {}).map(([name, value]) => [
            name.toLowerCase(), value
        ]))
    });
}

const foodDatabase = Object.fromEntries(Object.entries(foods).map(([name, record]) => {
    const availablePreparations = { Raw: toNutrientRecord(record.raw) };
    if (record.cooked) {
        preparations.slice(1).forEach(preparation => {
            availablePreparations[preparation] = toNutrientRecord(record.cooked);
        });
    }
    return [name.replace(/\b\w/g, letter => letter.toUpperCase()), {
        category: foodCategories[name] || "Food",
        source: "Curated nutrition database",
        fdcId: "",
        preparations: availablePreparations
    }];
}));

function findDatabaseFood(foodName) {
    const normalized = String(foodName || "").trim().toLowerCase();
    return Object.keys(foodDatabase).find(name => name.toLowerCase() === normalized) || null;
}

function searchFoods(query) {
    const normalized = String(query || "").trim().toLowerCase();
    return Object.keys(foodDatabase).filter(food => food.toLowerCase().includes(normalized));
}

function getFood(foodName) {
    const name = findDatabaseFood(foodName);
    return name ? foodDatabase[name] : null;
}

function getPreparations(foodName) {
    const food = getFood(foodName);
    return food ? Object.keys(food.preparations) : [];
}

function getNutrition(foodName, preparation = "Raw") {
    const food = getFood(foodName);
    if (!food) return null;
    const requested = Object.keys(food.preparations).find(
        value => value.toLowerCase() === preparation.toLowerCase()
    );
    return requested ? food.preparations[requested] : null;
}

function calculateNutrition(foodName, preparation, grams) {
    const nutrition = getNutrition(foodName, preparation);
    const quantity = Number(grams);
    if (!nutrition) return { error: "Food or preparation not found." };
    if (!Number.isFinite(quantity) || quantity <= 0) return { error: "Enter a valid quantity." };
    return Object.fromEntries(Object.entries(nutrition).map(([key, value]) => [
        key, value === null ? null : value * quantity / 100
    ]));
}

function roundNutrition(result) {
    return Object.fromEntries(Object.entries(result).map(([key, value]) => [
        key, value === null ? null : Math.round(value * 100) / 100
    ]));
}

function calculateMacros(nutrition) {
    if (!nutrition || [nutrition.protein, nutrition.carbs, nutrition.fat].some(value => value === null)) return null;
    const total = nutrition.protein * 4 + nutrition.carbs * 4 + nutrition.fat * 9;
    if (!total) return { protein: 0, carbs: 0, fat: 0 };
    return {
        protein: nutrition.protein * 4 / total * 100,
        carbs: nutrition.carbs * 4 / total * 100,
        fat: nutrition.fat * 9 / total * 100
    };
}

function analyzeFood(foodName, preparation, grams) {
    const name = findDatabaseFood(foodName);
    if (!name) return { error: "Food not found." };
    const nutrition = calculateNutrition(name, preparation, grams);
    if (nutrition.error) return nutrition;
    const rounded = roundNutrition(nutrition);
    return {
        food: name,
        category: foodDatabase[name].category,
        preparation,
        quantity: Number(grams),
        unit: "g",
        source: foodDatabase[name].source,
        fdcId: foodDatabase[name].fdcId,
        nutrition: rounded,
        macroPercentage: calculateMacros(rounded)
    };
}

function formatValue(value, unit = "g") {
    return value === null || value === undefined ? "N/A" : `${Math.round(value * 100) / 100} ${unit}`;
}

window.NutrientAnalyzer = {
    database: foodDatabase,
    preparations,
    searchFoods,
    getFood,
    getPreparations,
    getNutrition,
    calculateNutrition,
    calculateMacros,
    analyzeFood,
    formatValue
};


