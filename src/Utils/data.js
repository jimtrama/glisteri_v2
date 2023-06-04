import weeis_bear from "./../images/menu/beers/s_p1big.jpg";

import burger_Gli from "./../images/menu/Glysteri_photos/Food/s_burg_egg.jpg"
import xoriatiki from "./../images/menu/Glysteri_photos/Food/s_chor_sal.jpg"
import cheesecake from "./../images/menu/Glysteri_photos/Food/s_che_str2.jpg"
import club_kot from "./../images/menu/Glysteri_photos/Food/s_club_cea.jpg"
import pizz_it from "./../images/menu/Glysteri_photos/Food/s_pizz_it.jpg"
import margarit_str from "./../images/menu/Glysteri_photos/Drinks/s_mar_str.jpg"
// Change
import pizz_gr from "./../images/menu/pizza/s_p1big.jpg"
import past_nap from "./../images/menu/pasta/s_p1big.jpg"
import ntakos_nap from "./../images/menu/salads/s_p2big.jpg"
import marg_coc from "./../images/menu/coctails/s_p2big.jpg"
import mohito_coc from "./../images/menu/coctails/s_p3big.jpg"
import passionito from "./../images/menu/coctails/s_p4big.jpg"



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
                    price: "3.00",
                    photo: photo,
                },
                {
                    title: { el: "Εσπρέσο Διπλός ", en: "Double Espresso" },
                    desc: { el: "", en: "" },
                    price: "5.00",
                    photo: photo,
                },
                {
                    title: { el: "Εσπρέσο φρέντο ", en: "Freddo Espresso " },
                    desc: { el: "", en: "" },
                    price: "5.00",
                    photo: photo,
                },
                {
                    title: { el: "Kαπουτσίνο ", en: "Capuccino" },
                    desc: { el: "", en: "" },
                    price: "5.50",
                    photo: photo,
                },
                {
                    title: { el: "Kαπουτσίνο διπλό ", en: "Double Capuccino" },
                    desc: { el: "", en: "" },
                    price: "6.00",
                    photo: photo,
                },
                {
                    title: { el: "Kαπουτσίνο φρέντο ", en: "Freddo Capuccino" },
                    desc: { el: "", en: "" },
                    price: "6",
                    photo: photo,
                },
                {
                    title: { el: "Flat white ζεστό/κρύο", en: "Flat white hot/cold" },
                    desc: { el: "", en: "" },
                    price: "6.00",
                    photo: photo,
                },
                {
                    title: { el: "Φραπέ", en: "Frappe" },
                    desc: { el: "", en: "" },
                    price: "5.00",
                    photo: photo,
                },
                {
                    title: { el: "Φραπέ Μπέιλυς", en: "Frappe  with Baileys" },
                    desc: { el: "", en: "" },
                    price: "8.00",
                    photo: photo,
                },
                {
                    title: { el: "Σοκολάτα ζεστή/κρύα", en: "Chocolate hot/cold" },
                    desc: { el: "", en: "" },
                    price: "6.00",
                    photo: photo,
                },
                {
                    title: { el: "Νερό", en: "Water" },
                    desc: { el: "0.5L", en: "0.5L" },
                    price: "0.50",
                    photo: photo,
                },
                {
                    title: { el: "Νερό", en: "Water" },
                    desc: { el: "1L", en: "1L" },
                    price: "1.00",
                    photo: photo,
                },
            ],
        },
        //Beers
        {
            title: { el: "Μπύρες", en: "Beers" },
            products: [
                {
                    title: { el: "Έζα Λάγκερ", en: "Eza Lager" },
                    desc: { el: "330 ml", en: "330 ml" },
                    price: "6.00",
                    photo: photo,
                },
                {
                    title: { el: "Έζα Πιλς", en: "Eza Pils" },
                    desc: { el: "330 ml", en: "330 ml" },
                    price: "6.00",
                    photo: photo,
                },
                {
                    title: { el: "Έζα Χωρίς αλκοόλ", en: "Eza No Alcohol" },
                    desc: { el: "500 ml", en: "500 ml" },
                    price: "7.00",
                    photo: photo,
                },
                {
                    title: { el: "Ράντλερ", en: "Radler" },
                    desc: { el: "330 ml", en: "330 ml" },
                    price: "7.00",
                    photo: photo,
                },
                {
                    title: { el: "Weiss Beer", en: "Weiss Beer" },
                    desc: { el: "500 ml", en: "500 ml" },
                    price: "7.00",
                    photo: weeis_bear,
                },
                {
                    title: { el: "Μηλίτης", en: "Cyder" },
                    desc: { el: "330 ml", en: "330 ml" },
                    price: "7.00",
                    photo: photo,
                },
                {
                    title: { el: "Blue Island", en: "Blue Island" },
                    desc: { el: "330 ml", en: "330 ml" },
                    price: "7.00",
                    photo: photo,
                },
                
            ],
        },
        //Ximoi
        {
            title: { el: "Χυμοί", en: "Juices" },
            products: [
                {
                    title: { el: "Φυσικός Χυμός Πορτοκάλι", en: "Fresh Orange Juice" },
                    desc: { el: "", en: "" },
                    price: "7.00",
                    photo: photo,
                },
                {
                    title: { el: "Χυμός  Ποτήρι", en: "Cup of carton juice" },
                    desc: { el: "", en: "" },
                    price: "5.00",
                    photo: photo,
                },
                {
                    title: { el: "Παιδικός Χυμός", en: "Carton juice for kids" },
                    desc: { el: "", en: "" },
                    price: "3.00",
                    photo: photo,
                },
            ]
        },
        //smoothies
        {
            title: { el: "Smoothies", en: "Smoothies" },
            products : [
                {
                    title: { el: "Green Power", en: "Green Power" },
                    desc: { el: "", en: "" },
                    price: "8.00",
                    photo: photo,
                },
                {
                    title: { el: "Fraulita", en: "Fraulita" },
                    desc: { el: "", en: "" },
                    price: "8.00",
                    photo: photo,
                },
                {
                    title: { el: "Peachy Peachy", en: "Peachy Peachy" },
                    desc: { el: "", en: "" },
                    price: "8.00",
                    photo: photo,
                },
                {
                    title: { el: "Everyday", en: "Everyday" },
                    desc: { el: "", en: "" },
                    price: "8.00",
                    photo: photo,
                },
                {
                    title: { el: "Smoothies με αλκοόλ", en: "Smoothies with alcohol" },
                    desc: { el: "", en: "" },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Γρανίτες", en: "Sorbets" },
                    desc: { el: "", en: "" },
                    price: "8.00",
                    photo: photo,
                },
                {
                    title: { el: "Γρανίτα με αλκοόλ", en: "Sorbets with alcohol" },
                    desc: { el: "", en: "" },
                    price: "12.00",
                    photo: photo,
                },
            ]
        },
        //soft drinks
        {
            title:{el:"Αναψυκτικά",en:"Soft drinks"},
            products:[
                {
                    title: { el: "Λεμονάδα", en: "Lemonade" },
                    desc: { el: "", en: "" },
                    price: "5.00",
                    photo: photo,
                },
                {
                    title: { el: "Πορτοκαλάδα", en: "Οrangeade" },
                    desc: { el: "", en: "" },
                    price: "5.00",
                    photo: photo,
                },
                {
                    title: { el: "Πορτοκαλάδα χωρίς ανθρακικό", en: "Non-carbonated Οrangeade" },
                    desc: { el: "", en: "" },
                    price: "5.00",
                    photo: photo,
                },
                {
                    title: { el: "Κάκα Κόλα", en: "Coca-Cola" },
                    desc: { el: "Normal / Light ", en: "Normal / Light " },
                    price: "5.00",
                    photo: photo,
                },
                {
                    title: { el: "Σπράιτ", en: "Sprite" },
                    desc: { el: "", en: "" },
                    price: "5.00",
                    photo: photo,
                },
                {
                    title: { el: "Σόδα", en: "Soda water" },
                    desc: { el: "", en: "" },
                    price: "5.00",
                    photo: photo,
                },
                {
                    title: { el: "Grapefruit Soda", en: "Grapefruit Soda" },
                    desc: { el: "", en: "" },
                    price: "8.00",
                    photo: photo,
                },
                {
                    title: { el: "Τόνικ", en: "Tonic Water" },
                    desc: { el: "", en: "" },
                    price: "5.00",
                    photo: photo,
                },
                {
                    title: { el: "Red Bull", en: "Red Bull" },
                    desc: { el: "Kανονικό", en: "Normal" },
                    price: "6.00",
                    photo: photo,
                },
                {
                    title: { el: "Κρύο Τσάι", en: "Ice Tea" },
                    desc: { el: "Ροδάκινο / Λεμόνι / Πράσινο", en: "Peach / Lemon / Green" },
                    price: "5.00",
                    photo: photo,
                },
                {
                    title: { el: "Σουρωτή", en: "Sparkling water" },
                    desc: { el: "Ροδάκινο / Λεμόνι / Πράσινο", en: "Peach / Lemon / Green" },
                    price: "6.00",
                    photo: photo,
                },
            ]
                
        },
        //driks
        {
            title:{el:"Ποτά",en:"Drinks"},
            products:[
                {
                    title: { el: "Ποτό απλό", en: "Simple Drink" },
                    desc: { el: "" },
                    price: "9.00",
                    photo: photo,
                },
                {
                    title: { el: "Ποτό σπέσιαλ ", en: "Special Drink" },
                    desc: { el: "" },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Ποτό premium", en: "Premium Drink" },
                    desc: { el: "" },
                    price: "16.00",
                    photo: photo,
                },
                
                {
                    title: { el: "Σφηνάκι", en: "Shot" },
                    desc: { el: "" },
                    price: "4.00",
                    photo: photo,
                },
                {
                    title: { el: "Σέικερ Σφηνάκια", en: "Shot Shaker" },
                    desc: { 
                        el: "", 
                        en: ""
                    },
                    price: "30.00",
                    photo: photo,
                },
                {
                    title: { el: "Ούζο - Τσίπουρο", en: "Ouzo - Tsipouro" },
                    desc: { el: "" },
                    price: "6.00",
                    photo: photo,
                }
                ,
                {
                    title: { el: "Φιάλη απλή", en: "Simple Bottle" },
                    desc: { 
                        el: "", 
                        en: ""
                    },
                    price: "90.00",
                    photo: photo,
                },
                {
                    title: { el: "Φιάλη σπέσιαλ", en: "Special Bottle" },
                    desc: { 
                        el: "", 
                        en: ""
                    },
                    price: "120.00",
                    photo: photo,
                },
                {
                    title: { el: "Φιάλη premium", en: "Premium Bottle" },
                    desc: { 
                        el: "", 
                        en: ""
                    },
                    price: "160.00",
                    photo: photo,
                },
                
                
            ]
        },
        //Wines 
        {
            title:{el:"Sparkling",en:"Sparkling"},
            products:[
                {
                    title: { el: "Ατομικό Προσέκο", en: "Prosecco" },
                    desc: { el: "200 ml", en: "200 ml" },
                    price: "8.00",
                    photo: photo,
                },
                {
                    title: { el: "Προσέκο", en: "Prosecco" },
                    desc: { el: "750 ml", en: "750 ml" },
                    price: "40.00",
                    photo: photo,
                },
                {
                    title: { el: "Moscato D'Asti", en: "Moscato D'Asti" },
                    desc: { el: "200 ml", en: "200 ml" },
                    price: "8.00",
                    photo: photo,
                },
                {
                    title: { el: "Moscato D'Asti", en: "Moscato D'Asti" },
                    desc: { el: "750 ml", en: "750 ml" },
                    price: "40.00",
                    photo: photo,
                },
            ]
        },
        {
            title:{el:"Λευκά Κρασιά",en:"White Wines"},
            products:[
                {
                    title: { el: "Μοσχοφίλερο Μπουτάρι", en: "Moschofilero Boytari" },
                    desc: { el: "187 ml", en: "187 ml" },
                    price: "6.00",
                    photo: photo,
                },
                
                {
                    title: { el: "Φιάλες Κρασιού 750ml", en: "Bottles of Wine 750ml" },
                    desc: { el: "Ρωτήστε Σερβιτόρο", en: "Ask waiter" },
                    price: "",
                    photo: photo,
                },
                
                {
                    title: { el: "Σημείο Στίξης", en: "Simeio Stixis" },
                    desc: { el: "", en: "" },
                    price: "23.00",
                    photo: photo,
                },
                {
                    title: { el: "Μαλαγουζιά Μάτσα", en: "Malagoyzia Matsa" },
                    desc: { el: "", en: "" },
                    price: "37.00",
                    photo: photo,
                },
                {
                    title: { el: "Σαντορίνη Μπουτάρι ", en: "Santorini Boutari" },
                    desc: { el: "", en: "" },
                    price: "49.00",
                    photo: photo,
                },
                {
                    title: { el: "Sauvignon Blanc Boutari", en: "Sauvignon Blanc Boutari" },
                    desc: { el: "", en: "" },
                    price: "37.00",
                    photo: photo,
                },
                {
                    title: { el: "Κτήμα Γεροβασιλείου", en: "Ktima Gerovasileiou" },
                    desc: { el: "", en: "" },
                    price: "44.00",
                    photo: photo,
                },
                {
                    title: { el: "Miraval Blanc", en: "Miraval Blanc" },
                    desc: { el: "", en: "" },
                    price: "90.00",
                    photo: photo,
                },
                
            ]
        },
        //Roze krasia
        {
            title:{el:"Ροζέ Κρασιά",en:"Roze Wines"},
            products:[
                {
                    title: { el: "Rose Boutari Demi-Sec", en: "Rose Boutari Demi-Sec" },
                    desc: { el: "187 ml", en: "187 ml" },
                    price: "6.00",
                    photo: photo,
                },
                
                {
                    title: { el: "Σημείο Στίξης", en: "Simeio Stixis" },
                    desc: { el: "", en: "" },
                    price: "23.00",
                    photo: photo,
                },
                {
                    title: { el: "Rose Boutari Demi-Sec", en: "Rose Boutari Demi-Sec" },
                    desc: { el: "", en: "" },
                    price: "28.00",
                    photo: photo,
                },
                {
                    title: { el: "Κτήμα Αλφα Ξινόμαυρο", en: " Kita ALFA Xinomayro" },
                    desc: { el: "", en: "" },
                    price: "49.00",
                    photo: photo,
                },
                {
                    title: { el: "Miraval whispering Angel", en: "Miraval whispering Angel" },
                    desc: { el: "", en: "" },
                    price: "49.00",
                    photo: photo,
                },
            ]

            
        },
        {
            title:{el:"Champagne",en:"Champagne"},
            products:[
                {
                    title: { el: "Moet & Chandon Rose", en: "Moet Rose" },
                    desc: { el: "", en: "" },
                    price: "120.00",
                    photo: photo,
                },
                {
                    title: { el: "Moet & Chandon Blanc", en: "Moet Rose" },
                    desc: { el: "", en: "" },
                    price: "120.00",
                    photo: photo,
                },
                {
                    title: { el: "Moet & Chandon Ice", en: "Moet Rose" },
                    desc: { el: "", en: "" },
                    price: "160.00",
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
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Καϊπιρίνια", en: "Caipirihna" },
                    desc: { 
                        el: "κασάσα / ζαχάρη / λάιμ", 
                        en: "cashaca / sugar / lime "
                    },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Καϊπιρόσκα", en: "Caipiroska" },
                    desc: { 
                        el: "βότκα / ζαχάρη / λάιμ", 
                        en: "vodka / sugar / lime "
                    },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Μοχίτο", en: "Mojito" },
                    desc: { 
                        el: "ρούμι / ζαχάρη / λάιμ / μέντα", 
                        en: "rum / sugar / lime / mint"
                    },
                    price: "12.00",
                    photo: mohito_coc,
                },
                {
                    title: { el: "Μαργαρίτα", en: "Marghrita" },
                    desc: { 
                        el: "τεκίλα / 3sec (λικέρ Πορτοκάλι) / αλάτι / λάιμ ", 
                        en: "tekila / 3sec (liquer Orange) / lime / salt"
                    },
                    price: "12.00",
                    photo: marg_coc,
                },
                {
                    title: { el: "Μαργαρίτα Φράουλα", en: "Marghrita Strawberry" },
                    desc: { 
                        el: "τεκίλα / 3sec (λικέρ Πορτοκάλι) / αλάτι / Πουρές Φράουλα", 
                        en: "tekila / 3sec (liquer Orange) / salt / Strawberry Jam"
                    },
                    price: "12.00",
                    photo: margarit_str,
                },
                {
                    title: { el: "Aperol Spritz", en: "Aperol Spritz" },
                    desc: { 
                        el: "Aperol / Prosecco / soda", 
                        en: "Aperol / Prosecco / soda"
                    },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Cuba Libre", en: "Cuba Libre" },
                    desc: { 
                        el: "ρούμι / λάιμ / κόκα κόλα", 
                        en: "rum / lime / coca-cola"
                    },
                    price: "11.00",
                    photo: photo,
                },
                {
                    title: { el: "Ντάκιουρι", en: "Daiquiri" },
                    desc: { 
                        el: "ρούμι / 3sec (λικέρ Πορτοκάλι) / λάιμ / ζάχαρη", 
                        en: "rum / 3sec (liquer Orange) / lime / sugar"
                    },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Ντάκιουρι Φράουλα", en: "Daiquiri Strawberry" },
                    desc: { 
                        el: "ρούμι / 3sec (λικέρ Πορτοκάλι) / Πουρέ Φράουλας / ζάχαρη", 
                        en: "rum / 3sec (liquer Orange) / Strawberry jam  / sugar"
                    },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Moscow/ Mexican/ London mule", en: "Moscow/ Mexican/ London mule" },
                    desc: { 
                        el: "βότκα / τεκίλα / τζιν / αναψυκτικό πιπερόριζας / λάιμ", 
                        en: "vodka / tequila / gin / ginger beer / lime"
                    },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Παλόμα", en: "Paloma" },
                    desc: { 
                        el: "τεκίλα / αλάτι / σόδα γρέιπφρουτ / λάιμ", 
                        en: "tekila / salt / soda grapefruit / lime"
                    },
                    price: "13.00",
                    photo: photo,
                },
                {
                    title: { el: "Τζιν Βασιλικού", en: "Gin Basil" },
                    desc: { 
                        el: "τζιν / ζάχαρη / λάιμ / βασιλικός", 
                        en: "gin / sugar /  basil / lime"
                    },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Πίνα Κολάντα", en: "Pina colada" },
                    desc: { 
                        el: "ρούμι / malibu / batida de coco / χυμός ανανά  / γάλα καρύδας", 
                        en: "rum  / malibu /  babatida de coco / pinnapple juice / coconut milk"
                    },
                    price: "12.00",
                    photo: photo,
                },
                
                
                {
                    title: { el: "Ζόμπι", en: "Zombie" },
                    desc: { 
                        el: "ρούμια / παπάγια / λάιμ / σόδα γρέιπφρουτ / πάσιον φρουτ", 
                        en: "rums  / malibu /  babatida de coco / pinnapple juice / coconut milk"
                    },
                    price: "15.00",
                    photo: photo,
                },
                
            ]
        },
        //signatures
        {
            title:{el:"Signatures",en:"Signatures"},
            products:[
                {
                    title: { el: "Glysteri Spritz", en: "Glysteri Spritz" },
                    desc: { 
                        el: "aperol / moscato d'asti / grapefruit soda", 
                        en: "aperol / moscato d'asti / grapefruit soda", 
                    },
                    price: "13.00",
                    photo: photo,
                },
                {
                    title: { el: "Glysteri Bramble", en: "Glysteri Bramble" },
                    desc: { 
                        el: "gin / triple sec / rasperry syrup / lime", 
                        en: "gin / triple sec / rasperry syrup / lime", 
                    },
                    price: "13.00",
                    photo: photo,
                },
                {
                    title: { el: "Πασιονίτο", en: "Passionito" },
                    desc: { 
                        el: "ρούμι / Archers /   Πουρέ Πασιονφρουτ / λάιμ", 
                        en: "rum / Archers / Passionfruit jam / lime"
                    },
                    price: "14.00",
                    photo: passionito,
                },
                {
                    title: { el: "Chocolate Summer", en: "Chocolate Summer" },
                    desc: { 
                        el: "vodka / baileys / strawberry puree / chocolate syrup", 
                        en: "vodka / baileys / strawberry puree / chocolate syrup",
                    },
                    price: "14.00",
                    photo: photo,
                },
                {
                    title: { el: "Mandarino Porn Star", en: "Mandarino Porn Star" },
                    desc: { 
                        el: "vodka / vanilla syrop / mandarine syrop / lime / prosecco", 
                        en:"vodka / vanilla syrop / mandarine syrop / lime / prosecco", 
                    },
                    price: "14.00",
                    photo: photo,
                },
            ]
        },
        //mocktails
        {
            title:{el:"Mocktails",en:"Mocktails"},
            products:[
                {
                    title: { el: "Mojito 0%", en: "Mojito 0%" },
                    desc: { 
                        el: "mint leaves / lime / sugar syrup / sprite", 
                        en: "mint leaves / lime / sugar syrup / sprite", 
                    },
                    price: "9.00",
                    photo: photo,
                },
                {
                    title: { el: "Pina Colada 0%", en: "Pina Colada 0%" },
                    desc: { 
                        el: "pineapple juice / pineapple puree / coconut cream", 
                        en: "pineapple juice / pineapple puree / coconut cream", 
                    },
                    price: "9.00",
                    photo: photo,
                },
                {
                    title: { el: "Mai Tai 0%", en: "Mai Tai 0%" },
                    desc: { 
                        el: "pineapple juice / orange juice / lime / almond syrup / grenadine", 
                        en: "pineapple juice / orange juice / lime / almond syrup / grenadine", 
                    },
                    price: "9.00",
                    photo: photo,
                },
                
            ]
        },
        //salates
        {
            title: { el: "Σαλάτες", en: "Salads" },
            products: [
                {
                    title: { el: "Χωριάτικη", en: "Greek Salad" },
                    desc: { el: "ντομάτα , αγγούρι , πιπεριά , κρεμμύδι, ρίγανη , ελιές, φέτα , ελαιόλαδο", 
                            en: "tomato, cucumber , pepper, onion , oregano, olives, feta cheese , olive oil" },
                    price: "12.00",
                    photo: xoriatiki,
                },
                {
                    title: { el: "Kαίσαρα", en: "Ceasars" },
                    desc: { 
                        el: "iceberg, ντοματίνια , καλαμπόκι , κοτόπουλο , κρουτόν , μπέικον , παρμεζάνα , σως αντζούγιας", 
                        en: "iceberg, cherry tomatoes , corn , chicken , croutons, parmesan, bacon, , anchovies dressing" 
                    },
                    price: "14.00",
                    photo: photo,
                },
                {
                    title: { el: "Υγιεινη  Σαλάτα", en: "Healthy Salad" },
                    desc: { el: "μαρούλι , iceberg , ντοματίνια , ψητό μανούρι , καραμελωμένα καρύδια , γκράνμπερι , dressing λιαστής ντομάτας", 
                            en: "lettuce , iceberg , cherry tomatoes , grilled manouri cheese , caramelized walnuts ,  cranberries , dried tomatoes dressing" },
                    price: "14.00",
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
                    title: { el: "Ομελέτα απλή", en: "Plain omelette" },
                    desc: { el: "σερβίρεται με ανάμεικτη πράσινη σαλάτα", en: "served with mixed green salad" },
                    price: "10.00",
                    photo: photo,
                },
                {
                    title: { el: "Ομελέτα με τυρί , ζαμπόν ή γαλοπούλα", en: "Omelette with cheese , ham or turckey" },
                    desc: {el: "σερβίρεται με ανάμεικτη πράσινη σαλάτα", en: "served with mixed green salad"  },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Ομελέτα Σπέσιαλ", en: "Special omelette" },
                    desc: { el: "τυρί / ζαμπόν / μπέικον / μανιτάρια / πιπεριά ,σερβίρεται με ανάμεικτη πράσινη σαλάτα", en: "cheese / ham / bacon / mushrooms / papper ,served with mixed green salad" },
                    price: "14.00",
                    photo: photo,
                },
            ]
        },
        // snacks
        {
            title:{el:"Σνακ",en:"Snacks"},
            products:[
                {
                    title: { el: "Τοστ", en: "Toast" },
                    desc: { el: "τυρί / ζαμπόν ή γαλοπούλα", en: "cheese / ham or turkey" },
                    price: "5.00",
                    photo: photo,
                },
                {
                    title: { el: "Γλυστέρι Χοτ Ντογκ", en: "Glysteri Hot Dog" },
                    desc: { 
                        el: "φρέσκο ψωμί / τοπικό λουκάνικο / καραμελωμένα κρεμμύδια / λάχανο / καρότο / μαγιονέζα / κέτσαπ / μουστάρδα , σερβίρεται με τηγανητές πατάτες", 
                        en: "fresh bread / local sausage / caramelised onions / cabbag / carrot / mayonnaise / ketchup / mustard served with fried fries" 
                    },
                    price: "12.00",
                    photo: photo,
                }
            ]
        },
        //giaourtia
        {
            title:{el:"Γιαούρτια",en:"Yogurts"},
            products:[
                {
                    title: { el: "Γιαούρτι", en: "Yoghurt" },
                    desc: { el: "μέλι / καρύδια", en: "honey / walnuts" },
                    price: "9.00",
                    photo: photo,
                },
                 
                {
                    title: { el: "Γιαούρτι", en: "Yoghurt" },
                    desc: { el: "φρούτα", en: "fruits" },
                    price: "10.00",
                    photo: photo,
                },
                {
                    title: { el: "Γιαούρτι", en: "Yoghurt" },
                    desc: { el: "γκρανόλα / μπανάνα / φράουλα / μέλι", en: "granola / bangna / strawberry / honey" },
                    price: "12.00",
                    photo: photo,
                },    
                {
                    title: { el: "Γιαούρτι", en: "Yoghurt" },
                    desc: { el: "τοπικό αυγάτο", en: "local plumps" },
                    price: "12.00",
                    photo: photo,
                },    
                {
                    title: { el: "Φρουτοσαλάτα", en: "Fruit salad" },
                    desc: { el: "", en: "" },
                    price: "9.00",
                    photo: photo,
                },
                
            ]
        },
        //sandwich
        {
            title:{el:"Σάντουις",en:"Sandwich"},
            products:[
                {
                    title: { el: "Σάντουις Αβοκάντο", en: "Sandwich Αvocado" },
                    desc: { 
                        el: "ζυμωτό ψωμί / αβοκάντο / ντοματίνια / βραστό αυγό ", 
                        en: "fermented bread / avocado / cherry tomatoes / boiled egg" },
                    price: "9.00",
                    photo: photo,
                },
                {
                    title: { el: "Σάντουις με κοτομπουκιές", en: "Sandwich chicken nuggets" },
                    desc: { 
                        el: "χειροποίητες κοτομπουκιές / μαρούλι / ντομάτα / σως μουστάρδας , σερβίρεται με τηγανητές πατάτες", 
                        en: "homemade chicken nuggets / lettuce / tomato / mustard sauce  , served with fried fries" },
                    price: "10.00",
                    photo: photo,
                }
            ]
        },
        // bao bans
        {
            title:{el:"Bao Bun",en:"Bao Bun"},
            products:[
                {
                    title: { el: "Bao Bun κοτόπουλο (2 τεμ.)", en: "Bao Bun chicken (2 pic.)" },
                    desc: { 
                        el: "παναρισμένες μπουκιές κοτόπουλου / coleslaw / ραπανάκι / σχοινόπρασο", 
                        en: "chicken nuggets / coleslaw / radish / lemongrass" },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Bao Bun vegan (2 τεμ.)", en: "Bao Bun vegan (2 pic.)" },
                    desc: { 
                        el: "αβοκάντο / πιπεριές / αγγούρι / καρότο / παπαρδέλες κολοκυθιού / ραπανάκι / σχοινόπρασο", 
                        en: "avocado / peppers/ cucumber / carrot / zucchini / radish / lemongrass" },
                    price: "12.00",
                    photo: photo,
                }
            ]
        },
        //Club
        {
            title:{el:"Κλάμπ Σάντουιτς",en:"Club Sandwich"},
            products:[
                {
                    title: { el: "Κλασικό", en: "Classic" },
                    desc: { 
                        el: "τυρί /  ζαμπόν ή γαλοπούλα / μπέικον / μαρούλι / ντομάτα / μαγιονέζα , σερβίρεται με τηγανητές πατάτες", 
                        en: "cheese / ham or turkey / bacon / lettuce / tomato / mayonnaise , served with fried fries" },
                    price: "14.00",
                    photo: photo,
                },
                {
                    title: { el: "Κοτόπουλο", en: "Chicken" },
                    desc: { 
                        el: "τυρί / κοτόπουλο / τηγανητό αυγό / μαρούλι / ντομάτα / σως μουστάρδας , σερβίρεται με τηγανητές πατάτες", 
                        en: "cheese / chicken  / fried egg / lettuce / tomato / mustard sauce , served with fried fries" },
                    price: "16.00",
                    photo: club_kot,
                },
                
                
            ]
        },
        //burgers
        {
            title:{el:"Μπέργκερ",en:"Burgers"},
            products:
            [
                {
                    title: { el: "Cheeseburger", en: "Cheeseburger" },
                    desc: { 
                        el: "χειροποίητο μπιφτέκι / τσένταρ / μαρούλι / ντομάτα / σως πίκλας / κέτσαπ / μουστάρδα , σερβίρεται με τηγανητές πατάτες ", 
                        en: "homemade burger / cheddar / lettuce / tomato / pickle sauce / ketchup / mustard , served with fried fries " },
                    price: "16.00",
                    photo: photo,
                },
                {
                    title: { el: "Γλυστέρι", en: "Glisteri" },
                    desc: { 
                        el: "χειροποίητο μπιφτέκι, τσένταρ, μαρούλι, ντομάτα, σως πίκλας , μπέικον , ντομάτα , τηγανητό αυγό , καραμελωμένα κρεμμύδια , σερβίρεται με τηγανητές πατάτες", 
                        en: "homemade burger / cheddar / lettuce / tomato / pickle sauce / bacon / tomato / lettuce / fried egg / caramelized onions , served with fried fries" },
                    price: "18.00",
                    photo: burger_Gli,
                },
                {
                    title: { el: "Μπέργκερ κοτόπουλο", en: "Chicken burger" },
                    desc: { 
                        el: "κοτόπουλο  , iceberg , μπέικον , ντομάτα , τηγανητό αυγό , τσένταρ σως , σερβίρεται με τηγανητές πατάτες", 
                        en: "chicken  , iceberg , bacon , tomato , fried egg , cheddar sauce , served with fried fries" },
                    price: "16.00",
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
                        el: "σάλτσα ντομάτας , κίτρινα τυριά , μοσταρέλα , βασιλικό", 
                        en: "tomato sauce , yellow cheeses , mozzarella , fresh basil" },
                    price: "14.00",
                    photo: photo,
                },
                {
                    title: { el: "Σπέσιαλ", en: "Special" },
                    desc: { 
                        el: "σάλτσα ντομάτας , κίτρινα τυριά , μπέικον , μανιτάρια , πιπεριές ", 
                        en: "tomato sauce , yellow cheeses , bacon , mushrooms , peppers " },
                    price: "16.00",
                    photo: photo,
                },
                {
                    title: { el: "Πεπερόνι", en: "Pepperoni" },
                    desc: { 
                        el: "σάλτσα ντομάτας , κίτρινα τυριά , πεπερόνι", 
                        en: "tomato sauce , yellow cheeses  , pepperoni " },
                    price: "16.00",
                    photo: photo,
                },
                {
                    title: { el: "Μεσογειακή", en: "Mediterranean" },
                    desc: { 
                        el: "σάλτσα ντομάτας , φέτες ντομάτας , πιπεριές , κρεμμύδι , ελιές , φέτα , ρίγανη , ελαιόλαδο", 
                        en: "tomato sauce , tomato slices, onions , feta cheese  , olives , peppers , oregano , olive oil" },
                    price: "16.00",
                    photo: pizz_gr,
                },
                {
                    title: { el: "Ιταλική", en: "Italian" },
                    desc: { 
                        el: "σάλτσα ντομάτας , τοματίνια , μοτσαρέλα , παρμεζάνα , ρόκα , προσούτο", 
                        en: "tomato sauce , cherry tomatoes , mozzarela , parmesan , arugula , prosciutto " },
                    price: "18.00",
                    photo: pizz_it,
                },
                
                {
                    title: { el: "Καρμπονάρα", en: "Carbonara" },
                    desc: { 
                        el: "λευκή σάλτσα , κίτρινα τυριά , μπέικον , μανιτάρια ", 
                        en: "white sauce , yellow cheeses , bacon , mushrooms " },
                    price: "18.00",
                    photo: photo,
                },
                
                {
                    title: { el: "Κοτόπουλο", en: "Chicken" },
                    desc: { 
                        el: "λευκή σάλτσα , κίτρινα τυριά , μπέικον , μανιτάρια , κοτόπουλο", 
                        en: "white sauce , yellow cheeses , bacon , mushrooms , chicken"  },
                    price: "18.00",
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
                    title: { el: "Αλ όλιο", en: "Al olio " },
                    desc: { 
                        el: "λιγκουίνι , κομματάκια τσίλι , σκόρδο , ελαιόλαδο , βούτυρο , παρμεζάνα", 
                        en: "linguini , chilli flakes , garlic , olive oil , butter , parmezan" },
                    price: "16.00",
                    photo: photo,
                },
                {
                    title: { el: "Καρμπονάρα", en: "Carbonara" },
                    desc: { 
                        el: "σπαγγέτι , παρμεζάνα , μπέικον , κρεμμύδι , κρέμα γάλακτος , λευκό κρασί", 
                        en: "spaghetti , parmesan , bacon , onion , cream , white wine " },
                    price: "18.00",
                    photo: photo,
                },
                {
                    title: { el: "Ναπολιτέν", en: "Napoliten" },
                    desc: { 
                        el: "σπαγγέτι , σάλτσα ντομάτας ", 
                        en: "spaghetti , tomato sauce " },
                    price: "14.00",
                    photo: past_nap,
                },
                
                {
                    title: { el: "Γαριδομακαρονάδα", en: "Shrimps Spaghetti" },
                    desc: { 
                        el: "λιγκουίνι , μπίσκ γαρίδας , σάλτσα ντομάτας , γαρίδες , σκόρδο , κρεμμύδι , βούτυρο , ελαιόλαδο , φρέσκο βασιλικό", 
                        en: "linguini , shrimp bisque , tomato sauce , shrimps , garlic , onion , butter , olive oil , fresh basil" },
                    price: "24.00",
                    photo: photo,
                },
                
                
            ]
        },
        //pites
        {
            title:{el:"Πίτες",en:"Pies"},
            products:
            [
                {
                    title: { el: "Σκοπελίτικη τυρόπιτα ", en: "Skopelos cheese pie" },
                    desc: { 
                        el: "", 
                        en: "" },
                    price: "10.00",
                    photo: photo,
                },
                {
                    title: { el: "Σκοπελίτικη χορτόπιτα ", en: "Skopelos vegetables-greens pie" },
                    desc: { 
                        el: "", 
                        en: "" },
                    price: "10.00",
                    photo: photo,
                },
                {
                    title: { el: "Σκοπελίτικη Ντοματοτυρόπιτα ", en: "Skopelos tomatocheese pie" },
                    desc: { 
                        el: "", 
                        en: "" },
                    price: "10.00",
                    photo: photo,
                },
                
                {
                    title: { el: "Γαλατόπιτα Σκοπέλου", en: "Skopelos sweet milk pie" },
                    desc: { 
                        el: "", 
                        en: "" },
                    price: "10.00",
                    photo: photo,
                },
     
            ]
        },
        //psaria
        {
            title:{el:"Ψάρια",en:"Fishes"},
            products:[
                {
                    title: { el: "Τούνα", en: "Tuna fish" },
                    desc: { 
                        el: "βραστά λαχανικά , πατάτα , καρότο , κολοκύθι ή χόρτα εποχής με σάλτσα λεμονιού", 
                        en: "boiled vegetables, potato, carrot, zucchini or seasonal greens with lemon sauce" },
                    price: "24.00",
                    photo: photo,
                },
                {
                    title: { el: "Ξιφίας", en: "Sword fish" },
                    desc: { 
                        el: "βραστά λαχανικά , πατάτα , καρότο , κολοκύθι ή χόρτα εποχής με σάλτσα λεμονιού", 
                        en: "boiled vegetables, potato, carrot, zucchini or seasonal greens with lemon sauce" },
                    price: "24.00",
                    photo: photo,
                },
                {
                    title: { el: "Σφυρίδα", en: "Grouper" },
                    desc: { 
                        el: "βραστά λαχανικά , πατάτα , καρότο , κολοκύθι ή χόρτα εποχής με σάλτσα λεμονιού", 
                        en: "boiled vegetables, potato, carrot, zucchini or seasonal greens with lemon sauce" },
                    price: "26.00",
                    photo: photo,
                },
                {
                    title: { el: "Γαρίδες ψητές", en: "Grilled Shrimps" },
                    desc: { 
                        el: "λαδολέμονο , κουρκουμά", 
                        en: "oil lemon , turmeric dressing" },
                    price: "24.00",
                    photo: photo,
                },
                {
                    title: { el: "Καλαμάρια ψητά", en: "Grilled Squid" },
                    desc: { 
                        el: "λαδολέμονο , κουρκουμά / συνοδευόμενο από βραστά λαχανικά και χόρτα εποχής", 
                        en: "oil lemon , turmeric dressing / surved with vegetables and seasonal greens" },
                    price: "22.00",
                    photo: photo,
                },
                
            ]
        },
        {
            title:{el:"Kρεατικά",en:"Μeat"},
            products:[
                {
                    title: { el: "Μπιφτέκι απλό", en: "Simple meat patty" },
                    desc: { 
                        el: "coleslaw(λάχανο,καρότο,κρεμύδι,σέλερι,μαγιονέζα) και τηγανητές πατάτες", 
                        en: "coleslaw(cabbage,carrot, onion,selery,mayonnaise) and fried fries" },
                    price: "14.00",
                    photo: photo,
                },
                {
                    title: { el: "Μπιφτέκι γεμιστό μετσοβόνε - τυρί κρέμα", en: "Staffed meat patty with metsovone and cream cheese" },
                    desc: { 
                        el: "coleslaw(λάχανο,καρότο,κρεμύδι,σέλερι,μαγιονέζα) και τηγανητές πατάτες", 
                        en: "coleslaw(cabbage,carrot,onion,selery,mayonnaise) and fried fries" },
                    price: "16.00",
                    photo: photo,
                },
                {
                    title: { el: "Κοτόπουλο φιλέτο στην σχάρα", en: "Grilled chicken fillet" },
                    desc: { 
                        el: "ψητά λαχανικά (μελιτζάνα , κολοκύθι,πιπεριά,μανιτάρια πλευρώτους)", 
                        en: "grilled vegetables (eggplant, zucchini ,pepper , plevrotus mushrooms)" },
                    price: "16.00",
                    photo: photo,
                },
                {
                    title: { el: "Ψαρονέφρι μεταγιόν", en: "Pork fillet" },
                    desc: { 
                        el: "σάλτσα ροκφόρ , σπαράγγια σωτέ", 
                        en: "roquefort sauce , sauteed asparagus" },
                    price: "23.00",
                    photo: photo,
                },
                
                
            ]
        },

        //Glika
        {
            title:{el:"Γλυκά",en:"Desserts"},
            products:
            [
                {
                    title: { el: "Αρμενοβίλ", en: "Armenoville" },
                    desc: { 
                        el: "", 
                        en: "" },
                    price: "10.00",
                    photo: photo,
                },
                {
                    title: { el: "Τιραμισού", en: "Tiramisu" },
                    desc: { 
                        el: "", 
                        en: "" },
                    price: "9.00",
                    photo: photo,
                },
     
            ]
        }

    
    ]
};
export default data;
