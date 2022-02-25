// import modules
import "../component/club-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";


const main = function () {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    // Menggunakan Promise
    const onButtonSearchClicked = function () {
        DataSource.searchClub(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult);
    }

    // Menggunakan Arrow function
    const renderResult = (results) => {
       clubListElement.clubs = results;
    };

    // Menggunakan Arrow function
    const fallbackResult = (message) => {
        clubListElement.renderError(message);
    };

    searchElement.clickButton = onButtonSearchClicked;
};

// export modules
export default main;