import axios from 'axios';

export default {
    // ---------------------------------------------------------
    // 1 - load data example using fetch + async await
    // ---------------------------------------------------------
    /*
    async loadStarships(context, payload) {
        // test getting context and payload
        // console.log(context);
        // console.log(payload);

        const starships = [];
        const pageUrl = 'https://swapi.dev/api/starships/';
        // const pageUrl = 'https://run.mocky.io/v3/e710570f-f48a-46e4-9db1-d2ab0aeb3289?mocky-delay=3000ms';


        // ------------------------
        // await fetch to url
        const response = await fetch(pageUrl, {
            method: 'GET',
            headers: {}
        });

        // ------------------------
        // await extract response data
        const responseData = await response.json();

        // catch fetch error, if any
        console.log(response);
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        // ------------------------
        // finish process
        // call mutation and update starships list state
        starships.push(...responseData.results);
        context.commit('setStarships', starships);
    }
    */

    // ---------------------------------------------------------
    // 2 - load data example using fetch + then promise example
    // ---------------------------------------------------------
    /* async loadStarships(context, payload) {
        const starships = [];

        const pageUrl = 'https://swapi.dev/api/starships/';
        // const pageUrl = 'https://run.mocky.io/v3/e710570f-f48a-46e4-9db1-d2ab0aeb3289?mocky-delay=3000ms';

        let loadPromise = fetch(pageUrl, {
            method: 'GET',
            headers: {}
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(responseData => {
                starships.push(...responseData.results);
                //console.log(starships);
                context.commit('setStarships', starships);
                return 'results loaded';
            })
            .catch(error => {
                console.log('error ' + error);
            });
        return loadPromise;
    }, */

    // ---------------------------------------------------------
    // 3 - load data example using AXIOS + then promise example
    // ---------------------------------------------------------
    async loadStarships(context, payload) {
        const starships = [];
        const pageUrl = 'https://swapi.dev/api/starships/';
        // const pageUrl = 'https://run.mocky.io/v3/e710570f-f48a-46e4-9db1-d2ab0aeb3289?mocky-delay=3000ms';

        // test axios
        // https://www.digitalocean.com/community/tutorials/vuejs-rest-api-axios
        // https://codingpotions.com/vue-axios

        let loadPromise = axios
            .get(pageUrl)
            .then(responseData => {
                //ojo, axios lo mete adentro de un objeto data
                starships.push(...responseData.data.results);
                //console.log(starships);
                context.commit('setStarships', starships);
                return 'results loaded';
            })
            .catch(error => {
                console.log('error ' + error);
            });

        return loadPromise;
    }
};
