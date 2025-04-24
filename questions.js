// Structure: 
// questions[category][difficulty] = array of question objects

const questions = {
    general: {
        easy: [
            {
                type: "multiple",
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                answer: "Paris",
                explanation: "Paris has been the capital of France since the 5th century."
            },
            {
                type: "multiple",
                question: "Which language runs in a web browser?",
                options: ["Java", "C", "Python", "JavaScript"],
                answer: "JavaScript",
                explanation: "JavaScript is the programming language of the Web."
            },
            {
                type: "multiple",
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                answer: "Vatican City",
                explanation: "Vatican City is only about 44 hectares in size."
            },
            {
                type: "multiple",
                question: "Which element has the chemical symbol 'O'?",
                options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
                answer: "Oxygen",
                explanation: "Oxygen is essential for human respiration."
            },
            {
                type: "multiple",
                question: "How many colors are in a rainbow?",
                options: ["5", "6", "7", "8"],
                answer: "7",
                explanation: "The colors are red, orange, yellow, green, blue, indigo, and violet."
            },
            {
                type: "multiple",
                question: "Which animal is known as the 'King of the Jungle'?",
                options: ["Tiger", "Elephant", "Lion", "Gorilla"],
                answer: "Lion",
                explanation: "Lions are apex predators in their habitat."
            },
            {
                type: "multiple",
                question: "What is the capital of Canada?",
                options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                answer: "Ottawa",
                explanation: "Ottawa was chosen as Canada's capital in 1857."
            },
            {
                type: "multiple",
                question: "Which planet is closest to the Sun?",
                options: ["Venus", "Mercury", "Earth", "Mars"],
                answer: "Mercury",
                explanation: "Mercury is the smallest and innermost planet."
            },
            {
                type: "multiple",
                question: "What is the largest mammal in the world?",
                options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
                answer: "Blue Whale",
                explanation: "Blue whales can grow up to 100 feet long."
            },
            {
                type: "multiple",
                question: "Which country is famous for the pyramids?",
                options: ["Greece", "Mexico", "Egypt", "Peru"],
                answer: "Egypt",
                explanation: "The Great Pyramid of Giza is one of the Seven Wonders."
            },
            {
                type: "multiple",
                question: "What is the currency of the United Kingdom?",
                options: ["Euro", "Dollar", "Pound", "Yen"],
                answer: "Pound",
                explanation: "The British currency is called Pound Sterling (£)."
            },
            {
                type: "multiple",
                question: "Which of these is not a primary color?",
                options: ["Red", "Blue", "Green", "Yellow"],
                answer: "Green",
                explanation: "The primary colors are red, blue, and yellow."
            },
            {
                type: "multiple",
                question: "How many bones are in the adult human body?",
                options: ["206", "300", "150", "250"],
                answer: "206",
                explanation: "Babies are born with about 300 bones that fuse together."
            },
            {
                type: "multiple",
                question: "How many continents are there in the world?",
                options: ["5", "6", "7", "8"],
                answer: "7",
                explanation: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
            },
            {
                type: "multiple",
                question: "What is the name of the fairy in Peter Pan?",
                options: ["Cinderella", "Tinker Bell", "Ariel", "Wendy"],
                answer: "Tinker Bell",
                explanation: "Tinker Bell is the small, glowing fairy who helps Peter Pan in the story."
            },
            {
                type: "multiple",
                question: "Which animal is known as the King of the Jungle?",
                options: ["Tiger", "Elephant", "Lion", "Leopard"],
                answer: "Lion",
                explanation: "The lion is often referred to as the King of the Jungle due to its power and majestic appearance."
            },
            {
                type: "multiple",
                question: "Which fruit is yellow and curved?",
                options: ["Apple", "Banana", "Grapes", "Orange"],
                answer: "Banana",
                explanation: "Bananas are typically yellow and curved when ripe."
            },
            {
                type: "multiple",
                question: "What is the name of our galaxy?",
                options: ["Andromeda", "Milky Way", "Mars", "Orion"],
                answer: "Milky Way",
                explanation: "The Milky Way is the galaxy that contains our Solar System."
            },
            {
                type: "multiple",
                question: "Which day comes after Friday?",
                options: ["Wednesday", "Thursday", "Saturday", "Sunday"],
                answer: "Saturday",
                explanation: "The days of the week follow the order: Friday, Saturday, Sunday..."
            },
            {
                type: "multiple",
                question: "How many legs does a spider have?",
                options: ["6", "8", "10", "12"],
                answer: "8",
                explanation: "Spiders are arachnids and have 8 legs."
            },
            //Here starts boolean type questions
            {
                type: "boolean",
                question: "The Sun rises in the east.",
                options: ["True", "False"],
                answer: "True",
                explanation: "The Sun always rises in the east and sets in the west."
            },
            {
                type: "boolean",
                question: "Water freezes at 0 degrees Celsius.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Water freezes at 0°C under standard atmospheric pressure."
            },
            {
                type: "boolean",
                question: "The human body has four lungs.",
                options: ["True", "False"],
                answer: "False",
                explanation: "The human body has two lungs—one on each side of the chest."
            },
            {
                type: "boolean",
                question: "Mount Everest is the tallest mountain on Earth.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Mount Everest is the highest mountain above sea level."
            },
            {
                type: "boolean",
                question: "Sharks are mammals.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Sharks are fish, not mammals."
            },
            {
                type: "boolean",
                question: "The Eiffel Tower is in Italy.",
                options: ["True", "False"],
                answer: "False",
                explanation: "The Eiffel Tower is located in Paris, France."
            },
            {
                type: "boolean",
                question: "Light travels faster than sound.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Light travels at about 300,000 km/s, much faster than sound."
            },
            {
                type: "boolean",
                question: "Cats are herbivores.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Cats are carnivores; they eat meat."
            },
            {
                type: "boolean",
                question: "There are 1000 meters in a kilometer.",
                options: ["True", "False"],
                answer: "True",
                explanation: "One kilometer equals 1000 meters."
            },
            {
                type: "boolean",
                question: "Penguins can fly.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Penguins are birds, but they cannot fly."
            },
            {
                type: "boolean",
                question: "The Great Wall of China is visible from space.",
                options: ["True", "False"],
                answer: "False",
                explanation: "It's a common myth, but the Great Wall is not easily visible from space with the naked eye."
            },
            {
                type: "boolean",
                question: "Bananas grow on trees.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Bananas grow on large herbaceous plants, not trees."
            },
            {
                type: "boolean",
                question: "The Atlantic Ocean is the largest ocean on Earth.",
                options: ["True", "False"],
                answer: "False",
                explanation: "The Pacific Ocean is the largest ocean on Earth."
            },
            {
                type: "boolean",
                question: "Humans have walked on the Moon.",
                options: ["True", "False"],
                answer: "True",
                explanation: "NASA astronauts landed on the Moon during the Apollo missions."
            },
            {
                type: "boolean",
                question: "The Statue of Liberty was a gift from France.",
                options: ["True", "False"],
                answer: "True",
                explanation: "France gave the Statue of Liberty to the USA in 1886."
            },
            {
                type: "boolean",
                question: "Bats are blind.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Bats can see; they also use echolocation to navigate."
            },
            {
                type: "boolean",
                question: "The human heart has four chambers.",
                options: ["True", "False"],
                answer: "True",
                explanation: "The heart has two atria and two ventricles."
            },
            {
                type: "boolean",
                question: "Gold is heavier than silver.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Gold has a higher density than silver, making it heavier."
            },
            {
                type: "boolean",
                question: "Tomatoes are vegetables.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Botanically, tomatoes are fruits."
            },
            {
                type: "boolean",
                question: "Sound cannot travel through a vacuum.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Sound needs a medium to travel and cannot move through a vacuum."
            },
            //Here starts fill type questions
            {
                type: "fill",
                question: "The capital of France is __________.",
                answer: "Paris",
                explanation: "Paris is the capital and most populous city of France."
            },
            {
                type: "fill",
                question: "The largest planet in our solar system is __________.",
                answer: "Jupiter",
                explanation: "Jupiter is the largest planet, known for its giant red spot."
            },
            {
                type: "fill",
                question: "The process by which plants make food using sunlight is called __________.",
                answer: "photosynthesis",
                explanation: "Photosynthesis is the process by which plants convert sunlight into energy."
            },
            {
                type: "fill",
                question: "The animal known as the king of the jungle is the __________.",
                answer: "lion",
                explanation: "The lion is often referred to as the king of the jungle due to its dominance."
            },
            {
                type: "fill",
                question: "Humans breathe in oxygen and breathe out __________.",
                answer: "carbon dioxide",
                explanation: "Humans exhale carbon dioxide after respiration."
            },
            {
                type: "fill",
                question: "The red part of the flag of Japan represents the __________.",
                answer: "sun",
                explanation: "The red circle in Japan's flag symbolizes the sun."
            },
            {
                type: "fill",
                question: "The tallest animal in the world is the __________.",
                answer: "giraffe",
                explanation: "Giraffes are the tallest land animals due to their long necks."
            },
            {
                type: "fill",
                question: "A shape with three sides is called a __________.",
                answer: "triangle",
                explanation: "A triangle is a polygon with three sides."
            },
            {
                type: "fill",
                question: "The freezing point of water is __________ degrees Celsius.",
                answer: "0",
                explanation: "Water freezes at 0°C under normal conditions."
            },
            {
                type: "fill",
                question: "The largest ocean in the world is the __________ Ocean.",
                answer: "Pacific",
                explanation: "The Pacific Ocean is the largest and deepest ocean on Earth."
            },
            {
                type: "fill",
                question: "The bird that cannot fly and is found in Antarctica is the __________.",
                answer: "penguin",
                explanation: "Penguins are flightless birds that live mainly in the Southern Hemisphere."
            },
            {
                type: "fill",
                question: "The gas that humans need to breathe is called __________.",
                answer: "oxygen",
                explanation: "Oxygen is essential for human respiration."
            },
            {
                type: "fill",
                question: "The __________ is the star at the center of our solar system.",
                answer: "Sun",
                explanation: "The Sun is the central star that provides energy to the solar system."
            },
            {
                type: "fill",
                question: "The month with the fewest number of days is __________.",
                answer: "February",
                explanation: "February has 28 or 29 days, fewer than any other month."
            },
            {
                type: "fill",
                question: "The device used to tell time is called a __________.",
                answer: "clock",
                explanation: "A clock is used to measure and display time."
            },
            {
                type: "fill",
                question: "The __________ is the main organ used for thinking.",
                answer: "brain",
                explanation: "The brain controls thought, memory, and other functions."
            },
            {
                type: "fill",
                question: "The part of the plant that grows underground is the __________.",
                answer: "root",
                explanation: "Roots absorb water and nutrients from the soil."
            },
            {
                type: "fill",
                question: "The currency of the United States is the __________.",
                answer: "dollar",
                explanation: "The U.S. dollar is the official currency of the United States."
            },
            {
                type: "fill",
                question: "The color of an emerald is __________.",
                answer: "green",
                explanation: "Emeralds are precious gemstones known for their rich green color."
            },
            {
                type: "fill",
                question: "The opposite of 'hot' is __________.",
                answer: "cold",
                explanation: "Cold is the opposite of hot in terms of temperature."
            }
                // Add more easy general type questios here ... ...
        ],
        medium: [
            {
                type: "multiple",
                question: "What does CSS stand for?",
                options: [
                    "Central Style Sheets",
                    "Cascading Style Sheets",
                    "Cascading Simple Sheets",
                    "Cars SUVs Sailboats"
                ],
                answer: "Cascading Style Sheets",
                explanation: "CSS stands for Cascading Style Sheets."
            },
            {
                type: "multiple",
                question: "Which planet has the most moons in our solar system?",
                options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                answer: "Saturn",
                explanation: "As of 2023, Saturn has 146 confirmed moons, more than any other planet."
            },
            {
                type: "multiple",
                question: "What is the largest desert in the world?",
                options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                answer: "Antarctic",
                explanation: "The Antarctic Desert is the largest, covering about 14 million square kilometers."
            },
            {
                type: "multiple",
                question: "Which country invented tea?",
                options: ["India", "England", "China", "Japan"],
                answer: "China",
                explanation: "Tea originated in southwest China as a medicinal drink around 3000 BCE."
            },
            {
                type: "multiple",
                question: "What is the world's most spoken language by native speakers?",
                options: ["English", "Spanish", "Hindi", "Mandarin Chinese"],
                answer: "Mandarin Chinese",
                explanation: "Mandarin has about 1.1 billion native speakers worldwide."
            },
            {
                type: "multiple",
                question: "Which element has the atomic number 79?",
                options: ["Silver", "Iron", "Gold", "Platinum"],
                answer: "Gold",
                explanation: "Gold's atomic number is 79, represented by the symbol Au."
            },
            {
                type: "multiple",
                question: "What year did World War II end?",
                options: ["1943", "1945", "1947", "1950"],
                answer: "1945",
                explanation: "World War II ended on September 2, 1945, with Japan's surrender."
            },
            {
                type: "multiple",
                question: "Which country has the most time zones?",
                options: ["United States", "Russia", "China", "France"],
                answer: "France",
                explanation: "France has 12 time zones due to its overseas territories."
            },
            {
                type: "multiple",
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                answer: "Canberra",
                explanation: "Canberra was purpose-built as Australia's capital in 1913."
            },
            {
                type: "multiple",
                question: "Which scientist developed the theory of relativity?",
                options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
                answer: "Albert Einstein",
                explanation: "Einstein published his special theory of relativity in 1905."
            },
            {
                type: "multiple",
                question: "What is the largest type of big cat?",
                options: ["Lion", "Tiger", "Jaguar", "Leopard"],
                answer: "Tiger",
                explanation: "Siberian tigers can weigh up to 660 pounds (300 kg)."
            },
            {
                type: "multiple",
                question: "Which country is both an island and a continent?",
                options: ["Greenland", "Madagascar", "Australia", "Japan"],
                answer: "Australia",
                explanation: "Australia is the only country that covers an entire continent."
            },
            {
                type: "multiple",
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Quartz"],
                answer: "Diamond",
                explanation: "Diamond scores 10 on the Mohs hardness scale, the highest possible."
            },
            {
                type: "multiple",
                question: "Which ancient wonder was located in Babylon?",
                options: [
                    "Great Pyramid of Giza",
                    "Hanging Gardens",
                    "Colossus of Rhodes",
                    "Lighthouse of Alexandria"
                ],
                answer: "Hanging Gardens",
                explanation: "The Hanging Gardens were one of the Seven Wonders of the Ancient World."
            },
            {
                type: "multiple",
                question: "What percentage of Earth's surface is covered by water?",
                options: ["50%", "61%", "71%", "80%"],
                answer: "71%",
                explanation: "About 71% of Earth's surface is water-covered, with oceans holding about 96.5%."
            },
            {
                type: "multiple",
                question: "Which country is the largest producer of coffee?",
                options: ["Colombia", "Vietnam", "Brazil", "Ethiopia"],
                answer: "Brazil",
                explanation: "Brazil produces about one-third of the world's coffee."
            },
            {
                type: "multiple",
                question: "What is the world's deepest ocean?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                answer: "Pacific",
                explanation: "The Mariana Trench in the Pacific reaches about 36,070 feet (10,994 meters) deep."
            },
            {
                type: "multiple",
                question: "Which famous scientist was awarded the 1921 Nobel Prize in Physics?",
                options: [
                    "Marie Curie",
                    "Niels Bohr",
                    "Albert Einstein",
                    "Ernest Rutherford"
                ],
                answer: "Albert Einstein",
                explanation: "Einstein won the Nobel Prize for his explanation of the photoelectric effect."
            },
            {
                type: "multiple",
                question: "What is the capital of New Zealand?",
                options: ["Auckland", "Christchurch", "Wellington", "Hamilton"],
                answer: "Wellington",
                explanation: "Wellington has been New Zealand's capital since 1865."
            },
            {
                type: "multiple",
                question: "Which of these is not one of the Great Lakes?",
                options: ["Huron", "Ontario", "Champlain", "Erie"],
                answer: "Champlain",
                explanation: "Lake Champlain is a smaller lake between New York and Vermont."
            },
            //Here starts boolean type questions
            {
                type: "boolean",
                question: "The Great Wall of China is visible from the Moon with the naked eye.",
                options: ["True", "False"],
                answer: "False",
                explanation: "This is a myth. The Great Wall is not visible from the Moon without aid."
            },
            {
                type: "boolean",
                question: "Shakespeare wrote the play 'The Odyssey'.",
                options: ["True", "False"],
                answer: "False",
                explanation: "'The Odyssey' was written by Homer, not Shakespeare."
            },
            {
                type: "boolean",
                question: "There are seven continents on Earth.",
                options: ["True", "False"],
                answer: "True",
                explanation: "The Earth has seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
            },
            {
                type: "boolean",
                question: "The chemical symbol for silver is Ag.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Ag is the chemical symbol for silver from its Latin name 'Argentum'."
            },
            {
                type: "boolean",
                question: "The capital of Australia is Sydney.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Canberra is the capital of Australia, not Sydney."
            },
            {
                type: "boolean",
                question: "Water boils at 100 degrees Celsius at sea level.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Water boils at 100°C under standard atmospheric pressure at sea level."
            },
            {
                type: "boolean",
                question: "The currency used in Japan is the Yen.",
                options: ["True", "False"],
                answer: "True",
                explanation: "The Japanese Yen is the official currency of Japan."
            },
            {
                type: "boolean",
                question: "Venus is the closest planet to the Sun.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Mercury is the closest planet to the Sun."
            },
            {
                type: "boolean",
                question: "An octopus has three hearts.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Octopuses have three hearts—two pump blood to the gills, and one to the body."
            },
            {
                type: "boolean",
                question: "The Sahara is the largest desert in the world.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Antarctica is the largest desert by area; Sahara is the largest hot desert."
            },
            {
                type: "boolean",
                question: "Lightning never strikes the same place twice.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Lightning can and does strike the same place multiple times."
            },
            {
                type: "boolean",
                question: "The Pacific Ocean is larger than the Atlantic Ocean.",
                options: ["True", "False"],
                answer: "True",
                explanation: "The Pacific is the largest ocean, followed by the Atlantic."
            },
            {
                type: "boolean",
                question: "Albert Einstein was awarded the Nobel Prize for his theory of relativity.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Einstein received the Nobel Prize for his work on the photoelectric effect."
            },
            {
                type: "boolean",
                question: "The Amazon River is the longest river in the world.",
                options: ["True", "False"],
                answer: "False",
                explanation: "The Nile is generally considered the longest river, though this is debated."
            },
            {
                type: "boolean",
                question: "Sound travels faster in water than in air.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Sound travels faster in water due to its higher density compared to air."
            },
            {
                type: "boolean",
                question: "The human skeleton is made up of more than 200 bones.",
                options: ["True", "False"],
                answer: "True",
                explanation: "An adult human skeleton typically has 206 bones."
            },
            {
                type: "boolean",
                question: "The Eiffel Tower was originally intended to be a temporary structure.",
                options: ["True", "False"],
                answer: "True",
                explanation: "It was built for the 1889 World's Fair and was intended to be dismantled."
            },
            {
                type: "boolean",
                question: "Diamonds are made entirely of carbon.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Diamonds are a crystalline form of pure carbon."
            },
            {
                type: "boolean",
                question: "A group of lions is called a herd.",
                options: ["True", "False"],
                answer: "False",
                explanation: "A group of lions is called a pride."
            },
            {
                type: "boolean",
                question: "The human body has four lungs.",
                options: ["True", "False"],
                answer: "False",
                explanation: "The human body has two lungs."
            },
            //Here starts fill type questions
            {
                type: "fill",
                question: "The longest river in South America is the __________.",
                answer: "Amazon",
                explanation: "The Amazon River is the longest river in South America and one of the largest in the world."
            },
            {
                type: "fill",
                question: "The currency used in the United Kingdom is called the __________.",
                answer: "Pound",
                explanation: "The official currency of the UK is the British Pound Sterling."
            },
            {
                type: "fill",
                question: "The scientist who developed the three laws of motion was __________ Newton.",
                answer: "Isaac",
                explanation: "Sir Isaac Newton formulated the laws of motion and universal gravitation."
            },
            {
                type: "fill",
                question: "Mount Everest lies in the __________ mountain range.",
                answer: "Himalayas",
                explanation: "Mount Everest is part of the Himalaya mountain range."
            },
            {
                type: "fill",
                question: "The element with the chemical symbol 'Fe' is __________.",
                answer: "Iron",
                explanation: "'Fe' stands for iron, from its Latin name 'Ferrum'."
            },
            {
                type: "fill",
                question: "The largest mammal in the world is the __________ whale.",
                answer: "Blue",
                explanation: "The blue whale is the largest animal to have ever existed."
            },
            {
                type: "fill",
                question: "The capital city of Canada is __________.",
                answer: "Ottawa",
                explanation: "Ottawa is the capital of Canada, not Toronto or Vancouver."
            },
            {
                type: "fill",
                question: "The country famous for inventing pizza is __________.",
                answer: "Italy",
                explanation: "Pizza originated in Italy, particularly Naples."
            },
            {
                type: "fill",
                question: "The main gas found in the air we breathe is __________.",
                answer: "Nitrogen",
                explanation: "Nitrogen makes up about 78% of Earth’s atmosphere."
            },
            {
                type: "fill",
                question: "The author of '1984' and 'Animal Farm' is George __________.",
                answer: "Orwell",
                explanation: "George Orwell wrote both novels as political commentaries."
            },
            {
                type: "fill",
                question: "The part of the plant that conducts photosynthesis is the __________.",
                answer: "Leaf",
                explanation: "Leaves are the main sites for photosynthesis in plants."
            },
            {
                type: "fill",
                question: "The desert that covers most of northern Africa is the __________ Desert.",
                answer: "Sahara",
                explanation: "The Sahara is the largest hot desert in the world."
            },
            {
                type: "fill",
                question: "The largest ocean on Earth is the __________ Ocean.",
                answer: "Pacific",
                explanation: "The Pacific Ocean is the largest and deepest of Earth's oceans."
            },
            {
                type: "fill",
                question: "The chemical symbol for gold is __________.",
                answer: "Au",
                explanation: "The symbol 'Au' comes from the Latin word 'Aurum' for gold."
            },
            {
                type: "fill",
                question: "The scientist who proposed the theory of evolution by natural selection was Charles __________.",
                answer: "Darwin",
                explanation: "Charles Darwin introduced the concept in his book 'On the Origin of Species'."
            },
            {
                type: "fill",
                question: "The country with the largest population is __________.",
                answer: "China",
                explanation: "As of recent data, China has the largest population, followed closely by India."
            },
            {
                type: "fill",
                question: "The hardest natural substance on Earth is __________.",
                answer: "Diamond",
                explanation: "Diamond is the hardest known natural material."
            },
            {
                type: "fill",
                question: "The Olympic Games originated in the ancient country of __________.",
                answer: "Greece",
                explanation: "The first Olympic Games were held in ancient Greece in 776 BC."
            },
            {
                type: "fill",
                question: "The smallest unit of life is the __________.",
                answer: "Cell",
                explanation: "Cells are the basic structural and functional units of life."
            },
            {
                type: "fill",
                question: "The organ responsible for pumping blood through the body is the __________.",
                answer: "Heart",
                explanation: "The heart is a muscular organ that pumps blood through the circulatory system."
            }
                // Add more medium general type questions here... ...
        ],
        hard: [
            {
                type: "multiple",
                question: "What year was JavaScript launched?",
                options: ["1996", "1995", "1994", "none of the above"],
                answer: "1995",
                explanation: "JavaScript was created in 1995 by Brendan Eich."
            },
            {
                type: "multiple",
                question: "Which country has the most UNESCO World Heritage Sites?",
                options: ["China", "Italy", "France", "Spain"],
                answer: "Italy",
                explanation: "Italy leads with 59 UNESCO World Heritage Sites as of 2023."
            },
            {
                type: "multiple",
                question: "What is the only metal that is liquid at room temperature?",
                options: ["Bromine", "Gallium", "Mercury", "Francium"],
                answer: "Mercury",
                explanation: "Mercury remains liquid between -38.8°F (-39°C) and 674°F (356°C)."
            },
            {
                type: "multiple",
                question: "Which planet rotates on its side with an axial tilt of 98 degrees?",
                options: ["Venus", "Neptune", "Uranus", "Pluto"],
                answer: "Uranus",
                explanation: "Uranus has the most extreme axial tilt in our solar system."
            },
            {
                type: "multiple",
                question: "What is the rarest blood type in humans?",
                options: ["AB-", "O-", "B-", "AB+"],
                answer: "AB-",
                explanation: "Only about 1% of the global population has AB- blood."
            },
            {
                type: "multiple",
                question: "Which element has the highest melting point?",
                options: ["Tungsten", "Carbon", "Osmium", "Rhenium"],
                answer: "Carbon",
                explanation: "Carbon (as graphite) sublimes at 3915K, while tungsten melts at 3695K."
            },
            {
                type: "multiple",
                question: "What is the only country that borders both the Atlantic and Indian Oceans?",
                options: ["South Africa", "Namibia", "Angola", "Mozambique"],
                answer: "South Africa",
                explanation: "South Africa's coastline extends from the Atlantic to the Indian Ocean."
            },
            {
                type: "multiple",
                question: "Which ancient civilization built the city of Machu Picchu?",
                options: ["Aztec", "Maya", "Inca", "Olmec"],
                answer: "Inca",
                explanation: "The Inca built Machu Picchu in the 15th century."
            },
            {
                type: "multiple",
                question: "What is the world's longest mountain range?",
                options: ["Andes", "Himalayas", "Rockies", "Great Dividing Range"],
                answer: "Andes",
                explanation: "The Andes stretch about 7,000 km along South America's west coast."
            },
            {
                type: "multiple",
                question: "Which country has the most official languages?",
                options: ["India", "South Africa", "Bolivia", "Zimbabwe"],
                answer: "Bolivia",
                explanation: "Bolivia recognizes 37 official languages, the most of any country."
            },
            {
                type: "multiple",
                question: "What is the deepest freshwater lake in the world?",
                options: ["Lake Superior", "Lake Baikal", "Lake Tanganyika", "Lake Vostok"],
                answer: "Lake Baikal",
                explanation: "Lake Baikal in Russia reaches depths of 1,642 meters (5,387 feet)."
            },
            {
                type: "multiple",
                question: "Which planet has the longest day in our solar system?",
                options: ["Venus", "Mercury", "Jupiter", "Neptune"],
                answer: "Venus",
                explanation: "A day on Venus lasts 243 Earth days (longer than its year of 225 Earth days)."
            },
            {
                type: "multiple",
                question: "What is the only mammal capable of true flight?",
                options: ["Flying squirrel", "Bat", "Colugo", "Sugar glider"],
                answer: "Bat",
                explanation: "Bats are the only mammals that can truly fly (not just glide)."
            },
            {
                type: "multiple",
                question: "Which country has the world's oldest continuous democracy?",
                options: ["United States", "Iceland", "San Marino", "Switzerland"],
                answer: "San Marino",
                explanation: "San Marino's constitution dates back to 1600, making it the oldest continuous democracy."
            },
            {
                type: "multiple",
                question: "What is the largest internal organ in the human body?",
                options: ["Brain", "Liver", "Lungs", "Skin"],
                answer: "Liver",
                explanation: "The liver weighs about 1.5 kg (3.3 lbs) and performs over 500 functions."
            },
            {
                type: "multiple",
                question: "Which language has the most native speakers worldwide?",
                options: ["English", "Hindi", "Spanish", "Mandarin Chinese"],
                answer: "Mandarin Chinese",
                explanation: "Mandarin has about 1.1 billion native speakers, more than any other language."
            },
            {
                type: "multiple",
                question: "What is the only continent without reptiles or snakes?",
                options: ["Australia", "Antarctica", "New Zealand", "Iceland"],
                answer: "Antarctica",
                explanation: "No reptiles or snakes can survive Antarctica's extreme cold."
            },
            {
                type: "multiple",
                question: "Which element makes up about 78% of Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                answer: "Nitrogen",
                explanation: "Earth's atmosphere is 78% nitrogen, 21% oxygen, and 1% other gases."
            },
            {
                type: "multiple",
                question: "What is the world's largest coral reef system?",
                options: [
                    "New Caledonia Barrier Reef",
                    "Great Barrier Reef",
                    "Red Sea Coral Reef",
                    "Mesoamerican Barrier Reef"
                ],
                answer: "Great Barrier Reef",
                explanation: "The Great Barrier Reef spans over 2,300 km off Australia's coast."
            },
            {
                type: "multiple",
                question: "Which country has the most natural lakes?",
                options: ["Canada", "Russia", "Finland", "United States"],
                answer: "Canada",
                explanation: "Canada has over 2 million lakes, more than any other country."
            },
            //Here starts boolean type questions
            {
                type: "boolean",
                question: "The speed of light is exactly 300,000 kilometers per second.",
                options: ["True", "False"],
                answer: "False",
                explanation: "The speed of light is approximately 299,792 kilometers per second, not exactly 300,000."
            },
            {
                type: "boolean",
                question: "The Rosetta Stone was key in deciphering Egyptian hieroglyphs.",
                options: ["True", "False"],
                answer: "True",
                explanation: "The Rosetta Stone contained the same text in Greek, Demotic, and hieroglyphs, allowing translation."
            },
            {
                type: "boolean",
                question: "Neptune has a solid surface like Earth.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Neptune is a gas giant and does not have a solid surface."
            },
            {
                type: "boolean",
                question: "DNA stands for Deoxyribonucleic Acid.",
                options: ["True", "False"],
                answer: "True",
                explanation: "DNA is the acronym for Deoxyribonucleic Acid, the molecule that carries genetic instructions."
            },
            {
                type: "boolean",
                question: "The element mercury is the only metal that is liquid at room temperature.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Mercury is unique among metals for being liquid at standard conditions for temperature and pressure."
            },
            {
                type: "boolean",
                question: "The capital of Switzerland is Zurich.",
                options: ["True", "False"],
                answer: "False",
                explanation: "The capital of Switzerland is Bern, not Zurich."
            },
            {
                type: "boolean",
                question: "Albert Einstein won the Nobel Prize for his Theory of Relativity.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Einstein won the Nobel Prize for his explanation of the photoelectric effect, not relativity."
            },
            {
                type: "boolean",
                question: "A lunar eclipse occurs when the moon passes between the Earth and the sun.",
                options: ["True", "False"],
                answer: "False",
                explanation: "That describes a solar eclipse. A lunar eclipse happens when the Earth is between the sun and the moon."
            },
            {
                type: "boolean",
                question: "The human body has four lungs.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Humans have two lungs, one on each side of the chest."
            },
            {
                type: "boolean",
                question: "Shakespeare wrote 38 plays.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Most scholars agree Shakespeare wrote 38 plays."
            },
            {
                type: "boolean",
                question: "Mount Kilimanjaro is the tallest mountain in the world.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Mount Everest is the tallest; Kilimanjaro is the highest in Africa."
            },
            {
                type: "boolean",
                question: "In computing, 'RAM' stands for Random Access Memory.",
                options: ["True", "False"],
                answer: "True",
                explanation: "RAM is a form of computer memory that stores data temporarily."
            },
            {
                type: "boolean",
                question: "The Wright brothers’ first flight occurred in 1920.",
                options: ["True", "False"],
                answer: "False",
                explanation: "The Wright brothers' first flight was in 1903."
            },
            {
                type: "boolean",
                question: "Sound travels faster in air than in water.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Sound travels faster in water due to its higher density compared to air."
            },
            {
                type: "boolean",
                question: "Marie Curie was the first person to win Nobel Prizes in two different sciences.",
                options: ["True", "False"],
                answer: "True",
                explanation: "She won Nobel Prizes in Physics and Chemistry."
            },
            {
                type: "boolean",
                question: "The Andromeda Galaxy is expected to collide with the Milky Way.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Astronomers predict a collision in about 4 billion years."
            },
            {
                type: "boolean",
                question: "Venus is the hottest planet in our solar system.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Despite not being the closest to the Sun, Venus has a thick CO₂ atmosphere that traps heat."
            },
            {
                type: "boolean",
                question: "The pancreas is part of the respiratory system.",
                options: ["True", "False"],
                answer: "False",
                explanation: "The pancreas is part of the digestive and endocrine systems."
            },
            {
                type: "boolean",
                question: "The human genome contains over 3 billion base pairs.",
                options: ["True", "False"],
                answer: "True",
                explanation: "The human genome consists of about 3.2 billion DNA base pairs."
            },
            {
                type: "boolean",
                question: "Graphene is composed of a single layer of carbon atoms arranged in a hexagonal lattice.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Graphene is a one-atom-thick layer of carbon with remarkable strength and conductivity."
            },
            //Here starts fill type questions
            {
                type: "fill",
                question: "The first programmable computer was known as __________.",
                answer: "Z3",
                explanation: "Developed by Konrad Zuse in 1941, the Z3 is considered the first programmable computer."
            },
            {
                type: "fill",
                question: "The chemical element with the atomic number 92 is __________.",
                answer: "uranium",
                explanation: "Uranium, a heavy metal used in nuclear power, has the atomic number 92."
            },
            {
                type: "fill",
                question: "The mathematician who invented calculus independently from Newton was __________.",
                answer: "Leibniz",
                explanation: "Gottfried Wilhelm Leibniz developed calculus independently around the same time as Isaac Newton."
            },
            {
                type: "fill",
                question: "The philosophical work 'Critique of Pure Reason' was written by __________.",
                answer: "Immanuel Kant",
                explanation: "Immanuel Kant's 1781 work is one of the most influential in Western philosophy."
            },
            {
                type: "fill",
                question: "The theory that the continents were once a single landmass is known as __________.",
                answer: "continental drift",
                explanation: "Alfred Wegener proposed the theory of continental drift to explain the movement of continents."
            },
            {
                type: "fill",
                question: "The process of cell division in eukaryotic cells that results in two identical daughter cells is called __________.",
                answer: "mitosis",
                explanation: "Mitosis is a type of cell division that produces identical cells, essential for growth and repair."
            },
            {
                type: "fill",
                question: "The capital of the ancient Mesopotamian empire Babylon was __________.",
                answer: "Babylon",
                explanation: "Babylon was both the name of the empire and its capital city, known for the Hanging Gardens."
            },
            {
                type: "fill",
                question: "The longest bone in the human body is the __________.",
                answer: "femur",
                explanation: "The femur, or thigh bone, is the longest and strongest bone in the human body."
            },
            {
                type: "fill",
                question: "The Greek philosopher who taught Alexander the Great was __________.",
                answer: "Aristotle",
                explanation: "Aristotle was hired by King Philip II to tutor his son, Alexander the Great."
            },
            {
                type: "fill",
                question: "The deepest part of the world's oceans is the __________ Trench.",
                answer: "Mariana",
                explanation: "The Mariana Trench is the deepest known part of the ocean, reaching over 11,000 meters."
            },
            {
                type: "fill",
                question: "The disease caused by the bacterium *Mycobacterium leprae* is __________.",
                answer: "leprosy",
                explanation: "Leprosy is a chronic infectious disease that affects the skin, nerves, and mucous membranes."
            },
            {
                type: "fill",
                question: "The first artificial satellite launched into space was __________.",
                answer: "Sputnik",
                explanation: "Launched by the Soviet Union in 1957, Sputnik was the first artificial satellite in orbit."
            },
            {
                type: "fill",
                question: "The famous quantum physicist who proposed the uncertainty principle was __________.",
                answer: "Heisenberg",
                explanation: "Werner Heisenberg formulated the uncertainty principle, a key concept in quantum mechanics."
            },
            {
                type: "fill",
                question: "The art style characterized by dreamy, irrational scenes and illogical juxtapositions is __________.",
                answer: "surrealism",
                explanation: "Surrealism, popularized by artists like Salvador Dalí, aimed to unlock the unconscious mind."
            },
            {
                type: "fill",
                question: "The literary work 'The Divine Comedy' was written by __________.",
                answer: "Dante",
                explanation: "Dante Alighieri wrote 'The Divine Comedy', a cornerstone of Italian literature."
            },
            {
                type: "fill",
                question: "The branch of biology concerned with classifying organisms is called __________.",
                answer: "taxonomy",
                explanation: "Taxonomy deals with the classification and naming of living organisms."
            },
            {
                type: "fill",
                question: "The human body has __________ pairs of cranial nerves.",
                answer: "12",
                explanation: "There are 12 pairs of cranial nerves that emerge directly from the brain."
            },
            {
                type: "fill",
                question: "The first female Prime Minister of the United Kingdom was __________.",
                answer: "Margaret Thatcher",
                explanation: "Margaret Thatcher became the first female UK Prime Minister in 1979."
            },
            {
                type: "fill",
                question: "The astronomical unit (AU) is the average distance between the Earth and the __________.",
                answer: "sun",
                explanation: "One astronomical unit represents the mean distance from the Earth to the sun."
            },
            {
                type: "fill",
                question: "The Nobel Peace Prize is awarded in the country of __________.",
                answer: "Norway",
                explanation: "Unlike other Nobel Prizes awarded in Sweden, the Peace Prize is awarded in Norway."
            }
        ]
    },
    science: {
        easy: [
            {
                type: "multiple",
                question: "What is H2O?",
                options: ["Carbon Dioxide", "Salt", "Water", "Hydrogen Peroxide"],
                answer: "Water",
                explanation: "H2O is the chemical formula for water."
            },
            {
                type: "multiple",
                question: "What force pulls objects toward Earth's center?",
                options: ["Magnetism", "Gravity", "Friction", "Inertia"],
                answer: "Gravity",
                explanation: "Gravity is the natural force that attracts physical bodies toward Earth."
            },
            {
                type: "multiple",
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                answer: "Mars",
                explanation: "Mars appears red due to iron oxide on its surface."
            },
            {
                type: "multiple",
                question: "What is the closest star to Earth?",
                options: ["Alpha Centauri", "Polaris", "Betelgeuse", "The Sun"],
                answer: "The Sun",
                explanation: "The Sun is our solar system's star and the closest to Earth."
            },
            {
                type: "multiple",
                question: "What gas do plants absorb from the air?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                answer: "Carbon Dioxide",
                explanation: "Plants use CO₂ for photosynthesis, releasing oxygen as a byproduct."
            },
            {
                type: "multiple",
                question: "How many bones are in the adult human body?",
                options: ["150", "206", "300", "412"],
                answer: "206",
                explanation: "Babies have about 300 bones that fuse together as they grow."
            },
            {
                type: "multiple",
                question: "What is the largest organ of the human body?",
                options: ["Liver", "Brain", "Skin", "Heart"],
                answer: "Skin",
                explanation: "Skin is the body's largest organ by surface area and weight."
            },
            {
                type: "multiple",
                question: "Which of these is not a primary color of light?",
                options: ["Red", "Blue", "Green", "Yellow"],
                answer: "Yellow",
                explanation: "The primary colors of light are red, blue, and green."
            },
            {
                type: "multiple",
                question: "What is Earth's primary source of energy?",
                options: ["Wind", "The Moon", "The Sun", "Geothermal"],
                answer: "The Sun",
                explanation: "The Sun provides nearly all energy for Earth's ecosystems."
            },
            {
                type: "multiple",
                question: "Which of these is a gas giant planet?",
                options: ["Mars", "Venus", "Jupiter", "Earth"],
                answer: "Jupiter",
                explanation: "Jupiter is composed mainly of hydrogen and helium."
            },
            {
                type: "multiple",
                question: "What do we call a scientist who studies rocks?",
                options: ["Biologist", "Astronomer", "Geologist", "Meteorologist"],
                answer: "Geologist",
                explanation: "Geology is the study of Earth's physical structure and substances."
            },
            {
                type: "multiple",
                question: "Which of these is not a state of matter?",
                options: ["Solid", "Liquid", "Gas", "Energy"],
                answer: "Energy",
                explanation: "The main states of matter are solid, liquid, gas, and plasma."
            },
            {
                type: "multiple",
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                answer: "Au",
                explanation: "Au comes from gold's Latin name 'aurum'."
            },
            {
                type: "multiple",
                question: "Which part of the plant conducts photosynthesis?",
                options: ["Roots", "Flowers", "Leaves", "Stem"],
                answer: "Leaves",
                explanation: "Leaves contain chlorophyll which captures sunlight for photosynthesis."
            },
            {
                type: "multiple",
                question: "What is the freezing point of water in Celsius?",
                options: ["0°C", "10°C", "32°C", "100°C"],
                answer: "0°C",
                explanation: "Water freezes at 0°C and boils at 100°C at sea level."
            },
            {
                type: "multiple",
                question: "Which of these is not a type of rock?",
                options: ["Igneous", "Sedimentary", "Metamorphic", "Volcanic"],
                answer: "Volcanic",
                explanation: "The three main rock types are igneous, sedimentary, and metamorphic."
            },
            {
                type: "multiple",
                question: "What is the smallest unit of life?",
                options: ["Atom", "Cell", "Molecule", "Tissue"],
                answer: "Cell",
                explanation: "All living organisms are composed of cells."
            },
            {
                type: "multiple",
                question: "Which planet is closest to the Sun?",
                options: ["Venus", "Earth", "Mars", "Mercury"],
                answer: "Mercury",
                explanation: "Mercury is the smallest and innermost planet in our solar system."
            },
            {
                type: "multiple",
                question: "What is the main component of air we breathe?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                answer: "Nitrogen",
                explanation: "Air is about 78% nitrogen and only 21% oxygen."
            },
            {
                type: "multiple",
                question: "Which of these is a renewable energy source?",
                options: ["Coal", "Natural Gas", "Solar", "Oil"],
                answer: "Solar",
                explanation: "Solar energy is renewable unlike fossil fuels."
            },
            //Here starts boolean type questions
            {
                type: "boolean",
                question: "The Moon produces its own light.",
                answer: false,
                explanation: "The Moon reflects light from the Sun; it does not produce its own light."
            },
            {
                type: "boolean",
                question: "Sound travels faster in water than in air.",
                answer: true,
                explanation: "Sound travels faster in water due to its higher density compared to air."
            },
            {
                type: "boolean",
                question: "All metals are magnetic.",
                answer: false,
                explanation: "Only some metals like iron, cobalt, and nickel are magnetic."
            },
            {
                type: "boolean",
                question: "An adult human has more bones than a baby.",
                answer: false,
                explanation: "Babies have more bones which later fuse together as they grow."
            },
            {
                type: "boolean",
                question: "Plants make their own food using sunlight.",
                answer: true,
                explanation: "Plants use sunlight in photosynthesis to produce their own food."
            },
            {
                type: "boolean",
                question: "Electricity can flow through plastic.",
                answer: false,
                explanation: "Plastic is an insulator and does not conduct electricity."
            },
            {
                type: "boolean",
                question: "A magnet has two poles: north and south.",
                answer: true,
                explanation: "Magnets always have a north and south pole."
            },
            {
                type: "boolean",
                question: "Boiling water freezes faster than cold water.",
                answer: false,
                explanation: "Cold water freezes faster than boiling water in normal conditions."
            },
            {
                type: "boolean",
                question: "The heart is a muscle.",
                answer: true,
                explanation: "The heart is a strong muscle that pumps blood throughout the body."
            },
            {
                type: "boolean",
                question: "A lunar eclipse happens when the Moon is between the Earth and the Sun.",
                answer: false,
                explanation: "A lunar eclipse occurs when Earth is between the Sun and the Moon."
            },
            {
                type: "boolean",
                question: "Iron can rust when exposed to air and water.",
                answer: true,
                explanation: "Rust forms when iron reacts with oxygen and water."
            },
            {
                type: "boolean",
                question: "The Sun rises in the west.",
                answer: false,
                explanation: "The Sun rises in the east and sets in the west."
            },
            {
                type: "boolean",
                question: "An echo is a reflected sound.",
                answer: true,
                explanation: "Echoes happen when sound waves bounce back from surfaces."
            },
            {
                type: "boolean",
                question: "Humans have three lungs.",
                answer: false,
                explanation: "Humans have two lungs: a right and a left lung."
            },
            {
                type: "boolean",
                question: "Friction helps us walk without slipping.",
                answer: true,
                explanation: "Friction between our feet and the ground prevents slipping."
            },
            {
                type: "boolean",
                question: "The boiling point of water is 100°C at sea level.",
                answer: true,
                explanation: "Water boils at 100°C (212°F) under normal atmospheric pressure."
            },
            {
                type: "boolean",
                question: "A spider is an insect.",
                answer: false,
                explanation: "Spiders are arachnids, not insects. They have 8 legs, while insects have 6."
            },
            {
                type: "boolean",
                question: "Air has weight.",
                answer: true,
                explanation: "Air is made of particles and has mass, so it also has weight."
            },
            {
                type: "boolean",
                question: "Water is the only substance that exists naturally in all three states: solid, liquid, and gas.",
                answer: true,
                explanation: "Water naturally exists as ice (solid), liquid water, and steam (gas)."
            },
            {
                type: "boolean",
                question: "Lightning always comes after thunder.",
                answer: false,
                explanation: "Lightning comes first, but thunder is heard later due to the slower speed of sound."
            },
            //Here starts fill type questions
            {
                type: "fill",
                question: "The process by which plants make their own food is called ______.",
                answer: "photosynthesis",
                explanation: "Photosynthesis is how plants use sunlight to make food from carbon dioxide and water."
            },
            {
                type: "fill",
                question: "The solid form of water is called ______.",
                answer: "ice",
                explanation: "Water becomes ice when it freezes at or below 0°C."
            },
            {
                type: "fill",
                question: "The part of the body that pumps blood is the ______.",
                answer: "heart",
                explanation: "The heart is a muscular organ that circulates blood through the body."
            },
            {
                type: "fill",
                question: "Animals that eat only plants are called ______.",
                answer: "herbivores",
                explanation: "Herbivores are plant-eating animals like cows and deer."
            },
            {
                type: "fill",
                question: "The gas that humans need to breathe in is ______.",
                answer: "oxygen",
                explanation: "Humans need oxygen to survive. It is used by the body to produce energy."
            },
            {
                type: "fill",
                question: "The moon gets its light from the ______.",
                answer: "sun",
                explanation: "The moon reflects light from the sun; it doesn't produce its own light."
            },
            {
                type: "fill",
                question: "The bones in our body make up the ______ system.",
                answer: "skeletal",
                explanation: "The skeletal system provides structure and protects internal organs."
            },
            {
                type: "fill",
                question: "The fastest land animal is the ______.",
                answer: "cheetah",
                explanation: "The cheetah can run up to 120 km/h (75 mph)."
            },
            {
                type: "fill",
                question: "Water turns into vapor when it is ______.",
                answer: "heated",
                explanation: "Heating causes water to evaporate and change into vapor."
            },
            {
                type: "fill",
                question: "The planet with rings around it is ______.",
                answer: "Saturn",
                explanation: "Saturn is famous for its large, visible ring system."
            },
            {
                type: "fill",
                question: "We use a thermometer to measure ______.",
                answer: "temperature",
                explanation: "A thermometer shows how hot or cold something is."
            },
            {
                type: "fill",
                question: "Electricity flows through a ______.",
                answer: "circuit",
                explanation: "A circuit is a closed path that allows electricity to move."
            },
            {
                type: "fill",
                question: "The layer of air surrounding Earth is called the ______.",
                answer: "atmosphere",
                explanation: "Earth's atmosphere protects life and provides air to breathe."
            },
            {
                type: "fill",
                question: "The largest planet in our solar system is ______.",
                answer: "Jupiter",
                explanation: "Jupiter is the biggest planet and has a Great Red Spot."
            },
            {
                type: "fill",
                question: "The energy we get from the sun is called ______ energy.",
                answer: "solar",
                explanation: "Solar energy is used in solar panels to generate electricity."
            },
            {
                type: "fill",
                question: "The instrument used to look at stars and planets is a ______.",
                answer: "telescope",
                explanation: "A telescope helps us observe distant objects in space."
            },
            {
                type: "fill",
                question: "We wear ______ to protect our eyes from the sun.",
                answer: "sunglasses",
                explanation: "Sunglasses block harmful UV rays from the sun."
            },
            {
                type: "fill",
                question: "The three states of matter are solid, liquid, and ______.",
                answer: "gas",
                explanation: "Matter can exist in these three main states depending on temperature and pressure."
            },
            {
                type: "fill",
                question: "The Earth orbits around the ______.",
                answer: "sun",
                explanation: "The Earth takes about 365 days to orbit the sun."
            },
            {
                type: "fill",
                question: "A group of stars that form a pattern is called a ______.",
                answer: "constellation",
                explanation: "Constellations are patterns made by stars in the night sky."
            }
            // Add more easy science questions here ...
        ],
        medium: [
            {
                type: "multiple",
                question: "Which primary particle is largest ?",
                options: ["Electron", "Proton", "Neutron", "All are same"],
                answer: "Proton",
                explanation: "Protons are much larger than electrons."
            },
            {
                type: "multiple",
                question: "Which branch of science studies the behavior of matter at extremely low temperatures?",
                options: ["Thermodynamics", "Cryogenics", "Quantum Physics", "Particle Physics"],
                answer: "Cryogenics",
                explanation: "Cryogenics deals with the production and effects of very low temperatures."
            },
            {
                type: "multiple",
                question: "What is the pH value of pure water?",
                options: ["5", "7", "9", "12"],
                answer: "7",
                explanation: "Pure water is neutral with a pH of 7 at 25°C."
            },
            {
                type: "multiple",
                question: "Which element is liquid at room temperature?",
                options: ["Bromine", "Gallium", "Mercury", "All of the above"],
                answer: "All of the above",
                explanation: "Bromine (Br), gallium (Ga), and mercury (Hg) are all liquid at or near room temperature."
            },
            {
                type: "multiple",
                question: "What is the hardest natural substance on Earth?",
                options: ["Quartz", "Topaz", "Diamond", "Corundum"],
                answer: "Diamond",
                explanation: "Diamond ranks 10 on the Mohs hardness scale, the highest possible."
            },
            {
                type: "multiple",
                question: "Which planet has the most moons in our solar system?",
                options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                answer: "Saturn",
                explanation: "As of 2023, Saturn has 146 confirmed moons, more than any other planet."
            },
            {
                type: "multiple",
                question: "What is the chemical symbol for tungsten?",
                options: ["Tu", "Tn", "W", "Tg"],
                answer: "W",
                explanation: "W comes from tungsten's German name 'Wolfram'."
            },
            {
                type: "multiple",
                question: "Which of these is NOT a type of white blood cell?",
                options: ["Lymphocyte", "Neutrophil", "Eosinophil", "Hemoglobin"],
                answer: "Hemoglobin",
                explanation: "Hemoglobin is a protein in red blood cells that carries oxygen."
            },
            {
                type: "multiple",
                question: "What is the most abundant gas in Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                answer: "Nitrogen",
                explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
            },
            {
                type: "multiple",
                question: "Which scientist developed the theory of general relativity?",
                options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"],
                answer: "Albert Einstein",
                explanation: "Einstein published his theory of general relativity in 1915."
            },
            {
                type: "multiple",
                question: "What is the speed of light in a vacuum?",
                options: ["150,000 km/s", "300,000 km/s", "450,000 km/s", "600,000 km/s"],
                answer: "300,000 km/s",
                explanation: "The exact speed is 299,792 km/s, often rounded to 300,000 km/s."
            },
            {
                type: "multiple",
                question: "Which of these is NOT a fundamental force of nature?",
                options: ["Gravity", "Electromagnetism", "Strong Nuclear", "Friction"],
                answer: "Friction",
                explanation: "The four fundamental forces are gravity, electromagnetism, strong nuclear, and weak nuclear."
            },
            {
                type: "multiple",
                question: "What is the main component of natural gas?",
                options: ["Propane", "Butane", "Methane", "Ethane"],
                answer: "Methane",
                explanation: "Natural gas is primarily composed of methane (CH₄)."
            },
            {
                type: "multiple",
                question: "Which organ produces insulin in the human body?",
                options: ["Liver", "Pancreas", "Kidney", "Stomach"],
                answer: "Pancreas",
                explanation: "The pancreas contains beta cells that produce insulin."
            },
            {
                type: "multiple",
                question: "What is the chemical formula for table salt?",
                options: ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
                answer: "NaCl",
                explanation: "Table salt is sodium chloride (NaCl)."
            },
            {
                type: "multiple",
                question: "Which of these elements is a noble gas?",
                options: ["Fluorine", "Chlorine", "Bromine", "Neon"],
                answer: "Neon",
                explanation: "Neon is in Group 18 of the periodic table, the noble gases."
            },
            {
                type: "multiple",
                question: "What is the process by which plants lose water through their leaves?",
                options: ["Photosynthesis", "Transpiration", "Respiration", "Osmosis"],
                answer: "Transpiration",
                explanation: "Transpiration helps pull water and nutrients up from the roots."
            },
            {
                type: "multiple",
                question: "Which planet has the longest day in our solar system?",
                options: ["Mercury", "Venus", "Earth", "Mars"],
                answer: "Venus",
                explanation: "A day on Venus lasts 243 Earth days (longer than its year of 225 days)."
            },
            {
                type: "multiple",
                question: "What is the study of fossils called?",
                options: ["Archaeology", "Paleontology", "Geology", "Anthropology"],
                answer: "Paleontology",
                explanation: "Paleontology studies fossils to understand life's history."
            },
            {
                type: "multiple",
                question: "Which blood type is the universal donor?",
                options: ["A", "B", "AB", "O"],
                answer: "O",
                explanation: "Type O-negative blood can be donated to all other blood types."
            },
            //Here starts boolean type questions
            {
                type: "boolean",
                question: "Sound travels faster in water than in air.",
                answer: true,
                explanation: "Sound travels faster in water because particles are closer together compared to air."
            },
            {
                type: "boolean",
                question: "The Earth is the center of the solar system.",
                answer: false,
                explanation: "The Sun is the center of the solar system; planets revolve around it."
            },
            {
                type: "boolean",
                question: "Light is a form of energy.",
                answer: true,
                explanation: "Light is electromagnetic radiation, which is a form of energy."
            },
            {
                type: "boolean",
                question: "Humans have two lungs but only one kidney.",
                answer: false,
                explanation: "Humans normally have two kidneys and two lungs."
            },
            {
                type: "boolean",
                question: "All metals are magnetic.",
                answer: false,
                explanation: "Only some metals like iron, cobalt, and nickel are magnetic."
            },
            {
                type: "boolean",
                question: "Earth’s gravity pulls everything toward its center.",
                answer: true,
                explanation: "Gravity acts toward the center of the Earth, which is why objects fall downward."
            },
            {
                type: "boolean",
                question: "Electric current is measured in volts.",
                answer: false,
                explanation: "Electric current is measured in amperes (amps), not volts. Volts measure voltage."
            },
            {
                type: "boolean",
                question: "Plants release carbon dioxide during the day.",
                answer: false,
                explanation: "During the day, plants mostly absorb carbon dioxide for photosynthesis."
            },
            {
                type: "boolean",
                question: "Mercury is the smallest planet in our solar system.",
                answer: true,
                explanation: "Mercury is the smallest of all eight planets."
            },
            {
                type: "boolean",
                question: "The human brain is a muscle.",
                answer: false,
                explanation: "The brain is made up of nervous tissue, not muscle."
            },
            {
                type: "boolean",
                question: "A chemical change is usually irreversible.",
                answer: true,
                explanation: "Chemical changes often create new substances and cannot be undone easily."
            },
            {
                type: "boolean",
                question: "Whales are fish because they live in water.",
                answer: false,
                explanation: "Whales are mammals, not fish. They breathe air and give birth to live young."
            },
            {
                type: "boolean",
                question: "The moon has its own light.",
                answer: false,
                explanation: "The moon reflects sunlight; it does not produce light itself."
            },
            {
                type: "boolean",
                question: "Objects float in water if their density is less than water.",
                answer: true,
                explanation: "Lower-density objects float because they displace more water than their own weight."
            },
            {
                type: "boolean",
                question: "Humans can live without the large intestine.",
                answer: true,
                explanation: "People can survive without the large intestine, though it affects digestion."
            },
            {
                type: "boolean",
                question: "Lightning is hotter than the surface of the sun.",
                answer: true,
                explanation: "A lightning bolt can reach 30,000 K, much hotter than the sun's surface (~6,000 K)."
            },
            {
                type: "boolean",
                question: "Glass is a solid at room temperature.",
                answer: true,
                explanation: "Glass is an amorphous solid, meaning it has a solid shape but irregular structure."
            },
            {
                type: "boolean",
                question: "Atoms are the smallest particles in the universe.",
                answer: false,
                explanation: "Atoms are made of smaller particles: protons, neutrons, and electrons."
            },
            {
                type: "boolean",
                question: "Rainbows are caused by refraction and reflection of sunlight.",
                answer: true,
                explanation: "Rainbows form when sunlight bends (refracts) and bounces (reflects) inside raindrops."
            },
            {
                type: "boolean",
                question: "Blood is red because of oxygen.",
                answer: true,
                explanation: "Oxygen binds to hemoglobin in red blood cells, giving blood its red color."
            },
            //Here starts fill type questions
            {
                type: "fill",
                question: "The process by which green plants make their food using sunlight is called __________.",
                answer: "photosynthesis"
            },
            {
                type: "fill",
                question: "The layer of gases that surrounds the Earth is known as the __________.",
                answer: "atmosphere"
            },
            {
                type: "fill",
                question: "The force that pulls objects toward the center of the Earth is called __________.",
                answer: "gravity"
            },
            {
                type: "fill",
                question: "The human heart has __________ chambers.",
                answer: "four"
            },
            {
                type: "fill",
                question: "A thermometer is used to measure __________.",
                answer: "temperature"
            },
            {
                type: "fill",
                question: "The gas that we breathe in to stay alive is called __________.",
                answer: "oxygen"
            },
            {
                type: "fill",
                question: "The part of the plant that absorbs water and minerals from the soil is the __________.",
                answer: "root"
            },
            {
                type: "fill",
                question: "The boiling point of water at sea level is __________ degrees Celsius.",
                answer: "100"
            },
            {
                type: "fill",
                question: "The natural satellite of Earth is the __________.",
                answer: "moon"
            },
            {
                type: "fill",
                question: "The largest internal organ in the human body is the __________.",
                answer: "liver"
            },
            {
                type: "fill",
                question: "An animal that eats only plants is called a __________.",
                answer: "herbivore"
            },
            {
                type: "fill",
                question: "The smallest unit of life in the human body is the __________.",
                answer: "cell"
            },
            {
                type: "fill",
                question: "The change of a substance from liquid to gas is known as __________.",
                answer: "evaporation"
            },
            {
                type: "fill",
                question: "The part of the eye that controls the amount of light entering is the __________.",
                answer: "pupil"
            },
            {
                type: "fill",
                question: "__________ is the study of weather and atmospheric conditions.",
                answer: "Meteorology"
            },
            {
                type: "fill",
                question: "The three states of matter are solid, liquid, and __________.",
                answer: "gas"
            },
            {
                type: "fill",
                question: "The main source of energy for the Earth is the __________.",
                answer: "sun"
            },
            {
                type: "fill",
                question: "When light bends as it passes through water or glass, it is called __________.",
                answer: "refraction"
            },
            {
                type: "fill",
                question: "The bones in our body are part of the __________ system.",
                answer: "skeletal"
            },
            {
                type: "fill",
                question: "The process by which living organisms release energy from food is called __________.",
                answer: "respiration"
            }
        ],
        hard: [
            {
                type: "multiple",
                question: "Which subatomic particle has a negative charge and orbits the nucleus?",
                options: ["Proton", "Neutron", "Electron", "Positron"],
                answer: "Electron",
                explanation: "Electrons are negatively charged particles that orbit the nucleus in electron shells."
            },
            {
                type: "multiple",
                question: "Which of these elements has the highest electronegativity?",
                options: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
                answer: "Fluorine",
                explanation: "Fluorine has the highest electronegativity (3.98) on the Pauling scale."
            },
            {
                type: "multiple",
                question: "What is the theoretical temperature at which all molecular motion ceases?",
                options: ["0°C", "-100°C", "-273.15°C", "-459.67°C"],
                answer: "-273.15°C",
                explanation: "Absolute zero (0 Kelvin) is -273.15°C, where particles have minimal thermal motion."
            },
            {
                type: "multiple",
                question: "Which biome has the highest biodiversity on Earth?",
                options: ["Tundra", "Tropical Rainforest", "Coral Reef", "Temperate Forest"],
                answer: "Tropical Rainforest",
                explanation: "Rainforests contain over half of Earth's terrestrial species despite covering <7% of land."
            },
            {
                type: "multiple",
                question: "Which organelle is responsible for protein synthesis in eukaryotic cells?",
                options: ["Mitochondria", "Golgi Apparatus", "Ribosome", "Endoplasmic Reticulum"],
                answer: "Ribosome",
                explanation: "Ribosomes translate mRNA into polypeptide chains during protein synthesis."
            },
            {
                type: "multiple",
                question: "Which phenomenon explains why the sky appears blue during daytime?",
                options: ["Reflection", "Refraction", "Rayleigh Scattering", "Diffraction"],
                answer: "Rayleigh Scattering",
                explanation: "Shorter blue wavelengths scatter more than other colors in the atmosphere."
            },
            {
                type: "multiple",
                question: "Which neurological disorder is characterized by dopamine-producing neuron degeneration?",
                options: ["Alzheimer's", "Parkinson's", "Huntington's", "ALS"],
                answer: "Parkinson's",
                explanation: "Parkinson's results from dopamine neuron death in the substantia nigra."
            },
            {
                type: "multiple",
                question: "Which enzyme is responsible for unwinding DNA during replication?",
                options: ["DNA Polymerase", "Ligase", "Helicase", "Topoisomerase"],
                answer: "Helicase",
                explanation: "Helicases break hydrogen bonds between base pairs to separate strands."
            },
            {
                type: "multiple",
                question: "Which thermodynamic law states that entropy always increases in an isolated system?",
                options: ["Zeroth", "First", "Second", "Third"],
                answer: "Second",
                explanation: "The Second Law describes the irreversible increase of disorder over time."
            },
            {
                type: "multiple",
                question: "Which quantum number describes the shape of an electron's orbital?",
                options: ["Principal", "Azimuthal", "Magnetic", "Spin"],
                answer: "Azimuthal",
                explanation: "The azimuthal quantum number (l) determines orbital shape (s,p,d,f)."
            },
            {
                type: "multiple",
                question: "Which of the following particles is not a fermion?",
                options: ["Electron", "Proton", "Photon", "Neutron"],
                answer: "Photon",
                explanation: "Fermions are particles that follow the Pauli exclusion principle and have half-integer spin. Photons are bosons, not fermions, because they have integer spin (spin-1)."
            },
            {
                type: "multiple",
                question: "Which branch of physics deals with the behavior of objects at speeds close to the speed of light?",
                options: ["Quantum Mechanics", "Classical Mechanics", "Relativity", "Thermodynamics"],
                answer: "Relativity",
                explanation: "Relativity, specifically Einstein's theory of special relativity, explains how space and time behave for objects moving at or near the speed of light."
            },
            {
                type: "multiple",
                question: "Which process is primarily responsible for the generation of energy in the Sun?",
                options: ["Nuclear fission", "Nuclear fusion", "Chemical combustion", "Radioactive decay"],
                answer: "Nuclear fusion",
                explanation: "The Sun produces energy through nuclear fusion, where hydrogen nuclei combine to form helium, releasing massive amounts of energy in the process."
            },
            {
                type: "multiple",
                question: "Which of the following is not a product of glycolysis?",
                options: ["ATP", "Pyruvate", "NADH", "FADH₂"],
                answer: "FADH₂",
                explanation: "Glycolysis produces ATP, NADH, and pyruvate. FADH₂ is produced in the citric acid cycle, not in glycolysis."
            },
            {
                type: "multiple",
                question: "What is the primary function of the enzyme DNA polymerase?",
                options: [
                    "Breaking hydrogen bonds between DNA strands",
                    "Adding RNA primers during replication",
                    "Synthesizing new DNA strands",
                    "Joining Okazaki fragments"
                ],
                answer: "Synthesizing new DNA strands",
                explanation: "DNA polymerase is the enzyme responsible for creating new strands of DNA by adding nucleotides during replication."
            },
            {
                type: "multiple",
                question: "Which law states that no two electrons in an atom can have the same set of four quantum numbers?",
                options: ["Heisenberg Uncertainty Principle", "Pauli Exclusion Principle", "Hund's Rule", "Bohr’s Model"],
                answer: "Pauli Exclusion Principle",
                explanation: "The Pauli Exclusion Principle states that each electron in an atom must have a unique set of quantum numbers, meaning no two electrons can be identical in all four quantum properties."
            },
            {
                type: "multiple",
                question: "Which element has the highest electronegativity value on the Pauling scale?",
                options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
                answer: "Fluorine",
                explanation: "Fluorine is the most electronegative element, meaning it has the greatest tendency to attract electrons in a chemical bond."
            },
            {
                type: "multiple",
                question: "In which layer of the Earth does convection primarily occur to drive plate tectonics?",
                options: ["Crust", "Outer core", "Asthenosphere", "Inner core"],
                answer: "Asthenosphere",
                explanation: "The asthenosphere is a semi-fluid layer of the mantle where convection currents drive the movement of tectonic plates above it."
            },
            {
                type: "multiple",
                question: "Which organelle is responsible for sorting and packaging proteins for secretion?",
                options: ["Mitochondria", "Ribosome", "Endoplasmic reticulum", "Golgi apparatus"],
                answer: "Golgi apparatus",
                explanation: "The Golgi apparatus modifies, sorts, and packages proteins and lipids for secretion or delivery to other parts of the cell."
            },
            {
                type: "multiple",
                question: "Which of the following is an SI base unit?",
                options: ["Liter", "Kelvin", "Calorie", "Hour"],
                answer: "Kelvin",
                explanation: "Kelvin is the SI base unit for temperature. Liter, calorie, and hour are non-SI units used in practical measurements."
            },
            //Here starts boolean type questions
            {
                type: "boolean",
                question: "All noble gases have completely filled outer electron shells.",
                answer: true,
                explanation: "Noble gases have completely filled outer shells, which makes them stable and mostly non-reactive."
            },
            {
                type: "boolean",
                question: "Sound can travel through a vacuum.",
                answer: false,
                explanation: "Sound requires a medium (like air or water) to travel. In a vacuum, there are no particles to carry the vibration."
            },
            {
                type: "boolean",
                question: "Antimatter has the same mass as matter but opposite charge.",
                answer: true,
                explanation: "Antimatter particles are like mirror images of matter: same mass but opposite electrical charge."
            },
            {
                type: "boolean",
                question: "The mitochondria are responsible for protein synthesis in cells.",
                answer: false,
                explanation: "Mitochondria are known as the powerhouse of the cell, ribosomes are responsible for protein synthesis"
            },
            {
                type: "boolean",
                question: "The second law of thermodynamics states that entropy of an isolated system always decreases.",
                answer: false,
                explanation: "The second law of thermodynamics states that entropy (disorder) tends to increase in an isolated system, not decrease."
            },
            {
                type: "boolean",
                question: "The human genome contains fewer genes than that of a rice plant.",
                answer: true,
                explanation: "The rice plant genome has more genes than humans, despite being a simpler organism in other ways."
            },
            {
                type: "boolean",
                question: "Quarks are the fundamental particles that make up electrons.",
                answer: false,
                explanation: "Quarks combine to form protons and neutrons, not electrons. Electrons are fundamental particles themselves."
            },
            {
                type: "boolean",
                question: "Light behaves both as a particle and a wave, according to quantum theory.",
                answer: true,
                explanation: "Light exhibits dual nature: it behaves both as a wave (interference, diffraction) and a particle (photoelectric effect)."
            },
            {
                type: "boolean",
                question: "DNA and RNA have the same sugar molecule in their backbone.",
                answer: false,
                explanation: "DNA contains deoxyribose while RNA contains ribose—they differ by one oxygen atom."
            },
            {
                type: "boolean",
                question: "The ozone layer absorbs most of the Earth’s incoming gamma rays.",
                answer: false,
                explanation: "The ozone layer absorbs ultraviolet (UV) radiation, not gamma rays. Gamma rays are absorbed by the upper atmosphere."
            },
            {
                type: "boolean",
                question: "Heisenberg's Uncertainty Principle states that the position and momentum of a particle cannot both be precisely measured at the same time.",
                answer: true,
                explanation: "Heisenberg’s principle limits how precisely we can know both the position and momentum of a particle at once."
            },
            {
                type: "boolean",
                question: "In photosynthesis, oxygen is produced as a by-product of the breakdown of carbon dioxide.",
                answer: false,
                explanation: "In photosynthesis, oxygen comes from the splitting of water molecules (H₂O), not from carbon dioxide (CO₂)."
            },
            {
                type: "boolean",
                question: "Black holes emit Hawking radiation, according to theoretical physics.",
                answer: true,
                explanation: "Hawking radiation is a theoretical prediction that black holes can emit radiation and slowly evaporate over time."
            },
            {
                type: "boolean",
                question: "A catalyst increases the activation energy of a chemical reaction.",
                answer: false,
                explanation: "A catalyst lowers the activation energy required for a chemical reaction, speeding it up without being consumed."
            },
            {
                type: "boolean",
                question: "In an AC circuit, voltage and current are always in phase with each other.",
                answer: false,
                explanation: "In AC circuits, voltage and current are not always in phase due to inductance or capacitance in the system."
            },
            {
                type: "boolean",
                question: "Einstein’s equation E=mc² applies only to objects traveling at the speed of light.",
                answer: false,
                explanation: "E=mc² expresses the equivalence of mass and energy for all objects, not just those traveling at the speed of light."
            },
            {
                type: "boolean",
                question: "Tectonic plates float on a layer of the Earth known as the asthenosphere.",
                answer: true,
                explanation: "Tectonic plates float on the semi-fluid layer of the upper mantle called the asthenosphere."
            },
            {
                type: "boolean",
                question: "The pancreas produces insulin, which lowers blood glucose levels.",
                answer: true,
                explanation: "The pancreas secretes insulin, which helps cells absorb glucose and reduces blood sugar levels."
            },
            {
                type: "boolean",
                question: "The element with the highest melting point is tungsten.",
                answer: true,
                explanation: "Tungsten has the highest known melting point of all elements, about 3422°C, making it useful in high-temp applications."
            },
            {
                type: "boolean",
                question: "Neutrons are negatively charged subatomic particles.",
                answer: false,
                explanation: "Neutrons are neutral particles found in the nucleus; electrons are negatively charged."
            },
            //Here starts fill type questions        
            {
                type: "fill",
                question: "The study of the behavior and properties of matter is called __________.",
                answer: "physics",
                explanation: "Physics is the natural science that studies matter and its motion."
            },
            {
                type: "fill",
                question: "The chemical process by which plants convert sunlight into energy is called __________.",
                answer: "photosynthesis",
                explanation: "Photosynthesis converts light energy to chemical energy stored in glucose."
            },
            {
                type: "fill",
                question: "The __________ is the fundamental unit of heredity in living organisms.",
                answer: "gene",
                explanation: "Genes contain DNA instructions for building proteins and RNA molecules."
            },
            {
                type: "fill",
                question: "The __________ effect explains the apparent curvature of moving objects in spacetime.",
                answer: "gravitational lensing",
                explanation: "Massive objects bend spacetime, causing light to follow curved paths."
            },
            {
                type: "fill",
                question: "__________ is the process by which unstable atomic nuclei lose energy through radiation.",
                answer: "Radioactive decay",
                explanation: "Radioactive decay occurs through alpha, beta, or gamma emission."
            },
            {
                type: "fill",
                question: "The __________ equation describes the relationship between energy and mass (E=mc²).",
                answer: "Einstein's mass-energy equivalence",
                explanation: "This revolutionary equation shows mass can be converted to energy and vice versa."
            },
            {
                type: "fill",
                question: "__________ is the branch of mathematics dealing with rates of change and accumulation.",
                answer: "Calculus",
                explanation: "Developed independently by Newton and Leibniz in the 17th century."
            },
            {
                type: "fill",
                question: "The __________ principle states that no two electrons can have identical quantum numbers.",
                answer: "Pauli exclusion",
                explanation: "This quantum mechanical principle explains electron configuration in atoms."
            },
            {
                type: "fill",
                question: "__________ is the strongest known material in the universe, formed from carbon atoms in a lattice structure.",
                answer: "Graphene",
                explanation: "Graphene is 200x stronger than steel while being incredibly lightweight."
            },
            {
                type: "fill",
                question: "The __________ effect causes moving clocks to tick slower than stationary ones.",
                answer: "time dilation",
                explanation: "Predicted by Einstein's theory of relativity, confirmed with atomic clocks."
            },
            {
                type: "fill",
                question: "The process by which a solid changes directly into a gas is called __________.",
                answer: "sublimation",
                explanation: "Sublimation is the phase transition of a substance from a solid to a gas without passing through the liquid state."
            },
            {
                type: "fill",
                question: "The region of DNA that initiates transcription of a particular gene is called the __________.",
                answer: "promoter",
                explanation: "A promoter is a sequence of DNA needed to turn a gene on or off by providing a binding site for RNA polymerase."
            },
            {
                type: "fill",
                question: "In quantum mechanics, the __________ principle states that certain pairs of physical properties cannot be simultaneously known to arbitrary precision.",
                answer: "uncertainty",
                explanation: "Heisenberg's Uncertainty Principle asserts that the more precisely one property is measured, the less precisely the other can be known."
            },
            {
                type: "fill",
                question: "__________ radiation is emitted when an electron in an atom falls from a higher energy level to a lower one.",
                answer: "Electromagnetic",
                explanation: "When electrons transition between energy levels, they emit electromagnetic radiation in the form of photons."
            },
            {
                type: "fill",
                question: "The theory that all continents were once joined in a supercontinent is called __________.",
                answer: "continental drift",
                explanation: "Continental drift, proposed by Alfred Wegener, suggests that continents moved over geological time to their current positions."
            },
            {
                type: "fill",
                question: "The __________ is the layer of Earth's atmosphere that contains the ozone layer.",
                answer: "stratosphere",
                explanation: "The stratosphere lies above the troposphere and contains the ozone layer, which absorbs most of the Sun’s ultraviolet radiation."
            },
            {
                type: "fill",
                question: "In a redox reaction, the substance that gains electrons undergoes __________.",
                answer: "reduction",
                explanation: "Reduction is the gain of electrons by a molecule, atom, or ion, often resulting in a decrease in oxidation state."
            },
            {
                type: "fill",
                question: "The __________ of a wave is the number of wave cycles that pass a point per second.",
                answer: "frequency",
                explanation: "Frequency, measured in hertz (Hz), indicates how many times a wave repeats itself in a given time period."
            },
            {
                type: "fill",
                question: "The __________ gland in the human brain regulates the sleep-wake cycle by producing melatonin.",
                answer: "pineal",
                explanation: "The pineal gland produces melatonin in response to darkness, helping to regulate circadian rhythms and sleep patterns."
            },
            {
                type: "fill",
                question: "The chemical formula for glucose, a simple sugar, is __________.",
                answer: "C6H12O6",
                explanation: "Glucose is a six-carbon sugar with the molecular formula C6H12O6, essential for cellular respiration and energy."
            }
        ]
    },

    history: {
        easy: [
            {
                type: "multiple",
                question: "Who was the first President of the United States?",
                options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
                answer: "George Washington",
                explanation: "George Washington was the first President of the United States, serving from 1789 to 1797."
            },
            {
                type: "multiple",
                question: "What wall was torn down in 1989, symbolizing the end of the Cold War?",
                options: ["Great Wall of China", "Berlin Wall", "Western Wall", "Hadrian's Wall"],
                answer: "Berlin Wall",
                explanation: "The Berlin Wall was torn down in 1989, marking the fall of communism in Eastern Europe."
            },
            {
                type: "multiple",
                question: "Which civilization built the pyramids in Egypt?",
                options: ["Romans", "Greeks", "Egyptians", "Mayans"],
                answer: "Egyptians",
                explanation: "The ancient Egyptians built the pyramids as tombs for pharaohs and important people."
            },
            {
                type: "multiple",
                question: "In which country did the Renaissance begin?",
                options: ["France", "Italy", "Germany", "England"],
                answer: "Italy",
                explanation: "The Renaissance began in Italy during the 14th century and spread across Europe."
            },
            {
                type: "multiple",
                question: "What was the name of the ship that carried the Pilgrims to America in 1620?",
                options: ["Titanic", "Santa Maria", "Mayflower", "Endeavour"],
                answer: "Mayflower",
                explanation: "The Pilgrims traveled to North America aboard the Mayflower in 1620."
            },
            {
                type: "multiple",
                question: "Who was the famous civil rights leader known for his 'I Have a Dream' speech?",
                options: ["Nelson Mandela", "Malcolm X", "Martin Luther King Jr.", "Barack Obama"],
                answer: "Martin Luther King Jr.",
                explanation: "Martin Luther King Jr. gave the famous 'I Have a Dream' speech in 1963."
            },
            {
                type: "multiple",
                question: "Who discovered America in 1492?",
                options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"],
                answer: "Christopher Columbus",
                explanation: "Christopher Columbus sailed across the Atlantic and reached the Americas in 1492."
            },
            {
                type: "multiple",
                question: "What event started World War I?",
                options: ["Pearl Harbor attack", "Assassination of Archduke Franz Ferdinand", "D-Day", "Treaty of Versailles"],
                answer: "Assassination of Archduke Franz Ferdinand",
                explanation: "The assassination of Archduke Franz Ferdinand in 1914 triggered World War I."
            },
            {
                type: "multiple",
                question: "Who was the leader of Nazi Germany during World War II?",
                options: ["Joseph Stalin", "Winston Churchill", "Adolf Hitler", "Benito Mussolini"],
                answer: "Adolf Hitler",
                explanation: "Adolf Hitler was the dictator of Nazi Germany during World War II."
            },
            {
                type: "multiple",
                question: "Which ancient civilization is known for its Olympic Games?",
                options: ["Egyptian", "Greek", "Roman", "Chinese"],
                answer: "Greek",
                explanation: "The ancient Greeks started the Olympic Games in Olympia in 776 BCE."
            },
            {
                type: "multiple",
                question: "What year did the United States declare its independence?",
                options: ["1776", "1492", "1812", "1865"],
                answer: "1776",
                explanation: "The United States declared its independence from Britain on July 4, 1776."
            },
            {
                type: "multiple",
                question: "What empire was ruled by Julius Caesar?",
                options: ["Greek Empire", "Roman Empire", "Mongol Empire", "Ottoman Empire"],
                answer: "Roman Empire",
                explanation: "Julius Caesar was a military leader and dictator in the Roman Empire."
            },
            {
                type: "multiple",
                question: "Where did the Industrial Revolution begin?",
                options: ["France", "United States", "England", "Germany"],
                answer: "England",
                explanation: "The Industrial Revolution began in England in the late 18th century."
            },
            {
                type: "multiple",
                question: "Who was the famous nurse during the Crimean War?",
                options: ["Clara Barton", "Florence Nightingale", "Marie Curie", "Helen Keller"],
                answer: "Florence Nightingale",
                explanation: "Florence Nightingale is known for modernizing nursing during the Crimean War."
            },
            {
                type: "multiple",
                question: "Which war was fought between the North and South regions of the United States?",
                options: ["Revolutionary War", "Civil War", "World War I", "Vietnam War"],
                answer: "Civil War",
                explanation: "The American Civil War was fought from 1861 to 1865 between the North and South."
            },
            {
                type: "multiple",
                question: "What was the name of the first human to walk on the moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
                answer: "Neil Armstrong",
                explanation: "Neil Armstrong was the first person to walk on the moon in 1969."
            },
            {
                type: "multiple",
                question: "Which ancient civilization developed cuneiform writing?",
                options: ["Greek", "Roman", "Sumerian", "Chinese"],
                answer: "Sumerian",
                explanation: "The Sumerians developed cuneiform, one of the earliest writing systems."
            },
            {
                type: "multiple",
                question: "Which country gifted the Statue of Liberty to the United States?",
                options: ["France", "England", "Spain", "Germany"],
                answer: "France",
                explanation: "France gave the Statue of Liberty to the U.S. in 1886 as a symbol of friendship."
            },
            {
                type: "multiple",
                question: "What was the name of the document signed in 1215 limiting the power of the king of England?",
                options: ["Constitution", "Bill of Rights", "Magna Carta", "Treaty of Paris"],
                answer: "Magna Carta",
                explanation: "The Magna Carta was signed in 1215 to limit the powers of King John of England."
            },
            {
                type: "multiple",
                question: "What global conflict took place from 1939 to 1945?",
                options: ["World War I", "Vietnam War", "World War II", "Cold War"],
                answer: "World War II",
                explanation: "World War II was fought from 1939 to 1945 and involved many countries around the world."
            },
            //Here starts boolean type questions
            {
                type: "boolean",
                question: "The Great Wall of China was built primarily to protect against invasions.",
                answer: true,
                explanation: "The Great Wall was constructed to defend Chinese states from northern nomadic tribes."
            },
            {
                type: "boolean",
                question: "World War II ended in 1942.",
                answer: false,
                explanation: "World War II ended in 1945, after the surrender of Germany and Japan."
            },
            {
                type: "boolean",
                question: "The Cold War was a direct military conflict between the USA and the Soviet Union.",
                answer: false,
                explanation: "The Cold War was a political and ideological rivalry without direct warfare between the superpowers."
            },
            {
                type: "boolean",
                question: "The Industrial Revolution began in the 18th century.",
                answer: true,
                explanation: "The Industrial Revolution started in the late 1700s in Britain, spreading globally afterward."
            },
            {
                type: "boolean",
                question: "The United Nations was founded after World War I.",
                answer: false,
                explanation: "The UN was founded in 1945, after World War II, to promote global peace and cooperation."
            },
            {
                type: "boolean",
                question: "The pyramids of Egypt were built as tombs for pharaohs.",
                answer: true,
                explanation: "Pyramids were grand burial structures for ancient Egyptian kings and nobles."
            },
            {
                type: "boolean",
                question: "The Berlin Wall was built to unite East and West Germany.",
                answer: false,
                explanation: "The Berlin Wall was built to prevent East Germans from escaping to West Berlin during the Cold War."
            },
            {
                type: "boolean",
                question: "The Renaissance was a cultural movement that began in Asia.",
                answer: false,
                explanation: "The Renaissance began in Italy, Europe, and spread across the continent."
            },
            {
                type: "boolean",
                question: "The Olympic Games originated in ancient Greece.",
                answer: true,
                explanation: "The first Olympic Games were held in Olympia, Greece, around 776 BCE."
            },
            {
                type: "boolean",
                question: "The Titanic sank on its first voyage.",
                answer: true,
                explanation: "The RMS Titanic tragically sank during its maiden voyage in 1912 after hitting an iceberg."
            },
            {
                type: "boolean",
                question: "The printing press was invented by Isaac Newton.",
                answer: false,
                explanation: "Johannes Gutenberg invented the printing press in the 15th century."
            },
            {
                type: "boolean",
                question: "The Great Depression affected only the United States.",
                answer: false,
                explanation: "While it began in the U.S., the Great Depression impacted economies worldwide."
            },
            {
                type: "boolean",
                question: "Nelson Mandela was the first black president of South Africa.",
                answer: true,
                explanation: "Mandela was elected president in 1994 after decades of apartheid rule."
            },
            {
                type: "boolean",
                question: "Ancient Rome was a democracy like modern countries.",
                answer: false,
                explanation: "Ancient Rome was a republic, then an empire ruled by emperors, not a modern democracy."
            },
            {
                type: "boolean",
                question: "World War I began in 1914.",
                answer: true,
                explanation: "World War I started in July 1914 after the assassination of Archduke Franz Ferdinand."
            },
            {
                type: "boolean",
                question: "The League of Nations succeeded in preventing World War II.",
                answer: false,
                explanation: "The League of Nations failed to stop the aggression that led to WWII."
            },
            {
                type: "boolean",
                question: "Christopher Columbus was the first person to discover the Americas.",
                answer: false,
                explanation: "Indigenous peoples lived in the Americas long before Columbus arrived in 1492."
            },
            {
                type: "boolean",
                question: "The French Revolution began in 1789.",
                answer: true,
                explanation: "The revolution began in 1789, leading to major political and social changes in France."
            },
            {
                type: "boolean",
                question: "The United Nations has more than 100 member countries.",
                answer: true,
                explanation: "The UN has 193 member states as of today."
            },
            {
                type: "boolean",
                question: "The Space Race was a competition between the USA and China.",
                answer: false,
                explanation: "The Space Race was between the USA and the Soviet Union during the Cold War."
            },
            //Here starts fill type questions
            {
                type: "fill",
                question: "The __________ was formed in 1945 to promote peace and cooperation among nations.",
                answer: "United Nations",
                explanation: "The United Nations was established after World War II to prevent future global conflicts."
            },
            {
                type: "fill",
                question: "The Great Wall of China was primarily built to defend against invasions from __________ tribes.",
                answer: "nomadic",
                explanation: "Nomadic tribes from the north, like the Xiongnu, threatened Chinese borders."
            },
            {
                type: "fill",
                question: "The __________ Empire was known for its extensive road network and gladiatorial games.",
                answer: "Roman",
                explanation: "The Roman Empire had a vast infrastructure and hosted public spectacles for entertainment."
            },
            {
                type: "fill",
                question: "The Industrial Revolution began in __________ during the 18th century.",
                answer: "Britain",
                explanation: "Britain led the Industrial Revolution due to its resources and innovations in machinery."
            },
            {
                type: "fill",
                question: "The Renaissance was a cultural movement that began in the country of __________.",
                answer: "Italy",
                explanation: "Italy, especially cities like Florence, was the birthplace of Renaissance art and learning."
            },
            {
                type: "fill",
                question: "The sinking of the __________ in 1912 is one of the most famous maritime disasters in history.",
                answer: "Titanic",
                explanation: "The Titanic sank after hitting an iceberg during its maiden voyage."
            },
            {
                type: "fill",
                question: "The Cold War was mainly a rivalry between the USA and the __________ Union.",
                answer: "Soviet",
                explanation: "The Soviet Union and the United States competed politically and ideologically."
            },
            {
                type: "fill",
                question: "The ancient Olympic Games were held in the city of __________ in Greece.",
                answer: "Olympia",
                explanation: "Olympia was the site of the original Olympic Games starting in 776 BCE."
            },
            {
                type: "fill",
                question: "The famous leader __________ led India's non-violent struggle for independence.",
                answer: "Mahatma Gandhi",
                explanation: "Gandhi used peaceful protests to challenge British colonial rule."
            },
            {
                type: "fill",
                question: "The Berlin __________ divided East and West Germany during the Cold War.",
                answer: "Wall",
                explanation: "The Berlin Wall symbolized the division between communist and capitalist blocs."
            },
            {
                type: "fill",
                question: "The __________ Empire was known for its pyramids and pharaohs.",
                answer: "Egyptian",
                explanation: "The Egyptian civilization built massive pyramids as tombs for its rulers."
            },
            {
                type: "fill",
                question: "The global economic crisis that started in 1929 is known as the __________ Depression.",
                answer: "Great",
                explanation: "The Great Depression caused widespread unemployment and poverty worldwide."
            },
            {
                type: "fill",
                question: "__________ Mandela was South Africa’s first black president.",
                answer: "Nelson",
                explanation: "Nelson Mandela was elected in 1994 after fighting apartheid for decades."
            },
            {
                type: "fill",
                question: "The treaty that ended World War I was called the Treaty of __________.",
                answer: "Versailles",
                explanation: "The Treaty of Versailles formally ended the war and imposed penalties on Germany."
            },
            {
                type: "fill",
                question: "The __________ Revolution in 1789 overthrew the monarchy in France.",
                answer: "French",
                explanation: "The French Revolution led to the rise of democracy and human rights in Europe."
            },
            {
                type: "fill",
                question: "__________ Columbus sailed across the Atlantic in 1492 under the Spanish flag.",
                answer: "Christopher",
                explanation: "Christopher Columbus reached the Americas, opening the door to European colonization."
            },
            {
                type: "fill",
                question: "The __________ Age refers to the time when humans used bronze tools and weapons.",
                answer: "Bronze",
                explanation: "The Bronze Age marked technological advancement with metal usage in ancient societies."
            },
            {
                type: "fill",
                question: "The first successful human spaceflight was by __________ Gagarin in 1961.",
                answer: "Yuri",
                explanation: "Yuri Gagarin of the USSR became the first human to orbit Earth in the Vostok 1 mission."
            },
            {
                type: "fill",
                question: "The country of __________ dropped atomic bombs on Hiroshima and Nagasaki in 1945.",
                answer: "USA",
                explanation: "The United States used atomic weapons to force Japan’s surrender in World War II."
            },
            {
                type: "fill",
                question: "The explorer __________ Magellan is known for leading the first voyage around the world.",
                answer: "Ferdinand",
                explanation: "Though he died on the journey, Magellan’s expedition completed the first global circumnavigation."
            }                     
            //Add here easy history questions...
        ],
        medium: [
            {
                type: "multiple",
                question: "Which ancient civilization built the Machu Picchu complex?",
                options: ["Aztec", "Maya", "Inca", "Olmec"],
                answer: "Inca",
                explanation: "The Inca built Machu Picchu in the 15th century as an estate for Emperor Pachacuti."
            },
            {
                type: "multiple",
                question: "The Magna Carta was signed during which English king's reign?",
                options: ["Richard I", "John", "Henry II", "Edward I"],
                answer: "John",
                explanation: "King John signed the Magna Carta in 1215 under pressure from rebellious barons."
            },
            {
                type: "multiple",
                question: "Which war began with the assassination of Archduke Franz Ferdinand?",
                options: ["World War I", "World War II", "Crimean War", "Franco-Prussian War"],
                answer: "World War I",
                explanation: "The 1914 assassination in Sarajevo triggered a series of events leading to WWI."
            },
            {
                type: "multiple",
                question: "The Renaissance began in which modern-day country?",
                options: ["France", "Germany", "Italy", "Spain"],
                answer: "Italy",
                explanation: "The Renaissance originated in 14th century Florence before spreading across Europe."
            },
            {
                type: "multiple",
                question: "Who was the first woman to fly solo across the Atlantic?",
                options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
                answer: "Amelia Earhart",
                explanation: "Earhart completed her solo transatlantic flight in 1932, five years after Lindbergh."
            },
            {
                type: "multiple",
                question: "Which empire was ruled by Suleiman the Magnificent?",
                options: ["Mughal", "Byzantine", "Ottoman", "Persian"],
                answer: "Ottoman",
                explanation: "Suleiman ruled the Ottoman Empire from 1520-1566 during its golden age."
            },
            {
                type: "multiple",
                question: "The Industrial Revolution began in which industry?",
                options: ["Steel", "Railroads", "Textiles", "Coal Mining"],
                answer: "Textiles",
                explanation: "Mechanized textile production in 18th century Britain marked the revolution's start."
            },
            {
                type: "multiple",
                question: "Who wrote 'The Communist Manifesto' with Friedrich Engels?",
                options: ["Vladimir Lenin", "Karl Marx", "Leon Trotsky", "Joseph Stalin"],
                answer: "Karl Marx",
                explanation: "Marx and Engels published this foundational socialist text in 1848."
            },
            {
                type: "multiple",
                question: "Which ancient wonder was located in Alexandria, Egypt?",
                options: ["Colossus of Rhodes", "Hanging Gardens", "Lighthouse", "Temple of Artemis"],
                answer: "Lighthouse",
                explanation: "The Lighthouse of Alexandria guided ships for centuries before being destroyed by earthquakes."
            },
            {
                type: "multiple",
                question: "The Treaty of Versailles formally ended which conflict?",
                options: ["Napoleonic Wars", "World War I", "Seven Years' War", "Crimean War"],
                answer: "World War I",
                explanation: "Signed in 1919, the treaty imposed harsh terms on Germany after WWI."
            },
            {
                type: "multiple",
                question: "Which civilization invented paper?",
                options: ["Ancient Egypt", "Ancient China", "Ancient Greece", "Mesopotamia"],
                answer: "Ancient China",
                explanation: "Chinese court official Cai Lun perfected papermaking around 105 CE."
            },
            {
                type: "multiple",
                question: "The 'Shot Heard Round the World' refers to the start of which conflict?",
                options: ["French Revolution", "U.S. Civil War", "American Revolution", "Spanish-American War"],
                answer: "American Revolution",
                explanation: "This phrase describes the first shots at Lexington and Concord in 1775."
            },
            {
                type: "multiple",
                question: "Who was the first Roman Emperor?",
                options: ["Julius Caesar", "Augustus", "Nero", "Marcus Aurelius"],
                answer: "Augustus",
                explanation: "Born Octavian, he became Augustus in 27 BCE after defeating Mark Antony."
            },
            {
                type: "multiple",
                question: "Which city was the capital of the Byzantine Empire?",
                options: ["Rome", "Athens", "Constantinople", "Alexandria"],
                answer: "Constantinople",
                explanation: "Founded as Byzantium, it became Constantinople and is now Istanbul."
            },
            {
                type: "multiple",
                question: "The Boxer Rebellion occurred in which country?",
                options: ["Japan", "India", "China", "Vietnam"],
                answer: "China",
                explanation: "This anti-foreigner uprising took place in China from 1899-1901."
            },
            {
                type: "multiple",
                question: "Who led the Bolshevik Revolution in Russia?",
                options: ["Joseph Stalin", "Leon Trotsky", "Vladimir Lenin", "Karl Marx"],
                answer: "Vladimir Lenin",
                explanation: "Lenin led the October Revolution in 1917 that brought the Bolsheviks to power."
            },
            {
                type: "multiple",
                question: "Which ancient civilization developed cuneiform writing?",
                options: ["Egyptians", "Sumerians", "Phoenicians", "Greeks"],
                answer: "Sumerians",
                explanation: "Sumerians in Mesopotamia created cuneiform around 3000 BCE."
            },
            {
                type: "multiple",
                question: "The Hundred Years' War was primarily between which two nations?",
                options: ["England and France", "Spain and Portugal", "Holy Roman Empire and Italy", "Russia and Sweden"],
                answer: "England and France",
                explanation: "This series of conflicts lasted from 1337 to 1453 with changing alliances."
            },
            {
                type: "multiple",
                question: "Who was the first president of the United States?",
                options: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
                answer: "George Washington",
                explanation: "Washington served from 1789-1797 after leading the Continental Army."
            },
            {
                type: "multiple",
                question: "The Scramble for Africa occurred during which century?",
                options: ["16th", "17th", "18th", "19th"],
                answer: "19th",
                explanation: "European powers rapidly colonized Africa between 1881-1914 in this period."
            },
            //Here starts boolean types questions
            {
                type: "boolean",
                question: "The Marshall Plan was a Soviet program to rebuild Eastern Europe after World War II.",
                answer: false,
                explanation: "The Marshall Plan was a U.S. initiative to aid Western Europe’s recovery after World War II."
            },
            {
                type: "boolean",
                question: "The Cuban Missile Crisis involved a confrontation between the United States and the Soviet Union in 1962.",
                answer: true,
                explanation: "It was a 13-day standoff over Soviet missiles in Cuba, bringing the world close to nuclear war."
            },
            {
                type: "boolean",
                question: "The Magna Carta was signed in Germany in 1215 to limit the power of the emperor.",
                answer: false,
                explanation: "The Magna Carta was signed in England to limit the powers of King John and protect barons’ rights."
            },
            {
                type: "boolean",
                question: "The Treaty of Tordesillas divided newly discovered lands between Spain and Portugal.",
                answer: true,
                explanation: "In 1494, this treaty set a boundary to resolve conflicts over newly explored lands."
            },
            {
                type: "boolean",
                question: "Napoleon Bonaparte was exiled to the island of Elba after his defeat at the Battle of Waterloo.",
                answer: false,
                explanation: "He was exiled to Elba in 1814, but Waterloo occurred later in 1815, after which he was sent to Saint Helena."
            },
            {
                type: "boolean",
                question: "The Meiji Restoration modernized Japan in the 19th century.",
                answer: true,
                explanation: "It restored imperial rule and led to rapid industrial and military modernization in Japan."
            },
            {
                type: "boolean",
                question: "The League of Nations was effective in preventing the outbreak of World War II.",
                answer: false,
                explanation: "The League of Nations failed to stop aggression by Axis powers and was replaced by the United Nations."
            },
            {
                type: "boolean",
                question: "The Reformation was a movement against the practices of the Catholic Church led by Martin Luther.",
                answer: true,
                explanation: "Martin Luther’s 95 Theses in 1517 criticized the Church and sparked Protestant movements."
            },
            {
                type: "boolean",
                question: "The Suez Canal connects the Atlantic Ocean to the Indian Ocean.",
                answer: false,
                explanation: "The Suez Canal connects the Mediterranean Sea to the Red Sea, not the Atlantic."
            },
            {
                type: "boolean",
                question: "The United States entered World War I after the attack on Pearl Harbor.",
                answer: false,
                explanation: "The U.S. entered World War I in 1917 after German submarine attacks, not Pearl Harbor (which led to WWII involvement)."
            },
            {
                type: "boolean",
                question: "The Enlightenment emphasized reason, individual rights, and scientific thinking.",
                answer: true,
                explanation: "The Enlightenment was an intellectual movement in the 17th–18th centuries promoting rational thought and liberty."
            },
            {
                type: "boolean",
                question: "The Black Death in the 14th century killed about one-third of Europe’s population.",
                answer: true,
                explanation: "The bubonic plague caused widespread mortality and massive social and economic changes."
            },
            {
                type: "boolean",
                question: "The Opium Wars were fought between China and Britain over tea taxes.",
                answer: false,
                explanation: "They were fought mainly over British opium trade and China's trade restrictions."
            },
            {
                type: "boolean",
                question: "Alexander the Great spread Greek culture as far as India.",
                answer: true,
                explanation: "His conquests helped spread Hellenistic culture throughout the Middle East and parts of Asia."
            },
            {
                type: "boolean",
                question: "The Berlin Conference divided Africa among European nations without African input.",
                answer: true,
                explanation: "Held in 1884–85, European powers drew colonial boundaries without consulting African leaders."
            },
            {
                type: "boolean",
                question: "World War II ended with the signing of the Treaty of Versailles.",
                answer: false,
                explanation: "World War II ended with the surrender of Axis powers in 1945; the Treaty of Versailles ended World War I."
            },
            {
                type: "boolean",
                question: "The Cold War involved direct military battles between the U.S. and the Soviet Union.",
                answer: false,
                explanation: "The Cold War was characterized by indirect conflicts, espionage, and arms races, but no direct war between the two."
            },
            {
                type: "boolean",
                question: "The Crusades were a series of religious wars initiated by Christians to reclaim the Holy Land.",
                answer: true,
                explanation: "They were medieval military campaigns to regain control of Jerusalem and surrounding areas."
            },
            {
                type: "boolean",
                question: "The Great Fire of London occurred in the 19th century and destroyed Buckingham Palace.",
                answer: false,
                explanation: "The Great Fire happened in 1666 and destroyed much of London, but not Buckingham Palace."
            },
            {
                type: "boolean",
                question: "The fall of the Berlin Wall in 1989 symbolized the end of the Cold War in Europe.",
                answer: true,
                explanation: "Its fall marked the collapse of communist control in Eastern Europe and the reunification of Germany."
            },
            //Here starts fill type questions
            {
                type: "fill",
                question: "The __________ Revolution in the late 18th century led to the rise of democracy and the fall of the monarchy in France.",
                answer: "French",
                explanation: "The French Revolution (1789–1799) was a significant period of social and political upheaval in France that led to the end of monarchy and rise of democratic ideals."
            },
            {
                type: "fill",
                question: "The __________ Empire was known for its road systems, centralized government, and engineering achievements in South America.",
                answer: "Inca",
                explanation: "The Inca Empire, based in the Andes, built an extensive network of roads and cities before the Spanish conquest."
            },
            {
                type: "fill",
                question: "World War I began in the year __________.",
                answer: "1914",
                explanation: "World War I started in 1914 after the assassination of Archduke Franz Ferdinand of Austria."
            },
            {
                type: "fill",
                question: "The Renaissance began in the country of __________ during the 14th century.",
                answer: "Italy",
                explanation: "The Renaissance was a cultural movement that started in Italy, focusing on art, science, and humanism."
            },
            {
                type: "fill",
                question: "The bombing of __________ by the U.S. marked the first use of an atomic bomb in warfare.",
                answer: "Hiroshima",
                explanation: "The U.S. dropped an atomic bomb on Hiroshima, Japan, on August 6, 1945, during World War II."
            },
            {
                type: "fill",
                question: "The Berlin __________ physically and ideologically divided East and West Berlin from 1961 to 1989.",
                answer: "Wall",
                explanation: "The Berlin Wall was built by East Germany to prevent citizens from fleeing to the West during the Cold War."
            },
            {
                type: "fill",
                question: "The __________ Empire was known for spreading Islam and controlling a large portion of the Middle East, North Africa, and Europe.",
                answer: "Ottoman",
                explanation: "The Ottoman Empire was a major Islamic empire that lasted from the 14th century until the early 20th century."
            },
            {
                type: "fill",
                question: "The __________ War, fought from 1950 to 1953, ended in a ceasefire but not a peace treaty.",
                answer: "Korean",
                explanation: "The Korean War resulted in the division of Korea into North and South, with no formal peace agreement."
            },
            {
                type: "fill",
                question: "The assassination of __________ in 1914 sparked the beginning of World War I.",
                answer: "Franz Ferdinand",
                explanation: "Archduke Franz Ferdinand of Austria was assassinated in Sarajevo, triggering a chain of events that led to WWI."
            },
            {
                type: "fill",
                question: "The Treaty of __________ officially ended World War I in 1919.",
                answer: "Versailles",
                explanation: "The Treaty of Versailles imposed harsh penalties on Germany and was signed in 1919."
            },
            {
                type: "fill",
                question: "The __________ Curtain was a symbolic and physical divide between the communist East and capitalist West during the Cold War.",
                answer: "Iron",
                explanation: "The 'Iron Curtain' was a term used by Winston Churchill to describe the division between Western democracies and Eastern communist countries."
            },
            {
                type: "fill",
                question: "The ancient city of __________ was buried by the eruption of Mount Vesuvius in 79 CE.",
                answer: "Pompeii",
                explanation: "Pompeii was a Roman city preserved under volcanic ash after the eruption of Mount Vesuvius."
            },
            {
                type: "fill",
                question: "The __________ Revolution led to the establishment of the Soviet Union in 1922.",
                answer: "Russian",
                explanation: "The Russian Revolution in 1917 led to the fall of the Tsar and the rise of the Bolsheviks, eventually forming the USSR."
            },
            {
                type: "fill",
                question: "The United Nations was formed in the year __________ after World War II.",
                answer: "1945",
                explanation: "The United Nations was established in 1945 to promote international peace and cooperation after WWII."
            },
            {
                type: "fill",
                question: "The ancient civilization of __________ developed along the Nile River.",
                answer: "Egypt",
                explanation: "Ancient Egypt flourished along the Nile and is known for pyramids, pharaohs, and hieroglyphics."
            },
            {
                type: "fill",
                question: "The Cold War ended with the collapse of the __________ Union in 1991.",
                answer: "Soviet",
                explanation: "The Soviet Union dissolved in 1991, marking the official end of the Cold War."
            },
            {
                type: "fill",
                question: "The Enlightenment thinkers often challenged the power of the __________.",
                answer: "church",
                explanation: "Enlightenment philosophers promoted reason and often opposed traditional religious authority."
            },
            {
                type: "fill",
                question: "The explorer __________ was the first European to reach India by sea around the Cape of Good Hope.",
                answer: "Vasco da Gama",
                explanation: "Vasco da Gama's voyage opened a direct sea route from Europe to Asia in 1498."
            },
            {
                type: "fill",
                question: "The __________ Dynasty built the Great Wall of China to protect against northern invasions.",
                answer: "Ming",
                explanation: "The Ming Dynasty reconstructed and fortified the Great Wall during its reign."
            },
            {
                type: "fill",
                question: "The __________ Trade involved the exchange of goods, slaves, and raw materials between Europe, Africa, and the Americas.",
                answer: "Triangular",
                explanation: "The Triangular Trade was a transatlantic system that involved slavery and commerce between three continents."
            }                      
            // Add more medium history questions here...
        ],
        hard: [
            {
                type: "multiple",
                question: "Who was the last emperor of the Western Roman Empire?",
                options: ["Julius Caesar", "Constantine XI", "Romulus Augustulus", "Nero"],
                answer: "Romulus Augustulus",
                explanation: "Romulus Augustulus was the last emperor of the Western Roman Empire, deposed in 476 AD."
            },
            {
                type: "multiple",
                question: "Which treaty ended the Thirty Years' War in 1648?",
                options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Westphalia", "Treaty of Utrecht"],
                answer: "Treaty of Westphalia",
                explanation: "The Treaty of Westphalia ended the Thirty Years' War and reshaped European political boundaries."
            },
            {
                type: "multiple",
                question: "Which civilization was known for the Code of Hammurabi?",
                options: ["Assyrians", "Babylonians", "Hittites", "Persians"],
                answer: "Babylonians",
                explanation: "The Code of Hammurabi was one of the earliest legal codes, created by the Babylonian king Hammurabi."
            },
            {
                type: "multiple",
                question: "What year did the Russian Revolution begin?",
                options: ["1917", "1905", "1922", "1898"],
                answer: "1917",
                explanation: "The Russian Revolution of 1917 led to the fall of the Tsarist regime and the rise of the Soviet Union."
            },
            {
                type: "multiple",
                question: "Which battle marked the turning point of the Pacific War during World War II?",
                options: ["Battle of Midway", "Battle of Coral Sea", "Battle of Iwo Jima", "Battle of Okinawa"],
                answer: "Battle of Midway",
                explanation: "The Battle of Midway in 1942 was a decisive U.S. victory and shifted the balance in the Pacific."
            },
            {
                type: "multiple",
                question: "Who was the longest-reigning monarch in British history before Queen Elizabeth II?",
                options: ["Queen Victoria", "King George III", "Henry VIII", "Elizabeth I"],
                answer: "Queen Victoria",
                explanation: "Queen Victoria reigned for 63 years and was the longest before Queen Elizabeth II surpassed her."
            },
            {
                type: "multiple",
                question: "Which African empire was ruled by Mansa Musa, one of the wealthiest individuals in history?",
                options: ["Zulu Empire", "Mali Empire", "Carthaginian Empire", "Kingdom of Axum"],
                answer: "Mali Empire",
                explanation: "Mansa Musa ruled the Mali Empire and is famous for his immense wealth and pilgrimage to Mecca."
            },
            {
                type: "multiple",
                question: "The Taiping Rebellion took place in which country?",
                options: ["Japan", "Vietnam", "India", "China"],
                answer: "China",
                explanation: "The Taiping Rebellion was a massive civil war in China from 1850 to 1864 led by a religious movement."
            },
            {
                type: "multiple",
                question: "What was the name of the political and economic system established in the Soviet Union under Lenin?",
                options: ["Perestroika", "Stalinism", "Marxism", "War Communism"],
                answer: "War Communism",
                explanation: "War Communism was Lenin’s system during the Russian Civil War, aiming to supply the Red Army."
            },
            {
                type: "multiple",
                question: "Who was the emperor during the height of the Mongol Empire's expansion?",
                options: ["Kublai Khan", "Genghis Khan", "Ogedei Khan", "Batu Khan"],
                answer: "Genghis Khan",
                explanation: "Genghis Khan founded the Mongol Empire and led its major conquests across Asia and Europe."
            },
            {
                type: "multiple",
                question: "What historical event is associated with the phrase 'Let them eat cake'?",
                options: ["French Revolution", "Russian Revolution", "American Civil War", "Glorious Revolution"],
                answer: "French Revolution",
                explanation: "Though likely apocryphal, 'Let them eat cake' is associated with Queen Marie Antoinette during the French Revolution."
            },
            {
                type: "multiple",
                question: "Which war was also known as the Great War before World War II?",
                options: ["World War I", "Crimean War", "Franco-Prussian War", "Napoleonic Wars"],
                answer: "World War I",
                explanation: "World War I was originally called the Great War due to its unprecedented scale and impact."
            },
            {
                type: "multiple",
                question: "Which ancient Greek historian is known as the 'Father of History'?",
                options: ["Thucydides", "Herodotus", "Plato", "Xenophon"],
                answer: "Herodotus",
                explanation: "Herodotus wrote extensive historical accounts and is often referred to as the 'Father of History'."
            },
            {
                type: "multiple",
                question: "What was the main cause of the Opium Wars between Britain and China?",
                options: ["Tea trade", "Land dispute", "Drug trafficking", "Missionary conflicts"],
                answer: "Drug trafficking",
                explanation: "The Opium Wars were caused by British export of opium to China and China's attempts to stop it."
            },
            {
                type: "multiple",
                question: "Which U.S. President signed the Emancipation Proclamation?",
                options: ["George Washington", "Andrew Johnson", "Abraham Lincoln", "Ulysses S. Grant"],
                answer: "Abraham Lincoln",
                explanation: "Abraham Lincoln issued the Emancipation Proclamation in 1863, freeing slaves in Confederate states."
            },
            {
                type: "multiple",
                question: "Who was the leader of the Haitian Revolution?",
                options: ["Toussaint Louverture", "Simon Bolivar", "Jean-Jacques Dessalines", "Francisco de Miranda"],
                answer: "Toussaint Louverture",
                explanation: "Toussaint Louverture led the Haitian Revolution, resulting in Haiti becoming the first Black republic."
            },
            {
                type: "multiple",
                question: "Which country was formerly known as Abyssinia?",
                options: ["Sudan", "Ethiopia", "Somalia", "Libya"],
                answer: "Ethiopia",
                explanation: "Ethiopia was historically referred to as Abyssinia, especially in European literature."
            },
            {
                type: "multiple",
                question: "What was the name of the secret project that developed the atomic bomb in the U.S. during WWII?",
                options: ["Trinity Project", "Nuclear Initiative", "Manhattan Project", "Omega Project"],
                answer: "Manhattan Project",
                explanation: "The Manhattan Project was the U.S. research initiative that developed the first atomic bombs."
            },
            {
                type: "multiple",
                question: "What empire sacked Rome in 410 AD?",
                options: ["Vikings", "Huns", "Visigoths", "Franks"],
                answer: "Visigoths",
                explanation: "The Visigoths, led by Alaric, sacked Rome in 410 AD, marking a major event in the fall of the Western Roman Empire."
            },
            {
                type: "multiple",
                question: "The Balfour Declaration of 1917 supported the establishment of a national home for which group?",
                options: ["Kurds", "Armenians", "Jews", "Palestinians"],
                answer: "Jews",
                explanation: "The Balfour Declaration stated British support for the establishment of a national home for the Jewish people in Palestine."
            },
            //Here starts boolean type questions
            {
                type: "boolean",
                question: "The Council of Trent was part of the Protestant Reformation.",
                answer: false,
                explanation: "The Council of Trent (1545–1563) was a key part of the Catholic Counter-Reformation, not the Protestant Reformation."
            },
            {
                type: "boolean",
                question: "The Treaty of Tordesillas divided the New World between Spain and France.",
                answer: false,
                explanation: "The Treaty of Tordesillas (1494) divided newly discovered lands between Spain and Portugal, not France."
            },
            {
                type: "boolean",
                question: "The Haitian Revolution was the first successful slave revolt leading to an independent nation.",
                answer: true,
                explanation: "The Haitian Revolution (1791–1804) led to Haiti becoming the first black republic and the first country born of a successful slave rebellion."
            },
            {
                type: "boolean",
                question: "The League of Nations had the United States as one of its founding members.",
                answer: false,
                explanation: "Although proposed by U.S. President Wilson, the U.S. Senate refused to join the League of Nations."
            },
            {
                type: "boolean",
                question: "The Boxer Rebellion was a Chinese uprising against foreign influence and missionaries.",
                answer: true,
                explanation: "The Boxer Rebellion (1899–1901) aimed to expel foreign powers and missionaries from China."
            },
            {
                type: "boolean",
                question: "The Balfour Declaration promised a homeland for Jews in South Africa.",
                answer: false,
                explanation: "The Balfour Declaration (1917) supported a Jewish homeland in Palestine, not South Africa."
            },
            {
                type: "boolean",
                question: "The Crimean War involved Britain and France fighting against the Russian Empire.",
                answer: true,
                explanation: "The Crimean War (1853–1856) saw Britain, France, and the Ottoman Empire ally against Russia."
            },
            {
                type: "boolean",
                question: "The Taiping Rebellion was led by a man who claimed to be the brother of Jesus.",
                answer: true,
                explanation: "Hong Xiuquan, leader of the Taiping Rebellion, believed he was the younger brother of Jesus Christ."
            },
            {
                type: "boolean",
                question: "The Battle of Tours in 732 stopped the Mongol advance into Europe.",
                answer: false,
                explanation: "The Battle of Tours halted the Islamic Umayyad advance, not the Mongols."
            },
            {
                type: "boolean",
                question: "The Congress of Vienna aimed to restore the power of Napoleon Bonaparte.",
                answer: false,
                explanation: "The Congress of Vienna (1814–1815) aimed to restore monarchies and balance power after Napoleon’s defeat."
            },
            {
                type: "boolean",
                question: "The Suez Canal was opened in the 19th century and drastically shortened sea travel between Europe and Asia.",
                answer: true,
                explanation: "The Suez Canal opened in 1869, connecting the Mediterranean Sea to the Red Sea."
            },
            {
                type: "boolean",
                question: "The Marshall Plan was a Soviet economic program to rebuild Eastern Europe after World War II.",
                answer: false,
                explanation: "The Marshall Plan was a U.S. initiative to help rebuild Western Europe after WWII."
            },
            {
                type: "boolean",
                question: "The term 'Third Estate' in pre-revolutionary France referred to the clergy.",
                answer: false,
                explanation: "The Third Estate referred to commoners, while clergy were the First Estate."
            },
            {
                type: "boolean",
                question: "The Mayan civilization had a fully phonetic written language.",
                answer: false,
                explanation: "The Mayan script was logosyllabic, not fully phonetic."
            },
            {
                type: "boolean",
                question: "The Thirty Years' War was primarily a conflict between Catholic and Protestant states in the Holy Roman Empire.",
                answer: true,
                explanation: "The Thirty Years’ War (1618–1648) began as a religious conflict within the Holy Roman Empire."
            },
            {
                type: "boolean",
                question: "The Warsaw Pact was formed before NATO.",
                answer: false,
                explanation: "NATO was founded in 1949; the Warsaw Pact followed in 1955 as a Soviet response."
            },
            {
                type: "boolean",
                question: "The Meiji Restoration restored power to the Japanese Emperor and modernized the country.",
                answer: true,
                explanation: "The Meiji Restoration (1868) marked Japan’s transition to a modern industrial state under imperial rule."
            },
            {
                type: "boolean",
                question: "The Rosetta Stone was key in deciphering the Greek language.",
                answer: false,
                explanation: "The Rosetta Stone helped decipher Egyptian hieroglyphs using known Greek as a reference."
            },
            {
                type: "boolean",
                question: "The Treaty of Westphalia established the principle of state sovereignty.",
                answer: true,
                explanation: "The 1648 Treaty of Westphalia ended the Thirty Years' War and introduced the concept of national sovereignty."
            },
            {
                type: "boolean",
                question: "The Spanish Armada successfully invaded England in 1588.",
                answer: false,
                explanation: "The Spanish Armada failed to invade England, suffering a major defeat in 1588."
            },
            //Here starts fill types questions 
            {
                type: "fill",
                question: "The __________ Rebellion in China was led by a man who claimed to be the brother of Jesus Christ.",
                answer: "Taiping",
                explanation: "Hong Xiuquan, leader of the Taiping Rebellion, believed he was the younger brother of Jesus."
            },
            {
                type: "fill",
                question: "The Treaty of __________ in 1648 ended the Thirty Years' War and marked the beginning of modern state sovereignty.",
                answer: "Westphalia",
                explanation: "The Treaty of Westphalia established the concept of state sovereignty in Europe."
            },
            {
                type: "fill",
                question: "The __________ Empire was responsible for the construction of the Hagia Sophia in Constantinople.",
                answer: "Byzantine",
                explanation: "The Hagia Sophia was built during the reign of the Byzantine Emperor Justinian I."
            },
            {
                type: "fill",
                question: "The __________ League was an alliance of Greek city-states led by Athens.",
                answer: "Delian",
                explanation: "The Delian League was formed to defend against Persian threats and was dominated by Athens."
            },
            {
                type: "fill",
                question: "The Great __________ of 1347–1351 killed millions across Europe and Asia.",
                answer: "Plague",
                explanation: "Also known as the Black Death, the plague was one of the deadliest pandemics in history."
            },
            {
                type: "fill",
                question: "The __________ Revolution of 1917 led to the collapse of the Russian Empire and the rise of communism.",
                answer: "Bolshevik",
                explanation: "Led by Lenin, the Bolshevik Revolution resulted in the formation of the Soviet Union."
            },
            {
                type: "fill",
                question: "The Battle of __________ in 1066 marked the Norman conquest of England.",
                answer: "Hastings",
                explanation: "William the Conqueror defeated Harold II at the Battle of Hastings, changing English history."
            },
            {
                type: "fill",
                question: "The __________ Trials were held to prosecute Nazi leaders after World War II.",
                answer: "Nuremberg",
                explanation: "The Nuremberg Trials were military tribunals held for war crimes committed by Nazi officials."
            },
            {
                type: "fill",
                question: "The __________ Canal, completed in 1869, connected the Mediterranean Sea to the Red Sea.",
                answer: "Suez",
                explanation: "The Suez Canal significantly shortened the trade route between Europe and Asia."
            },
            {
                type: "fill",
                question: "The __________ Inquisition was established to combat heresy and enforce Catholic orthodoxy.",
                answer: "Spanish",
                explanation: "The Spanish Inquisition was known for its harsh methods and religious persecution."
            },
            {
                type: "fill",
                question: "The __________ Dynasty built the majority of the Great Wall of China that exists today.",
                answer: "Ming",
                explanation: "The Ming Dynasty reconstructed and extended the Great Wall to defend against northern invasions."
            },
            {
                type: "fill",
                question: "The __________ Empire controlled much of India before British colonization.",
                answer: "Mughal",
                explanation: "The Mughal Empire was a powerful Islamic dynasty that ruled most of India from the 16th to 19th centuries."
            },
            {
                type: "fill",
                question: "The __________ Letter by Balfour expressed British support for a Jewish homeland in Palestine.",
                answer: "Balfour",
                explanation: "The Balfour Declaration (1917) supported the establishment of a Jewish state in Palestine."
            },
            {
                type: "fill",
                question: "The Congress of __________ in 1815 redrew Europe's borders after the defeat of Napoleon.",
                answer: "Vienna",
                explanation: "The Congress of Vienna aimed to restore the balance of power in post-Napoleonic Europe."
            },
            {
                type: "fill",
                question: "The __________ Revolution in 1789 overthrew the monarchy and led to radical social change in France.",
                answer: "French",
                explanation: "The French Revolution dramatically changed the structure of French society and governance."
            },
            {
                type: "fill",
                question: "The __________ Empire was known for its capital city of Tenochtitlán and practice of human sacrifice.",
                answer: "Aztec",
                explanation: "The Aztecs built a powerful empire in central Mexico before being conquered by the Spanish."
            },
            {
                type: "fill",
                question: "The __________ War (1853–1856) was fought primarily on the Crimean Peninsula.",
                answer: "Crimean",
                explanation: "The Crimean War involved Britain, France, and the Ottoman Empire fighting against Russia."
            },
            {
                type: "fill",
                question: "The __________ Curtain symbolized the division between Eastern and Western Europe during the Cold War.",
                answer: "Iron",
                explanation: "The term 'Iron Curtain' was coined by Churchill to describe Soviet-controlled Eastern Europe."
            },
            {
                type: "fill",
                question: "The __________ Empire was known for its road network and engineering across Europe and the Mediterranean.",
                answer: "Roman",
                explanation: "The Roman Empire was a powerful ancient civilization known for its infrastructure and governance."
            },
            {
                type: "fill",
                question: "The Peace of __________ in 1763 ended the Seven Years' War and reshaped colonial empires.",
                answer: "Paris",
                explanation: "The Treaty of Paris 1763 ended the Seven Years' War and significantly changed colonial holdings."
            }                       
            //Add more hard history questions here...
        ]        
    },

    geography: {
        easy: [
            {
                type: "multiple",
                question: "What is the largest continent by area?",
                options: ["Africa", "Asia", "Europe", "North America"],
                answer: "Asia",
                explanation: "Asia is the largest continent on Earth by both area and population."
            },
            {
                type: "multiple",
                question: "Which ocean is the largest?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                answer: "Pacific Ocean",
                explanation: "The Pacific Ocean is the largest and deepest ocean on Earth."
            },
            {
                type: "multiple",
                question: "Which country is shaped like a boot?",
                options: ["Brazil", "Italy", "India", "Australia"],
                answer: "Italy",
                explanation: "Italy is famously shaped like a high-heeled boot."
            },
            {
                type: "multiple",
                question: "Mount Everest is located in which mountain range?",
                options: ["Andes", "Rockies", "Himalayas", "Alps"],
                answer: "Himalayas",
                explanation: "Mount Everest is the highest mountain in the world and is located in the Himalayas."
            },
            {
                type: "multiple",
                question: "What is the capital of France?",
                options: ["Madrid", "Berlin", "Paris", "Rome"],
                answer: "Paris",
                explanation: "Paris is the capital and largest city of France."
            },
            {
                type: "multiple",
                question: "Which river is the longest in the world?",
                options: ["Amazon", "Yangtze", "Mississippi", "Nile"],
                answer: "Nile",
                explanation: "The Nile River in Africa is widely considered the longest river in the world."
            },
            {
                type: "multiple",
                question: "Which desert is the largest in the world?",
                options: ["Sahara", "Gobi", "Kalahari", "Atacama"],
                answer: "Sahara",
                explanation: "The Sahara is the largest hot desert in the world, located in North Africa."
            },
            {
                type: "multiple",
                question: "Which country is known for the Great Barrier Reef?",
                options: ["South Africa", "Australia", "Indonesia", "Mexico"],
                answer: "Australia",
                explanation: "Australia is home to the Great Barrier Reef, the world’s largest coral reef system."
            },
            {
                type: "multiple",
                question: "Which country has the most people?",
                options: ["India", "USA", "China", "Indonesia"],
                answer: "China",
                explanation: "China currently has the largest population in the world."
            },
            {
                type: "multiple",
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Malta", "Vatican City", "San Marino"],
                answer: "Vatican City",
                explanation: "Vatican City is the smallest country in the world by both area and population."
            },
            {
                type: "multiple",
                question: "Which continent is the Sahara Desert located in?",
                options: ["Asia", "Africa", "Australia", "South America"],
                answer: "Africa",
                explanation: "The Sahara Desert spans many countries in Northern Africa."
            },
            {
                type: "multiple",
                question: "Which direction does the sun rise from?",
                options: ["West", "North", "South", "East"],
                answer: "East",
                explanation: "The sun always rises in the east and sets in the west."
            },
            {
                type: "multiple",
                question: "Which is the tallest mountain in the world?",
                options: ["Mount Fuji", "K2", "Mount Everest", "Denali"],
                answer: "Mount Everest",
                explanation: "Mount Everest is the tallest mountain in the world above sea level."
            },
            {
                type: "multiple",
                question: "Which U.S. state is the largest by area?",
                options: ["Texas", "California", "Alaska", "Montana"],
                answer: "Alaska",
                explanation: "Alaska is the largest U.S. state by area."
            },
            {
                type: "multiple",
                question: "What is the capital of Japan?",
                options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
                answer: "Tokyo",
                explanation: "Tokyo is the capital city of Japan and one of the largest cities in the world."
            },
            {
                type: "multiple",
                question: "What is the main language spoken in Brazil?",
                options: ["Spanish", "Portuguese", "English", "French"],
                answer: "Portuguese",
                explanation: "Portuguese is the official and most widely spoken language in Brazil."
            },
            {
                type: "multiple",
                question: "Which country is famous for pyramids?",
                options: ["India", "Mexico", "Egypt", "China"],
                answer: "Egypt",
                explanation: "Egypt is famous for its ancient pyramids, especially the Pyramids of Giza."
            },
            {
                type: "multiple",
                question: "Which continent has the most countries?",
                options: ["Asia", "Europe", "Africa", "South America"],
                answer: "Africa",
                explanation: "Africa has 54 recognized countries, the most of any continent."
            },
            {
                type: "multiple",
                question: "Which body of water separates Europe and Africa?",
                options: ["Red Sea", "Atlantic Ocean", "Mediterranean Sea", "Arabian Sea"],
                answer: "Mediterranean Sea",
                explanation: "The Mediterranean Sea lies between Southern Europe and Northern Africa."
            },
            {
                type: "multiple",
                question: "Which pole is colder: North or South?",
                options: ["North Pole", "South Pole", "Both are equal", "Depends on season"],
                answer: "South Pole",
                explanation: "The South Pole, located in Antarctica, is colder than the North Pole."
            },
            //Here starts boolean types questions
            {
                type: "boolean",
                question: "The Amazon River is the longest river in the world.",
                answer: false,
                explanation: "The Nile River is generally considered the longest river in the world."
            },
            {
                type: "boolean",
                question: "Mount Everest is located in the Himalayas.",
                answer: true,
                explanation: "Mount Everest lies on the border of Nepal and Tibet in the Himalayas."
            },
            {
                type: "boolean",
                question: "Africa is the largest continent by area.",
                answer: false,
                explanation: "Asia is the largest continent by area."
            },
            {
                type: "boolean",
                question: "The Sahara Desert is located in South America.",
                answer: false,
                explanation: "The Sahara Desert is located in northern Africa."
            },
            {
                type: "boolean",
                question: "Australia is both a country and a continent.",
                answer: true,
                explanation: "Australia is the only country that occupies an entire continent."
            },
            {
                type: "boolean",
                question: "The equator passes through the continent of Africa.",
                answer: true,
                explanation: "The equator crosses several African countries."
            },
            {
                type: "boolean",
                question: "There are five oceans on Earth.",
                answer: true,
                explanation: "The five oceans are Pacific, Atlantic, Indian, Southern, and Arctic."
            },
            {
                type: "boolean",
                question: "Antarctica has no permanent human population.",
                answer: true,
                explanation: "Only scientists and researchers temporarily reside in Antarctica."
            },
            {
                type: "boolean",
                question: "The capital of Japan is Shanghai.",
                answer: false,
                explanation: "The capital of Japan is Tokyo. Shanghai is in China."
            },
            {
                type: "boolean",
                question: "The Pacific Ocean is the smallest ocean in the world.",
                answer: false,
                explanation: "The Arctic Ocean is the smallest ocean."
            },
            {
                type: "boolean",
                question: "The Great Wall of China can be seen from the Moon with the naked eye.",
                answer: false,
                explanation: "This is a myth; the wall is not visible from the Moon unaided."
            },
            {
                type: "boolean",
                question: "Greenland is the largest island in the world.",
                answer: true,
                explanation: "Greenland is the largest island that is not a continent."
            },
            {
                type: "boolean",
                question: "The United States has 50 states.",
                answer: true,
                explanation: "The U.S. is composed of 50 states."
            },
            {
                type: "boolean",
                question: "The continent of Europe lies entirely in the Northern Hemisphere.",
                answer: true,
                explanation: "Europe is located entirely in the Northern Hemisphere."
            },
            {
                type: "boolean",
                question: "The Mediterranean Sea separates Europe from Africa.",
                answer: true,
                explanation: "The Mediterranean Sea lies between southern Europe and northern Africa."
            },
            {
                type: "boolean",
                question: "Brazil is in the continent of Africa.",
                answer: false,
                explanation: "Brazil is located in South America."
            },
            {
                type: "boolean",
                question: "The Dead Sea is below sea level.",
                answer: true,
                explanation: "The Dead Sea's surface is the lowest point on land below sea level."
            },
            {
                type: "boolean",
                question: "Russia is the largest country in the world by area.",
                answer: true,
                explanation: "Russia is the largest country by land area, spanning Europe and Asia."
            },
            {
                type: "boolean",
                question: "The Mississippi River flows into the Pacific Ocean.",
                answer: false,
                explanation: "The Mississippi River flows into the Gulf of Mexico."
            },
            {
                type: "boolean",
                question: "Egypt is located in both Africa and Asia.",
                answer: false,
                explanation: "Egypt is in Africa, although the Sinai Peninsula lies in Asia."
            },
            //Here starts filll type questions
            {
                type: "fill",
                question: "The __________ River is the longest river in the world.",
                answer: "Nile",
                explanation: "The Nile River is widely considered the longest river on Earth."
            },
            {
                type: "fill",
                question: "The capital city of France is __________.",
                answer: "Paris",
                explanation: "Paris is the capital and largest city of France."
            },
            {
                type: "fill",
                question: "__________ is the smallest continent by land area.",
                answer: "Australia",
                explanation: "Australia is the smallest continent by area."
            },
            {
                type: "fill",
                question: "The __________ Ocean is the largest ocean on Earth.",
                answer: "Pacific",
                explanation: "The Pacific Ocean is the largest ocean by surface area."
            },
            {
                type: "fill",
                question: "__________ is the highest mountain in the world.",
                answer: "Mount Everest",
                explanation: "Mount Everest, located in the Himalayas, is the highest point on Earth."
            },
            {
                type: "fill",
                question: "__________ is the longest mountain range in the world.",
                answer: "Andes",
                explanation: "The Andes Mountain Range, located in South America, is the longest continental mountain range."
            },
            {
                type: "fill",
                question: "__________ is the largest country in the world by area.",
                answer: "Russia",
                explanation: "Russia spans both Europe and Asia and is the largest country by land area."
            },
            {
                type: "fill",
                question: "The __________ is the imaginary line that divides the Earth into the Northern and Southern Hemispheres.",
                answer: "Equator",
                explanation: "The Equator is the 0° latitude line that divides the Earth into two hemispheres."
            },
            {
                type: "fill",
                question: "The __________ Desert is the largest hot desert in the world.",
                answer: "Sahara",
                explanation: "The Sahara Desert is located in northern Africa and is the world's largest hot desert."
            },
            {
                type: "fill",
                question: "__________ is the capital city of Japan.",
                answer: "Tokyo",
                explanation: "Tokyo is the capital and largest city of Japan."
            },
            {
                type: "fill",
                question: "The __________ Sea is the largest inland body of water by area.",
                answer: "Caspian",
                explanation: "The Caspian Sea, bordered by five countries, is the largest enclosed inland body of water."
            },
            {
                type: "fill",
                question: "The __________ is the largest island in the world.",
                answer: "Greenland",
                explanation: "Greenland is the world's largest island, though it is part of Denmark."
            },
            {
                type: "fill",
                question: "__________ is the smallest country in the world.",
                answer: "Vatican City",
                explanation: "Vatican City, an independent city-state, is the smallest country in terms of land area."
            },
            {
                type: "fill",
                question: "The __________ is a region known for being the driest place on Earth.",
                answer: "Atacama Desert",
                explanation: "The Atacama Desert, located in Chile, is considered the driest desert on Earth."
            },
            {
                type: "fill",
                question: "__________ is the longest river in South America.",
                answer: "Amazon",
                explanation: "The Amazon River is the longest river in South America, flowing primarily through Brazil."
            },
            {
                type: "fill",
                question: "The __________ Ocean is located between Africa and the Americas.",
                answer: "Atlantic",
                explanation: "The Atlantic Ocean separates the continents of Africa and the Americas."
            },
            {
                type: "fill",
                question: "__________ is the largest country in Africa by area.",
                answer: "Algeria",
                explanation: "Algeria is the largest country in Africa by land area."
            },
            {
                type: "fill",
                question: "__________ is the largest city in the world by population.",
                answer: "Tokyo",
                explanation: "Tokyo is the most populous city in the world with a population exceeding 37 million."
            },
            {
                type: "fill",
                question: "__________ is the only country to have a coastline on both the Atlantic and Pacific Oceans.",
                answer: "Panama",
                explanation: "Panama connects the Atlantic and Pacific Oceans via the Panama Canal."
            },
            {
                type: "fill",
                question: "The __________ is a mountain range in the United States that stretches from New Mexico to Canada.",
                answer: "Rocky Mountains",
                explanation: "The Rocky Mountains are a major mountain range in western North America."
            }
            //Add more easy geography questions here...
        ],
        medium: [
            {
                type: "multiple",
                question: "Which line divides the Earth into the Northern and Southern Hemispheres?",
                options: ["Tropic of Cancer", "Equator", "Prime Meridian", "Tropic of Capricorn"],
                answer: "Equator",
                explanation: "The Equator is an imaginary line around the middle of the Earth that divides it into the Northern and Southern Hemispheres."
            },
            {
                type: "multiple",
                question: "Which river flows through the Grand Canyon?",
                options: ["Mississippi River", "Colorado River", "Rio Grande", "Columbia River"],
                answer: "Colorado River",
                explanation: "The Colorado River carved the Grand Canyon over millions of years."
            },
            {
                type: "multiple",
                question: "Which African country has the highest population?",
                options: ["South Africa", "Egypt", "Nigeria", "Kenya"],
                answer: "Nigeria",
                explanation: "Nigeria is the most populous country in Africa with over 200 million people."
            },
            {
                type: "multiple",
                question: "What is the capital city of Canada?",
                options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                answer: "Ottawa",
                explanation: "Ottawa is the capital of Canada, though Toronto is the largest city."
            },
            {
                type: "multiple",
                question: "What is the name of the sea bordered by Jordan to the east and Israel to the west?",
                options: ["Dead Sea", "Red Sea", "Caspian Sea", "Black Sea"],
                answer: "Dead Sea",
                explanation: "The Dead Sea is one of the saltiest bodies of water on Earth and lies between Jordan and Israel."
            },
            {
                type: "multiple",
                question: "Which continent is both a country and a continent?",
                options: ["Africa", "Australia", "Europe", "South America"],
                answer: "Australia",
                explanation: "Australia is both a country and a continent, surrounded entirely by water."
            },
            {
                type: "multiple",
                question: "Which U.S. state has the most active volcanoes?",
                options: ["California", "Alaska", "Hawaii", "Washington"],
                answer: "Alaska",
                explanation: "Alaska has the most active volcanoes of any U.S. state due to its location on the Pacific Ring of Fire."
            },
            {
                type: "multiple",
                question: "Which city is known as the 'City of Canals'?",
                options: ["Amsterdam", "Bangkok", "Venice", "Copenhagen"],
                answer: "Venice",
                explanation: "Venice, Italy, is famous for its network of canals and gondola rides."
            },
            {
                type: "multiple",
                question: "Which mountain is located on the border between France and Italy?",
                options: ["Matterhorn", "Mont Blanc", "Elbrus", "Eiger"],
                answer: "Mont Blanc",
                explanation: "Mont Blanc is the highest mountain in the Alps and lies on the France-Italy border."
            },
            {
                type: "multiple",
                question: "Which country has the most islands in the world?",
                options: ["Indonesia", "Philippines", "Sweden", "Canada"],
                answer: "Sweden",
                explanation: "Sweden has over 260,000 islands, more than any other country in the world."
            },
            {
                type: "multiple",
                question: "What is the name of the tectonic plate that includes most of the Pacific Ocean?",
                options: ["Nazca Plate", "Eurasian Plate", "Pacific Plate", "Indo-Australian Plate"],
                answer: "Pacific Plate",
                explanation: "The Pacific Plate is the largest tectonic plate and underlies much of the Pacific Ocean."
            },
            {
                type: "multiple",
                question: "Which capital city is the highest above sea level?",
                options: ["La Paz", "Kathmandu", "Quito", "Thimphu"],
                answer: "La Paz",
                explanation: "La Paz, Bolivia, is the highest capital city in the world, sitting over 3,600 meters above sea level."
            },
            {
                type: "multiple",
                question: "What is the longest river in Europe?",
                options: ["Danube", "Volga", "Rhine", "Thames"],
                answer: "Volga",
                explanation: "The Volga River is the longest river in Europe and flows through central Russia."
            },
            {
                type: "multiple",
                question: "Which country does NOT border the Mediterranean Sea?",
                options: ["Spain", "Turkey", "Austria", "Lebanon"],
                answer: "Austria",
                explanation: "Austria is landlocked and does not border the Mediterranean Sea."
            },
            {
                type: "multiple",
                question: "Which South American country is landlocked?",
                options: ["Chile", "Paraguay", "Uruguay", "Ecuador"],
                answer: "Paraguay",
                explanation: "Paraguay is one of two landlocked countries in South America, the other being Bolivia."
            },
            {
                type: "multiple",
                question: "Which Asian country has the most time zones?",
                options: ["India", "China", "Russia", "Indonesia"],
                answer: "Russia",
                explanation: "Russia spans 11 time zones, the most of any country in the world."
            },
            {
                type: "multiple",
                question: "Which lake is the deepest in the world?",
                options: ["Lake Superior", "Lake Tanganyika", "Lake Baikal", "Great Slave Lake"],
                answer: "Lake Baikal",
                explanation: "Lake Baikal in Siberia is the deepest freshwater lake in the world."
            },
            {
                type: "multiple",
                question: "Which U.S. state shares a border with only one other state?",
                options: ["Maine", "Florida", "Washington", "Rhode Island"],
                answer: "Maine",
                explanation: "Maine only borders New Hampshire and the Canadian provinces of Quebec and New Brunswick."
            },
            {
                type: "multiple",
                question: "Which European river flows through the most countries?",
                options: ["Seine", "Danube", "Rhine", "Loire"],
                answer: "Danube",
                explanation: "The Danube River flows through 10 countries, more than any other river in Europe."
            },
            {
                type: "multiple",
                question: "Which Asian country has the most volcanoes?",
                options: ["Japan", "Philippines", "Indonesia", "India"],
                answer: "Indonesia",
                explanation: "Indonesia has more active volcanoes than any other country, part of the Pacific Ring of Fire."
            },
            //Here starts boolean type questions
            {
                type: "boolean",
                question: "The Amazon Rainforest is located in Africa.",
                answer: false,
                explanation: "The Amazon Rainforest is located in South America, primarily in Brazil."
            },
            {
                type: "boolean",
                question: "The Dead Sea is the lowest point on Earth.",
                answer: true,
                explanation: "The Dead Sea, located between Jordan and Israel, is the Earth's lowest exposed point on land."
            },
            {
                type: "boolean",
                question: "Mount Kilimanjaro is located in Kenya.",
                answer: false,
                explanation: "Mount Kilimanjaro is located in Tanzania, not Kenya."
            },
            {
                type: "boolean",
                question: "The Sahara Desert is located in Australia.",
                answer: false,
                explanation: "The Sahara Desert is located in North Africa, not Australia."
            },
            {
                type: "boolean",
                question: "The Mediterranean Sea is connected to the Atlantic Ocean through the Strait of Gibraltar.",
                answer: true,
                explanation: "The Strait of Gibraltar links the Mediterranean Sea with the Atlantic Ocean."
            },
            {
                type: "boolean",
                question: "Australia is both a country and a continent.",
                answer: true,
                explanation: "Australia is both a country and a continent, being the only country that covers an entire continent."
            },
            {
                type: "boolean",
                question: "The Great Barrier Reef is located off the coast of South Africa.",
                answer: false,
                explanation: "The Great Barrier Reef is located off the coast of Queensland, Australia, not South Africa."
            },
            {
                type: "boolean",
                question: "The Nile River flows through Egypt, Sudan, and Uganda.",
                answer: true,
                explanation: "The Nile River flows through several countries, including Egypt, Sudan, and Uganda."
            },
            {
                type: "boolean",
                question: "Antarctica is the driest continent on Earth.",
                answer: true,
                explanation: "Antarctica is considered the driest continent, with some areas receiving no precipitation for years."
            },
            {
                type: "boolean",
                question: "The Amazon River is the longest river in the world.",
                answer: false,
                explanation: "While the Amazon River is the largest by discharge, the Nile River is traditionally considered the longest."
            },
            {
                type: "boolean",
                question: "The Himalayas are the youngest mountain range in the world.",
                answer: true,
                explanation: "The Himalayas are relatively young, having formed around 50 million years ago."
            },
            {
                type: "boolean",
                question: "The Ganges River flows through China.",
                answer: false,
                explanation: "The Ganges River primarily flows through India and Bangladesh, not China."
            },
            {
                type: "boolean",
                question: "The Grand Canyon is located in the United States.",
                answer: true,
                explanation: "The Grand Canyon is a famous geological formation located in the state of Arizona, USA."
            },
            {
                type: "boolean",
                question: "Greenland is an independent country.",
                answer: false,
                explanation: "Greenland is an autonomous territory of Denmark, not an independent country."
            },
            {
                type: "boolean",
                question: "The Alps mountain range is located in North America.",
                answer: false,
                explanation: "The Alps are located in Europe, not North America."
            },
            {
                type: "boolean",
                question: "The Taj Mahal is located in India.",
                answer: true,
                explanation: "The Taj Mahal, a famous landmark, is located in Agra, India."
            },
            {
                type: "boolean",
                question: "Lake Baikal is the deepest freshwater lake in the world.",
                answer: true,
                explanation: "Lake Baikal, located in Siberia, Russia, is the deepest freshwater lake in the world."
            },
            {
                type: "boolean",
                question: "Iceland is located in the Arctic Ocean.",
                answer: false,
                explanation: "Iceland is located in the North Atlantic Ocean, not the Arctic Ocean."
            },
            {
                type: "boolean",
                question: "Japan is made up of four major islands.",
                answer: true,
                explanation: "Japan consists of four main islands: Honshu, Hokkaido, Kyushu, and Shikoku."
            },
            {
                type: "boolean",
                question: "The Eiffel Tower is located in London.",
                answer: false,
                explanation: "The Eiffel Tower is located in Paris, France, not London."
            },
            //Here starts fill type questions
            {
                type: "fill",
                question: "The longest river in the world is the __________.",
                answer: "Nile",
                explanation: "The Nile River is traditionally considered the longest river in the world, flowing through northeastern Africa."
            },
            {
                type: "fill",
                question: "The Great Barrier Reef is located off the coast of __________.",
                answer: "Australia",
                explanation: "The Great Barrier Reef is located in the Coral Sea off the coast of Queensland, Australia."
            },
            {
                type: "fill",
                question: "The largest desert in the world is the __________ Desert.",
                answer: "Sahara",
                explanation: "The Sahara Desert is the largest hot desert, located in North Africa."
            },
            {
                type: "fill",
                question: "Mount Everest, the highest peak in the world, is located in the __________ mountain range.",
                answer: "Himalayas",
                explanation: "Mount Everest is located in the Himalayas, on the border between Nepal and China (Tibet)."
            },
            {
                type: "fill",
                question: "The country known as the 'Land of the Rising Sun' is __________.",
                answer: "Japan",
                explanation: "Japan is often called the 'Land of the Rising Sun' because it is one of the easternmost countries in Asia."
            },
            {
                type: "fill",
                question: "The country with the largest population in the world is __________.",
                answer: "China",
                explanation: "China has the largest population in the world, with over 1.4 billion people."
            },
            {
                type: "fill",
                question: "The longest mountain range in the world is the __________.",
                answer: "Andes",
                explanation: "The Andes mountain range stretches along the western coast of South America, making it the longest continental mountain range."
            },
            {
                type: "fill",
                question: "The largest ocean on Earth is the __________ Ocean.",
                answer: "Pacific",
                explanation: "The Pacific Ocean is the largest and deepest ocean on Earth, covering a third of the Earth's surface."
            },
            {
                type: "fill",
                question: "The continent known as the 'Dark Continent' is __________.",
                answer: "Africa",
                explanation: "Africa was historically referred to as the 'Dark Continent' due to its unexplored areas during the 19th century."
            },
            {
                type: "fill",
                question: "The capital city of France is __________.",
                answer: "Paris",
                explanation: "Paris is the capital and largest city of France, known for its cultural and historical landmarks."
            },
            {
                type: "fill",
                question: "The world's largest island is __________.",
                answer: "Greenland",
                explanation: "Greenland is the largest island in the world by area, although it is considered part of Denmark."
            },
            {
                type: "fill",
                question: "The country known for its pyramids and the Sphinx is __________.",
                answer: "Egypt",
                explanation: "Egypt is famous for its ancient pyramids and the Great Sphinx, located near the Nile River."
            },
            {
                type: "fill",
                question: "The famous mountain, known as the 'Matterhorn,' is located in __________.",
                answer: "Switzerland",
                explanation: "The Matterhorn is one of the most iconic mountains in the Swiss Alps, located on the border between Switzerland and Italy."
            },
            {
                type: "fill",
                question: "The only continent with no active volcanoes is __________.",
                answer: "Australia",
                explanation: "Australia is the only continent that does not have active volcanoes, although it has some extinct volcanoes."
            },
            {
                type: "fill",
                question: "The Great Wall of China was built to protect against invasions from the __________.",
                answer: "Mongols",
                explanation: "The Great Wall of China was constructed to protect China from invasions, particularly by the Mongols."
            },
            {
                type: "fill",
                question: "The largest country by area in the world is __________.",
                answer: "Russia",
                explanation: "Russia is the largest country by land area, covering over 17 million square kilometers."
            },
            {
                type: "fill",
                question: "The country known for the ancient city of Petra is __________.",
                answer: "Jordan",
                explanation: "Petra is an ancient archaeological site in Jordan, famous for its rock-cut architecture and water conduit system."
            },
            {
                type: "fill",
                question: "The highest waterfall in the world is __________ Falls.",
                answer: "Angel",
                explanation: "Angel Falls in Venezuela is the highest uninterrupted waterfall in the world, with a height of 979 meters."
            },
            {
                type: "fill",
                question: "The river that forms part of the border between the United States and Mexico is the __________ River.",
                answer: "Rio Grande",
                explanation: "The Rio Grande forms part of the border between the United States and Mexico, flowing from Colorado to the Gulf of Mexico."
            },
            {
                type: "fill",
                question: "The body of water separating Saudi Arabia and Africa is the __________ Sea.",
                answer: "Red",
                explanation: "The Red Sea lies between Saudi Arabia and Africa, providing a vital shipping route between Europe and Asia."
            }
            //Add more medium geography questions here...
        ],
        hard: [
            {
                type: "multiple",
                question: "Which desert is the driest non-polar desert in the world?",
                options: ["Sahara", "Gobi", "Atacama", "Kalahari"],
                answer: "Atacama",
                explanation: "The Atacama Desert in Chile is the driest non-polar desert, with some areas receiving virtually no rain."
            },
            {
                type: "multiple",
                question: "Which country has the longest total coastline in the world?",
                options: ["Australia", "Russia", "Indonesia", "Canada"],
                answer: "Canada",
                explanation: "Canada has the world's longest coastline, stretching over 202,000 kilometers."
            },
            {
                type: "multiple",
                question: "Which country contains the most lakes?",
                options: ["USA", "Finland", "Russia", "Canada"],
                answer: "Canada",
                explanation: "Canada is home to more than half of the world’s natural lakes."
            },
            {
                type: "multiple",
                question: "Which island country lies off the southeastern coast of Africa?",
                options: ["Sri Lanka", "Borneo", "Madagascar", "New Guinea"],
                answer: "Madagascar",
                explanation: "Madagascar is the fourth largest island in the world and is located off the southeastern coast of Africa."
            },
            {
                type: "multiple",
                question: "Which U.S. state is farthest west?",
                options: ["Alaska", "Hawaii", "California", "Washington"],
                answer: "Alaska",
                explanation: "Alaska extends farther west than Hawaii due to the Aleutian Islands crossing the 180° longitude line."
            },
            {
                type: "multiple",
                question: "Which country has land in both Europe and Asia and is considered transcontinental?",
                options: ["Kazakhstan", "Azerbaijan", "Turkey", "All of the above"],
                answer: "All of the above",
                explanation: "Turkey, Kazakhstan, and Azerbaijan are all transcontinental countries with land in both Europe and Asia."
            },
            {
                type: "multiple",
                question: "Which river is the primary water source for Egypt and Sudan?",
                options: ["Niger", "Zambezi", "Congo", "Nile"],
                answer: "Nile",
                explanation: "The Nile River flows through Egypt and Sudan and has historically supported civilizations in the region."
            },
            {
                type: "multiple",
                question: "Which mountain range separates Europe from Asia?",
                options: ["Andes", "Rockies", "Ural", "Alps"],
                answer: "Ural",
                explanation: "The Ural Mountains are considered the traditional boundary between Europe and Asia."
            },
            {
                type: "multiple",
                question: "Which capital city is located closest to the equator?",
                options: ["Quito", "Nairobi", "Jakarta", "Kampala"],
                answer: "Quito",
                explanation: "Quito, Ecuador, lies just 25 km south of the equator, making it the closest capital to the equator."
            },
            {
                type: "multiple",
                question: "Which country has the highest average elevation?",
                options: ["Nepal", "Tajikistan", "Bhutan", "Lesotho"],
                answer: "Lesotho",
                explanation: "Lesotho, located entirely above 1,000 meters, is the highest country by average elevation."
            },
            {
                type: "multiple",
                question: "Which is the largest island in the Mediterranean Sea?",
                options: ["Sicily", "Sardinia", "Cyprus", "Crete"],
                answer: "Sicily",
                explanation: "Sicily, a region of Italy, is the largest island in the Mediterranean by area."
            },
            {
                type: "multiple",
                question: "Which two continents are entirely in the Southern Hemisphere?",
                options: ["Australia and Antarctica", "South America and Africa", "Africa and Oceania", "Asia and Australia"],
                answer: "Australia and Antarctica",
                explanation: "Only Australia and Antarctica are completely located in the Southern Hemisphere."
            },
            {
                type: "multiple",
                question: "Which of these rivers flows northward?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                answer: "Nile",
                explanation: "The Nile River flows north from central Africa to the Mediterranean Sea."
            },
            {
                type: "multiple",
                question: "Which ocean current is responsible for Europe’s mild climate?",
                options: ["California Current", "Canary Current", "Gulf Stream", "Kuroshio Current"],
                answer: "Gulf Stream",
                explanation: "The Gulf Stream brings warm water from the Gulf of Mexico, moderating the climate of Western Europe."
            },
            {
                type: "multiple",
                question: "Which U.S. state has the lowest high point?",
                options: ["Florida", "Delaware", "Louisiana", "Rhode Island"],
                answer: "Florida",
                explanation: "Florida's highest natural point is Britton Hill at just 345 feet (105 meters)."
            },
            {
                type: "multiple",
                question: "Which country is home to the world’s largest salt flat?",
                options: ["Chile", "Argentina", "Bolivia", "Peru"],
                answer: "Bolivia",
                explanation: "The Salar de Uyuni in Bolivia is the largest salt flat on Earth."
            },
            {
                type: "multiple",
                question: "Which African lake is the source of the Nile River?",
                options: ["Lake Victoria", "Lake Tanganyika", "Lake Albert", "Lake Malawi"],
                answer: "Lake Victoria",
                explanation: "Lake Victoria is widely considered the primary source of the White Nile."
            },
            {
                type: "multiple",
                question: "Which strait separates Asia from North America?",
                options: ["Bering Strait", "Dover Strait", "Bosporus Strait", "Magellan Strait"],
                answer: "Bering Strait",
                explanation: "The Bering Strait separates eastern Russia (Asia) from Alaska (North America)."
            },
            {
                type: "multiple",
                question: "Which European country has the most neighbors?",
                options: ["Germany", "France", "Austria", "Russia"],
                answer: "Germany",
                explanation: "Germany shares borders with 9 countries, the most in Europe."
            },
            {
                type: "multiple",
                question: "Which is the only continent without an active volcano?",
                options: ["Europe", "Australia", "Africa", "Antarctica"],
                answer: "Australia",
                explanation: "Australia does not currently have any active volcanoes, though extinct ones exist."
            },
            //Here starts boolean type questions
            {
                type: "boolean",
                question: "The Amazon River is the longest river in the world.",
                answer: false,
                explanation: "While the Amazon River is the largest by discharge, the Nile River is considered the longest."
            },
            {
                type: "boolean",
                question: "Antarctica is the driest continent on Earth.",
                answer: true,
                explanation: "Antarctica is the driest, coldest, and windiest continent, with very little precipitation."
            },
            {
                type: "boolean",
                question: "The Dead Sea is the lowest point on Earth's surface.",
                answer: true,
                explanation: "The Dead Sea, located between Jordan and Israel, is the lowest point on Earth at 430 meters below sea level."
            },
            {
                type: "boolean",
                question: "Mount Kilimanjaro is located in Kenya.",
                answer: false,
                explanation: "Mount Kilimanjaro is located in Tanzania, near the border with Kenya."
            },
            {
                type: "boolean",
                question: "Lake Baikal is the deepest lake in the world.",
                answer: true,
                explanation: "Lake Baikal, located in Siberia, Russia, is the deepest lake in the world with a depth of 1,642 meters."
            },
            {
                type: "boolean",
                question: "The Gobi Desert is located in China and Mongolia.",
                answer: true,
                explanation: "The Gobi Desert stretches across northern China and southern Mongolia."
            },
            {
                type: "boolean",
                question: "The Danube River flows through only one country in Europe.",
                answer: false,
                explanation: "The Danube River flows through multiple countries, including Germany, Austria, Hungary, and several others."
            },
            {
                type: "boolean",
                question: "The Sahara Desert is located entirely in Africa.",
                answer: false,
                explanation: "The Sahara Desert spans multiple countries across North Africa and also reaches into parts of the Middle East."
            },
            {
                type: "boolean",
                question: "The Great Wall of China was primarily built for military defense.",
                answer: true,
                explanation: "The Great Wall of China was constructed to protect Chinese states and empires from invasions by various nomadic groups."
            },
            {
                type: "boolean",
                question: "Australia is both a country and a continent.",
                answer: true,
                explanation: "Australia is unique in that it is both a country and a continent, the smallest continent on Earth."
            },
            {
                type: "boolean",
                question: "Iceland has more volcanoes than any other European country.",
                answer: true,
                explanation: "Iceland is known for its volcanic activity, as it lies on the Mid-Atlantic Ridge, where tectonic plates meet."
            },
            {
                type: "boolean",
                question: "The United Kingdom includes the entire island of Great Britain.",
                answer: false,
                explanation: "The United Kingdom includes England, Scotland, Wales, and Northern Ireland. Great Britain refers only to the island containing England, Scotland, and Wales."
            },
            {
                type: "boolean",
                question: "The Himalayas are located in North America.",
                answer: false,
                explanation: "The Himalayas are located in Asia, primarily in India, Nepal, China, and Bhutan."
            },
            {
                type: "boolean",
                question: "The Mississippi River flows into the Atlantic Ocean.",
                answer: false,
                explanation: "The Mississippi River flows into the Gulf of Mexico, not the Atlantic Ocean."
            },
            {
                type: "boolean",
                question: "Mount Fuji is an active volcano in Japan.",
                answer: true,
                explanation: "Mount Fuji is an active stratovolcano located on Honshu Island in Japan, although it last erupted in 1707."
            },
            {
                type: "boolean",
                question: "The Rocky Mountains extend from Canada to Mexico.",
                answer: true,
                explanation: "The Rocky Mountains stretch from northern Canada down to New Mexico, USA."
            },
            {
                type: "boolean",
                question: "The Andes is the longest mountain range in the world.",
                answer: true,
                explanation: "The Andes is the longest continental mountain range, stretching along the western coast of South America."
            },
            {
                type: "boolean",
                question: "The Nile River flows south to north.",
                answer: true,
                explanation: "The Nile River flows from its sources in East Africa northward to the Mediterranean Sea."
            },
            {
                type: "boolean",
                question: "The Arctic Ocean is the smallest of the world's oceans.",
                answer: true,
                explanation: "The Arctic Ocean is the smallest and shallowest of the world's five oceans."
            },
            {
                type: "boolean",
                question: "Greenland is considered part of North America.",
                answer: true,
                explanation: "Geographically, Greenland is part of North America, but politically it is an autonomous territory of Denmark."
            },
            //Here starts fill type questions
            {
                type: "fill",
                question: "The __________ is the longest mountain range in the world.",
                answer: "Andes",
                explanation: "The Andes stretch along the western coast of South America and are the longest continental mountain range."
            },
            {
                type: "fill",
                question: "The __________ River is the longest river in Europe.",
                answer: "Volga",
                explanation: "The Volga River, located in Russia, is the longest river in Europe, with a length of about 3,530 kilometers."
            },
            {
                type: "fill",
                question: "The __________ Desert is the driest place on Earth.",
                answer: "Atacama",
                explanation: "The Atacama Desert, located in South America, is known as the driest desert on Earth, with some areas receiving little to no rainfall."
            },
            {
                type: "fill",
                question: "The __________ Sea is the saltiest body of water in the world.",
                answer: "Dead",
                explanation: "The Dead Sea, located between Israel and Jordan, is the saltiest body of water in the world, with a salt concentration of over 30%."
            },
            {
                type: "fill",
                question: "The __________ is the highest mountain in the world.",
                answer: "Mount Everest",
                explanation: "Mount Everest, located in the Himalayas on the border between Nepal and China, is the highest point on Earth, standing at 8,848 meters."
            },
            {
                type: "fill",
                question: "The __________ is the smallest continent by land area.",
                answer: "Australia",
                explanation: "Australia is the smallest continent by land area, covering approximately 7.7 million square kilometers."
            },
            {
                type: "fill",
                question: "The __________ River is the longest river in Africa.",
                answer: "Nile",
                explanation: "The Nile River, flowing through northeastern Africa, is traditionally considered the longest river in the world, stretching about 6,650 kilometers."
            },
            {
                type: "fill",
                question: "The __________ Ocean is the largest ocean on Earth.",
                answer: "Pacific",
                explanation: "The Pacific Ocean is the largest and deepest ocean on Earth, covering more than 63 million square miles."
            },
            {
                type: "fill",
                question: "The __________ is the largest country by land area.",
                answer: "Russia",
                explanation: "Russia is the largest country in the world by land area, covering approximately 17.1 million square kilometers."
            },
            {
                type: "fill",
                question: "The __________ is the deepest lake in the world.",
                answer: "Lake Baikal",
                explanation: "Lake Baikal, located in Siberia, Russia, is the deepest freshwater lake in the world, with a depth of 1,642 meters."
            },
            {
                type: "fill",
                question: "The __________ is the tallest waterfall in the world.",
                answer: "Angel Falls",
                explanation: "Angel Falls, located in Venezuela, is the tallest waterfall in the world, with a drop of 979 meters."
            },
            {
                type: "fill",
                question: "The __________ is the second-largest country in Africa by land area.",
                answer: "Democratic Republic of the Congo",
                explanation: "The Democratic Republic of the Congo is the second-largest country in Africa, covering around 2.3 million square kilometers."
            },
            {
                type: "fill",
                question: "The __________ is the largest island in the world.",
                answer: "Greenland",
                explanation: "Greenland is the largest island in the world, covering an area of about 2.166 million square kilometers."
            },
            {
                type: "fill",
                question: "The __________ is the longest mountain range in North America.",
                answer: "Rocky Mountains",
                explanation: "The Rocky Mountains stretch from Canada down to New Mexico, USA, and are the longest mountain range in North America."
            },
            {
                type: "fill",
                question: "The __________ is the largest city by population in the world.",
                answer: "Tokyo",
                explanation: "Tokyo, Japan, is the most populous city in the world, with a population of over 37 million people in the metropolitan area."
            },
            {
                type: "fill",
                question: "The __________ is the largest lake in Africa by surface area.",
                answer: "Lake Victoria",
                explanation: "Lake Victoria, located in East Africa, is the largest lake on the continent by surface area, covering about 68,800 square kilometers."
            },
            {
                type: "fill",
                question: "The __________ Desert is located in the United States.",
                answer: "Mojave",
                explanation: "The Mojave Desert, located in the southwestern United States, is known for its unique landscapes and extreme temperatures."
            },
            {
                type: "fill",
                question: "The __________ is the largest peninsula in the world.",
                answer: "Arabian Peninsula",
                explanation: "The Arabian Peninsula is the largest peninsula in the world, covering about 3.2 million square kilometers."
            },
            {
                type: "fill",
                question: "The __________ is the longest river in South America.",
                answer: "Amazon",
                explanation: "The Amazon River is the longest river in South America and one of the largest by discharge, flowing through Brazil and other countries."
            },
            {
                type: "fill",
                question: "The __________ is the highest active volcano in the world.",
                answer: "Ojos del Salado",
                explanation: "Ojos del Salado, located on the Chile-Argentina border, is the highest active volcano in the world, with an elevation of 6,893 meters."
            }
            //Add more hard geography question here...
        ]        
    },
    // Add more categories (sports, religious(Islamic), etc.)...
};

// Utility function to get random questions
function getRandomQuestions(category, difficulty, count = 20) {
    if (!questions[category] || !questions[category][difficulty]) {
        console.error(`No questions found for ${category} ${difficulty}`);
        return [];
    }
    
    const availableQuestions = questions[category][difficulty];
    
    // If we don't have enough questions, return what we have
    if (availableQuestions.length <= count) {
        return shuffleArray([...availableQuestions]);
    }
    
    // Get random questions without duplicates
    const shuffled = shuffleArray([...availableQuestions]);
    return shuffled.slice(0, count);
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}