exports.handler = async (event) => {
    if (event.httpMethod === "OPTIONS") {
        return { statusCode: 204, body: "" };
    }

    if (event.httpMethod !== "GET") {
        return {
            statusCode: 405,
            headers: { "Allow": "GET, OPTIONS" },
            body: JSON.stringify({ error: "Method not allowed" })
        };
    }

    try {
        const query = event.queryStringParameters?.query?.trim();

        if (!query || query.length < 2 || query.length > 100) {
            return {
                statusCode: 422,
                body: JSON.stringify({
                    error: "Enter a food name between 2 and 100 characters."
                })
            };
        }

        const apiKey = process.env.USDA_API_KEY;

        if (!apiKey) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    error: "USDA service is not configured."
                })
            };
        }

        const url =
            `https://api.nal.usda.gov/fdc/v1/foods/search` +
            `?api_key=${encodeURIComponent(apiKey)}` +
            `&query=${encodeURIComponent(query)}` +
            `&dataType=Foundation,SR%20Legacy,Survey%20(FNDDS)` +
            `&pageSize=20`;

        const response = await fetch(url);
        const data = await response.json();

        if (response.ok && Array.isArray(data.foods)) {
            const queryWords = query.toLowerCase().split(/\s+/).filter(Boolean);
            const dataTypePriority = {
                Foundation: 3,
                "SR Legacy": 2,
                "Survey (FNDDS)": 1
            };
            data.foods.sort((left, right) => {
                const score = food => {
                    const description = String(food.description || "").toLowerCase();
                    const wordMatches = queryWords.filter(word => description.includes(word)).length;
                    const exactMatch = description === query.toLowerCase() ? 10 : 0;
                    return exactMatch + wordMatches + (dataTypePriority[food.dataType] || 0);
                };
                return score(right) - score(left);
            });
        }

        return {
            statusCode: response.status,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "private, max-age=300"
            },
            body: JSON.stringify(data)
        };

    } catch (error) {

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "Unable to contact the USDA service."
            })
        };
    }
};