/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    const bodyClass = $('body');

    const feedContainer = document.querySelector(".feed");

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        

        /* This test ensures the allFeeds variable has been defined and that it is not empty */ 
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
        in the allFeeds object and ensures it has a non empty URL defined
        */


        it('is defined', function() {
            allFeeds.forEach(function (feed, index){
                expect(feed.url).toBeDefined();               
                expect(feed.url).not.toBe('');
            });
        });


        /* This test loops through each feed
        in the allFeeds object and ensures it has a non empty name defined
        */

         it('is defined', function() {
            allFeeds.forEach(function (feed, index){
                expect(feed.name).toBeDefined();               
                expect(feed.name).not.toBe('');
            });
         });

    });


        

    describe('The menu', function(){

        /*This test ensures the menu element is
        hidden by default.*/

        it('is hidden by default', function(){
            
            expect(bodyClass.hasClass('menu-hidden')).toBe(true);    
        });


    
        /* This test ensures the menu changes
        visibility when the menu icon is clicked.*/

        it('menu displays when clicked', function(){
            const hamburguerMenu = document.querySelector(".menu-icon-link");

            hamburguerMenu.click();
            expect(bodyClass.hasClass('menu-hidden')).toBe(false);

            hamburguerMenu.click();
            expect(bodyClass.hasClass('menu-hidden')).toBe(true);      
        });
    
    });      



    describe('Initial Entries', function(){
        
        /* This test ensures that when the loadFeed
        function is called and completes its work, there is at least
        a single .entry element within the .feed container.
        */
         
        beforeEach(function(done) {
            loadFeed(0, done);
        }); 
        

        it('there is at least a single .entry element', function(done) {
            expect(document.querySelector(".feed .entry-link")).not.toBe(null);
            done();       
        });
    });
                

    
    

    describe('New Feed Selection', function(){
        
        /* This test ensures that when a new feed is loaded
        by the loadFeed function the content actually changes.         
        */

        let udacityFeed, cssTricksFeed;

        beforeEach(function(done){
            loadFeed(0, function(){
                udacityFeed = $(".feed").text();
                loadFeed(1, function(){
                    cssTricksFeed = $(".feed").text();
                        done();
                });
            });
        });



        it('content actually changes', function(done){
            expect(udacityFeed).not.toEqual(cssTricksFeed);   
            done(); 
        });
        

    });    
        
}());
