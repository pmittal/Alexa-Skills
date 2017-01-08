'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "undefined"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'New Year Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "The U.N. has designated 2017 as the International Year of Sustainable Tourism for Development.",
    "2017 is the 2017th year of the Common Era (CE) and Anno Domini (AD). It is also the 17th year of the 3rd millennium, the 17th year of the 21st century, and the 8th year of the 2010s decade.",
    "FIRST TOTAL SOLAR ECLIPSE FOR US IN 21ST CENTURY",
    "According to the Chinese calendar, 2017 is the Year of the Rooster.",
    "World Expo 2017, an International Exposition, will open in Astana, Kazakhstan on June 10.",
    "NASA TO LAUNCH TESS MISSION TO SEARCH FOR EXOPLANETS",
    "The year of Big Hollywood movies such as Wonder Woman, The Return of Xander Cage, Pirates of the Caribbean: Dead Men Tell No Tales, Transformers: The Last Knight and Star Wars: Episode VIII",
    "About half of Americans won't go out for New Year's Eve this year.",
    "The most popular cities to go to for New Year's Eve are Orlando, Florida, New York City and Honolulu.",
    "About 8,000 babies will be born on New Year's Day.",
    "The ball didn't drop in Times Square in 1942 and 1943 because of World War II.",
    "Two-thirds of Americans will make a New Year's resolution, but only a fraction of them will keep it.",
    "The most common resolutions involve staying healthy, losing weight, spending less money, traveling more and reading more.",
    "100.5 million will travel at least 30 miles from home for new year celebrations.",
    "The spacecraft Cassini-Huygens, after having studied Saturn for 13 years, will be disposed of by plunging into Saturn's atmosphere.",
    "48 percent of Americans plan to celebrate New Year’s Eve at home.",
    "Most Popular New Year's destinations are Orlando, New York City, Honolulu in America",
    "30 percent of Americans fall asleep before midnight on New Year’s Eve.",
    "In Spain, revelers wear red underwear on New Year's Eve for good luck. They also eat a dozen grapes at midnight",
    "The unmanned spacecraft, which was sent on a mission to Saturn in 1997, has been studying the planet and its satellites since 2004. It is the fourth space probe to visit Saturn but the first one to enter Saturn's orbit. On Sept. 15,  it will be destroyed by plunging it into Saturn's atmosphere.",
    "This year DISNEYLAND PARIS MARKS ITS 25TH ANNIVERSARY",
	"The first New Year’s celebration dates back 4,000 years."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};