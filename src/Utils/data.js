import weeis_bear from "./../images/menu/beers/p1big.jpg";

import burger_Gli from "./../images/menu/Glysteri_photos/Food/burg_egg.jpg"
import xoriatiki from "./../images/menu/Glysteri_photos/Food/chor_sal.jpg"
import cheesecake from "./../images/menu/Glysteri_photos/Food/che_str2.jpg"
import club_kot from "./../images/menu/Glysteri_photos/Food/club_cea.jpg"
import pizz_it from "./../images/menu/Glysteri_photos/Food/pizz_it.jpg"
import margarit_str from "./../images/menu/Glysteri_photos/Drinks/mar_str.jpg"
// Change
import pizz_gr from "./../images/menu/pizza/p1big.jpg"
import past_nap from "./../images/menu/pasta/p1big.jpg"
import ntakos_nap from "./../images/menu/salads/p2big.jpg"
import marg_coc from "./../images/menu/coctails/p2big.jpg"
import mohito_coc from "./../images/menu/coctails/p3big.jpg"
import passionito from "./../images/menu/coctails/p4big.jpg"



const photo = null;
const data = {
    categories: [
        // Kafedes
        {
            title: { el: "Καφέδες", en: "Coffees" },
            products: [
                {
                    title: { el: "Εσπρέσο", en: "Espresso" },
                    desc: { el: "", en: "" },
                    price: "3",
                    photo: photo,
                },
                {
                    title: { el: "Εσπρέσο Διπλός ", en: "Espresso double" },
                    desc: { el: "", en: "" },
                    price: "4",
                    photo: photo,
                },
                {
                    title: { el: "Εσπρέσο φρέντο ", en: "Espresso Freddo" },
                    desc: { el: "", en: "" },
                    price: "4",
                    photo: photo,
                },
                {
                    title: { el: "Kαπουτσίνο ", en: "Capuccino" },
                    desc: { el: "", en: "" },
                    price: "5",
                    photo: photo,
                },
                {
                    title: { el: "Kαπουτσίνο φρέντο ", en: "Capuccino Freddo" },
                    desc: { el: "", en: "" },
                    price: "5",
                    photo: photo,
                },
                {
                    title: { el: "Ελληνικός", en: "Greek coffee" },
                    desc: { el: "", en: "" },
                    price: "4",
                    photo: photo,
                },
                {
                    title: { el: "Φραπέ", en: "Frappe" },
                    desc: { el: "", en: "" },
                    price: "5",
                    photo: photo,
                },
                {
                    title: { el: "Νερό", en: "Water" },
                    desc: { el: "0.5L", en: "0.5L" },
                    price: "0,5",
                    photo: photo,
                },
                {
                    title: { el: "Νερό", en: "Water" },
                    desc: { el: "1L", en: "1L" },
                    price: "1",
                    photo: photo,
                },
            ],
        },
        //Bears
        {
            title: { el: "Μπύρες", en: "Beers" },
            products: [
                {
                    title: { el: "Έζα Λάγκερ", en: "Eza Lager" },
                    desc: { el: "", en: "" },
                    price: "5",
                    photo: photo,
                },
                {
                    title: { el: "Έζα Πιλς", en: "Eza Pils" },
                    desc: { el: "", en: "" },
                    price: "5",
                    photo: weeis_bear,
                },
                {
                    title: { el: "Χωρίς αλκοόλ", en: "No Alcohol" },
                    desc: { el: "", en: "" },
                    price: "5",
                    photo: photo,
                },
                {
                    title: { el: "Ράντλερ", en: "Radler" },
                    desc: { el: "", en: "" },
                    price: "6",
                    photo: photo,
                },
                {
                    title: { el: "Μηλίτης", en: "Cider" },
                    desc: { el: "", en: "" },
                    price: "6",
                    photo: photo,
                },
                {
                    title: { el: "Blue Island", en: "Blue Island" },
                    desc: { el: "", en: "" },
                    price: "6",
                    photo: photo,
                },
                {
                    title: { el: "Weis Beer", en: "Weis Beer" },
                    desc: { el: "", en: "" },
                    price: "6",
                    photo: weeis_bear,
                },
            ],
        },
        //Ximoi
        {
            title: { el: "Χυμοί", en: "Juices" },
            products: [
                {
                    title: { el: "Φυσικός Χυμός", en: "Fresh Juice" },
                    desc: { el: "", en: "" },
                    price: "6",
                    photo: photo,
                },
                {
                    title: { el: "Χυμός  Ποτήρι", en: "Juice box - cup" },
                    desc: { el: "", en: "" },
                    price: "6",
                    photo: photo,
                },
                {
                    title: { el: "Παιδικός Χυμός", en: "Κid's Juice" },
                    desc: { el: "", en: "" },
                    price: "2.5",
                    photo: photo,
                },
                {
                    title: { el: "Smoothies", en: "Smoothies" },
                    desc: { el: "", en: "" },
                    price: "6",
                    photo: photo,
                },
                {
                    title: { el: "Smoothies με αλκοόλ", en: "Smoothies with alcohol" },
                    desc: { el: "", en: "" },
                    price: "10",
                    photo: photo,
                },
                {
                    title: { el: "Λεμονάδα", en: "Lemonade" },
                    desc: { el: "", en: "" },
                    price: "4",
                    photo: photo,
                },
                {
                    title: { el: "Πορτοκαλάδα", en: "Οrange Juice" },
                    desc: { el: "", en: "" },
                    price: "4",
                    photo: photo,
                },
                {
                    title: { el: "Κάκα Κόλα", en: "Coca-Cola" },
                    desc: { el: "Normal / Light / Zero", en: "Normal / Light / Zero" },
                    price: "4",
                    photo: photo,
                },
                {
                    title: { el: "Σπράιτ", en: "Sprite" },
                    desc: { el: "", en: "" },
                    price: "4",
                    photo: photo,
                },
                {
                    title: { el: "Σόδα", en: "Soda water" },
                    desc: { el: "", en: "" },
                    price: "4",
                    photo: photo,
                },
                {
                    title: { el: "Τόνικ", en: "Tonic" },
                    desc: { el: "", en: "" },
                    price: "4",
                    photo: photo,
                },
                {
                    title: { el: "Red Bull", en: "Red Bull" },
                    desc: { el: "Kανονικό / Xωρίς ζάχαρη", en: "Normal / No sugar" },
                    price: "4",
                    photo: photo,
                },
                {
                    title: { el: "Κρύο Τσάι Λίπτον", en: "Lipton Ice Tea" },
                    desc: { el: "Ροδάκινο / Λεμονι / Πρασινο", en: "Peach / Lemon / Green" },
                    price: "4",
                    photo: photo,
                },
            ],
        },
        //driks
        {
            title:{el:"Ποτά",en:"Drinks"},
            products:[
                {
                    title: { el: "Μαύρη Havana", en: "Havana Black" },
                    desc: { el: "" },
                    price: "9",
                    photo: photo,
                },
                {
                    title: { el: "Λευκή Havana", en: "Havana White" },
                    desc: { el: "" },
                    price: "8",
                    photo: photo,
                },
                {
                    title: { el: "Absolute Vodka", en: "Absolute Vodka" },
                    desc: { el: "" },
                    price: "8",
                    photo: photo,
                },
                {
                    title: { el: "Beefeater", en: "Beefeater" },
                    desc: { el: "" },
                    price: "8",
                    photo: photo,
                },
                {
                    title: { el: "Grey Goose", en: "Grey Goose" },
                    desc: { el: "" },
                    price: "15",
                    photo: photo,
                },
                {
                    title: { el: "Patron", en: "Patron" },
                    desc: { el: "" },
                    price: "15",
                    photo: photo,
                },
                {
                    title: { el: "Chivas 18", en: "Chivas 18" },
                    desc: { el: "" },
                    price: "15",
                    photo: photo,
                },
                {
                    title: { el: "Hendrick's", en: "Hendrick's" },
                    desc: { el: "" },
                    price: "12",
                    photo: photo,
                },
                {
                    title: { el: "Johnnie Black", en: "Johnnie Black" },
                    desc: { el: "" },
                    price: "12",
                    photo: photo,
                },
                {
                    title: { el: "Jameson", en: "Jameson" },
                    desc: { el: "" },
                    price: "8",
                    photo: photo,
                },
                {
                    title: { el: "Diplomatico", en: "Diplomatico" },
                    desc: { el: "" },
                    price: "15",
                    photo: photo,
                },
                {
                    title: { el: "Beefeater 24", en: "Beefeater 24" },
                    desc: { el: "" },
                    price: "12",
                    photo: photo,
                },
                {
                    title: { el: "Olmeca tequila", en: "Olmeca tekila" },
                    desc: { el: "" },
                    price: "8",
                    photo: photo,
                },
                {
                    title: { el: "Aperol", en: "Aperol" },
                    desc: { el: "" },
                    price: "8",
                    photo: photo,
                },
                {
                    title: { el: "Campari", en: "Campari" },
                    desc: { el: "" },
                    price: "8",
                    photo: photo,
                },
                {
                    title: { el: "Σφηνάκι", en: "Shot" },
                    desc: { el: "" },
                    price: "3",
                    photo: photo,
                },
                {
                    title: { el: "Ούζο - Τσίπουρο", en: "Ouzo - Tsipouro" },
                    desc: { el: "" },
                    price: "5",
                    photo: photo,
                }
                
                
            ]
        },
        //Wines 
        {
            title:{el:"Κρασιά",en:"Wines"},
            products:[
                {
                    title: { el: "Ατομικό Λευκό", en: "White Wine" },
                    desc: { el: "187 ml", en: "187 ml" },
                    price: "5",
                    photo: photo,
                },
                {
                    title: { el: "Ατομικό Ροζέ", en: "Roze Wine" },
                    desc: { el: "187 ml", en: "187 ml" },
                    price: "5",
                    photo: photo,
                },
                {
                    title: { el: "Ατομικό Προσέκο", en: "Prosecco" },
                    desc: { el: "187 ml", en: "187 ml" },
                    price: "5",
                    photo: photo,
                },
                {
                    title: { el: "Φιάλες Κρασιού 750ml", en: "Bottles of Wine 750ml" },
                    desc: { el: "Ρωτήστε Σερβιτόρο", en: "Ask waiter" },
                    price: "",
                    photo: photo,
                },
                
                {
                    title: { el: "Βιβλία χώρα chardonnay", en: "Bibliaxora chardonnay" },
                    desc: { el: "", en: "" },
                    price: "45",
                    photo: photo,
                },
                {
                    title: { el: "Ψηλές Κορφές Λευκό", en: "Psiles Korfes White Wine" },
                    desc: { el: "", en: "" },
                    price: "35",
                    photo: photo,
                },
                {
                    title: { el: "Costa Lazaridi Amethystos Roze ", en: "Costa Lazaridi Amethystos Roze " },
                    desc: { el: "", en: "" },
                    price: "45",
                    photo: photo,
                },
                {
                    title: { el: "Costa Lazaridi Roze Merlot", en: "Costa Lazaridi Roze Merlot" },
                    desc: { el: "", en: "" },
                    price: "45",
                    photo: photo,
                },
                {
                    title: { el: "Costa Lazaridi malagouzia", en: "Costa Lazaridi malagouzia" },
                    desc: { el: "", en: "" },
                    price: "45",
                    photo: photo,
                },
                {
                    title: { el: "Costa Lazaridi Amethystos sauvignon", en: "Costa Lazaridi Amethystos sauvignon" },
                    desc: { el: "", en: "" },
                    price: "45",
                    photo: photo,
                },
                {
                    title: { el: "Costa Lazaridi Julia", en: "Costa Lazaridi Julia" },
                    desc: { el: "", en: "" },
                    price: "35",
                    photo: photo,
                },
            ]
        },
        //Kokteils
        {
            title:{el:"Κοκτέιλ",en:"Cocktails"},
            products:[
                {
                    title: { el: "Τσιχλόφουσκα", en: "Bubble Gum" },
                    desc: { 
                        el: "βότκα / 3sec (λικέρ Πορτοκάλι) / λάιμ / σιρόπι τσιχλόφουσκας", 
                        en: "voldka / 3sec (liquer Orange) / lime / bubblegum sirop" 
                    },
                    price: "10",
                    photo: photo,
                },
                {
                    title: { el: "Καϊπιρίνια", en: "Caipirihna" },
                    desc: { 
                        el: "κασάσα / ζαχάρη / λάιμ", 
                        en: "cashaca / sugar / lime "
                    },
                    price: "10",
                    photo: photo,
                },
                {
                    title: { el: "Μοχίτο", en: "Mojito" },
                    desc: { 
                        el: "ρούμι / ζαχάρη / λάιμ / μέντα", 
                        en: "rum / sugar / lime / mint"
                    },
                    price: "10",
                    photo: mohito_coc,
                },
                {
                    title: { el: "Μαργαρίτα", en: "Marghrita" },
                    desc: { 
                        el: "τεκίλα / 3sec (λικέρ Πορτοκάλι) / αλάτι / λάιμ ", 
                        en: "tekila / 3sec (liquer Orange) / lime / salt"
                    },
                    price: "10",
                    photo: marg_coc,
                },
                {
                    title: { el: "Μαργαρίτα Φράουλα", en: "Marghrita Strawberry" },
                    desc: { 
                        el: "τεκίλα / 3sec (λικέρ Πορτοκάλι) / αλάτι / Πουρές Φράουλα", 
                        en: "tekila / 3sec (liquer Orange) / salt / Strawberry Jam"
                    },
                    price: "10",
                    photo: margarit_str,
                },
                {
                    title: { el: "Aperol Spritz", en: "Aperol Spritz" },
                    desc: { 
                        el: "Aperol / Prosecco / soda", 
                        en: "Aperol / Prosecco / soda"
                    },
                    price: "10",
                    photo: photo,
                },
                {
                    title: { el: "Cuba Limbre", en: "Cuba Limbre" },
                    desc: { 
                        el: "ρούμι / λάιμ / κοκα κόλα", 
                        en: "rum / lime / coca-cola"
                    },
                    price: "10",
                    photo: photo,
                },
                {
                    title: { el: "Ντάκιουρι", en: "Daiquiri" },
                    desc: { 
                        el: "ρούμι / 3sec (λικέρ Πορτοκάλι) / λάιμ / ζάχαρη", 
                        en: "rum / 3sec (liquer Orange) / lime / sugar"
                    },
                    price: "10",
                    photo: photo,
                },
                {
                    title: { el: "Ντάκιουρι Φράουλα", en: "Daiquiri Strawberry" },
                    desc: { 
                        el: "ρούμι / 3sec (λικέρ Πορτοκάλι) / Πουρέ Φράουλας / ζάχαρη", 
                        en: "rum / 3sec (liquer Orange) / Strawberry jam  / sugar"
                    },
                    price: "10",
                    photo: photo,
                },
                {
                    title: { el: "Φραουλίτο", en: "Fraoulito" },
                    desc: { 
                        el: "βότκα / λάιμ /  Πουρέ Φράουλας / ζάχαρη", 
                        en: "vodka / lime / Strawberry jam / sugar"
                    },
                    price: "10",
                    photo: photo,
                },
                {
                    title: { el: "Παλόμα", en: "Paloma" },
                    desc: { 
                        el: "τεκίλα / αλάτι /   σοδα γρέιπφρουτ / λάιμ", 
                        en: "tekila / salt / soda grapefruit / lime"
                    },
                    price: "10",
                    photo: photo,
                },
                {
                    title: { el: "Τζιν Βασιλικού", en: "Gin Basil" },
                    desc: { 
                        el: "τζιν / ζάχαρη / λάιμ / βασιλικός", 
                        en: "gin / sugar /  basil / lime"
                    },
                    price: "10",
                    photo: photo,
                },
                {
                    title: { el: "Πινα Κολάντα", en: "Pina colada" },
                    desc: { 
                        el: "ρούμι / malibu / batida de coco / χυμός ανανά  / γάλα καρύδας", 
                        en: "rum  / malibu /  babatida de coco / pinnapple juice / coconut milk"
                    },
                    price: "10",
                    photo: photo,
                },
                
                {
                    title: { el: "Πασιονίτο", en: "Passionito" },
                    desc: { 
                        el: "ρούμι / Archers /   Πουρέ Πασιονφρουτ / λάιμ", 
                        en: "rum / Archers / Passionfruit jam / lime"
                    },
                    price: "12",
                    photo: passionito,
                },
                {
                    title: { el: "Ζόμπι", en: "Zombie" },
                    desc: { 
                        el: "ρούμια / παπάγια / λάιμ / σόδα γρέιπφρουτ / πάσιον φρουτ", 
                        en: "rums  / malibu /  babatida de coco / pinnapple juice / coconut milk"
                    },
                    price: "14",
                    photo: photo,
                },
                
                {
                    title: { el: "Κοκτέιλ Γλυστέρι", en: "Glisteri Cocktail" },
                    desc: { 
                        el: "", 
                        en: ""
                    },
                    price: "14",
                    photo: photo,
                },
                {
                    title: { el: "Σέικερ Σφηνάκια", en: "Shot Shaker" },
                    desc: { 
                        el: "", 
                        en: ""
                    },
                    price: "25",
                    photo: photo,
                },
                
                
              
                
                
            ]
        },
        //salates
        {
            title: { el: "Σαλάτες", en: "Salads" },
            products: [
                {
                    title: { el: "Kαίσαρα", en: "Ceasars" },
                    desc: { el: "iceberg, μαρούλι, κρουτόν, φιλέτο κοτόπουλο, μπέικον, παρμεζάνα ,σως σίζαρ", en: "iceberg, lettuce, croutons, parmesan, bacon, chicken, ceasars sauce" },
                    price: "10",
                    photo: photo,
                },
                {
                    title: { el: "Χωριάτικη", en: "Greek Salad" },
                    desc: { el: "Ντομάτα , αγγούρι ,πιπεριά, κρεμμύδι, κάπαρη, ελιές, φέτα", en: "Tomato, cucumber, pepper, onion, capers, olives, feta cheese" },
                    price: "8",
                    photo: xoriatiki,
                },
                {
                    title: { el: "Ντάκος Σαλάτα", en: "Dakos Salad" },
                    desc: { el: "κριθαροκούλουρα, ντομάτα, κρεμμύδι, μαϊντανός, ρόκα, φέτα", en: "crouton, tomato, onion, arugula, feta cheese" },
                    price: "9",
                    photo: ntakos_nap,
                },
                {
                    title: { el: "Ρόκα Παρμεζάνα", en: "Arugula Parmesan" },
                    desc: { el: "", en: "" },
                    price: "12",
                    photo: photo,
                },
                
            ],
        },
        //breakfast
        {
            title:{el:"Πρωινά",en:"Breakfast"},
            products:
            [
                {
                    title: { el: "Γιαούρτι με φρούτα και καρύδια", en: "Yoghurt with fruits and walnut" },
                    desc: { el: "", en: "" },
                    price: "6",
                    photo: photo,
                },
                {
                    title: { el: "Ομελέτα Σπέσιαλ", en: "Secial omelette" },
                    desc: { el: "", en: "" },
                    price: "9",
                    photo: photo,
                }, 
                {
                    title: { el: "Πρωινό Γλυστέρι", en: "Glysteri Breakfast" },
                    desc: { el: "φρυγανισμένο ψωμί , 3 αυγά , μπέικον , μανιτάρια, λουκάνικο, ντομάτα ,μαρούλι,σως", 
                            en: "Toasted bread , 3 eggs , bacon , mushrooms, sausage , tomato , lettuce , sauce " 
                        },
                    price: "12",
                    photo: photo,
                }, 
                {
                    title: { el: "Τοστ", en: "Toast" },
                    desc: { el: "τυρί , ζαμπόν , γαλοπούλα", en: "cheese , ham , turkey" },
                    price: "6",
                    photo: photo,
                },  
                {
                    title: { el: "Φρουτοσαλάτα", en: "Fruit salad" },
                    desc: { el: "", en: "" },
                    price: "7",
                    photo: photo,
                },
                {
                    title: { el: "Κοτομπουκιές", en: "Chiken nuggets" },
                    desc: { el: "", en: "" },
                    price: "10",
                    photo: photo,
                },      
            ]
        }
        ,
        //Club
        {
            title:{el:"Κλάμπ",en:"Club"},
            products:[
                {
                    title: { el: "Κοτόπουλο", en: "Chicken" },
                    desc: { 
                        el: "ντομάτα , μαρούλι , τυρί , κοτόπουλο , μπέικον , αυγό ,σως", 
                        en: "tomato , lettuce , gouda cheese , chicken , bacon , fried egg , sause" },
                    price: "12",
                    photo: club_kot,
                },
                {
                    title: { el: "Γαρίδα", en: "Shrimp" },
                    desc: { 
                        el: "ντομάτα , μαρούλι , γαρίδες ,κοκτέιλ σως", 
                        en: "tomato , lettuce ,shrimps ,coctail sause" },
                    price: "14",
                    photo: photo,
                },
                {
                    title: { el: "Κλασικό", en: "Classic" },
                    desc: { 
                        el: "ντομάτα , μαρούλι , τυρί , ζαμπόν , μπέικον  ,σως", 
                        en: "tomato , lettuce , gouda cheese , ham , bacon , sause" },
                    price: "10",
                    photo: photo,
                },
            ]
        },
        //Arabic pites
        {
            title:{el:"Αράβικες",en:"Tortillas"},
            products:[
                {
                    title: { el: "Κοτόπουλο", en: "Chicken" },
                    desc: { 
                        el: "ντομάτα , μαρούλι , τυρί , κοτόπουλο , μπέικον , σως", 
                        en: "tomato , lettuce , cheese , chicken , bacon , sause" },
                    price: "7",
                    photo: photo,
                },
                {
                    title: { el: "Γαρίδα", en: "Shrimp" },
                    desc: { 
                        el: "ντομάτα , μαρούλι , γαρίδες , σως", 
                        en: "tomato , lettuce ,shrimps , sause" },
                    price: "8",
                    photo: photo,
                },
                {
                    title: { el: "Γαλοπούλα", en: "Turkey" },
                    desc: { 
                        el: "ντομάτα , μαρούλι , τυρί , γαλοπούλα , σως", 
                        en: "tomato , lettuce , cheese , turkey, sause" },
                    price: "6",
                    photo: photo,
                },
                {
                    title: { el: "Χορτοφαγική", en: "Vegetarian" },
                    desc: { 
                        el: "λαχανικά σωτέ , σάλτσα ντομάτας, φέτα", 
                        en: "vegetables , tomato sauce , feta cheese" },
                    price: "7",
                    photo: photo,
                },
            ]
        },
        //baketas
        {
            title:{el:"Μπαγκέτες",en:"Baguette"},
            products:[
                {
                    title: { el: "Κοτόπουλο", en: "Chicken" },
                    desc: { 
                        el: "ντομάτα , μαρούλι , τυρί , κοτόπουλο , μπέικον , σως", 
                        en: "tomato , lettuce , cheese , chicken , bacon , sause" },
                    price: "7",
                    photo: photo,
                },
                {
                    title: { el: "Γαρίδα", en: "Shrimp" },
                    desc: { 
                        el: "ντομάτα , μαρούλι , γαρίδες , σως", 
                        en: "tomato , lettuce ,shrimps , sause" },
                    price: "8",
                    photo: photo,
                },
                {
                    title: { el: "Γαλοπούλα", en: "Turkey" },
                    desc: { 
                        el: "ντομάτα , μαρούλι , τυρί , γαλοπούλα , σως", 
                        en: "tomato , lettuce , cheese , turkey, sause" },
                    price: "6",
                    photo: photo,
                },
                {
                    title: { el: "Χορτοφαγική", en: "Vegetarian" },
                    desc: { 
                        el: "λαχανικά σωτέ , σάλτσα ντομάτας, φέτα", 
                        en: "vegetables , tomato sauce , feta cheese" },
                    price: "7",
                    photo: photo,
                },
            ]
        },
        //pissa
        {
            title:{el:"Πίτσες",en:"Pizzas"},
            products:[
                {
                    title: { el: "Μαργαρίτα", en: "Margherita" },
                    desc: { 
                        el: "σάλτσα ντομάτας , τυρί", 
                        en: "tomato sauce , cheese" },
                    price: "7",
                    photo: photo,
                },
                {
                    title: { el: "Ιταλική", en: "Italian" },
                    desc: { 
                        el: "τοματίνια , μοτσαρέλα , παρμεζάνα , ρόκα , προσούτο", 
                        en: "cherry tomatoes , mozzarela , parmesan , arugula , prosciutto " },
                    price: "14",
                    photo: pizz_it,
                },
                {
                    title: { el: "Ελληνική", en: "Greek" },
                    desc: { 
                        el: "σάλτσα ντομάτας , γκούντα , κρεμμύδι , φέτα , μανιτάρια , ελιές , πιπεριές , ρίγανη", 
                        en: "tomato sauce , gouda , onions , feta cheese , mushrooms , olives , peppers , oregano" },
                    price: "12",
                    photo: pizz_gr,
                },
                {
                    title: { el: "Ζαμπόν Τυρί", en: "Ham and Cheese " },
                    desc: { 
                        el: "σάλτσα ντομάτας , ζαμπόν , τυρί", 
                        en: "tomato sauce , ham , cheese" },
                    price: "12",
                    photo: photo,
                },
                {
                    title: { el: "Καρμπονάρα", en: "Carbonara" },
                    desc: { 
                        el: "γκούντα , παρμεζάνα , μπέικον , μανιτάρια , μαϊντανός , κρέμα γάλακτος", 
                        en: "gouda , parmesan , bacon , mushrooms , parsley , cream" },
                    price: "12",
                    photo: photo,
                },
                {
                    title: { el: "Σπέσιαλ", en: "Special" },
                    desc: { 
                        el: "σάλτσα ντομάτας , γκούντα , μπέικον , μανιτάρια , πιπεριές , ζαμπόν", 
                        en: "tomato sauce , gouda , bacon , mushrooms , peppers , ham" },
                    price: "12",
                    photo: photo,
                },
                {
                    title: { el: "Diabolo", en: "Diabolo" },
                    desc: { 
                        el: "σάλτσα ντομάτας , τυρί , πεπερόνι , ταμπάσκο", 
                        en: "tomato sauce , cheese , peperone , tabasco" },
                    price: "12",
                    photo: photo,
                },
    
                
            ]
        }
        ,
        //Marakonades
        {
            title:{el:"Μακαρονάδες",en:"Pasta"},
            products:[
                {
                    title: { el: "Ναπολιτέν", en: "Napoliten" },
                    desc: { 
                        el: "σπαγγέτι , κόκκινη σάλτα , παρμεζάνα", 
                        en: "spaghetti , tomato sauce , parmesan" },
                    price: "7",
                    photo: past_nap,
                },
                {
                    title: { el: "Καρμπονάρα", en: "Carbonara" },
                    desc: { 
                        el: "σπαγγέτι , παρμεζάνα , μπέικον , μαϊντανός , κρέμα γάλακτος", 
                        en: "spaghetti , parmesan , bacon , parsley , cream " },
                    price: "14",
                    photo: photo,
                },
                {
                    title: { el: "Γαριδομακαρονάδα", en: "Shrimps Spaghetti" },
                    desc: { 
                        el: "σπαγγέτι , σάλτσα ντομάτας , γαρίδες", 
                        en: "spaghetti , tomato sauce , shrimps" },
                    price: "12",
                    photo: photo,
                },
                {
                    title: { el: "Αλ όλιο", en: "Al olio " },
                    desc: { 
                        el: "σπαγγέτι , σκόρδο , μαϊντανός , παρμεζάνα", 
                        en: "spaghetti , garlic , parsley , parmesan" },
                    price: "12",
                    photo: photo,
                },
                {
                    title: { el: "Πέστο", en: "Pesto" },
                    desc: { 
                        el: "σπαγγέτι , πέστο βασιλικού , λευκό κράσι", 
                        en: "spaghetti , basil pesto , white wine" },
                    price: "12",
                    photo: photo,
                }
            ]
        },
        //topices sintages
        {
            title:{el:"Τοπικές",en:"Local"},
            products:
            [
                {
                    title: { el: "Τυρόπιτα Σκοπέλου", en: "Skopelos cheesepie" },
                    desc: { 
                        el: "", 
                        en: "" },
                    price: "12",
                    photo: photo,
                },
                {
                    title: { el: "Γαλατόπιτα Σκοπέλου", en: "Skopelos creampie" },
                    desc: { 
                        el: "", 
                        en: "" },
                    price: "12",
                    photo: photo,
                },
     
            ]
        },
        //burgers
        {
            title:{el:"Μπεργκερ",en:"Burgers"},
            products:
            [
                {
                    title: { el: "Γλυστέρι", en: "Glisteri" },
                    desc: { 
                        el: "100% μοσχαρίσιος κιμάς 200γρ. , τσένταρ , σως πίκλας , μαρούλι , μπέικον , ντομάτα , αυγό , καραμελωμένα κρεμμύδια", 
                        en: "100% ground beef 200 gr. , cheddar , pickle sauce , bacon , tomato , lettuce , fried egg , caramelized onions" },
                    price: "12",
                    photo: burger_Gli,
                },
                {
                    title: { el: "Cheeseburger", en: "Cheeseburger" },
                    desc: { 
                        el: "100% μοσχαρίσιος κιμάς 200γρ. , τσένταρ , σως πίκλας , μαρούλι", 
                        en: "100% ground beef 200 gr. , cheddar , pickle sauce , lettuce" },
                    price: "12",
                    photo: photo,
                },
                {
                    title: { el: "Μπέργκερ κοτόπουλο", en: "Chicken burger" },
                    desc: { 
                        el: "κοτόπουλο , τυρί , μαρούλι , μπέικον , ντομάτα , αυγό , σως", 
                        en: "chicken , cheese , lettuce , bacon , tomato , fried egg , sauce" },
                    price: "12",
                    photo: photo,
                },
                
     
            ]
        }
        ,
        //Glika
        {
            title:{el:"Γλυκά",en:"Desserts"},
            products:
            [
                {
                    title: { el: "Αβγάτο", en: "Affgato" },
                    desc: { 
                        el: "", 
                        en: "" },
                    price: "12",
                    photo: photo,
                },
                {
                    title: { el: "Cheese cake", en: "Cheese cake" },
                    desc: { 
                        el: "", 
                        en: "" },
                    price: "12",
                    photo: cheesecake,
                },
     
            ]
        }

    
    ]
};
export default data;
