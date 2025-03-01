const { getJson } = require("serpapi");
const axios = require("axios");

module.exports.getAddressCordinate = async (address) => {
    // Validate address parameter
    console.log("address in map services", address);
    
    if (!address || typeof address !== 'string' || address.trim() === '') {
        throw new Error('Invalid or missing address parameter');
    }

    console.log("api key", process.env.SERPAPI_API_KEY);
    const apiKey = process.env.SERPAPI_API_KEY;
    if (!apiKey) {
        throw new Error('API key is missing');
    }

    try {
        // First try with SerpAPI
        const serpApiResponse = await new Promise((resolve, reject) => {
            getJson({
                engine: "google_maps",
                q: address.trim(), 
                api_key: apiKey,
                type: "search" 
            }, (json) => {
                console.log('SerpAPI Response:', JSON.stringify(json, null, 2));
                if (json.error) {
                    reject(new Error(json.error));
                } else {
                    resolve(json);
                }
            });
        });

        // Extract coordinates from place_results
        if (serpApiResponse.place_results?.gps_coordinates) {
            const { latitude, longitude } = serpApiResponse.place_results.gps_coordinates;
            return {
                lat: latitude,
                lng: longitude
            };
        }

        // Fallback for local_results format
        if (serpApiResponse.local_results?.[0]) {
            const result = serpApiResponse.local_results[0];
            if (result.latitude && result.longitude) {
                return {
                    lat: result.latitude,
                    lng: result.longitude
                };
            }
        }

        console.error('Response structure:', JSON.stringify(serpApiResponse, null, 2));
        throw new Error('No coordinates found in the response');

    } catch (error) {
        console.error('Error getting coordinates:', error.message);
        throw error;
    }
};