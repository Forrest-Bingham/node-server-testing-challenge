const Pokemon = require('./pokemonModel.js');
const db = require('../data/dbConfig.js');

describe('Pokemon Model', function() {

    describe('test environment', function(){
        it('should use testing environment', function(){
            expect(process.env.DB_ENV).toBe('testing');
        })


    })

    describe('insert()', function(){

        beforeEach(async () => {
            await db('pokedex').truncate();
        })

        it('Adds a new Pokemon to the dex', async function(){
            // call to add a new Pokemon
            await Pokemon.insert({name:"Weedle"})
            const dex = await db('pokedex');
            expect(dex).toHaveLength(1);
        })
    })

    describe('remove()', function() {

        beforeEach(async()=>{
            await db('pokedex').truncate();
        })

        it('removes a pokemon from the dex', async function(){
            
            // expect(dex).toHaveLength(0);
            await Pokemon.insert({name:"Diglett"});
            await Pokemon.insert({name:"Ekans"});
            
            const dex2 = await db('pokedex');
            expect(dex2).toHaveLength(2);
             await Pokemon.remove({id:1});
            expect(dex2).toHaveLength(1);


        })
    })
})

