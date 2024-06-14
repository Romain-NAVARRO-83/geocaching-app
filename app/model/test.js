const Hero = require('./Heroes.js');

main();
async function main(){
    const AllHeroes = await Hero.findAll();
}