import weeis_bear from "./../images/menu/beers/s_p1big.jpg";

import burger_Gli from "./../images/menu/Glysteri_photos/Food/s_burg_egg.jpg"
import xoriatiki from "./../images/menu/Glysteri_photos/Food/s_chor_sal.jpg"

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

//cange
import armenovil from "./../images/menu/photos_extra/s_armenovile.jpg"
import backeta_koto from "./../images/menu/photos_extra/s_bageta_kot.jpg"
import toast from "./../images/menu/photos_extra/s_toast.jpg"
import gemista from "./../images/menu/photos_extra/s_gemista.jpg"
import club_clas from "./../images/menu/photos_extra/s_club_kot.jpg"
import garidomak from "./../images/menu/photos_extra/s_shrimps_pasta.jpg"
import special_pissa from "./../images/menu/photos_extra/s_special_pissa.jpg"
import karbonara from "./../images/menu/photos_extra/s_karbonara.jpg"
import chicken_burger from "./../images/menu/photos_extra/s_chicken.jpg"


const photo = null;
const data = {
    categories: [
        // Kafedes
        {
            title: { el: "Καφέδες", en: "Coffees" },
            isRest:false,
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
            isRest:false,
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
            isRest:false,
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
            isRest:false,
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
            isRest:false,
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
                    desc: { el: " Κλασική / Λεμόνι / Μέντα / Αγγούρι", en: "Classic / Lemon / Mint / Cucumber" },
                    price: "6.00",
                    photo: photo,
                },
            ]
                
        },
        //driks
        {
            title:{el:"Ποτά",en:"Drinks"},
            isRest:false,
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
        //sparkling Wines 
        {
            title:{el:"Sparkling",en:"Sparkling"},
            isRest:false,
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
        //white wines
        {
            title:{el:"Λευκά Κρασιά",en:"White Wines"},
            isRest:false,
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
            isRest:false,
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
        //champen wines
        {
            title:{el:"Champagne",en:"Champagne"},
            isRest:false,
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
                    price: "150.00",
                    photo: photo,
                },
            ]
        },
        //Kokteils
        {
            title:{el:"Κοκτέιλ",en:"Cocktails"},
            isRest:false,
            products:[
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
                    title: { el: "Electric Lemonade", en: "Electric Lemonade" },
                    desc: { 
                        el: "βότκα / blue curacao / λάιμ / σιρόπι ζάχαρης / σπράιτ", 
                        en: "voldka / blue curacao / lime / sugar syrup / sprite" 
                    },
                    price: "11.00",
                    photo: photo,
                },
                {
                    title: { el: "Μοχίτο Κλασικό", en: "Mojito Classic" },
                    desc: { 
                        el: "ρούμι / ζαχάρη / λάιμ / μέντα / σόδα", 
                        en: "rum / sugar / lime / mint / soda"
                    },
                    price: "12.00",
                    photo: mohito_coc,
                },
                {
                    title: { el: "Μοχίτο Μάνγκο/Φράουλα", en: "Mojito Mango / Strawberry" },
                    desc: { 
                        el: "ρούμι / ζαχάρη / λάιμ / μέντα / σόδα / πουρές μάνγκο , πουρές φράουλας ", 
                        en: "rum / sugar / lime / mint / soda / mango , strawberry puree"
                    },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Ουζίτο", en: "Ouzito" },
                    desc: { 
                        el: "ούζο / ζαχάρη / λάιμ / μέντα / σόδα ", 
                        en: "ouzo / sugar / lime / mint / soda"
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
                    title: { el: "Μαργαρίτα / Παγωμένη", en: "Marghrita / Frozen" },
                    desc: { 
                        el: "τεκίλα / 3sec (λικέρ Πορτοκάλι) / αλάτι / λάιμ ", 
                        en: "tekila / 3sec (liquer Orange) / lime / salt"
                    },
                    price: "12.00",
                    photo: marg_coc,
                },
                
                {
                    title: { el: "Μαργαρίτα Φράουλα / Παγωμένη", en: "Marghrita Strawberry /Frozen" },
                    desc: { 
                        el: "τεκίλα / 3sec (λικέρ Πορτοκάλι) / αλάτι / Πουρές Φράουλα", 
                        en: "tekila / 3sec (liquer Orange) / salt / Strawberry Jam"
                    },
                    price: "12.00 / 14.00",
                    photo: margarit_str,
                },
                
                {
                    title: { el: "Ντάκιουρι / Παγωμένo", en: "Daiquiri / Frozen" },
                    desc: { 
                        el: "ρούμι / 3sec (λικέρ Πορτοκάλι) / λάιμ / ζάχαρη", 
                        en: "rum / 3sec (liquer Orange) / lime / sugar"
                    },
                    price: "12.00 / 14.00",
                    photo: photo,
                },
                {
                    title: { el: "Ντάκιουρι Φράουλα / Παγωμένo", en: "Daiquiri Strawberry /Frozen" },
                    desc: { 
                        el: "ρούμι / 3sec (λικέρ Πορτοκάλι) / Πουρέ Φράουλας / ζάχαρη", 
                        en: "rum / 3sec (liquer Orange) / Strawberry jam  / sugar"
                    },
                    price: "12.00 / 14.00",
                    photo: photo,
                },
                {
                    title: { el: "Πίνα Κολάντα / Παγωμένη", en: "Pina colada /Frozen" },
                    desc: { 
                        el: "malibu / batida de coco / χυμός ανανά  / πουρέ ανανά / γάλα καρύδας", 
                        en: "malibu /  babatida de coco / pinnapple juice / pinnapple puree / coconut milk"
                    },
                    price: "12.00 / 14.00",
                    photo: photo,
                },
                {
                    title: { el: "Πίνα Κολάντα Φράουλα / Παγωμένη", en: "Pina colada Strawberry /Frozen" },
                    desc: { 
                        el: "malibu / batida de coco / χυμός ανανά  / πουρέ φράουλα / γάλα καρύδας", 
                        en: "malibu /  babatida de coco / pinnapple juice / strawberry puree / coconut milk"
                    },
                    price: "12.00 / 14.00",
                    photo: photo,
                },
                {
                    title: { el: "Πίνα Κολάντα Μάνγκο / Παγωμένη", en: "Pina colada  Mango /Frozen" },
                    desc: { 
                        el: "malibu / batida de coco / χυμός ανανά  / πουρέ μάνγκο / γάλα καρύδας", 
                        en: "malibu /  babatida de coco / pinnapple juice /  mango puree / coconut milk"
                    },
                    price: "12.00 / 14.00",
                    photo: photo,
                },
                {
                    title: { el: "Τσιχλόφουσκα", en: "Bubble Gum" },
                    desc: { 
                        el: "βότκα /  λάιμ / σιρόπι τσιχλόφουσκας", 
                        en: "voldka / lime / bubblegum sirop" 
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
                    title: { el: "Aperol Spritz", en: "Aperol Spritz" },
                    desc: { 
                        el: "Aperol / Prosecco / soda", 
                        en: "Aperol / Prosecco / soda"
                    },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Παλόμα", en: "Paloma" },
                    desc: { 
                        el: "τεκίλα / agave syrup / σόδα γρέιπφρουτ / λάιμ", 
                        en: "tekila / agave syrup / soda grapefruit / lime"
                    },
                    price: "13.00",
                    photo: photo,
                },
                {
                    title: { el: "Mai Tai", en: "Mai Tai" },
                    desc: { 
                        el: "λευκό ρούμι , μαύρο ρούμι , 3sec (λικέρ Πορτοκάλι) , σιρόπι αμυγδάλου , λάιμ , σιρόπι ζάχαρης", 
                        en: "white rum , Dark rum , 3sec (liquer Orange) , almond syrup , lime , sugar syrup"
                    },
                    price: "13.00",
                    photo: photo,
                },
                {
                    title: { el: "Melonball", en: "Melonball" },
                    desc: { 
                        el: "βότκα , λικέρ πεπόνι , χυμός ανανά", 
                        en: "vodka , melon liquer , pineapple juice"
                    },
                    price: "13.00",
                    photo: photo,
                },
                {
                    title: { el: "Mastiha Cosmo", en: "Mastiha Cosmo" },
                    desc: { 
                        el: "λικέρ ματσίχας , 3sec , λάιμ , χυμός κράμπερι", 
                        en: "matsiha liquer , 3sec ,lime , cranberry juice"
                    },
                    price: "13.00",
                    photo: photo,
                },
                {
                    title: { el: "Jungle Bird", en: "Jungle Bird" },
                    desc: { 
                        el: "μαυρο ρούμι , καμπάρι , χυμός ανανά , λάιμ , σιρόπι ζάχαρης", 
                        en: "dark rum , campari , pineapple juice , lime , sugar syrup"
                    },
                    price: "14.00",
                    photo: photo,
                },
                {
                    title: { el: "Porn star", en: "Porn star" },
                    desc: { 
                        el: "βότκα , συρόπι βανίλιας , λάιμ , πουρέ πασίονφρουτ , προσέκο", 
                        en: "vodka , vanilla syrup , lime , passion fruit puree , prosecco"
                    },
                    price: "14.00",
                    photo: photo,
                },
                {
                    title: { el: "Logn Island IceTea / Beach", en: "Logn Island IceTea / Beach" },
                    desc: { 
                        el: "βότκα , ρούμι , τεκίλα , τζίν , 3sec , λάιμ , κοκα-κόλα / χυμός κράμπερι", 
                        en: "vodka , rum , tequilla , gin , 3sec , lime , coca-cola / cranberry juice"
                    },
                    price: "12.00",
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
                    title: { el: "Ζόμπι", en: "Zombie" },
                    desc: { 
                        el: "λευκό ρουμι / μαύρο ρουμι / καπνιστό ρουμι /  falernum σιρόπι / λάιμ / χυμός ανανά / πάσιον φρουτ πουρέ", 
                        en: "white rum / dark rum / spiced rum / falernum syrup / lime  / pinneapple juice / passion fruit puree"
                    },
                    price: "15.00",
                    photo: photo,
                },
                
            ]
        },
        //signatures
        {
            title:{el:"Signatures",en:"Signatures"},
            isRest:false,
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
            isRest:false,
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
            isRest:false,
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
            isRest:false,
            products:
            [
                {
                    title: { el: "Ομελέτα απλή", en: "Plain omelette" },
                    desc: { el: "σερβίρεται με ανάμεικτη πράσινη σαλάτα", en: "served with mixed green salad" },
                    price: "10.00",
                    photo: photo,
                },
                {
                    title: { el: "Ομελέτα με τυρί , ζαμπόν ή γαλοπούλα", en: "Omelette with cheese , ham or turkey" },
                    desc: {el: "σερβίρεται με ανάμεικτη πράσινη σαλάτα", en: "served with mixed green salad"  },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Ομελέτα Σπέσιαλ", en: "Special omelette" },
                    desc: { el: "τυρί / ζαμπόν / μπέικον / μανιτάρια / πιπεριά ,σερβίρεται με ανάμεικτη πράσινη σαλάτα", en: "cheese / ham / bacon / mushrooms / pepper ,served with mixed green salad" },
                    price: "14.00",
                    photo: photo,
                },
            ]
        },
        // snacks
        {
            title:{el:"Σνακ",en:"Snacks"},
            isRest:false,
            products:[
                {
                    title: { el: "Τοστ", en: "Toast" },
                    desc: { el: "τυρί / ζαμπόν ή γαλοπούλα", en: "cheese / ham or turkey" },
                    price: "5.00",
                    photo: toast,
                },
                {
                    title: { el: "Γλυστέρι Χοτ Ντογκ", en: "Glysteri Hot Dog" },
                    desc: { 
                        el: "φρέσκο ψωμί / τοπικό λουκάνικο / καραμελωμένα κρεμμύδια / λάχανο / καρότο / μαγιονέζα / κέτσαπ / μουστάρδα , σερβίρεται με τηγανητές πατάτες", 
                        en: "fresh bread / local sausage / caramelised onions / cabbage / carrot / mayonnaise / ketchup / mustard , served with fried fries" 
                    },
                    price: "12.00",
                    photo: photo,
                }
            ]
        },
        //giaourtia
        {
            title:{el:"Γιαούρτια",en:"Yogurts"},
            isRest:false,
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
            isRest:false,
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
                    photo: backeta_koto,
                }
            ]
        },
        // bao bans
        {
            title:{el:"Bao Bun",en:"Bao Bun"},
            isRest:false,
            products:[
                {
                    title: { el: "Bao Bun κοτόπουλο (2 τεμ.)", en: "Bao Bun chicken (2 pic.)" },
                    desc: { 
                        el: "παναρισμένες μπουκιές κοτόπουλου / coleslaw / ραπανάκι / σχοινόπρασο", 
                        en: "chicken nuggets / coleslaw / radish / chives" },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Bao Bun vegan (2 τεμ.)", en: "Bao Bun vegan (2 pic.)" },
                    desc: { 
                        el: "αβοκάντο / πιπεριές / αγγούρι / καρότο / παπαρδέλες κολοκυθιού / ραπανάκι / σχοινόπρασο", 
                        en: "avocado / peppers/ cucumber / carrot / zucchini / radish / chives" },
                    price: "12.00",
                    photo: photo,
                }
            ]
        },
        //Club
        {
            title:{el:"Κλάμπ Σάντουιτς",en:"Club Sandwich"},
            isRest:false,
            products:[
                {
                    title: { el: "Κλασικό", en: "Classic" },
                    desc: { 
                        el: "τυρί /  ζαμπόν ή γαλοπούλα / μπέικον / μαρούλι / ντομάτα / μαγιονέζα , σερβίρεται με τηγανητές πατάτες", 
                        en: "cheese / ham or turkey / bacon / lettuce / tomato / mayonnaise , served with fried fries" },
                    price: "14.00",
                    photo: club_clas,
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
        //pites
        {
            title:{el:"Πίτες",en:"Pies"},
            isRest:false,
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
        //burgers
        {
            title:{el:"Μπέργκερ",en:"Burgers"},
            isRest:false,
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
                    photo: chicken_burger,
                },
                
     
            ]
        },
        //pissa
        {
            title:{el:"Πίτσες",en:"Pizzas"},
            isRest:false,
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
                    photo: special_pissa,
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
            isRest:false,
            products:[
                {
                    title: { el: "Aglio e olio", en: "Aglio e olio" },
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
                    photo: karbonara,
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
                    photo: garidomak,
                },
                
                
            ]
        },
        //salates
        {
            title: { el: "Σαλάτες", en: "Salads" },
            isRest:true,
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

                {
                    title: { el: "Μεσογειακή", en: "Mediterranean" },
                    desc: { el: "τομάτα , αγγούρι , κρεμμύδι , πιπεριά , ελιές , κάππαρι , φέτα , ρίγανη , ελαιόλαδο", 
                            en: "tomato , cucumber , onion , pepper , olives , caper , feta cheese , oregano , olive oil" },
                    price: "14.00",
                    photo: photo,
                },
                {
                    title: { el: "Summer Dream", en: "Summer Dream" },
                    desc: { el: "μαρούλι , λόλα , φέτες καρπουζιού , τριμμένη φέτα , κρουτόν , dressing καρπουζιού", 
                            en: "lettuce , lola , sclices of watermelon , pieces of feta cheese , crouton , watermelon dressing" },
                    price: "15.00",
                    photo: photo,
                },
                {
                    title: { el: "Γλυστέρι", en: "Glysteri" },
                    desc: { el: "σπανάκι , ρόκα , παντζαρόφυλλα , λιαστή τομάτα , παξιμάδι , κουκουνάρι , αποξηραμένα σύκα , ανθότυρο , dressing βαλσάμικο", 
                            en: "spinach , fresh rocket , beetroot leaves , dried tomato , rusk ,  pine , dried figs , soft greek cheese (anthotyro) , balsamic dressing" },
                    price: "16.00",
                    photo: photo,
                },
                {
                    title: { el: "Ντάκος", en: "Dakos" },
                    desc: { el: "κριθαροκούλουρα , τριμμένη τομάτα , σως φέτας , ελιές , ρίγανη , ελαιόλαδο", 
                            en: "barley roll , grated tomato , feta cheese sauce , olives , oregano , olive oil" },
                    price: "14.00",
                    photo: photo,
                },
                
            ],
        },
        //orektika
        {
            title:{el:"Ορεκτικά",en:"Starters"},
            isRest:true,
            products:[
                {
                    title: { el: "Μανιτάρια Γεμιστά", en: "Stuffed Mushrooms" },
                    desc: { 
                        el: "μπέικον , κρέμα τυριού , κίτρινα τυριά , κρέμα γάλακτος", 
                        en: "bacon , cheese cream , yellow cheeses , milk cream" },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Χαλούμι", en: "Haloumi Cheese" },
                    desc: { 
                        el: "τσάντνει τομάτας", 
                        en: "tomato chutney" },
                    price: "10.00",
                    photo: photo,
                },
                {
                    title: { el: "Κεφτεδάκι", en: "Meatballs" },
                    desc: { 
                        el: "με σώς γιαουρτιού", 
                        en: "with Yoghurt sauce" },
                    price: "14.00",
                    photo: photo,
                },
                {
                    title: { el: "Φάβα", en: "Fava" },
                    desc: { 
                        el: "με καραμελωμένα κρεμμύδια", 
                        en: "with caramelized onions" },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Γουακαμόλε", en: "Guacamole" },
                    desc: { 
                        el: "με πιτάκια", 
                        en: "with small pies" },
                    price: "18.00",
                    photo: photo,
                },
                {
                    title: { el: "Μπρουσκέτα", en: "Bruschetta" },
                    desc: { 
                        el: "με τυρί κρέμα , τομάτα , κάππαρη , ελαιόλαδο , θυμάρι", 
                        en: "with cream cheese , tomato , caper , olive oil , thyme" },
                    price: "12.00",
                    photo: photo,
                },
                {
                    title: { el: "Χταπόδι", en: "Octapus" },
                    desc: { 
                        el: "με φάβα", 
                        en: "with fava" },
                    price: "18.00",
                    photo: photo,
                },
                {
                    title: { el: "Τηγανητές Πατάτες", en: "French Fries" },
                    desc: { 
                        el: "με σως τσένταρ , ρίγανη", 
                        en: "with cheddar sauce , oregano" },
                    price: "8.00",
                    photo: photo,
                },
                {
                    title: { el: "Πλατό Τυριών 2 Ατόμων", en: "Cheese Plate fro 2 people" },
                    desc: { 
                        el: "", 
                        en: "" },
                    price: "16.00",
                    photo: photo,
                },
            ]
        },
        //psaria
        {
            title:{el:"Ψάρια",en:"Fishes"},
            isRest:true,
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
                        en: "oil lemon , turmeric dressing / served with vegetables and seasonal greens" },
                    price: "22.00",
                    photo: photo,
                },
                
            ]
        },
        //meat
        {
            title:{el:"Kρεατικά",en:"Μeat"},
            isRest:true,
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
                    title: { el: "Μπιφτέκι γεμιστό μετσοβόνε - τυρί κρέμα", en: "Stuffed meat patty with metsovone and cream cheese" },
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
        {
            title:{el:"Παραδοσιακό τοπικό πιάτο ημέρας",en:"Traditional local dish of the day"},
            isRest:true,
            products:[
                {
                    title: { el: "Γεμιστά", en: "Stuffed Tomato & Pepper" },
                    desc: { 
                        el: "με γέμιση από ρύζι , φέτα , κολοκύθι , μελιτζάνα , τραχανά , μυρωδικά και σερβίρονται με πατάτες φούρνου", 
                        en: "stuffed with rice , feta cheese , zucchini , eggplant , fresh herbs , trachana and served with baked potatoes" },
                    price: "14.00",
                    photo: gemista,
                },
            ]
        },
        //Glika
        {
            title:{el:"Γλυκά",en:"Desserts"},
            isRest:true,
            products:
            [
                {
                    title: { el: "Αρμενοβίλ", en: "Armenoville" },
                    desc: { 
                        el: "", 
                        en: "" },
                    price: "10.00",
                    photo: armenovil,
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
