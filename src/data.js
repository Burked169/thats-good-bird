const P = [
/* Guillermo del Toro — life & biography */
{topic:"Guillermo del Toro", q:"Name a fact about Guillermo del Toro's life (not just a movie)", t:[
 ["Born in Guadalajara, Mexico|~guadalajara|~mexic|~jalisco","Won Oscars|~oscar|~academy award"],
 ["Obsessed with monsters|~monster","Friends with Cuarón & Iñárritu (the Three Amigos)|~three amigos|~amigos|~cuaron|~inarritu","Catholic upbringing|~catholic","Collects horror memorabilia|~collect|~memorabilia"],
 ["His house of monsters, Bleak House|~bleak house","His father was kidnapped|~kidnap|~ransom","Keeps detailed notebooks|~notebook|~sketchbook|~journal","Started in makeup & special effects|~makeup|~special effects|~prosthetic|~sfx|~effects","Raised partly by his grandmother|~grandmother|~grandma","Star on the Hollywood Walk of Fame|~walk of fame"],
 ["Trained under Dick Smith (The Exorcist's makeup artist)|~dick smith|~exorcist","Ran an effects company called Necropia|~necropia","Wrote a book about Alfred Hitchcock|~hitchcock","Was set to direct The Hobbit, then left|~hobbit","James Cameron helped pay his father's ransom|~cameron","Born in 1964|~1964"],
 ["Born October 9|~october 9|~oct 9","Dreams of making At the Mountains of Madness|~mountains of madness|~lovecraft","Spends much of his time in Toronto|~toronto","LACMA exhibit 'At Home with Monsters'|~lacma|~at home with monsters","Partner Kim Morgan|~kim morgan"]]},
{topic:"Guillermo del Toro", q:"Name a person who's been important in Guillermo del Toro's life or career", people:true, t:[
 ["Alfonso Cuarón|Alfonso Cuaron|Cuaron","Ron Perlman"],
 ["Alejandro González Iñárritu|Alejandro Gonzalez Inarritu|Inarritu|Alejandro Inarritu","James Cameron","Doug Jones","Peter Jackson"],
 ["Mike Mignola","Guillermo Navarro","Hideo Kojima|Kojima","Alexandre Desplat","Kim Morgan","Dick Smith","Boris Karloff"],
 ["Chuck Hogan","Daniel Kraus","Lorenza Newton","Federico del Toro|His father|Dad","Javier Navarrete","Dan Laustsen","Mark Gustafson","Matthew Robbins","Vanessa Taylor","Harvey Weinstein|Weinstein"],
 ["Mariana del Toro|Mariana","Marisa del Toro|Marisa","His grandmother|Grandmother|Grandma","Federico Luppi","Sergio Sánchez|Sergio Sanchez","J.A. Bayona|Juan Antonio Bayona|Bayona"]]},
{topic:"Guillermo del Toro", q:"Name an artist, writer, or film that influenced Guillermo del Toro", t:[
 ["Frankenstein|Frankenstein 1931","Alfred Hitchcock|Hitchcock"],
 ["Mary Shelley","H.P. Lovecraft|HP Lovecraft|Lovecraft","Boris Karloff|Karloff","Edgar Allan Poe|Poe","Godzilla","Universal Monsters|Universal monster movies"],
 ["Francisco Goya|Goya","Luis Buñuel|Luis Bunuel|Bunuel","Mario Bava|Bava","Ray Harryhausen|Harryhausen","Lon Chaney","Hammer Films|Hammer Horror|Hammer","Catholicism|Catholic imagery","Comic books|Comics","Fairy tales|Fairytales","Alice in Wonderland|Lewis Carroll"],
 ["Arthur Rackham|Rackham","James Whale","Bernie Wrightson|Wrightson","Mike Mignola|Mignola","Ultraman","Jack Kirby","Dick Smith","Mexican folklore|Folklore","Charles Dickens|Dickens","Bride of Frankenstein","Creature from the Black Lagoon|Black Lagoon"],
 ["Richard Corben","Harry Clarke","Moebius","Jean Cocteau|Cocteau|Beauty and the Beast","Carlos Enrique Taboada","Algernon Blackwood","Arthur Machen","Ambrose Bierce","Frankenstein Meets the Wolf Man"]]},
{topic:"Guillermo del Toro", q:"Name a del Toro project that ISN'T a movie he directed (books, TV, producing, unmade)", t:[
 ["The Strain|Strain","Trollhunters|Tales of Arcadia"],
 ["Cabinet of Curiosities|Guillermo del Toro's Cabinet of Curiosities","The Hobbit|Hobbit","Kung Fu Panda 2","The Orphanage|El Orfanato","Mama","Scary Stories to Tell in the Dark|Scary Stories"],
 ["Don't Be Afraid of the Dark","The Book of Life|Book of Life","Rise of the Guardians","Puss in Boots","Death Stranding","Silent Hills|P.T.|PT","At the Mountains of Madness","Antlers","3Below","Wizards","The Shape of Water novel|Novels|Books"],
 ["Julia's Eyes|Los ojos de Julia","Splice","Haunted Mansion","Justice League Dark","Pacific Rim Uprising","Hellboy Animated|Sword of Storms|Blood and Iron","Kung Fu Panda 3","Biutiful","Rudo y Cursi"],
 ["Book about Hitchcock|Hitchcock book|El cine de Alfred Hitchcock","Cabinet of Curiosities book|My Notebooks|Notebooks","Necropia","Hora Marcada","Cha Cha Cha Films|Cha Cha Cha","The Tequila Gang|Tequila Gang"]]},
{topic:"Guillermo del Toro", q:"Name an award or honor Guillermo del Toro has received", t:[
 ["Oscar|Academy Award|Oscars|Academy Awards"],
 ["Golden Globe|Golden Globes","Best Director","Best Picture","BAFTA","Best Animated Feature"],
 ["Golden Lion|Venice|Venice Film Festival","DGA Award|DGA|Directors Guild","Critics' Choice Award|Critics Choice","Annie Award|Annies","Hollywood Walk of Fame star|Walk of Fame"],
 ["Hugo Award|Hugo","Saturn Award|Saturn","Ariel Award|Ariel","Goya Award|Goya","Producers Guild Award|PGA"],
 ["Cannes Critics' Week prize|Critics Week|Cannes","Mercedes-Benz Award","Honorary doctorate|Doctorate","Mexican Academy|Mexico's Academy"]]},

/* Buca di Beppo */
{topic:"Buca di Beppo", q:"Name a dish you could order at Buca di Beppo", t:[
 ["Spaghetti and Meatballs|Spaghetti|Meatballs|Spaghetti with meatballs","Chicken Parmigiana|Chicken Parm|Chicken Parmesan","Fettuccine Alfredo|Alfredo","Lasagna"],
 ["Baked Ziti|Ziti","Garlic Bread|Mozzarella Garlic Bread","Chicken Marsala|Marsala","Tiramisu","Fried Calamari|Calamari","Caesar Salad","Eggplant Parmigiana|Eggplant Parm|Eggplant Parmesan"],
 ["Bruschetta","Shrimp Scampi|Scampi","Penne","Ravioli","Manicotti","Brownie Sundae|Colossal Brownie Sundae","Cheesecake","Pizza","Rigatoni","Italian Sausage|Sausage"],
 ["Chicken Limone|Limone","Spicy Chicken Rigatoni","Apple Gorgonzola Salad","Italian Salad|Mixed Green Salad","Chicken Carbonara|Carbonara","Cannoli","Spaghetti Marinara|Marinara","Stuffed Mushrooms","Meat Lasagna"],
 ["Mozzarella Caprese|Caprese","Penne Arrabbiata|Arrabbiata","Chicken Saltimbocca|Saltimbocca","Linguine Frutti di Mare|Frutti di Mare","Tuscan Salmon|Salmon","Kids menu"]]},
{topic:"Buca di Beppo", q:"Name something you'd see or experience at Buca di Beppo", t:[
 ["Family-style portions|Family style|Huge portions|Giant portions|Big portions|Platters","The Pope's Table|Pope's Table|Pope table|The Pope|Pope|Pope bust|Bust of the Pope"],
 ["Kitschy decor|Kitsch|Tacky decor|Decor","Old photos|Photos on the walls|Photos|Pictures|Vintage photos","Birthday party|Birthday|Birthdays","Lazy Susan","Red sauce"],
 ["The Kitchen Table|Kitchen table|Eat in the kitchen","Chianti bottles|Wine bottles|Chianti","Red checkered tablecloths|Checkered tablecloth|Tablecloths","Celebrity photos|Celebrities","Leftovers|To-go boxes|Takeout boxes","Statues|Statue","Italian flags|Flag"],
 ["Christmas lights|String lights","Frank Sinatra|Sinatra|Dean Martin|Rat Pack","Murals|Mural","Basement|Underground|Downstairs","Big groups|Large groups|Group dinners","Wine"],
 ["Nude statues|Naked statues|Nudity","Minneapolis","Bankruptcy|Chapter 11","Each room is themed|Themed rooms","Shrine"]]},

/* Crows */
{topic:"Crows", q:"Name a member of the crow family (corvids)", t:[
 ["Crow","Raven"],
 ["Blue Jay|Bluejay","Magpie","American Crow","Common Raven","Jay"],
 ["Rook","Jackdaw","Steller's Jay|Stellers Jay","Scrub Jay|Scrub-Jay|California Scrub Jay","Clark's Nutcracker|Nutcracker","Gray Jay|Canada Jay|Grey Jay|Whiskey Jack"],
 ["Chough","Fish Crow","Hooded Crow","Carrion Crow","New Caledonian Crow","Treepie","Pinyon Jay","Green Jay","Eurasian Jay","Jungle Crow","House Crow","Yellow-billed Magpie","Black-billed Magpie","Chihuahuan Raven","White-necked Raven"],
 ["Hawaiian Crow|Alala|'Alala","Piapiac","Azure-winged Magpie","Ground Jay","Brown Jay","Florida Scrub-Jay|Florida Scrub Jay","Thick-billed Raven"]]},
{topic:"Crows", q:"Name something crows are known to do", t:[
 ["Caw|Cawing","Eat garbage|Scavenge|Eat trash|Dig through trash"],
 ["Use tools|Tool use","Recognize faces|Remember faces","Hold grudges|Hold a grudge|Remember people","Collect shiny things|Steal shiny things|Like shiny things","Eat roadkill","Fly in groups|Flock"],
 ["Give gifts|Bring gifts|Leave gifts","Hold funerals|Funerals|Mourn their dead","Mimic speech|Talk|Mimic sounds|Imitate","Solve puzzles","Drop nuts on roads|Crack nuts with cars|Use cars to crack nuts","Mob predators|Mobbing|Chase hawks|Harass owls"],
 ["Anting","Play|Sled on snow|Slide down roofs","Cache food|Hide food|Bury food","Roost together|Communal roosting|Roost","Cooperative breeding|Raise young together|Helpers at the nest","Steal food|Thieve","Plan ahead"],
 ["Water displacement|Drop stones in water|Aesop's fable","Metatool use|Use tools to get tools","Bend wire into hooks|Make hooks","Count","Teach their kids to hate people|Pass grudges to offspring|Teach grudges"]]},

/* Video games */
{topic:"Video Games", q:"Name a video game console", t:[
 ["PlayStation|PS1|PlayStation 1|PSX","Nintendo Switch|Switch","Xbox"],
 ["PlayStation 5|PS5","PlayStation 2|PS2","Nintendo 64|N64","Xbox 360|360","Wii","Game Boy|Gameboy","NES|Nintendo Entertainment System|Nintendo","Super Nintendo|SNES","PlayStation 4|PS4","Xbox One","Atari|Atari 2600"],
 ["GameCube","Sega Genesis|Genesis|Mega Drive","PlayStation 3|PS3","Nintendo DS|DS","Xbox Series X|Series X|Xbox Series S|Series S","Switch 2|Nintendo Switch 2","Game Boy Advance|GBA","Steam Deck","PSP","Wii U","3DS|Nintendo 3DS","Dreamcast|Sega Dreamcast","Game Boy Color|GBC"],
 ["Sega Saturn|Saturn","Game Gear|Sega Game Gear","Sega Master System|Master System","PS Vita|Vita|PlayStation Vita","Virtual Boy","TurboGrafx-16|TurboGrafx|PC Engine","Neo Geo","ColecoVision","Intellivision","Sega CD","Atari Jaguar|Jaguar","Atari Lynx|Lynx","Game & Watch|Game and Watch","Famicom","Ouya"],
 ["Magnavox Odyssey|Odyssey","3DO","N-Gage","Vectrex","32X|Sega 32X","WonderSwan","Pippin|Apple Pippin","Atari 7800","Atari 5200","Fairchild Channel F|Channel F","Pokémon Mini|Pokemon Mini","Nomad|Sega Nomad","Neo Geo Pocket","Playdate","Tiger Electronics|Game.com"]]},
{topic:"Video Games", q:"Name a character from the Super Mario universe", t:[
 ["Mario","Luigi","Bowser","Princess Peach|Peach"],
 ["Yoshi","Toad","Wario","Waluigi","Donkey Kong|DK","Princess Daisy|Daisy","Goomba","Koopa Troopa|Koopa"],
 ["Rosalina","Boo","Shy Guy","Toadette","Bowser Jr.|Bowser Jr|Bowser Junior","Diddy Kong|Diddy","Birdo","Lakitu","Bob-omb|Bobomb","Chain Chomp","Piranha Plant","King Boo","Dry Bones","Bullet Bill"],
 ["Kamek","Pauline","Cappy","Petey Piranha","Hammer Bro|Hammer Brothers","Blooper","Thwomp","Wiggler","Captain Toad","Toadsworth","Professor E. Gadd|E. Gadd","Lubba","Luma","Spiny","Cheep Cheep","Larry Koopa|Larry","Morton Koopa|Morton","Wendy O. Koopa|Wendy","Iggy Koopa|Iggy","Roy Koopa|Roy","Lemmy Koopa|Lemmy","Ludwig von Koopa|Ludwig","Koopalings","Nabbit"],
 ["Fawful","Geno","Mallow","Kammy Koopa|Kammy","Cackletta","Tatanga","Wart","Count Bleck","Dimentio","Huey","Kersti","Pom Pom","Boom Boom","Foreman Spike|Spike","Ninji","Pokey","Fuzzy","Monty Mole"]]},

/* Lady Bird */
{topic:"Lady Bird", q:"Name an actor or character from the movie Lady Bird", people:true, t:[
 ["Saoirse Ronan|Saoirse","Lady Bird|Christine McPherson|Christine","Timothée Chalamet|Timothee Chalamet|Timothee"],
 ["Laurie Metcalf","Lucas Hedges","Beanie Feldstein","Marion McPherson|Marion|Lady Bird's mom|The mom|Mom","Kyle|Kyle Scheible"],
 ["Tracy Letts","Danny O'Neill|Danny","Julie Steffans|Julie","Larry McPherson|Larry|The dad|Dad","Lois Smith","Sister Sarah Joan|Sarah Joan","Odeya Rush","Jenna Walton|Jenna"],
 ["Stephen McKinley Henderson","Father Leviatch","Miguel McPherson|Miguel","Jordan Rodrigues","Marielle Scott","Shelly Yuhan|Shelly","Kathryn Newton","Jake McDorman","Mr. Bruno","Darlene"],
 ["John Karna","Bob Stephenson","Andy Buckley","Kristen Cloke","Danny's grandma|Grandma","Father Walther","Greg Anrue","Laura Marano","Jake Cormier"]]},
{topic:"Lady Bird", q:"Name something from (or about) the movie Lady Bird", t:[
 ["Sacramento","Greta Gerwig|Greta"],
 ["Catholic school|Catholic high school|Immaculate Heart","Prom","Crash Into Me|Dave Matthews Band|Dave Matthews","New York|NYC","College applications|College","Pink hair|Red hair|Dyed hair","A24"],
 ["The school musical|Musical|Merrily We Roll Along|Theater","The blue house|Danny's grandma's house|Blue house","Thrift store|Thrifting","Jumping out of the car|Jumps out of the car|Broken arm|Cast|Pink cast","2002","The waitlist|Waitlist","Communion wafers|Eating communion wafers|Wafers","Wrong side of the tracks|The tracks"],
 ["Oscar nominations|Oscars|5 Oscar nominations|Best Picture nomination","Driving test|Driver's license|Driving","Thanksgiving","Alanis Morissette|Hand in My Pocket","Iraq War|Iraq","Mathletes|Math club","Mom's letters|Letters from mom","Snow","Danny comes out|Danny is gay"],
 ["Rotten Tomatoes record|Rotten Tomatoes|100% on Rotten Tomatoes","Davis|UC Davis","Tower Bridge","Football coach directing the play|Football coach","Kyle's anarchism|Anarchy|Anarchist","Psychiatric nurse|Nurse|Mom is a nurse"]]},
/* The Sinner */
{topic:"The Sinner", q:"Name an actor or character from The Sinner", people:true, t:[
 ["Bill Pullman","Harry Ambrose|Ambrose|Detective Ambrose","Jessica Biel"],
 ["Cora Tannetti|Cora","Carrie Coon","Matt Bomer","Christopher Abbott","Mason Tannetti|Mason"],
 ["Frankie Belmont|Frankie","Vera Walker|Vera","Julian Walker|Julian","Jamie Burns|Jamie","Chris Messina","Nick Haas|Nick","Dan Leroy|Leroy","Dohn Norwood","Tracy Letts","Phoebe Lacey|Phoebe","J.D.|JD"],
 ["Jessica Hecht","Sonya Barzel|Sonya","Natalie Paul","Heather Novack|Heather","Jack Novack","Elisha Henig","Parisa Fitz-Henley","Leela Burns|Leela","Alice Kremelberg","Percy Muldoon|Percy","Frances Fisher","Meg Muldoon|Meg","Nadia Alexander","Jacob Pitts"],
 ["Neal Huff","Sean Muldoon|Sean","Eric Todd","Hannah Gross","Marin Calhoun|Marin","Derek Simonds"]]},
{topic:"The Sinner", q:"Name something from The Sinner (plot, places, details)", t:[
 ["Cora stabs a man on the beach|~stab|~beach","Detective Harry Ambrose|~ambrose|~detective"],
 ["USA Network|~usa","Netflix|~netflix","The song 'Huggin & Kissin'|~huggin|~song|~music","Each season is a new case|~anthology|~each season|~new case"],
 ["Mosswood commune|~mosswood|~commune|~cult","Keller, NY — Ambrose's hometown|~keller","She was cutting a pear|~pear|~fruit|~paring knife|~knife","Upstate New York|~upstate|~new york","Jessica Biel's Emmy nomination|~emmy","Hanover Island, Maine|~hanover|~maine","Repressed memories|~memor|~repress"],
 ["Based on a Petra Hammesfahr novel|~hammesfahr|~novel|~book","The Beverwyck club|~beverwyck","Four seasons|~4 seasons|~four seasons","Ambrose is retired in season 4|~retire","A fishing family, the Muldoons|~fishing|~muldoon"],
 ["Created by Derek Simonds|~simonds|~derek","Original novel is German|~german|~germany","The Belmont family|~belmont","Lighthouse|~lighthouse"]]},

/* The Good Doctor */
{topic:"The Good Doctor", q:"Name an actor or character from The Good Doctor", people:true, t:[
 ["Freddie Highmore","Shaun Murphy|Shaun|Dr. Murphy|Dr Murphy"],
 ["Richard Schiff","Aaron Glassman|Glassman|Dr. Glassman","Antonia Thomas","Claire Browne|Claire","Lea Dilallo|Lea","Paige Spara"],
 ["Hill Harper","Marcus Andrews|Andrews","Christina Chang","Audrey Lim|Lim","Nicholas Gonzalez","Neil Melendez|Melendez","Fiona Gubelmann","Morgan Reznick|Morgan","Will Yun Lee","Alex Park|Park"],
 ["Chuku Modu","Jared Kalu|Jared","Beau Garrett","Jessica Preston","Tamlyn Tomita","Allegra Aoki|Aoki","Noah Galvin","Asher Wolke|Asher","Jasika Nicole","Carly Lever|Carly","Steve Murphy|Steve","Dylan Kingwell"],
 ["Bria Samoné Henderson|Bria Samone Henderson|Bria Henderson","Jordan Allen|Jordan","Osvaldo Benavides","Mateo Rendón|Mateo Rendon|Mateo","Brandon Larracuente","Daniel Perez","Kayla Cromer","Charlie Lukaitis|Charlie","Kenny","Graham Verchere","David Shore","Daniel Dae Kim"]]},
{topic:"The Good Doctor", q:"Name something from The Good Doctor (plot, places, details)", t:[
 ["Shaun is autistic|~autis","Surgical residents|~surg|~resident|~hospital"],
 ["Savant syndrome|~savant|~genius","St. Bonaventure Hospital|~bonaventure","ABC|~abc","The toy scalpel|~scalpel|~toy","Shaun and Lea get married|~married|~wedding|~marry"],
 ["Based on a Korean show|~korea","From David Shore, creator of House|~david shore|~house","San Jose|~san jose","From Casper, Wyoming|~wyoming|~casper","Shaun's brother Steve died|~brother","Glassman's brain tumor|~tumor|~cancer|~brain"],
 ["Shaun & Lea have a baby|~son|~baby|~kid","The Good Lawyer spinoff|~good lawyer|~lawyer|~spinoff","Shaun sees anatomy as glowing diagrams|~visual|~diagram|~anatomy|~graphics","Seven seasons|~7 seasons|~seven seasons","Shaun becomes an attending|~attending"],
 ["Kenny, the neighbor|~kenny|~neighbor","Daniel Dae Kim produced it|~daniel dae kim","Sony Pictures Television|~sony","Shaun's mentor teaches him to drive|~drive|~driving","Lea's job in the IT department|~it department|~tech"]]},

/* Criminal Minds */
{topic:"Criminal Minds", q:"Name a BAU team member from Criminal Minds (actor or character)", people:true, t:[
 ["Spencer Reid|Reid|Dr. Reid","Matthew Gray Gubler|Gubler","Penelope Garcia|Garcia","Derek Morgan|Morgan"],
 ["Aaron Hotchner|Hotch|Hotchner","Thomas Gibson","Shemar Moore","David Rossi|Rossi","Joe Mantegna","Jennifer Jareau|JJ|J.J.","A.J. Cook|AJ Cook","Emily Prentiss|Prentiss","Paget Brewster","Kirsten Vangsness"],
 ["Jason Gideon|Gideon","Mandy Patinkin","Luke Alvez|Alvez","Adam Rodriguez","Tara Lewis","Aisha Tyler","Matt Simmons|Simmons","Daniel Henney","Elle Greenaway|Elle","Lola Glaudini"],
 ["Alex Blake","Jeanne Tripplehorn","Kate Callahan|Callahan","Jennifer Love Hewitt","Stephen Walker","Damon Gupton","Ashley Seaver|Seaver","Rachel Nichols","Erin Strauss|Strauss","Jayne Atkinson"],
 ["Jordan Todd","Meta Golding","Mateo Cruz","Esai Morales","Tyler Green","Ryan-James Hatanaka"]]},
{topic:"Criminal Minds", q:"Name a Criminal Minds villain (unsub) or the actor who played one", people:true, t:[
 ["The Reaper|George Foyet|Foyet|Boston Reaper","Mr. Scratch|Peter Lewis|Scratch"],
 ["Elias Voit|Voit|Sicarius","Tobias Hankel|Hankel","Frank Breitkopf","Cat Adams","The Replicator","Ian Doyle|Doyle"],
 ["C. Thomas Howell","Bodhi Elfman","Zach Gilford","James Van Der Beek","Keith Carradine","Aubrey Plaza","Mark Hamill","John Curtis"],
 ["Karl Arnold|The Fox","Benjamin Cyrus|Cyrus","Adrian Bale","The Boston Reaper"],
 ["Luke Perry","Neal Jones"]]},
{topic:"Criminal Minds", q:"Name something from Criminal Minds (plot, lingo, details)", t:[
 ["Unsub|~unsub","BAU / Behavioral Analysis Unit|~bau|~behavioral analysis","FBI|~fbi"],
 ["Profiling|~profil","Quantico|~quantico","Serial killers|~serial","Wheels up|~wheels up","The jet|~jet|~plane","CBS|~cbs"],
 ["Opening and closing quotes|~quote","Reid's 187 IQ|~187|~iq","Reid's eidetic memory|~eidetic|~photographic","Garcia's 'baby girl' with Morgan|~baby girl|~hot stuff|~chocolate thunder","Hotch's wife Haley|~haley","Criminal Minds: Evolution on Paramount+|~evolution|~paramount","Virginia|~virginia"],
 ["Suspect Behavior spinoff|~suspect behavior","Beyond Borders spinoff|~beyond borders","Reid goes to prison|~prison|~jail","Gideon's cabin|~cabin","Rossi's cooking|~cooking|~pasta|~rossi","Garcia's colorful office|~office|~figurines|~toys","Reid's mom, Diana|~diana|~reid s mom|~mother","Reid's magic tricks|~magic","Fifteen seasons|~15 seasons|~fifteen seasons"],
 ["Created by Jeff Davis|~jeff davis","Reid's mismatched socks|~sock","Maeve|~maeve","Thomas Gibson was fired|~fired","JJ's stint at the Pentagon|~pentagon","Prentiss fakes her death|~faked|~fake death|~fakes her death"]]},
/* --- extra prompts for 5 rounds --- */
{topic:"Buca di Beppo", q:"Name a pasta shape", t:[
 ["Spaghetti","Penne","Macaroni|Mac"],
 ["Fettuccine|Fettucine","Linguine|Linguini","Rigatoni","Lasagna|Lasagne","Ravioli","Bow Tie|Bowtie|Farfalle","Angel Hair|Capellini","Ziti","Tortellini","Rotini","Shells|Conchiglie"],
 ["Orzo","Fusilli","Gnocchi","Manicotti","Cannelloni","Elbow|Elbows","Orecchiette","Pappardelle","Tagliatelle","Bucatini","Ditalini","Cavatappi","Vermicelli","Wagon wheels|Rotelle|Ruote","Alphabet"],
 ["Radiatori","Campanelle","Gemelli","Paccheri","Mafaldine|Mafalda","Casarecce","Cavatelli","Agnolotti","Fregola|Fregula","Stelline","Tortelloni","Spaghettini","Rigatoni"],
 ["Strozzapreti","Trofie","Lumache","Garganelli","Pici","Mezzi Rigatoni|Mezze Rigatoni","Anelli","Calamarata","Corzetti","Lorighittas","Busiate","Sagnarelli","Cappelletti"]]},
{topic:"Crows", q:"Name a collective noun for a group of birds (e.g. a 'murder' of crows)", t:[
 ["A murder of crows|~murder","A flock|~flock"],
 ["A gaggle of geese|~gaggle","A parliament of owls|~parliament","An unkindness of ravens|~unkindness","A murmuration of starlings|~murmuration","A colony of penguins|~colony"],
 ["A conspiracy of ravens|~conspiracy","A flamboyance of flamingos|~flamboyance","A kettle of hawks|~kettle","A bevy of quail|~bevy","A covey|~covey","A skein of geese|~skein","A raft of ducks|~raft","A brood|~brood","A waddle of penguins|~waddle"],
 ["An exaltation of larks|~exaltation","A charm of finches|~charm","A convocation of eagles|~convocation","A siege of herons|~siege","A pandemonium of parrots|~pandemonium","A wake of vultures|~wake|~committee|~venue","A tiding of magpies|~tiding","A paddling of ducks|~paddling","A host of sparrows|~host","An ostentation of peacocks|~ostentation|~muster"],
 ["A scold of jays|~scold|~party of jays","A descent of woodpeckers|~descent","A cast of falcons|~cast","A horde of crows|~horde","A storytelling of crows|~storytelling","A chattering of choughs|~chattering","A clattering of jackdaws|~clattering","A building of rooks|~building|~parliament of rooks","A mischief of magpies|~mischief"]]},
{topic:"Video Games", q:"Name a character, item, or place from The Legend of Zelda", t:[
 ["Link","Zelda|Princess Zelda","Ganon|Ganondorf"],
 ["Hyrule","Master Sword","Triforce","Navi","Epona","Rupees|Rupee","Ocarina|Ocarina of Time","Breath of the Wild|BOTW","Tears of the Kingdom|TOTK"],
 ["Impa","Sheik","Midna","Tingle","Skull Kid","Majora's Mask|Majora","Hylian Shield","Korok|Koroks","Deku Tree|Great Deku Tree","Great Fairy|Fairy","Goron|Gorons","Zora|Zoras","Gerudo","Kakariko|Kakariko Village","Lost Woods","Death Mountain","Heart Container|Hearts","Cucco|Cuccos|Chickens","Hookshot","Wind Waker","Twilight Princess","Calamity Ganon","Bokoblin|Bokoblins","Moblin","Lynel","Guardian|Guardians"],
 ["Lon Lon Ranch","Malon","Saria","Darunia","Ruto|Princess Ruto","Nabooru","Rauru","Fi","Ghirahim","Groose","Beedle","Purah","Mipha","Revali","Urbosa","Daruk","Sidon|Prince Sidon","Hestu","Sheikah Slate","Lake Hylia","Zelda's Lullaby","Bottle|Bottles","Boomerang","Fishing Pond"],
 ["Kaepora Gaebora|The Owl","Vaati","Demise","Agahnim","Tetra","King of Red Lions","Happy Mask Salesman","Kafei","Anju","Dampé|Dampe","Poe|Poes","Gossip Stone|Gossip Stones","Like Like","Wallmaster","Gohma","Volvagia","Twinrova","Koume","Kotake","Yiga Clan|Yiga","Ravio","Linebeck","Tatl","Tael"]]},
{topic:"Video Games", q:"Name one of the original 151 Pokémon", t:[
 ["Pikachu","Charizard","Bulbasaur","Squirtle","Charmander","Mewtwo","Mew","Eevee","Jigglypuff","Snorlax"],
 ["Gengar","Psyduck","Meowth","Gyarados","Blastoise","Venusaur","Magikarp","Ditto","Lapras","Dragonite","Onix","Geodude","Vulpix","Arcanine","Growlithe","Machamp","Alakazam","Abra","Cubone","Slowpoke","Pidgey","Rattata","Caterpie","Butterfree","Zubat","Raichu","Articuno","Zapdos","Moltres","Mr. Mime|Mr Mime","Chansey","Clefairy"],
 ["Ekans","Arbok","Koffing","Staryu","Starmie","Poliwag","Oddish","Diglett","Magnemite","Voltorb","Ponyta","Rapidash","Scyther","Jynx","Electabuzz","Magmar","Lickitung","Kangaskhan","Tauros","Aerodactyl","Kabuto","Omanyte","Porygon","Seel","Shellder","Krabby","Horsea","Goldeen","Tentacool","Hitmonlee","Hitmonchan","Rhyhorn","Rhydon","Exeggutor","Marowak","Sandshrew","Nidoran","Ninetales","Wigglytuff","Golbat","Vaporeon","Jolteon","Flareon","Dratini","Ivysaur","Charmeleon","Wartortle","Weedle","Beedrill","Pidgeot","Mankey","Machop","Bellsprout","Gastly","Haunter","Muk","Grimer","Weezing","Hypno","Drowzee","Golem","Slowbro","Farfetch'd|Farfetchd","Doduo","Electrode","Pinsir"],
 ["Sandslash","Nidorina","Nidoqueen","Nidorino","Nidoking","Clefable","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Dugtrio","Persian","Golduck","Primeape","Poliwhirl","Poliwrath","Kadabra","Machoke","Victreebel","Graveler","Magneton","Dodrio","Cloyster","Dewgong","Kingler","Seadra","Seaking","Tentacruel","Exeggcute","Tangela","Omastar","Kabutops","Dragonair","Raticate","Spearow","Fearow","Pidgeotto"],
 ["Metapod","Kakuna","Weepinbell"]]},
{topic:"Lady Bird", q:"Name a movie Greta Gerwig directed, wrote, or acted in (other than Lady Bird)", t:[
 ["Barbie","Little Women"],
 ["Frances Ha","Mistress America","20th Century Women","White Noise","Isle of Dogs"],
 ["Greenberg","Jackie","Maggie's Plan","No Strings Attached","Arthur","To Rome with Love","Damsels in Distress","Narnia|The Magician's Nephew|Chronicles of Narnia"],
 ["Hannah Takes the Stairs","Nights and Weekends","Baghead","The House of the Devil|House of the Devil","Lola Versus","The Dish & the Spoon|The Dish and the Spoon"],
 ["LOL","Yeast","The Humbling"]]},
/* Steph Curry — life */
{topic:"Steph Curry", q:"Name a fact about Steph Curry's life (not just a stat)", t:[
 ["Won 4 NBA titles|~4 titles|~four titles|~champion|~ring|~titles","Greatest shooter ever|~shoot|~three|~3 point|~3s|~threes|~3 pointer"],
 ["His dad Dell Curry played in the NBA|~dell|~dad|~father","Wife Ayesha Curry|~ayesha|~wife|~married","Played college ball at Davidson|~davidson","Two-time MVP|~mvp|~2 mvp","Grew up in Charlotte, NC|~charlotte|~north carolina","Brother Seth Curry also plays in the NBA|~seth|~brother","Curry Brand with Under Armour|~under armour|~curry brand|~shoe"],
 ["Born in Akron, Ohio — same hospital as LeBron|~akron|~ohio|~same hospital","First unanimous MVP|~unanimous","Olympic gold in Paris 2024|~olympic|~gold|~paris","Chews on his mouthguard|~mouthguard|~mouth guard","Open about his Christian faith|~christian|~faith|~jesus|~god|~philippians|~4 13|~bible|~church","The 'Night Night' celebration|~night night","Lightly recruited out of high school|~underrated|~underdog|~recruit|~skinny|~small","Has four kids|~riley|~ryan|~canon|~caius|~kids|~children"],
 ["Real name Wardell Stephen Curry II|~wardell","Born March 14, 1988|~march 14|~1988|~pi day","Lived in Toronto as a kid|~toronto|~raptors","Won a celebrity golf tournament|~golf","Production company Unanimous Media|~unanimous media","Eat. Learn. Play. foundation|~eat learn play|~foundation","2022 Finals MVP|~finals mvp"],
 ["Went to Charlotte Christian School|~charlotte christian","Mom Sonya played college volleyball|~sonya|~volleyball|~mom|~mother","Sister Sydel married Damion Lee|~sydel|~sister|~damion lee","Apple TV+ show 'Mr. Throwback'|~mr throwback|~throwback","Led Davidson to the Elite Eight|~elite eight|~march madness","Trainer Brandon Payne|~brandon payne|~payne"]]},
{topic:"Steph Curry", q:"Name a person in Steph Curry's life (family, teammates, coaches)", people:true, t:[
 ["Ayesha Curry","Dell Curry"],
 ["Seth Curry","Klay Thompson","Draymond Green","Steve Kerr","Riley Curry"],
 ["Sonya Curry","Sydel Curry","Damion Lee","Bob McKillop","Ryan Curry","Canon Curry","Kevin Durant","Andre Iguodala"],
 ["Caius Curry","Bob Myers","Mark Jackson","Don Nelson","Keith Smart","Monta Ellis","Joe Lacob"],
 ["Brandon Payne","Jeff Austin","Ron Adams","Bruce Fraser","Shaun Livingston"]]},

/* LeBron James — life */
{topic:"LeBron James", q:"Name a fact about LeBron James's life (not just a stat)", t:[
 ["Won 4 championships|~4 champ|~four champ|~champion|~ring|~titles","From Akron, Ohio|~akron|~ohio"],
 ["'The Decision' on TV|~decision","Played for the Miami Heat|~miami|~heat","Played for the Cavaliers|~cavs|~cavaliers|~cleveland","NBA's all-time leading scorer|~leading scorer|~scoring record|~all time scor|~scorer|~kareem","Played alongside his son Bronny|~bronny|~son","Starred in Space Jam: A New Legacy|~space jam","Went straight to the NBA from high school|~high school|~straight","Married his high school sweetheart Savannah|~savannah|~wife|~sweetheart|~married"],
 ["Opened the I Promise School|~i promise|~school","Came back from 3–1 in the 2016 Finals|~3 1|~comeback|~2016","'The Chosen One' on a Sports Illustrated cover|~chosen one|~sports illustrated|~si cover","Went to St. Vincent–St. Mary|~st vincent|~saint vincent|~svsm","Raised by his mom Gloria|~gloria|~mom|~mother|~single","No. 1 pick in 2003|~2003|~1 pick|~first pick|~number 1|~no 1","Lifetime Nike deal|~nike","Olympic gold medals|~olympic|~gold","Taco Tuesday|~taco"],
 ["Born December 30, 1984|~december 30|~dec 30|~1984","Part-owner of Liverpool FC|~liverpool|~fenway|~soccer","The SpringHill Company|~springhill","Early investor in Blaze Pizza|~blaze|~pizza","Acted in 'Trainwreck'|~trainwreck|~amy schumer","Played high school football|~football","'Mind the Game' podcast|~mind the game|~podcast","Co-founded Uninterrupted|~uninterrupted"],
 ["Lived with his coach Frankie Walker's family as a kid|~frankie walker|~walker","His high school 'Fab Five' (movie: Shooting Stars)|~fab five|~shooting stars","Famously into wine|~wine","Moved a dozen times as a kid|~moved"]]},
{topic:"LeBron James", q:"Name a person in LeBron James's life (family, friends, teammates)", people:true, t:[
 ["Bronny James|Bronny","Savannah James"],
 ["Gloria James","Bryce James","Zhuri James","Dwyane Wade|D-Wade","Anthony Davis|AD","Kyrie Irving"],
 ["Maverick Carter","Rich Paul","Chris Bosh","Dru Joyce","Frankie Walker","Steve Nash","JJ Redick","Kevin Love","Pat Riley","Erik Spoelstra","Tyronn Lue|Ty Lue","Dan Gilbert"],
 ["Sian Cotton","Willie McGee","Romeo Travis","Dru Joyce III|Little Dru","Randy Mims","Amy Schumer","Carmelo Anthony|Melo","Chris Paul|CP3"],
 ["Keith Dambrot","Eddie Jackson","Brandon Weems","Mike Mancias"]]},

/* Relativity Space */
{topic:"Relativity Space", q:"Name a fact about the rocket company Relativity Space", t:[
 ["3D-printed rockets|~3d|~print","It's a rocket company|~rocket|~space|~launch"],
 ["Based in Long Beach, CA|~long beach","The Terran 1 rocket|~terran 1|~terran one|~terran","Co-founded by Tim Ellis|~tim ellis|~ellis","Eric Schmidt became CEO|~eric schmidt|~schmidt|~google"],
 ["Terran R, its bigger reusable rocket|~terran r|~reusab","Stargate, its giant 3D printer|~stargate","Aeon engines|~aeon","Runs on methane and liquid oxygen|~methane|~methalox|~oxygen","Founded in 2015|~2015","Co-founded by Jordan Noone|~jordan noone|~noone","Terran 1 reached space in 2023|~2023|~reached space","Founders came from SpaceX and Blue Origin|~blue origin|~spacex"],
 ["First mission was named 'GLHF'|~glhf|~good luck have fun","Engine testing at NASA Stennis, Mississippi|~stennis|~mississippi|~nasa","Launches from Cape Canaveral|~cape canaveral|~canaveral|~florida|~lc 16","Y Combinator alum|~y combinator|~yc","HQ is a former Boeing C-17 factory|~boeing|~c 17|~c17","Goal of 3D printing on Mars|~mars"],
 ["Terran 1 was about 85% 3D printed by mass|~85","Terran 1 only flew once|~once|~one launch|~only one|~failed to reach orbit|~orbit","Jared Leto was an investor|~jared leto|~leto","Mark Cuban was an investor|~mark cuban|~cuban"]]},
{topic:"Relativity Space", q:"Name a rocket or space launch company (or agency)", t:[
 ["SpaceX","NASA","Blue Origin"],
 ["Rocket Lab","Virgin Galactic","Relativity Space|Relativity","United Launch Alliance|ULA","Boeing"],
 ["Firefly Aerospace|Firefly","Virgin Orbit","Astra","Northrop Grumman","Lockheed Martin","Arianespace|Ariane","Axiom Space|Axiom","Sierra Space|Sierra Nevada","ABL Space","Roscosmos","ESA|European Space Agency","JAXA","ISRO"],
 ["Stoke Space|Stoke","Isar Aerospace|Isar","Rocket Factory Augsburg|RFA","Gilmour Space|Gilmour","Skyroot","Orbex","LandSpace","iSpace","Galactic Energy","CNSA","Aerojet Rocketdyne","Vast"],
 ["Agnikul","Phantom Space","Momentus","Exos Aerospace","bluShift Aerospace|bluShift","Space Pioneer","Vaya Space","Interstellar Technologies","Gilmour","Launcher"]]},

/* Amazon animation */
{topic:"Amazon Animation", q:"Name an animated show or movie on Amazon Prime Video", t:[
 ["Invincible","The Legend of Vox Machina|Vox Machina"],
 ["Hazbin Hotel","Batman: Caped Crusader|Caped Crusader","Secret Level","The Mighty Nein|Mighty Nein","The Boys Presents: Diabolical|Diabolical"],
 ["Sausage Party: Foodtopia|Foodtopia","Undone","Fairfax","Bat-Fam|Batfam","Pete the Cat"],
 ["Tumble Leaf","If You Give a Mouse a Cookie","Bug Diaries","Do, Re & Mi|Do Re Mi","Lost in Oz","Wishenpoof"],
 ["Creative Galaxy","The Stinky & Dirty Show|Stinky and Dirty","Little Big Awesome","Costume Quest","Niko and the Sword of Light","Danger & Eggs|Danger and Eggs"]]},
{topic:"Amazon Animation", q:"Name a character or voice actor from Invincible", people:true, t:[
 ["Mark Grayson|Invincible|Mark","Omni-Man|Nolan Grayson|Nolan|Omniman"],
 ["Atom Eve|Eve","Debbie Grayson|Debbie","Allen the Alien|Allen","Cecil Stedman|Cecil","Steven Yeun","J.K. Simmons|JK Simmons","Sandra Oh"],
 ["Robot|Rudy","Monster Girl","Rex Splode|Rex","Dupli-Kate|Duplikate","Battle Beast","Thragg","Angstrom Levy|Angstrom","Conquest","Oliver Grayson|Oliver|Kid Omni-Man","Gillian Jacobs","Zazie Beetz","Walton Goggins","Seth Rogen","Mark Hamill","Art Rosenbaum|Art"],
 ["Titan","The Immortal|Immortal","War Woman","Darkwing","Red Rush","Aquarus","Green Ghost","Martian Man","Amber Bennett|Amber","William Clockwell|William","Shapesmith","Black Samson","Powerplex","Mauler Twins|Maulers","Donald Ferguson|Donald","Sterling K. Brown","Jason Mantzoukas","Zachary Quinto","Ross Marquand"],
 ["Bulletproof","Shrinking Rae","Anissa","D.A. Sinclair|Sinclair","Machine Head","Damien Darkblood|Darkblood","Lucan","Robert Kirkman|Kirkman","Mahershala Ali","Clancy Brown","Kevin Michael Richardson","Khary Payton","Grey DeLisle","Chris Diamantopoulos"]]},

/* Weedmaps */
{topic:"Weedmaps", q:"Name a fact about the company Weedmaps", t:[
 ["An app for finding dispensaries|~dispensar|~find|~locat","A cannabis marketplace|~cannabis|~marijuana|~weed|~pot|~marketplace"],
 ["Headquartered in Irvine, CA|~irvine|~orange county|~oc","Delivery orders|~deliver","Deals and discounts|~deal|~discount|~coupon","Customer reviews|~review|~rating","Founded in 2008|~2008","Dispensary menus|~menu"],
 ["Co-founded by Justin Hartfield|~justin hartfield|~hartfield","Publicly traded as WM Technology|~wm technology|~public|~ipo|~nasdaq|~stock|~wm tech","Went public through a SPAC|~spac|~silver spike","Green logo|~green|~logo","Strain info pages|~strain","Order ahead for pickup|~pickup|~pick up|~order ahead|~order online","A map of nearby shops|~map"],
 ["Stock ticker MAPS|~ticker|MAPS","Museum of Weed pop-up|~museum","Business software for dispensaries|~software|~saas|~wm business|~point of sale|~pos","Listings for doctors and medical cards|~doctor|~medical","Co-founder Keith Hoerling|~keith hoerling|~hoerling"],
 ["Co-founder Doug Francis|~doug francis|~francis","Former CEO Chris Beals|~chris beals|~beals","Once owned by General Cannabis|~general cannabis","Started as a side project|~side project"]]},
{topic:"Weedmaps", q:"Name a company headquartered in Irvine, CA (like Weedmaps)", t:[
 ["In-N-Out Burger|In-N-Out|In N Out","Blizzard Entertainment|Blizzard"],
 ["Taco Bell","Weedmaps","Kia America|Kia","Mazda North America|Mazda","Edwards Lifesciences|Edwards","The Irvine Company|Irvine Company","Rivian"],
 ["Masimo","Vizio","Linksys","CoreLogic","Ingram Micro","Skyworks Solutions|Skyworks","Alteryx","Allergan"],
 ["Boot Barn","The Habit Burger Grill|Habit Burger|The Habit","Golden State Foods","Lantronix","Five Point Holdings|FivePoint","Gaikai"],
 ["Paciolan","Tri Pointe Homes|Tri Pointe","Kofax","Cylance"]]},

/* Roku */
{topic:"Roku", q:"Name a Roku product or feature", t:[
 ["Roku TV","Roku Remote|Remote|Voice Remote|Roku Voice Remote"],
 ["Roku Streaming Stick|Streaming Stick|Stick","Roku Ultra|Ultra","Roku Express|Express","The Roku Channel|Roku Channel","Home screen"],
 ["Roku Streambar|Streambar|Soundbar","Roku City|Screensaver","Lost remote finder|Remote finder|Find my remote","Private listening|Headphones|Headphone jack","Shortcut buttons|Netflix button|App buttons","Roku Smart Home|Smart Home|Cameras|Doorbell","Roku Pro Series|Pro Series","Roku OS"],
 ["Roku Originals|Originals","Live TV Channel Guide|Live TV|Channel Guide","Roku mobile app|Mobile app","Roku Pay","Roku Wireless Speakers|Speakers|Wireless Speakers","Roku Search|Search","Roku Sports Channel|Sports Channel","Free movies|Free content"],
 ["Roku DVP|Netflix Player|Roku Netflix Player","Roku 2","Roku Premiere|Premiere","Roku Smart Soundbar","Backdrops","Roku 4","Roku 3"]]},
{topic:"Roku", q:"Name a fact about Roku the company", t:[
 ["It's a streaming company|~stream","Makes TVs and streaming players|~tv|~device|~player|~box"],
 ["Founded by Anthony Wood|~anthony wood|~wood","Its color is purple|~purple","Based in San Jose, CA|~san jose|~bay area|~silicon valley|~california","Free, ad-supported channels|~free|~ads|~advertis"],
 ["'Roku' means 'six' in Japanese|~six|~japanese|~6","Started as a project inside Netflix|~netflix","Founded in 2002|~2002","Went public in 2017|~2017|~ipo|~public|~nasdaq|~stock","Bought Quibi's shows|~quibi","Licenses Roku OS to TV makers like TCL|~tcl|~hisense|~licens"],
 ["Made 'Weird: The Al Yankovic Story'|~weird|~al yankovic|~weird al","First player came out in 2008|~2008","Anthony Wood invented an early DVR (ReplayTV)|~replaytv|~replay|~dvr","It was Wood's sixth company|~sixth"],
 ["The Netflix effort was code-named Project Griffin|~griffin","Earlier HQ in Los Gatos and Saratoga|~los gatos|~saratoga"]]},

/* Fortnite */
{topic:"Fortnite", q:"Name a Fortnite map location (any season)", t:[
 ["Tilted Towers|Tilted","Pleasant Park|Pleasant"],
 ["Retail Row","Salty Springs|Salty","Loot Lake","Dusty Depot|Dusty Divot|Dusty","Greasy Grove|Greasy","Lucky Landing","Paradise Palms"],
 ["Fatal Fields","Misty Meadows","Sweaty Sands","Holly Hedges","Slurpy Swamp","Catty Corner","Weeping Woods","Lonely Lodge","Wailing Woods","Risky Reels","Snobby Shores","Haunted Hills","Junk Junction","Shifty Shafts","Frenzy Farm|Frenzy Fields","Lazy Lake|Lazy Links|Lazy Lagoon","Moisty Mire"],
 ["Anarchy Acres","Flush Factory","Tomato Town|Tomato Temple","Leaky Lake","Polar Peak","Happy Hamlet","Neo Tilted","Mega Mall","The Agency","Stark Industries","The Authority","Coral Castle","Logjam Lumberyard|Logjam","Steamy Stacks","Dirty Docks","Craggy Cliffs","Colossal Coliseum"],
 ["Grand Glacier","Brutal Bastion","Mighty Monument","Fort Crumpet","Chonker's Speedway","Rebel's Roost","Sleepy Sound","Lavish Lair"]]},
{topic:"Fortnite", q:"Name a Fortnite skin or crossover character", t:[
 ["Jonesy","Peely","Fishstick"],
 ["Drift","Raven","Midas","Renegade Raider","Skull Trooper","Black Knight","Meowscles","Ghoul Trooper","Cuddle Team Leader","Travis Scott","Spider-Man|Spiderman","Goku","John Wick","Marshmello","Ariana Grande","Darth Vader"],
 ["Lynx","Ikonik","Aura","Crystal","Brite Bomber","Galaxy","The Foundation","The Visitor","Agent Jones","Eminem","Snoop Dogg","Mariah Carey","Naruto","Master Chief","Kratos","Peter Griffin","Iron Man","Deadpool","Thanos","Ninja","LeBron James|LeBron","Batman","The Mandalorian|Mandalorian"],
 ["Aerial Assault Trooper","Recon Expert","Tomatohead","Rust Lord","Calamity","Leviathan","Omega","Carbide","Dark Voyager","Rex","Tricera Ops","Love Ranger","SpongeBob","Solid Snake","Lara Croft","Doctor Doom"],
 ["Sparkle Specialist","Elite Agent","Rabbit Raider","Plague","Sgt. Winter","Merry Marauder","Nog Ops","Crackshot","Codename E.L.F.|Codename Elf","Red Knight","Royale Knight","Blue Squire"]]},
{topic:"Fortnite", q:"Name a Fortnite item, emote, or game feature", t:[
 ["Victory Royale","Battle Bus","Building|Build","The Storm|Storm"],
 ["V-Bucks|Vbucks","Battle Pass","The Floss|Floss","Default Dance|Default","Chug Jug","Slurp Juice","Shield Potion|Shields|Big Pot","Mini Shield|Minis","Pump Shotgun|Pump","Supply Llama|Llama","Zero Build","Epic Games|Epic"],
 ["Orange Justice","Take the L","Electro Shuffle","Fresh","Hype","Boogie Bomb","SCAR|Assault Rifle|AR","Tactical Shotgun|Tac","Rocket Launcher|RPG","Launch Pad","Glider","Pickaxe","Emotes|Emote","Save the World","Creative","Battle Royale","LEGO Fortnite|Lego","Fortnite Festival|Festival","Fortnite OG|OG","Supply Drop","Bandages|Bandage","Med Kit|Medkit"],
 ["The Griddy|Griddy","Scenario","Ride the Pony","Laugh It Up","Infinity Blade","Drum Gun","Chug Splash","Port-a-Fort","Grappler","Bush","Rocket Racing","UEFN|Unreal Editor","Travis Scott concert|Astronomical","The Black Hole|The End","Kevin the Cube|The Cube|Kevin","Gold SCAR|Golden Scar"],
 ["Clinger","Flint-Knock Pistol","Guided Missile","Shockwave Grenade","Impulse Grenade","Boom Box","Zapotron","Tim Sweeney"]]},

/* Red Dead Redemption 2 */
{topic:"Red Dead Redemption 2", q:"Name a character from Red Dead Redemption 2 (or the actor)", people:true, t:[
 ["Arthur Morgan|Arthur","Dutch van der Linde|Dutch","John Marston"],
 ["Sadie Adler|Sadie","Micah Bell|Micah","Charles Smith|Charles","Hosea Matthews|Hosea","Abigail Marston|Abigail Roberts|Abigail","Jack Marston","Javier Escuella|Javier","Bill Williamson"],
 ["Lenny Summers|Lenny","Sean MacGuire","Kieran Duffy|Kieran","Uncle","Tilly Jackson|Tilly","Mary-Beth Gaskill|Mary-Beth|Mary Beth","Karen Jones","Susan Grimshaw|Miss Grimshaw|Grimshaw","Simon Pearson|Pearson","Leopold Strauss|Strauss","Reverend Swanson|Swanson|Orville Swanson","Molly O'Shea|Molly","Josiah Trelawny|Trelawny","Agent Milton|Andrew Milton|Milton","Colm O'Driscoll|Colm","Eagle Flies","Rains Fall"],
 ["Leviticus Cornwall|Cornwall","Angelo Bronte|Bronte","Mary Linton","Sister Calderón|Sister Calderon","Edgar Ross|Agent Ross","Hamish Sinclair|Hamish","Guido Martelli","Albert Mason","Charlotte Balfour","Thomas Downes|Downes","The Strange Man|Strange Man","Gavin","Francis Sinclair","Algernon Wasp","Roger Clark"],
 ["Charles Chatenay|Chatenay","Edith Downes","Archie Downes","Jimmy Brooks","Benjamin Byron Davis","Rob Wiethoff","Alex McKenna","Peter Blomquist","Noshir Dalal"]]},
{topic:"Red Dead Redemption 2", q:"Name a place in Red Dead Redemption 2", t:[
 ["Saint Denis|St. Denis|Saint-Denis|St Denis","Valentine","Blackwater"],
 ["Strawberry","Rhodes","Annesburg","Armadillo","Tumbleweed","Van Horn","Guarma","Horseshoe Overlook"],
 ["Colter","Clemens Point","Shady Belle","Beaver Hollow","Lemoyne","New Hanover","West Elizabeth","New Austin","Ambarino","Emerald Ranch","Flatneck Station","Mount Hagen","Big Valley","Bayou Nwa","Heartland Oil Fields|Heartlands","Lagras","Riggs Station","Beecher's Hope|Beechers Hope","Fort Wallace","Sisika Penitentiary|Sisika"],
 ["Wapiti|Wapiti Reservation","Butcher Creek","Braithwaite Manor|Braithwaite","Caliga Hall|Caliga","Lakay","Thieves Landing","Manzanita Post","Lake Owanjila|Owanjila","Flat Iron Lake","Lannahechee River","Kamassa River","Dakota River","Bluewater Marsh","Roanoke Ridge","The Grizzlies|Grizzlies","Cholla Springs","Rio Bravo"],
 ["Hennigan's Stead","Gaptooth Ridge","Lake Isabella","Brandywine Drop","Elysian Pool","O'Creagh's Run","Moonstone Pond","Doverhill","MacFarlane's Ranch","Pacific Union Railroad Camp"]]},
{topic:"Red Dead Redemption 2", q:"Name something from Red Dead Redemption 2 (items, gameplay, story)", t:[
 ["Horses|Horse","Dead Eye"],
 ["Honor system|Honor","The camp|Camp|Gang camp","Legendary animals","Tuberculosis|TB","Bounty hunting|Bounty|Bounties","Hunting","Fishing","Van der Linde gang|The gang","Rockstar Games|Rockstar","Cowboys|Outlaws|Wild West"],
 ["Satchel","Arthur's journal|Journal","Arthur's hat|Hat","Baths|Bathing","Poker","Five Finger Fillet","Dominoes","Horse bonding","Train robbery|Robbing trains","The Pinkertons|Pinkertons|Pinkerton","Tahiti|I have a plan|We need money","Red Dead Online","1899","White Arabian","Gun cleaning|Gun oil"],
 ["Legendary bear|Bharati","Legendary buck","The Count","Boadicea","Cigarette cards","Dinosaur bones","Rock carvings","Dreamcatchers","Chain gang","Moonshine","Treasure maps","Gold bars","Mango plantation|Mangoes"],
 ["Vampire in Saint Denis|Vampire","Bigfoot|Sasquatch","UFO","Ghost train","Night Folk","Lemoyne Raiders","Murfree Brood","Skinner Brothers","Del Lobos","Laramie gang"]]},
/* Ryan Huffman — video producer */
{topic:"Ryan Huffman", q:"Name a fact about video producer Ryan Huffman", t:[
 ["He's a producer|~produc","He makes music videos and commercials|~music video|~commercial|~video|~film"],
 ["Founded Huffman Creative|~huffman creative|~production company|~his own company|~own company|~founder|~founded|~owns","Based in Los Angeles|~los angeles|LA|L.A.|~lives in la","Went to Chapman University|~chapman|~dodge","Grew up in San Diego|~san diego"],
 ["Has a twin brother|~twin","Produced Megan Thee Stallion's 'Her'|~megan","Got an MTV VMA nomination|~vma|~mtv","Worked at Revolt TV|~revolt","Made short films as a kid|~short film|~kid|~childhood|~teen"],
 ["2 Chainz & Ariana Grande's 'Rule the World'|~2 chainz|~two chainz|~ariana|~rule the world","Nat Geo's 'Showdown of the Unbeatables'|~national geographic|~nat geo|~showdown","Clients like Nike, Adidas and Google|~nike|~adidas|~google|~coca cola|~coke|~microsoft|~meta|~amazon|~brands","Clio and Telly nominations|~clio|~telly|~ukmva|~award"],
 ["Chapman class of 2013|~2013","50+ projects in his company's first year|~50","Co-led a Chapman panel on documentaries|~panel|~documentar","Wrote and produced 'Revolt Live' episodes|~revolt live|~writer|~wrote"]]},
/* LA Metro */
{topic:"LA Metro", q:"Name an LA Metro rail line, busway, or station", t:[
 ["Union Station","Red Line|B Line","Expo Line|E Line"],
 ["Blue Line|A Line","Gold Line|L Line","Purple Line|D Line","Green Line|C Line","Orange Line|G Line","Hollywood/Highland|Hollywood and Highland","7th St/Metro Center|7th Street Metro Center|Metro Center|7th and Metro","North Hollywood|NoHo","Universal City/Studio City|Universal City|Universal","Downtown Santa Monica|Santa Monica"],
 ["Silver Line|J Line","K Line|Crenshaw Line","Pershing Square","Hollywood/Vine|Hollywood and Vine","Little Tokyo/Arts District|Little Tokyo|Arts District","Memorial Park|Pasadena|Del Mar","Downtown Long Beach|Long Beach","Culver City","Wilshire/Vermont","Westlake/MacArthur Park|MacArthur Park","Chinatown","Expo Park/USC|USC","LAX/Metro Transit Center|LAX","Grand Av Arts/Bunker Hill|Bunker Hill|Grand Ave","Highland Park","Azusa","Norwalk","Redondo Beach","El Monte|El Monte Station","Harbor Gateway Transit Center|Harbor Gateway","Chatsworth","Warner Center"],
 ["Willowbrook/Rosa Parks|Rosa Parks|Willowbrook","Expo/Crenshaw","Aviation/Century","Mariachi Plaza","Soto","Atlantic","103rd St/Watts Towers|Watts Towers|Watts","Wilshire/Western","Hollywood/Western","Vermont/Sunset","Vermont/Santa Monica","Civic Center/Grand Park|Civic Center","Pico","Slauson","Leimert Park","Downtown Inglewood|Inglewood","Del Amo","APU/Citrus College","Sierra Madre Villa","South Pasadena","Heritage Square","Palms","Westwood/Rancho Park","Bundy","26th St/Bergamot|Bergamot","17th St/SMC|SMC","La Cienega/Jefferson","Jefferson/USC","Vermont/Athens","El Segundo","Hawthorne/Lennox","Wilshire/Normandie","Vermont/Beverly","Indiana","East LA Civic Center","Compton","Artesia","Pacific Coast Hwy|PCH","Fairview Heights","Westchester/Veterans","Van Nuys","Reseda","Sepulveda","Balboa","Woodley","Pierce College","Canoga","Laurel Canyon","Valley College","Woodman","Tampa","Lankershim"],
 ["Farmdale","Douglas","Mariposa","Maravilla","Firestone","Florence","Wardlow","Willow St","Anaheim St","5th St","1st St","Pacific Ave","Hyde Park","Martin Luther King Jr|MLK","Vernon","Washington","San Pedro St","Grand/LATTC|LATTC","Lincoln/Cypress","Fillmore","Lake","Allen","Arcadia","Monrovia","Duarte/City of Hope|Duarte","Irwindale","Lakewood Blvd","Long Beach Blvd","Crenshaw","Avalon","Harbor Freeway","Hawthorne","Manchester","Rosecrans","Slauson/Harbor Fwy","37th St/USC","Pico/Aliso","Cal State LA","Patsaouras Plaza"]]},
{topic:"LA Metro", q:"Name a fact about LA Metro (fares, history, how it works)", t:[
 ["TAP card|~tap","Trains and buses|~train|~bus|~subway|~rail|~light rail"],
 ["Fare is $1.75|~1 75|~175|~fare|~1 dollar 75","Union Station is the hub|~union station|~hub","LA traffic is why people ride it|~traffic|~car","Stops at the Hollywood Walk of Fame|~walk of fame|~hollywood","Gets you to LAX|~lax|~airport","Dodger Stadium Express bus|~dodger","Metro Bike Share|~bike","Lines are named with letters now|~letter|~renamed","The Expo Line goes to the beach in Santa Monica|~santa monica|~beach"],
 ["Blue Line opened in 1990|~1990","Red Line subway opened in 1993|~1993","Regional Connector opened in 2023|~regional connector|~connector","Measure M and Measure R sales taxes|~measure|~sales tax|~tax","Expanding for the 2028 Olympics|~olympic|~2028","Metro Micro on-demand rides|~micro|~on demand","Buses on freeway busways (J and G Lines)|~freeway|~busway","Purple Line extension to Westwood|~westwood|~extension|~ucla|~beverly hills","Art in the stations|~art|~mural","Free rides for students (GoPass)|~gopass|~student|~free"],
 ["Film-reel ceiling at Hollywood/Highland|~film reel|~ceiling","Sepulveda Pass transit project|~sepulveda","LIFE program for low-income riders|~life program|~low income","Metro Ambassadors|~ambassador","Successor to the old Pacific Electric Red Cars|~red car|~pacific electric|~streetcar|~trolley","Expo Line follows an old Red Car route|~old route","Busy at rush hour|~rush"],
 ["Union Station opened in 1939|~1939","Angels Flight is next to a Metro stop|~angels flight","CEO Stephanie Wiggins|~stephanie wiggins|~wiggins","Run by a board including county supervisors|~board|~supervisor"]]},

/* Dog eye infections */
{topic:"Dog Eye Infections", q:"Name an eye infection or eye problem dogs can get", t:[
 ["Pink eye|Conjunctivitis|Eye infection"],
 ["Cherry eye","Corneal ulcer|Eye ulcer|Ulcer|Scratched cornea|Scratched eye","Dry eye","Cataracts|Cataract","Glaucoma"],
 ["Keratitis","Uveitis","Blepharitis|Eyelid infection|Eyelid inflammation","Entropion","Ectropion","KCS|Keratoconjunctivitis sicca","Stye|Styes","Tear duct infection|Blocked tear duct","Epiphora|Excessive tearing|Tear stains"],
 ["Pannus|Chronic superficial keratitis","Distichiasis","Dacryocystitis","Chalazion","Progressive retinal atrophy|PRA","Retinal detachment","Lens luxation","Hordeolum","Corneal dystrophy","Nuclear sclerosis"],
 ["Orbital cellulitis","Retrobulbar abscess|Eye abscess","Canine distemper|Distemper","Blastomycosis","Ehrlichiosis","Pseudomonas","Canine herpesvirus","Horner's syndrome|Horner syndrome","Collie eye anomaly","Leptospirosis"]]},
{topic:"Dog Eye Infections", q:"Name a sign your dog might have an eye infection", t:[
 ["Red eyes|~red","Eye discharge|~discharge|~goop|~gunk|~crust|~booger|~mucus|~pus"],
 ["Squinting|~squint","Swollen eye|~swell|~swollen|~puffy","Watery eyes|~water|~tear","Pawing at the eye|~paw|~scratch|~rub","Itchy eyes|~itch"],
 ["Yellow or green discharge|~green|~yellow","Cloudy eye|~cloud|~hazy|~milky","Keeping the eye shut|~closed|~shut|~won t open","Rubbing face on the floor|~rubbing face|~carpet|~floor","Blinking a lot|~blink"],
 ["Sensitive to light|~light|~photophobia","Third eyelid showing|~third eyelid","Bloodshot eyes|~bloodshot","A bad smell|~smell|~odor|~stink","Low energy|~letharg|~tired|~energy"],
 ["Uneven pupils|~pupil|~anisocoria","Bulging eye|~bulg","Pain when chewing|~chew|~mouth","Won't let you touch its head|~head shy|~touch","Bumping into things|~bump"]]},
{topic:"Dog Eye Infections", q:"Name a dog breed that's prone to eye problems", t:[
 ["Pug","Shih Tzu","French Bulldog|Frenchie"],
 ["English Bulldog|Bulldog","Boston Terrier","Pekingese","Cocker Spaniel","Cavalier King Charles Spaniel|Cavalier|King Charles","Boxer","Basset Hound","Beagle","Poodle","Golden Retriever","Labrador Retriever|Labrador|Lab"],
 ["Lhasa Apso","Shar-Pei|Shar Pei","Bloodhound","Siberian Husky|Husky","German Shepherd","Collie","Chow Chow","Saint Bernard|St Bernard","Yorkshire Terrier|Yorkie","Maltese","Chihuahua","Bichon Frise|Bichon","Mastiff"],
 ["Great Dane","Miniature Schnauzer|Schnauzer","Dachshund","Akita","Border Collie","Australian Shepherd|Aussie","Shetland Sheepdog|Sheltie","Brussels Griffon","Japanese Chin","Neapolitan Mastiff","Newfoundland","Springer Spaniel"],
 ["Belgian Tervuren","Sealyham Terrier","Tibetan Terrier","Jack Russell Terrier|Jack Russell","Chinese Crested","Samoyed","Weimaraner","Bullmastiff","Dogue de Bordeaux"]]},

/* ROG Ally */
{topic:"ROG Ally", q:"Name a fact or feature of the ASUS ROG Ally handheld", t:[
 ["It's a handheld gaming PC|~handheld|~portable|~gaming pc|~pc|~gaming","Made by ASUS|~asus"],
 ["Runs Windows 11|~windows","A Steam Deck rival|~steam deck|~rival|~competitor","ROG stands for Republic of Gamers|~republic of gamers|~republic","Xbox versions: ROG Xbox Ally|~xbox","The ROG Ally X|~ally x","Plays your Steam games|~steam","7-inch screen|~7 inch|~seven inch|~7"],
 ["AMD Ryzen Z1 Extreme chip|~amd|~ryzen|~z1|~z2","120Hz display|~120|~refresh","1080p screen|~1080|~full hd","Armoury Crate software|~armoury|~armory|~crate","Came out in 2023|~2023","Game Pass support|~game pass","Fingerprint reader in the power button|~fingerprint","Back paddle buttons|~back button|~paddle","microSD card slot|~micro sd|~microsd|~sd card|~sd","Short battery life|~battery"],
 ["XG Mobile external GPU port|~xg mobile|~egpu|~external gpu|~graphics card","microSD reader overheating problem|~overheat|~heat|~sd reader","Ally X has 24GB of RAM|~24|~ram|~memory","Ally X has an 80Wh battery|~80","Command Center menu|~command center","FreeSync Premium|~freesync","Dolby Atmos speakers|~dolby|~atmos|~speaker","Ryzen Z2 chips in the 2025 Xbox Ally|~2025|~z2 extreme","ASUS is from Taiwan|~taiwan"],
 ["Weighs about 1.3 pounds|~600|~1 3|~weight|~weighs|~pound","You can install Linux (Bazzite)|~linux|~bazzite|~steamos","Launched at $699|~699|~599|~price|~cost","Teased on April Fools' Day|~april fool"]]},
{topic:"ROG Ally", q:"Name a handheld gaming device (any era)", t:[
 ["Nintendo Switch|Switch","Steam Deck","Game Boy|Gameboy"],
 ["ROG Ally|Rog Ally|Rogue Ally|ASUS ROG Ally|Ally","PSP|PlayStation Portable","Nintendo DS|DS","3DS|Nintendo 3DS","Switch 2|Nintendo Switch 2","Game Boy Advance|GBA","Switch Lite|Nintendo Switch Lite"],
 ["Lenovo Legion Go|Legion Go","MSI Claw","PS Vita|PlayStation Vita|Vita","Game Gear|Sega Game Gear","Game Boy Color|GBC","PlayStation Portal","ROG Xbox Ally|Xbox Ally","ROG Ally X|Ally X","Analogue Pocket","Atari Lynx|Lynx","Game & Watch|Game and Watch"],
 ["Ayaneo","GPD Win","Retroid Pocket","Anbernic","Playdate","Logitech G Cloud","Razer Edge","N-Gage","Neo Geo Pocket","WonderSwan","Zotac Zone","OneXPlayer","Virtual Boy","Game Boy Micro","Nintendo DSi|DSi"],
 ["Tiger game.com|Game.com","Sega Nomad|Nomad","TurboExpress","Microvision","Gizmondo","Nokia N-Gage QD","Tapwave Zodiac","Pokémon Mini|Pokemon Mini","Evercade","Miyoo Mini","Pocket Sprite"]]},
/* Hasbulla */
{topic:"Hasbulla", q:"Name a fact about Hasbulla", t:[
 ["Nicknamed 'Mini Khabib'|~mini khabib|~khabib","Famous on TikTok and Instagram|~tiktok|~instagram|~social media|~internet|~viral|~meme|~famous"],
 ["From Dagestan, Russia|~dagestan|~russia","His feud with Abdu Rozik|~abdu|~rozik|~feud|~rival","Signed a deal with the UFC|~ufc|~contract|~dana white","Muslim|~muslim|~islam|~quran","Short stature (a form of dwarfism)|~dwarf|~short|~small|~tiny|~little"],
 ["From Makhachkala|~makhachkala","Close with Islam Makhachev|~makhachev|~islam makhachev","Scuffle with Abdu Rozik at UFC 267 in Abu Dhabi|~267|~scuffle|~abu dhabi","The viral fake press conference|~press conference|~face off","Born in 2002|~2002","Called out Conor McGregor|~conor|~mcgregor","Was in Islam Makhachev's corner at UFC 280|~280|~corner"],
 ["His dad is a plumber|~plumber|~dad|~father","Also feuded with Uzbek influencer Erali|~erali","Started posting videos in 2020|~2020","Has said he wants to study law and religion|~law|~lawyer|~theolog|~scholar|~study"],
 ["Last name is Magomedov|~magomedov","Said he wants to be Dagestan's Minister of Internal Affairs|~minister|~internal affairs|~politic"]]},
{topic:"Hasbulla", q:"Name a famous fighter from Dagestan (Hasbulla's home)", people:true, t:[
 ["Khabib Nurmagomedov|Khabib"],
 ["Islam Makhachev"],
 ["Umar Nurmagomedov","Usman Nurmagomedov","Zabit Magomedsharipov|Zabit","Magomed Ankalaev","Abdulmanap Nurmagomedov"],
 ["Shara Magomedov|Shara Bullet","Muslim Salikhov","Abubakar Nurmagomedov","Rustam Khabilov","Ali Bagautinov","Abdulrashid Sadulaev"],
 ["Gadzhimurad Antigulov","Buvaisar Saitiev","Said Nurmagomedov","Tagir Ulanbekov"]]},

/* Hasan Piker */
{topic:"Hasan Piker", q:"Name a fact about streamer Hasan Piker", t:[
 ["He's a Twitch streamer|~twitch|~stream","Political commentator|~politic|~leftist|~left wing|~progressive|~socialist|~commentator"],
 ["Goes by HasanAbi|~hasanabi|~abi","Worked at The Young Turks|~young turks|~tyt","His uncle is Cenk Uygur|~cenk|~uygur|~uncle","Turkish-American|~turk","Reacts to videos and news|~react","Streams for many hours a day|~hours|~every day|~long stream"],
 ["Grew up in Istanbul|~istanbul","Born in New Jersey|~new jersey|~nj|~new brunswick","Went to Rutgers|~rutgers","AOC's Among Us stream|~aoc|~among us|~ocasio","The Fear& podcast (formerly Fear&Malding)|~fear|~malding|~podcast","His dog Kaya|~kaya|~dog","Wrote for HuffPost|~huffpost|~huffington","Lives in Los Angeles|~los angeles|~west hollywood|~hollywood|LA","Has been temporarily banned from Twitch|~ban|~suspend"],
 ["'Abi' means 'big brother' in Turkish|~big brother|~older brother","Hosted TYT's 'The Breakdown'|~breakdown","Hosted TYT's 'Agitprop'|~agitprop","Started streaming in 2018|~2018","Left TYT in 2020|~2020|~left tyt","Most-watched Twitch streamer during 2020 election week|~election|~most watched","Also went to the University of Miami|~miami","Co-hosts with Will Neff|~will neff|~neff","Started out in TYT's ad sales department|~ad sales|~sales"],
 ["Born July 25, 1991|~july 25|~1991","QTCinderella and AustinShow joined his podcast|~qtcinderella|~qt|~austinshow","Hit 231,000 live viewers on Jan. 6, 2021|~231|~january 6|~jan 6","Middle name is Doğan|~dogan"]]},
{topic:"Hasan Piker", q:"Name a streamer, creator, or politician Hasan Piker has streamed or worked with", people:true, t:[
 ["Cenk Uygur","Alexandria Ocasio-Cortez|AOC"],
 ["Pokimane","Will Neff","QTCinderella","Ludwig","xQc","Ana Kasparian"],
 ["AustinShow","Mizkif","Valkyrae","Sykkuno","Disguised Toast","Corpse Husband","Ilhan Omar","Asmongold","Destiny"],
 ["Emiru","Myth","Dr Lupo|DrLupo","John Iadarola"],
 ["Andrew Callaghan","Kyle Kulinski"]]},
/* Fraternities (kept easy: general frat answers count too) */
{topic:"Beta Theta Pi", q:"Name anything about the fraternity Beta Theta Pi", t:[
 ["Brotherhood|~brother|~bros|~friendship|~friends","Greek letters|~letter|~greek","Chapters at lots of colleges|~chapter|~college|~university|~campus|~school|~fraternity|~frat","Nicknamed 'Beta'|~beta"],
 ["A frat house|~house","Rush / recruitment|~rush|~recruit|~bid","Pledging|~pledge","Parties|~party|~parties|~partying","Philanthropy and service|~philanthrop|~charity|~service|~volunteer|~fundrais","Founded in the 1800s|~1800|~19th century|~old","Founded at Miami University|~miami","Founded in 1839|~1839","Pink and blue colors|~pink|~blue","Dragon symbol|~dragon","'Men of Principle'|~men of principle|~principle","Rose is its flower|~rose|~flower"],
 ["Part of the Miami Triad|~triad|~sigma chi|~phi delt|~phi delta theta","Oxford, Ohio|~oxford|~ohio","Star and diamond symbols|~star|~diamond","Lots of Fortune 500 CEOs|~ceo|~fortune 500","Sam Walton was a Beta|~sam walton|~walmart","Nike co-founder Bill Bowerman was a Beta|~bowerman|~nike","John Wooden was a Beta|~wooden"],
 ["Founded August 8|~august 8|~aug 8|~8 8","Eight founders|~eight|~8 founders","First fraternity west of the Allegheny Mountains|~allegheny|~alleghenies|~west","First fraternity to publish its constitution|~constitution|~1879","More Supreme Court justices than any fraternity|~supreme court|~justice","Magazine called The Beta Theta Pi|~magazine"],
 ["Founder John Reily Knox|~john reily knox|~knox","First meeting at 9 p.m.|~9 pm|~nine","'The Bridge Builder' poem|~bridge builder","Over 220,000 lifetime members|~220|~223","Most Rhodes Scholars of any fraternity|~rhodes"]]},
{topic:"Delta Tau Delta", q:"Name anything about the fraternity Delta Tau Delta", t:[
 ["Brotherhood|~brother|~bros|~friendship|~friends","Greek letters|~letter|~greek","Chapters at lots of colleges|~chapter|~college|~university|~campus|~school|~fraternity|~frat","Nicknamed 'Delts'|~delt|~dtd"],
 ["A frat house|~house","Rush / recruitment|~rush|~recruit|~bid","Pledging|~pledge","Parties|~party|~parties|~partying","Philanthropy and service|~philanthrop|~charity|~service|~volunteer|~fundrais","Founded in the 1800s|~1800|~19th century|~old","Founded at Bethany College|~bethany","Founded in 1858|~1858","Purple, white and gold colors|~purple|~gold|~white","Will Ferrell is a Delt|~will ferrell|~ferrell","Matthew McConaughey is a Delt|~mcconaughey|~matthew","Purple iris flower|~iris|~flower"],
 ["Founded in (West) Virginia|~west virginia|~virginia","'Committed to Lives of Excellence'|~excellence|~committed","Philanthropy partner JDRF (diabetes research)|~jdrf|~diabetes","Drew Carey is a Delt|~drew carey|~carey","Paul Ryan is a Delt|~paul ryan|~ryan"],
 ["Motto: 'Labor for the Beautiful and the Good'|~labor|~beautiful","Merged with the Rainbow Fraternity in 1886|~rainbow fraternity|~merged|~1886","Magazine is called The Rainbow|~rainbow","Crescent symbol|~crescent","Truth, Courage, Faith, Power|~truth|~courage|~faith|~power","Eight founders|~eight|~8 founders"],
 ["Henry King Bell saved it during the Civil War|~henry king bell|~civil war","Alpha chapter is at Allegheny College|~allegheny","Founders House is on the National Register|~national register|~founders house","Some early records say 1861|~1861"]]},
{topic:"Phi Gamma Delta", q:"Name anything about the fraternity Phi Gamma Delta (FIJI)", t:[
 ["Brotherhood|~brother|~bros|~friendship|~friends","Greek letters|~letter|~greek","Chapters at lots of colleges|~chapter|~college|~university|~campus|~school|~fraternity|~frat","Nicknamed FIJI|~fiji|~phi gam"],
 ["A frat house|~house","Rush / recruitment|~rush|~recruit|~bid","Pledging|~pledge","Parties|~party|~parties|~partying","Philanthropy and service|~philanthrop|~charity|~service|~volunteer|~fundrais","Founded in the 1800s|~1800|~19th century|~old","Founded at Jefferson College|~jefferson","Founded in 1848|~1848","Royal purple color|~purple","Founded in Pennsylvania|~pennsylvania|~canonsburg","Fiji Islander parties|~islander|~island|~luau|~hawaiian"],
 ["Founded by the 'Immortal Six'|~immortal six|~six|~6 founders","Purple clematis flower|~clematis|~flower","Motto: 'Friendship, the sweetest influence'|~friendship|~sweetest","HQ in Lexington, Kentucky|~lexington|~kentucky","Mike Pence is a FIJI|~pence","Jack Nicklaus is a FIJI|~nicklaus","Johnny Carson was a FIJI|~carson","Calvin Coolidge was a FIJI|~coolidge"],
 ["Half of the 'Jefferson Duo' with Phi Kappa Psi|~jefferson duo|~phi kappa psi|~phi psi|~duo","Started as 'The Delta Association'|~delta association","'Not for College Days Alone'|~not for college days|~college days","White star on its flag|~white star|~star","Pig dinner tradition|~pig","'Press On!'|~perge|~press on"],
 ["Founded in a dorm room called 'Fort Armstrong'|~fort armstrong","Over 211,000 members|~211","Uses 'FIJI' because the Greek letters have limited use|~limit"]]},
{topic:"Fraternities", q:"Name a college fraternity (any Greek-letter one)", t:[
 ["Sigma Chi","Sigma Alpha Epsilon|SAE","Pi Kappa Alpha|Pike","Kappa Sigma","Beta Theta Pi|Beta","Delta Tau Delta|Delts|Delt","Phi Gamma Delta|FIJI|Phi Gam","Alpha Phi Alpha"],
 ["Sigma Nu","Phi Delta Theta|Phi Delt","Sigma Phi Epsilon|SigEp|Sig Ep","Lambda Chi Alpha|Lambda Chi","Alpha Tau Omega|ATO","Tau Kappa Epsilon|TKE|Teke","Delta Kappa Epsilon|DKE|Deke","Kappa Alpha Psi","Omega Psi Phi|Ques","Theta Chi","Kappa Alpha Order|KA","Alpha Epsilon Pi|AEPi","Phi Kappa Psi|Phi Psi","Delta Upsilon|DU","Pi Kappa Phi|Pi Kapp"],
 ["Zeta Beta Tau|ZBT","Chi Phi","Psi Upsilon|Psi U","Sigma Pi","Phi Beta Sigma","Iota Phi Theta","Delta Chi","Alpha Sigma Phi","Phi Kappa Sigma","Delta Sigma Phi","Phi Sigma Kappa","Sigma Alpha Mu|Sammy","Theta Xi","Alpha Delta Phi","Phi Kappa Tau","Kappa Delta Rho","Sigma Phi"],
 ["Zeta Psi","Chi Psi","Delta Phi","Acacia","Triangle","FarmHouse","Theta Delta Chi","Beta Upsilon Chi|BYX","Alpha Gamma Rho|AGR","Phi Kappa Theta","Alpha Chi Rho","Tau Delta Phi","Pi Lambda Phi","Alpha Kappa Lambda"],
 ["Delta Tau Chi (Animal House)|Delta Tau Chi|Animal House","Lambda Lambda Lambda (Revenge of the Nerds)|Lambda Lambda Lambda|Tri-Lambs|Tri Lambda","Phi Mu Delta","Kappa Delta Phi","Sigma Tau Gamma"]]},
{topic:"Fraternities", q:"Name a famous member of Beta Theta Pi, Delta Tau Delta, or Phi Gamma Delta", people:true, t:[
 ["Will Ferrell","Matthew McConaughey","Mike Pence"],
 ["Sam Walton","Jack Nicklaus","Johnny Carson","Calvin Coolidge","Drew Carey","Paul Ryan","John Wooden"],
 ["Bill Bowerman","Matthew Fox","Scott Bakula","Morgan Spurlock","Dean Smith","Richard Lugar","Bill Nelson","Tom Carper","E. B. White|EB White"],
 ["Byron White","Harold Sweatt","Zebulon Vance","John Cappelletti"],
 ["John Reily Knox","Henry King Bell","Naaman Fletcher","John Templeton McCarty"]]},

/* Dodge College */
{topic:"Dodge College", q:"Name a fact about Chapman University's Dodge College (film school)", t:[
 ["It's a film school|~film|~movie|~cinema","Part of Chapman University|~chapman"],
 ["In Orange, California|~orange|~california|~oc","Marion Knott Studios|~marion knott|~knott","The Duffer Brothers went there (Stranger Things)|~duffer|~stranger things","Ranked a top-5 film school|~rank|~top|~best"],
 ["Named for Lawrence and Kristina Dodge|~lawrence|~kristina|~larry dodge|~donor","Folino Theater|~folino","Ryan Huffman went there|~ryan|~huffman","Justin Simien went there (Dear White People)|~simien|~dear white people","Parker Finn went there (Smile)|~parker finn|~smile","Open 24/7 to students|~24 7|~24 hours|~all night","Sound stages|~sound stage|~soundstage|~stage","Degrees in film production, screenwriting and producing|~screenwrit|~producing|~production|~bfa|~mfa|~major"],
 ["Started in the 1990s as the School of Film and Television|~1990|~1992|~1996|~school of film and television","Digital Media Arts Center for animation and VFX|~digital media arts|~dmac|~animation|~vfx|~visual effects","Chapman Studios West|~studios west","LED-wall virtual production stage|~led|~virtual production|~volume","Dhont Documentary Center|~dhont|~documentar","Arnold Schwarzenegger was at the Knott Studios groundbreaking|~schwarzenegger|~arnold","Student Academy Award wins|~student academy|~academy award|~oscar"],
 ["Sodaro-Pankey Undergraduate School|~sodaro|~pankey","Removed 'Birth of a Nation' posters in 2019|~birth of a nation|~poster","Former dean Bob Bassett|~bob bassett|~bassett","Donor Paul Folino|~paul folino","Hosted the Busan West Film Festival|~busan"]]},
{topic:"Dodge College", q:"Name a well-known film school (like Dodge College)", t:[
 ["USC|University of Southern California","NYU|Tisch|NYU Tisch"],
 ["UCLA","AFI|American Film Institute","Chapman|Dodge College|Dodge","CalArts|California Institute of the Arts","Columbia"],
 ["LMU|Loyola Marymount","Emerson","Florida State|FSU","UT Austin|University of Texas","Wesleyan","Full Sail","New York Film Academy|NYFA","SCAD|Savannah College of Art and Design","Syracuse"],
 ["ArtCenter|Art Center College of Design","Cal State Northridge|CSUN","San Francisco State|SF State","Northwestern","Boston University|BU","Ithaca College|Ithaca","Temple","Vancouver Film School|VFS"],
 ["La Fémis|La Femis","Beijing Film Academy","National Film and Television School|NFTS","Łódź Film School|Lodz Film School|Lodz","FAMU","Toronto Metropolitan University|Ryerson"]]},
/* Kevin Wolf + MrBeast */
{topic:"Kevin Wolf", q:"Name a fact about content creator Kevin Wolf", t:[
 ["He's a content creator|~creator|~content|~youtube|~video|~film|~influencer|~social media"],
 ["He worked with MrBeast|~mrbeast|~mr beast|~beast|~jimmy"],
 ["He's behind Wolfbyte|~wolfbyte|~wolf byte|~byte"],
 [],
 []]},
{topic:"MrBeast", q:"Name anything MrBeast-related (people, videos, companies)", t:[
 ["MrBeast|Jimmy Donaldson|Jimmy|Mr Beast","Feastables","Beast Games"],
 ["Chandler Hallow|Chandler","Karl Jacobs|Karl","Nolan Hansen|Nolan","MrBeast Burger|Beast Burger","Squid Game recreation|Squid Game","Team Trees","Team Seas","Beast Philanthropy","Most-subscribed YouTube channel|Most subscribers|YouTube","Giving away money|Giveaways|Money"],
 ["Chris Tyson","Tareq Salameh|Tareq","Lunchly","Greenville, North Carolina|Greenville|North Carolina","Kevin Wolf","Last to Leave challenges|Last to leave","Beast Reacts","MrBeast Gaming|Beast Gaming","Prime Video|Amazon","Team Water"],
 ["Viewstats","Wichita, Kansas|Wichita|Kansas","Streamy Awards|Streamys","Kids' Choice Awards|Kids Choice","Buried alive video|Buried alive","Time 100|Time magazine","Started YouTube in 2012|2012"],
 ["MrBeast6000","Jake Franklin","$456,000 Squid Game prize|456000|456","WaterAid"]]},

/* Matt Komo */
{topic:"Matt Komo", q:"Name a fact about director and creator Matt Komo", t:[
 ["He's a filmmaker and content creator|~creator|~content|~film|~video|~director|~youtube|~youtuber|~filmmaker","Based in Los Angeles|~los angeles|LA|~la based|~lives in la"],
 ["Was head of social content at GoPro|~gopro|~go pro","Directs music videos|~music video","Photographer|~photo","Makes commercials for big brands|~brand|~commercial|~ads"],
 ["Worked with Tiësto|~tiesto","Worked with The Chainsmokers|~chainsmokers","Porsche campaign for the 911 and Taycan|~porsche|~911|~taycan","DJI Osmo Action 2 commercial|~dji|~osmo","Also produces music|~produc|~music|~dj","Graphic designer|~graphic|~design","Made a short film|~short film","Has a YouTube channel|~channel"],
 ["Went to film school|~film school","Guest on Entrepreneur's 'Leaders Create Leaders'|~leaders create leaders|~gerard adams|~entrepreneur","Guest on PolarPro's 'Golden Hour' podcast|~polarpro|~golden hour|~podcast","Collabed with Maxx Chewning|~maxx|~chewning"],
 ["His favorite IKONICK art piece is 'Keep Going'|~ikonick|~keep going","The Porsche project was in 2021|~2021"]]},
/* Bathroom etiquette */
{topic:"Bathroom Etiquette", q:"Name something that's bad bathroom etiquette", t:[
 ["Not washing your hands|~wash|~hands","Not flushing|~flush"],
 ["Leaving the seat up|~seat up|~seat","Peeing on the seat|~pee|~piss|~sprinkle|~dribble","Using up the toilet paper and not replacing it|~toilet paper|~tp|~roll|~replace","Taking forever|~forever|~too long|~hog|~long time","On your phone in there|~phone|~scrolling|~talking"],
 ["Clogging it and walking away|~clog|~plunge","Not spraying after|~spray|~smell|~stink|~febreze|~air freshener|~candle|~match","Leaving the door open|~door|~lock|~knock","Talking to someone in the next stall|~stall|~conversation|~chat|~small talk","Taking the urinal right next to someone|~urinal","Wet floor or counter|~wet|~water everywhere|~splash|~puddle","Leaving hair in the sink or shower|~hair|~shav"],
 ["Courtesy flush fails|~courtesy","Toothpaste left in the sink|~toothpaste|~spit","Leaving towels on the floor|~towel","Peeking through the stall gap|~peek|~gap|~look","Eating in the bathroom|~eat|~food|~snack","Not putting the lid down before flushing|~lid"],
 ["When you leave crumbs behind in the toilo after going poop|~crumb|~toilo|~skid|~streak|~leave behind|~left behind|~residue|~poop stain|~marks in the bowl|~floater"]]}
];


