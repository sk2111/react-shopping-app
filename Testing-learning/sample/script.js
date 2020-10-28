const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavouritescats.com',
    'myfavouritescats2.com'
];


const googleSearch = (searchInput,db) => {
    const matches = db.filter(website =>{
        return website.includes(searchInput);
    });
    return matches.slice(0,3);
}

module.exports = googleSearch;