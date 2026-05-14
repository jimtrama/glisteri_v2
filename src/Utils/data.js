const burger_Gli = "images/menu/Glysteri_photos/Food/s_burg_egg.jpg";
const xoriatiki = "images/menu/Glysteri_photos/Food/s_chor_sal.jpg";

const club_kot = "images/menu/Glysteri_photos/Food/s_club_cea.jpg";
const pizz_it = "images/menu/Glysteri_photos/Food/s_pizz_it.jpg";

// Change
const pizz_gr = "images/menu/pizza/s_p1big.jpg";
const past_nap = "images/menu/pasta/s_p1big.jpg";
const ntakos_nap = "images/menu/salads/s_p2big.jpg";

//cange
const armenovil = "images/menu/photos_extra/s_armenovile.jpg";
const backeta_koto = "images/menu/photos_extra/s_bageta_kot.jpg";
const toast = "images/menu/photos_extra/s_toast.jpg";
const club_clas = "images/menu/photos_extra/s_club_kot.jpg";
const garidomak = "images/menu/photos_extra/s_shrimps_pasta.jpg";
const special_pissa = "images/menu/photos_extra/s_special_pissa.jpg";
const karbonara = "images/menu/photos_extra/s_karbonara.jpg";
const chicken_burger = "images/menu/photos_extra/s_chicken.jpg";

//icons
const coffees_icon = "images/icons/beach/coffee.png";
const beers_icon = "images/icons/beach/beer.png";
const juice_icon = "images/icons/beach/juice.png";
const smothie_icon = "images/icons/beach/smoothie.png";
const soda_icon = "images/icons/beach/soda.png";
const drinks_icon = "images/icons/beach/drinks.png";
const sparkling_icon = "images/icons/beach/sparkling-wine.png";
const clubsand_icon = "images/icons/beach/clubsandwich.png";
const burger_icon = "images/icons/beach/burger.png";
const pizzas_icon = "images/icons/beach/pizza.png";
const pasta_icon = "images/icons/beach/pasta.png";
const cocktail_icon = "images/icons/beach/cocktail.png";
const breakfast_icon = "images/icons/beach/breakfast.png";
const baobun_icon = "images/icons/beach/baobun.png";
const mocktail_icon = "images/icons/beach/mocktail.png";
const pie_icon = "images/icons/beach/pie.png";
const yogurt_icon = "images/icons/beach/yogurt.png";
const wine_icon = "images/icons/beach/wine-bottle.png";
const snak_icon = "images/icons/beach/toast.png";

const salads_icon = "images/icons/rest/salad.png";
const meat_icon = "images/icons/rest/meat.png";
const starters_icon = "images/icons/rest/starters.png";
const fish_icon = "images/icons/rest/fish.png";
const sweet_icon = "images/icons/rest/cake.png";

//new
const aperol = "images/menu/resized_images/aperol_sort.jpg";
const brumble = "images/menu/resized_images/brumb_sort.jpg";
const lager = "images/menu/resized_images/lager_sort.jpg";
const mai_tai = "images/menu/resized_images/mai_tai_free_sort.jpg";
const passionito = "images/menu/resized_images/passionito_sort.jpg";
const pils = "images/menu/resized_images/pils_sort.jpg";
const pizza_marg = "images/menu/resized_images/pissa_mag_sort.jpg";
const weis = "images/menu/resized_images/weis_sort.jpg";

const photo = null;
const data = {
  categories: [
    //DRINKS
    // Kafedes
    {
      title: { el: "Καφέδες", en: "Coffee" },
      isRest: false,
      icon: coffees_icon,
      products: [
        {
          title: { el: "Εσπρέσο", en: "Espresso" },
          desc: { el: "", en: "" },
          price: "3",
          photo: photo,
        },
        {
          title: { el: "Εσπρέσο Διπλός ", en: "Double Espresso" },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Εσπρέσο φρέντο ", en: "Freddo Espresso " },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Kαπουτσίνο ", en: "Capuccino" },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Kαπουτσίνο διπλό ", en: "Double Capuccino" },
          desc: { el: "", en: "" },
          price: "6",
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
          price: "6",
          photo: photo,
        },
        {
          title: { el: "Latte ζεστό/κρύο", en: "Latte hot/cold" },
          desc: { el: "", en: "" },
          price: "6",
          photo: photo,
        },
        {
          title: { el: "Φραπέ", en: "Frappe" },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Φραπέ Μπέιλυς", en: "Frappe  with Baileys" },
          desc: { el: "", en: "" },
          price: "8",
          photo: photo,
        },
        {
          title: { el: "Σοκολάτα ζεστή/κρύα", en: "Chocolate hot/cold" },
          desc: { el: "", en: "" },
          price: "6",
          photo: photo,
        },
      ],
    },
    //Ximoi
    {
      title: { el: "Smoothies - Χυμοί", en: "Smoothies - Juices" },
      isRest: false,
      icon: juice_icon,
      products: [
        {
          title: { el: "Χυμός  Ποτήρι", en: "Cup of carton juice" },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Φυσικός Χυμός Πορτοκάλι", en: "Fresh Orange Juice" },
          desc: { el: "", en: "" },
          price: "8",
          photo: photo,
        },
        {
          title: { el: "Smoothies", en: "Smoothies" },
          desc: { el: "", en: "" },
          price: "8",
          photo: photo,
        },
        {
          title: { el: "Smoothies με αλκοόλ", en: "Smoothies with alcohol" },
          desc: { el: "", en: "" },
          price: "14",
          photo: photo,
        },
      ],
    },
    //soft drinks
    {
      title: { el: "Αναψυκτικά", en: "Soft drinks" },
      isRest: false,
      icon: soda_icon,
      products: [
        {
          title: { el: "Κοκα Κόλα", en: "Coca-Cola" },
          desc: { el: "Normal / Zero ", en: "Normal / Zero " },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Σπράιτ", en: "Sprite" },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Σόδα", en: "Soda water" },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Τόνικ", en: "Tonic Water" },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Κρύο Τσάι", en: "Ice Tea" },
          desc: {
            el: "Ροδάκινο / Λεμόνι / Πράσινο",
            en: "Peach / Lemon / Green",
          },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Πορτοκαλάδα", en: "Οrangeade" },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: {
            el: "Πορτοκαλάδα χωρίς ανθρακικό",
            en: "Non-carbonated Οrangeade",
          },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Λεμονάδα", en: "Lemonade" },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Red Bull", en: "Red Bull" },
          desc: { el: "Kανονικό / Zero", en: "Normal / Zero" },
          price: "7",
          photo: photo,
        },
        {
          title: { el: "Premium soft drinks", en: "Premium soft drinks" },
          desc: { el: "", en: "" },
          price: "8",
          photo: photo,
        },
        {
          title: {
            el: "Aνθρακούχο νερό μικρό / μεγάλο",
            en: "Sparkling water small / big",
          },
          desc: { el: "", en: "" },
          price: "5 / 7",
          photo: photo,
        },
        {
          title: { el: "Νερό 0.5l / 1l", en: "Water 0.5l / 1l" },
          desc: { el: "", en: "" },
          price: "1 / 2",
          photo: photo,
        },
        {
          title: { el: "Aqua Carpatica flavors", en: "Aqua Carpatica flavors" },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        }
      ],
    },
    //Beers
    {
      title: { el: "Μπύρες", en: "Beers" },
      isRest: false,
      icon: beers_icon,
      products: [
        {
          title: { el: "Έζα Λάγκερ", en: "Eza Lager" },
          desc: { el: "500ml", en: "500ml" },
          price: "7",
          photo: lager,
        },
        {
          title: { el: "Έζα Πιλς", en: "Eza Pils" },
          desc: { el: "500ml", en: "500ml" },
          price: "7",
          photo: pils,
        },
        {
          title: { el: "Χωρίς αλκοόλ 0%", en: "Non-Alcoholic 0%" },
          desc: { el: "500ml", en: "500ml" },
          price: "7",
          photo: photo,
        },
        {
          title: { el: "Ράντλερ", en: "Radler" },
          desc: { el: "330ml", en: "330ml" },
          price: "7",
          photo: photo,
        },
        {
          title: { el: "Μηλίτης", en: "Cyder" },
          desc: { el: "330ml", en: "330ml" },
          price: "7",
          photo: photo,
        },
        {
          title: { el: "A Toda Madre", en: "A Toda Madre" },
          desc: { el: "330ml", en: "330ml" },
          price: "7",
          photo: photo,
        }
      ],
    },
    //driks
    {
      title: { el: "Ποτά", en: "Drinks" },
      isRest: false,
      icon: drinks_icon,
      products: [
        {
          title: { el: "Ποτό απλό", en: "Simple Drink" },
          desc: { el: "" },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Ποτό premium", en: "Premium Drink" },
          desc: { el: "" },
          price: "14",
          photo: photo,
        },
        {
          title: { el: "Φιάλη απλή", en: "Simple Bottle" },
          desc: {
            el: "",
            en: "",
          },
          price: "90",
          photo: photo,
        },
        {
          title: { el: "Φιάλη premium", en: "Premium Bottle" },
          desc: {
            el: "",
            en: "",
          },
          price: "120",
          photo: photo,
        },
      ],
    },
    //mocktails
    {
      title: { el: "Mocktails", en: "Mocktails" },
      isRest: false,
      icon: mocktail_icon,
      products: [
        {
          title: { el: "Mojito 0%", en: "Mojito 0%" },
          desc: {
            el: "mint leaves, lime, sugar syrup, sprite",
            en: "mint leaves, lime, sugar syrup, sprite",
          },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Pina Colada 0%", en: "Pina Colada 0%" },
          desc: {
            el: "pineapple juice, pineapple puree, coconut cream",
            en: "pineapple juice, pineapple puree, coconut cream",
          },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Mai Tai 0%", en: "Mai Tai 0%" },
          desc: {
            el: "pineapple juice, orange juice, lime, almond syrup, grenadine",
            en: "pineapple juice, orange juice, lime, almond syrup, grenadine",
          },
          price: "10",
          photo: mai_tai,
        },
        {
          title: { el: "Jack Sparrow Nightmare", en: "Jack Sparrow Nightmare" },
          desc: {
            el: "gin 0%, passion fruit puree, almond syrup, lime",
            en: "gin 0%, passion fruit puree, almond syrup, lime",
          },
          price: "12",
          photo: photo,
        }
      ],
    },
    //classic Kokteils
    {
      title: { el: "Κλασικά Κοκτέιλ", en: "Classic Cocktails" },
      isRest: false,
      icon: cocktail_icon,
      products: [
        {
          title: { el: "Μοχίτο", en: "Mojito" },
          desc: {
            el: "ρούμι, ζαχάρη, λάιμ, μέντα, σόδα ",
            en: "rum, sugar, lime, mint, soda ",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Πίνα Κολάντα", en: "Pina colada" },
          desc: {
            el: "malibu, batida de coco, χυμός ανανά , πουρέ ανανά, γάλα καρύδας",
            en: "malibu,  babatida de coco, pinnapple juice, pinnapple puree, coconut milk",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Παλόμα", en: "Paloma" },
          desc: {
            el: "τεκίλα, σιρόπι αγάβης, σόδα γρέιπφρουτ, λάιμ",
            en: "tekila, agave syrup, soda grapefruit, lime",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Mai Tai", en: "Mai Tai" },
          desc: {
            el: "λευκό ρούμι , μαύρο ρούμι , λικέρ Πορτοκάλι, σιρόπι αμυγδάλου , λάιμ , σιρόπι ζάχαρης",
            en: "white rum , Dark rum , οrange liquer, almond syrup , lime , sugar syrup",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Μαργαρίτα ", en: "Marghrita " },
          desc: {
            el: "τεκίλα, λικέρ Πορτοκάλι, λάιμ, σιρόπι αγάβης",
            en: "tekila, orange liquer, lime, agave syrup",
          },
          price: "12",
          photo: photo,
        },

        {
          title: { el: "όλα τα κλασσικά Κοκτέιλ", en: "all classic cocktails" },
          desc: {
            el: "",
            en: "",
          },
          price: "12",
          photo: photo,
        },
      ],
    },
    //signatures
    {
      title: { el: "Signatures", en: "Signatures" },
      isRest: false,
      icon: drinks_icon,
      products: [
        {
          title: { el: "Glysteri Spritz", en: "Glysteri Spritz" },
          desc: {
            el: "aperol, moscato d'asti, grapefruit soda",
            en: "aperol, moscato d'asti, grapefruit soda",
          },
          price: "14",
          photo: aperol,
        },
        {
          title: { el: "Glysteri Bramble", en: "Glysteri Bramble" },
          desc: {
            el: "gin, triple sec, rasperry syrup, lime",
            en: "gin, triple sec, rasperry syrup, lime",
          },
          price: "14",
          photo: brumble,
        },
        {
          title: { el: "Πασιονίτο", en: "Passionito" },
          desc: {
            el: "ρούμι, archers, πουρέ πασιονφρουτ, falernum syrup, λάιμ",
            en: "rum ,archers ,pineapple puree ,passion fruit puree, falernum syrup, lime"},
          price: "15",
          photo: passionito,
        },
        {
          title: { el: "Jolly Roger", en: "Jolly Roger" },
          desc: {
            el: "rum, allspicedram, pineapple puree, honey syrup, falernum syrup, orange juice, lime, angostura bitters",
            en: "rum, allspicedram, pineapple puree, honey syrup, falernum syrup, orange juice, lime, angostura bitters",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Coolcumber", en: "Coolcumber" },
          desc: {
            el: "gin, freshcucumber, ginger syrup, lime",
            en: "gin, freshcucumber, ginger syrup, lime",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Ζόμπι", en: "Zombie" },
          desc: {
            el: "white rum, spiced rum, aged rum, cinnamon syrup, passion fruit puree, pineapple puree, falernum syrup, lime, grenadine, angostura bitters",
            en: "white rum, spiced rum, aged rum, cinnamon syrup, passion fruit puree, pineapple puree, falernum syrup, lime, grenadine, angostura bitters"},
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Going merry", en: "Going merry" },
          desc: {
            el: "rum, allspice dram, passion fruit puree, vanilla syrup, orange juice, lime, angostura bitters",
            en: "rum, allspice dram, passion fruit puree, vanilla syrup, orange juice, lime, angostura bitters",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Gin Basil", en: "Gin Basil" },
          desc: {
            el: "gin ,fresh basil leaves, lime, simple syrup",
            en: "gin ,fresh basil leaves, lime, simple syrup",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Lollipop", en: "Lollipop" },
          desc: {
            el: "white rum ,strawberry puree, orange liqueur, vanilla syrup, orange bitters",
            en: "white rum ,strawberry puree, orange liqueur, vanilla syrup, orange bitters",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Mela verde", en: "Mela verde" },
          desc: {
            el: "gin, green apple puree, annana syrup, almond syrup, lime, angostura bitters",
            en: "gin, green apple puree, annana syrup, almond syrup, lime, angostura bitters",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "The Dawn Treader", en: "The Dawn Treader" },
          desc: {
            el: "gin , falernam syrup, passion fruit puree, almond syrup, lime",
            en: "gin , falernam syrup, passion fruit puree, almond syrup, lime",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Chilly mexico", en: "Chilly mexico" },
          desc: {
            el: "tequila yellow, pineapple puree, orange liqueur, agave syrup, lime, chilli syrup, orange bitters",
            en: "tequila yellow, pineapple puree, orange liqueur, agave syrup, lime, chilli syrup, orange bitters",
          },
          price: "15",
          photo: photo,
        },
      ],
    },
    //white wines
    {
      title: { el: "Λευκά Κρασιά", en: "White Wines" },
      isRest: false,
      icon: wine_icon,
      products: [
        {
          title: { el: "Glysteri", en: "Glysteri" },
          desc: { el: "187ml", en: "187ml" },
          price: "7",
          photo: photo,
        },
        {
          title: { el: "Glysteri", en: "Glysteri" },
          desc: { el: "Kydonitsa 750ml", en: "Kydonitsa 750ml" },
          price: "30",
          photo: photo,
        },
        {
          title: { el: "Glysteri Orange", en: "Glysteri Orange" },
          desc: { el: "Malagouzia 750ml", en: "Malagouzia 750ml" },
          price: "30",
          photo: photo,
        },
        {
          title: { el: "Κτήμα Γεροβασιλείου", en: "Gerovasileiou" },
          desc: {
            el: "Assyrtiko, Malagouzia 750ml",
            en: "Assyrtiko, Malagouzia 750ml",
          },
          price: "48",
          photo: photo,
        },
        {
          title: { el: "Vivlia Chora", en: "Vivlia Chora" },
          desc: { el: "Sauvignon Blanc 750ml", en: "Sauvignon Blanc 750ml" },
          price: "48",
          photo: photo,
        },
        {
          title: { el: "Ktima Hatzimichalis", en: "Hatzimichalis" },
          desc: { el: "Chardonnay 750ml", en: "Chardonnay 750ml" },
          price: "44",
          photo: photo,
        },
      ],
    },
    //Roze krasia
    {
      title: { el: "Ροζέ Κρασιά", en: "Roze Wines" },
      isRest: false,
      icon: wine_icon,
      products: [
        {
          title: { el: "Glysteri", en: "Glysteri" },
          desc: { el: "187ml", en: "187ml" },
          price: "7",
          photo: photo,
        },
        {
          title: { el: "Glysteri", en: "Glysteri" },
          desc: { el: "Moscato 750ml", en: "Moscato 750ml" },
          price: "30",
          photo: photo,
        },
        {
          title: { el: "Ktima Alfa Skatzoxiros", en: "Ktima Alfa Skatzoxiros" },
          desc: { el: "Xinomavro 750ml", en: "Xinomavro 750ml" },
          price: "44",
          photo: photo,
        },
        {
          title: { el: "Domaine Costa Lazaridi", en: "Domaine Costa Lazaridi" },
          desc: {
            el: "Merlot, Agiorgitiko, Grenache 750ml",
            en: "Merlot, Agiorgitiko, Grenache 750ml",
          },
          price: "48",
          photo: photo,
        },
        {
          title: { el: "Chateau Miraval", en: "Chateau Miraval" },
          desc: {
            el: "Cinsaut, Grenache Rouge, Syrah 750ml",
            en: "Cinsaut, Grenache Rouge, Syrah 750ml",
          },
          price: "70",
          photo: photo,
        },
      ],
    },
    //sparkling Wines
    {
      title: { el: "Sparkling - Champagne", en: "Sparkling - Champagne" },
      isRest: false,
      icon: sparkling_icon,
      products: [
        {
          title: { el: "Προσέκο", en: "Prosecco" },
          desc: { el: "750 ml", en: "750 ml" },
          price: "38",
          photo: photo,
        },
        {
          title: { el: "Moet", en: "Moet" },
          desc: { el: "750ml", en: "750ml" },
          price: "140",
          photo: photo,
        },
        {
          title: { el: "Moet Ice", en: "Moet Ice" },
          desc: { el: "750ml", en: "750ml" },
          price: "160",
          photo: photo,
        },
      ],
    },

    //FOOD
    // Tost
    {
      title: { el: "Τοστ", en: "Toast" },
      isRest: false,
      icon: snak_icon,
      products: [
        {
          title: { el: "Τοστ", en: "Toast" },
          desc: { el: "τυρί, ζαμπόν ή γαλοπούλα", en: "cheese, ham or turkey" },
          price: "6",
          photo: toast,
        },
      ],
    },
    //giaourtia
    {
      title: { el: "Γιαούρτια", en: "Yogurts" },
      isRest: false,
      icon: yogurt_icon,
      products: [
        {
          title: { el: "Γιαούρτι", en: "Yoghurt" },
          desc: { el: "μέλι, καρύδια", en: "honey, walnuts" },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Γιαούρτι", en: "Yoghurt" },
          desc: { el: "μέλι, φρούτα", en: "honey, fruits" },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Γιαούρτι", en: "Yoghurt" },
          desc: { el: "γκρανόλα, φρούτα, μέλι", en: "granola, fruits, honey" },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Γιαούρτι", en: "Yoghurt" },
          desc: {
            el: "Δαμασκηνο Σκοπελου",
            en: "Skopelos traditional plum",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Φρουτοσαλάτα", en: "Fruit salad" },
          desc: { el: "", en: "" },
          price: "12",
          photo: photo,
        },
      ],
    },
    //pites
    {
      title: { el: "Πίτες", en: "Pies" },
      isRest: false,
      icon: pie_icon,
      products: [
        {
          title: { el: "Σκοπελίτικη τυρόπιτα ", en: "Skopelos cheese pie" },
          desc: {
            el: "",
            en: "",
          },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Γαλατόπιτα Σκοπέλου", en: "Skopelos sweet milk pie" },
          desc: {
            el: "",
            en: "",
          },
          price: "10",
          photo: photo,
        },
      ],
    },
    //snacks
    {
      title: { el: "Σνακ", en: "Snacks" },
      isRest: false,
      icon: snak_icon,
      products: [
        {
          title: { el: "Γλυστέρι Χοτ Ντογκ", en: "Glysteri Hot Dog" },
          desc: {
            el: "φρέσκο ψωμί / τοπικό λουκάνικο / καραμελωμένα κρεμμύδια / coleslaw / κέτσαπ / μουστάρδα , σερβίρεται με τηγανητές πατάτες",
            en: "fresh bread / local sausage / caramelised onions / coleslaw / ketchup / mustard , served with fried fries",
          },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Σάντουις Αβοκάντο", en: "Sandwich Αvocado" },
          desc: {
            el: "ζυμωτό ψωμί / αβοκάντο / ντοματίνια / αυγό μάτι / ρόκα",
            en: "fermented bread / avocado / cherry tomatoes / fried egg / rocket",
          },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Κοτόπουλο σάντουιτς", en: "Chicken Sandwich" },
          desc: {
            el: "χειροποίητες κοτομπουκιές / μαρούλι / ντομάτα / σως μουστάρδας , σερβίρεται με τηγανητές πατάτες",
            en: "homemade chicken nuggets / lettuce / tomato / mustard sauce  , served with fried fries",
          },
          price: "10",
          photo: backeta_koto,
        },
        {
          title: { el: "Τηγανιτες πατατες", en: "Fried potatoes" },
          desc: {
            el: "",
            en: "",
          },
          price: "8",
          photo: photo,
        },
      ],
    },
    //Club
    {
      title: { el: "Κλάμπ Σάντουιτς", en: "Club Sandwich" },
      isRest: false,
      icon: clubsand_icon,
      products: [
        {
          title: { el: "Κλασικό ή Γαλοπούλα", en: "Classic or Turkey" },
          desc: {
            el: "τυρί /  ζαμπόν ή γαλοπούλα / μπέικον / μαρούλι / ντομάτα / μαγιονέζα , σερβίρεται με τηγανητές πατάτες",
            en: "cheese / ham or turkey / bacon / lettuce / tomato / mayonnaise , served with fried fries",
          },
          price: "14",
          photo: club_clas,
        },
        {
          title: { el: "Κοτόπουλο", en: "Chicken" },
          desc: {
            el: "τυρί / κοτόπουλο / τηγανητό αυγό / μαρούλι / ντομάτα / σως μουστάρδας , σερβίρεται με τηγανητές πατάτες",
            en: "cheese / chicken  / fried egg / lettuce / tomato / mustard sauce , served with fried fries",
          },
          price: "16",
          photo: club_kot,
        },
      ],
    },
    //salates
    {
      title: { el: "Σαλάτες", en: "Salads" },
      isRest: false,
      icon: salads_icon,
      products: [
        {
          title: { el: "Χωριάτικη", en: "Greek Salad" },
          desc: {
            el: "ντομάτα , αγγούρι , πιπεριά , κρεμμύδι, ρίγανη , ελιές, φέτα , ελαιόλαδο",
            en: "tomato, cucumber , pepper, onion , oregano, olives, feta cheese , olive oil",
          },
          price: "12",
          photo: xoriatiki,
        },
        {
          title: { el: "Ντάκος", en: "Dakos" },
          desc: {
            el: "παξιμάδι κριθαριού, τριμμένη τομάτα, φέτα, ελιές, ρίγανη, ελαιόλαδο",
            en: "barley rusk , grated tomato , feta cheese, olives , oregano , olive oil",
          },
          price: "12",
          photo: ntakos_nap,
        },
        {
          title: { el: "Kαίσαρα", en: "Ceasar's" },
          desc: {
            el: "μαρούλι, ντοματίνια , καλαμπόκι , κοτόπουλο , κρουτόν , μπέικον , φλοιδες παρμεζάνα , σως caesar's",
            en: "lettuce, cherry tomatoes , corn , chicken , croutons, parmesan flakes, bacon, caesar's dressing",
          },
          price: "15",
          photo: photo,
        },
      ],
    },
    //burgers
    {
      title: { el: "Μπέργκερ", en: "Burgers" },
      isRest: false,
      icon: burger_icon,
      products: [
        {
          title: { el: "Cheeseburger", en: "Cheeseburger" },
          desc: {
            el: "χειροποίητο μπιφτέκι με 100% μοσχαρίσιο κυμά / τσένταρ / μαρούλι / τομάτα / σως πίκλας / κέτσαπ / μουστάρδα , σερβίρεται με τηγανητές πατάτες ",
            en: "handmade 100% beef burger / cheddar / lettuce / tomato / pickle sauce / ketchup / mustard , served with fried fries ",
          },
          price: "17",
          photo: photo,
        },
        {
          title: { el: "Γλυστέρι", en: "Glisteri" },
          desc: {
            el: "χειροποίητο μπιφτέκι με 100% μοσχαρίσιο κυμά, τσένταρ, μαρούλι, ντομάτα, σως πίκλας , μπέικον , ντομάτα , τηγανητό αυγό , καραμελωμένα κρεμμύδια , σερβίρεται με τηγανητές πατάτες",
            en: "handmade 100% beef burger / cheddar / lettuce / tomato / pickle sauce / bacon / tomato / lettuce / fried egg / caramelized onions , served with fried fries",
          },
          price: "19",
          photo: burger_Gli,
        },
        {
          title: { el: "Μπέργκερ κοτόπουλο", en: "Chicken burger" },
          desc: {
            el: "φιλέτο μπούτι κοτόπουλο σε πάνκο, iceberg , μπέικον , ντομάτα , τηγανητό αυγό , σως μουστάρδας - μελιού, σερβίρεται με τηγανητές πατάτες",
            en: "chicken leg fillet in panko, iceberg , bacon, tomato, fried egg , honey - mustard sauce, served with fried fries",
          },
          price: "19",
          photo: chicken_burger,
        },
      ],
    },
    //pissa
    {
      title: { el: "Πίτσες", en: "Pizzas" },
      isRest: false,
      icon: pizzas_icon,
      products: [
        {
          title: { el: "Μαργαρίτα", en: "Margherita" },
          desc: {
            el: "σάλτσα ντομάτας , μοτσαρέλα , μοσταρέλα , βασιλικό",
            en: "tomato sauce , mozzarella , mozzarella , fresh basil",
          },
          price: "16",
          photo: pizza_marg,
        },
        {
          title: { el: "Σπέσιαλ", en: "Special" },
          desc: {
            el: "σάλτσα ντομάτας, μοτσαρέλα, μπέικον, ζαμπόν, μανιτάρια, πιπεριές",
            en: "tomato sauce, mozzarella, bacon, ham, mushrooms, peppers",
          },
          price: "18",
          photo: special_pissa,
        },
        {
          title: { el: "Μεσογειακή", en: "Mediterranean" },
          desc: {
            el: "σάλτσα ντομάτας , φέτες ντομάτας , πιπεριές , ελιές, φέτα , ρίγανη , ελαιόλαδο",
            en: "tomato sauce , tomato slices, feta cheese , olives , peppers , oregano , olive oil",
          },
          price: "18",
          photo: pizz_gr,
        },
        {
          title: { el: "Καρμπονάρα", en: "Carbonara" },
          desc: {
            el: "κρέμα γάλακτος , μοτσαρέλα , μπέικον , μανιτάρια ",
            en: "white sauce , mozzarella, bacon, mushrooms ",
          },
          price: "18",
          photo: photo,
        },
        {
          title: { el: "Ιταλική", en: "Italian" },
          desc: {
            el: "σάλτσα ντομάτας , μοτσαρέλα , ρόκα , προσούτο",
            en: "tomato sauce , mozzarela ,  arugula , prosciutto ",
          },
          price: "19",
          photo: pizz_it,
        },
      ],
    },

    //RESTAURANT

    //orektika
    {
      title: { el: "Ορεκτικά", en: "Starters" },
      isRest: true,
      icon: starters_icon,
      products: [
        {
          title: { el: "Κολοκυθοκεφτέδες", en: "Zucchini Balls" },
          desc: {
            el: "κολοκύθι, καρότο, κρεμμύδι, κρεμμύδι φρέσκο, μαϊντανός, άνιθος, αυγό, φέτα, ελαιόλαδο",
            en: "zucchini, carrot, onion, fresh onion, parsley, dill, egg, feta cheese, olive oil",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Κεφτεδάκια", en: "Meatballs" },
          desc: {
            el: "μοσχαρίσιος κιμάς, κρεμμύδι, σκόρδο, διώσμο, άνιθος, μαϊντανός, αυγό",
            en: "ground beef, onion, garlic, spearmint, dill, parsley, egg",
          },
          price: "14",
          photo: photo,
        },
        {
          title: { el: "Γαρίδες σαγανάκι", en: "Shrimp saganaki" },
          desc: {
            el: "γαρίδες, σαλτσα ντοματας, φέτα, σκόρδο, μαϊντανός, ούζο",
            en: "shrimps, tomato sauce, feta cheese, garlic, parsley, ouzo",
          },
          price: "18",
          photo: photo,
        },
        {
          title: { el: "Τζατζίκι", en: "Tzatziki sauce" },
          desc: {
            el: "γιαούρτι, αγγούρι, σκόρδο, ελαιόλαδο, άνηθος",
            en: "yogurt, cucumber, garlic, olive oil, dill",
          },
          price: "9",
          photo: photo,
        },
        {
          title: { el: "Μελιτζανοσαλάτα", en: "Eggplant Salad" },
          desc: {
            el: "μελιτζάνα ψητή, κοκκινή πιπεργία ψητή, φέτα, κρεμμύδι, μαϊντανός, σκόρδο",
            en: "grilled eggplant, grilled red pepper, feta cheese, onion, parsley, garlic",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Κατίκη Σκοπελου", en: "Skopelos Catiki" },
          desc: {
            el: "",
            en: "",
          },
          price: "12",
          photo: photo,
        },
      ],
    },
    //salates
    {
      title: { el: "Σαλάτες", en: "Salads" },
      isRest: true,
      icon: salads_icon,
      products: [
        {
          title: { el: "Πατζάρι", en: "Beetroot" },
          desc: {
            el: "πατζάρι με μους σκόρδου",
            en: "beetroot with garlic mousse",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Μεσογειακή", en: "Mediterranean" },
          desc: {
            el: "τομάτα, αγγούρι, κρεμμύδι, πιπεριά, ελιές, κάππαρι, φέτα, ρίγανη, ελαιόλαδο",
            en: "tomato, cucumber, onion, pepper, olives, caper, feta cheese, oregano, olive oil",
          },
          price: "14",
          photo: photo,
        },
        {
          title: { el: "Σκοπελίτικος Ντάκος", en: "Skopelos Dakos" },
          desc: {
            el: "παξιμάδι κριθαριού, τριμμένη τομάτα, κατίκι σκοπέλου, κάπαρη, ελαιόλαδο",
            en: "barley rusk , grated tomato , Skopelos catiki cheese, caper, olive oil",
          },
          price: "14",
          photo: photo,
        },
        {
          title: { el: "Γλυστέρι", en: "Glysteri" },
          desc: {
            el: "μαρουλι, φράουλα, δαμάσκηνο, ταλαγάνι, σουσάμι, dressing γλυστέρι",
            en: "lettuce, strawberry, plum, talagani cheese, sesame, glysteri dressing",
          },
          price: "17",
          photo: photo,
        },
        
      ],
    },
    //Marakonades
    {
      title: { el: "ZYMAPIKA / PIZOTO", en: " PASTA / RISOTTO" },
      isRest: true,
      icon: pasta_icon,
      products: [
        {
          title: { el: "Aglio olio", en: "Aglio olio" },
          desc: {
            el: "λιγκουίνι, σκόρδο, τσίλι, ελαιόλαδο, μαϊντανός",
            en: "linguine, garlic, chili, olive oil, parsley",
          },
          price: "14",
          photo: photo,
        },
        {
          title: { el: "Καρμπονάρα", en: "Carbonara" },
          desc: {
            el: "λιγκουίνι, κρεμα γαλακτος, μπεικον, μανιταρια, κρεμμυδι",
            en: "linguine, white sauce, bacon, mushrooms, onion",
          },
          price: "16",
          photo: karbonara,
        },
        {
          title: { el: "Μακαρόνια με Κυμα", en: "Bolognese" },
          desc: {
            el: "λιγκουίνι, μοσχαρίσιος κιμάς 100%, σάλτσα ντομάτας, ξερή μυζήθρα σκοπέλου",
            en: "linguine, 100% ground beef, tomato sauce, dry Skopelos mizithra cheese",
          },
          price: "16",
          photo: photo,
        },
        {
          title: { el: "Pesto", en: "Pesto" },
          desc: {
            el: "πέννες, χειροποίητη πέστο βασιλικού, κουκουνάρι, παρμεζάνα",
            en: "pennette, homemade basil pesto, pine, parmesan",
          },
          price: "17",
          photo: photo,
        },
        {
          title: { el: "Κριθαρότο θαλασσινών", en: "Orzo Seafood" },
          desc: {
            el: "κριθαράκι, γαρίδα, καλαμάρι, κολοκύθι, ντοματίνια, κρεμμύδι, σκόρδο",
            en: "orzo, shrimp, squid, zucchini, cherry tomatoes, onion, garlic",
          },
          price: "22",
          photo: photo,
        },
        {
          title: { el: "Γαριδομακαρονάδα", en: "Shrimp Pasta" },
          desc: {
            el: "λιγκουίνι, γαριδες, μπισκ, σαλτσα ντοματας, σκόρδο, μαϊντανός",
            en: "linguine, shrimps, bisque, tomato sauce, garlic, parsley",
          },
          price: "24",
          photo: garidomak,
        },
        {
          title: { el: "Γαριδομακαρονάδα λευκή", en: "Shrimp white Pasta" },
          desc: {
            el: "λιγκουίνι, γαριδες, κρέμα γαλακτος,χυμό λεμόνι, σκόρδο, μαϊντανός",
            en: "linguine, shrimps, white sauce, lemon juice, garlic, parsley",
          },
          price: "24",
          photo: photo,
        },
        {
          title: { el: "Αστακομακαρονάδα", en: "Lobster Pasta" },
          desc: {
            el: "λιγκουίνι, αστακος, μπισκ, σκόρδο, μαϊντανός / για δυο ατομα",
            en: "linguine, lobster, bisque, garlic, parsley / for two people",
          },
          price: "120",
          photo: photo,
        },
      ],
    },
    //psaria
    {
      title: { el: "ΘΑΛΛΑΣΙΝΑ", en: "SEA FOOD" },
      isRest: true,
      icon: fish_icon,
      products: [
        {
          title: { el: "ΓΑΡΙΔΕΣ ΨΙΤΕΣ", en: "GRILLED SHRIMPS" },
          desc: {
            el: "γαριδες, σως λαδολέμονου, χοντρο αλάτι",
            en: "shrimps, lemon-olive oil sauce, coarse salt",
          },
          price: "20",
          photo: photo,
        },
        {
          title: { el: "ΚΑΛΑΜΑΡΙ ΨΗΤΟ", en: "GRILLED SQUID" },
          desc: {
            el: "καλαμάρι με σως λαδολέμονου",
            en: "squid with lemon-olive oil sauce",
          },
          price: "21",
          photo: photo,
        },
        {
          title: { el: "ХТАПОΔІ ΨHTO", en: "GRILLED OCTOPUS" },
          desc: {
            el: "χταποδι ψητο, φάβα, φρέσκο κρεμμύδι, ελαιόλαδο",
            en: "grilled octopus, fava, fresh onion, olive oil",
          },
          price: "22",
          photo: photo,
        },

        {
          title: { el: "Κοντοσούβλι τόνου", en: "Tuna Skewer" },
          desc: {
            el: "μαριναρισμένος τόνος με λαχανικά",
            en: "marinated tuna with vegetables",
          },
          price: "24",
          photo: photo,
        },
        {
          title: { el: "Κοντοσούβλι ξιφία", en: "Swordfish Skewer" },
          desc: {
            el: "μαριναρισμένος ξιφίας με λαχανικά",
            en: "marinated swordfish with vegetables",
          },
          price: "24",
          photo: photo,
        },
        
      ],
    },
    //meat
    {
      title: { el: "Kρεατικά", en: "Μeat" },
      isRest: true,
      icon: meat_icon,
      products: [
        {
          title: { el: "Κοτόπουλο φιλέτο", en: "Chicken fillet" },
          desc: {
            el: "κοτόπουλο φιλέτο, baby πατάτες, ανάμηκτη σαλάτα",
            en: "chicken fillet, baby potatoes, mixed salad",
          },
          price: "17",
          photo: photo,
        },
        {
          title: {
            el: "ΜΠΙΦΤΕΚΙ Μοσχαρίσιο",
            en: "BEEF PATTY",
          },
          desc: {
            el: "μοχραρίσιο μπιφτέκι 100% χειροποίητο με baby πατάτες και ανάμικτη σαλάτα",
            en: "100% handmade beef patty with baby potatoes and mixed salad",
          },
          price: "18",
          photo: photo,
        },
        {
          title: { el: "Σουτζουκάκια", en: "Soutzoukakia" },
          desc: {
            el: "μοσχαρίσια σουτζουκάκια με πουρέ πατάτας και σαλάτα",
            en: "beef soutzoukakia with mashed potatoes and salad",
          },
          price: "19",
          photo: photo,
        },
        {
          title: {
            el: "ΜΠΙΦΤΕΚΙ ΓΕΜΙΣΤΟ",
            en: "STUFFED PATTY",
          },
          desc: {
            el: "μοχραρίσιο μπιφτέκι 100% χειροποίητο με τυρί reggato, baby πατάτες και ανάμικτη σαλάτα",
            en: "100% handmade beef patty stuffed with reggato cheese, baby potatoes and mixed salad",
          },
          price: "20",
          photo: photo,
        },
        {
          title: { el: "ΚΟΤΟΠΟΥΛΟ ΚΟΝΤΟΣΟΥΒΛΙ", en: "CHICKΕΝ SOUVLAΚΙ" },
          desc: {
            el: "μπούτι κοτόπουλο με λαχανικά, αναμικτη σαλάτα",
            en: "chicken leg with vegetables, mixed salad",
          },
          price: "20",
          photo: photo,
        },
        {
          title: { el: "ΧΟΙΡΙΝΟ ΚΟΝΤΟΣΟΥΒΛΙ", en: "ΡORK SOUVLAKI" },
          desc: {
            el: "χοιρινος λεμός με λαχανικά, αναμικτη σαλάτα",
            en: "pork loin with vegetables, mixed salad",
          },
          price: "20",
          photo: photo,
        },
        
        {
          title: { el: "Ψαρονέφρι", en: "Tenderloin" },
          desc: {
            el: "ψαρονεύρι με σάλτσα κρασιού, πουρέ πατάτας, λαχανικά βουτύρου",
            en: "tenderloin with wine sauce, mashed potatoes, butter vegetables",
          },
          price: "22",
          photo: photo,
        },
        {
          title: { el: "Yakitori Ribs", en: "Yakitori Ribs" },
          desc: {
            el: "χοιρινά πλευρά με σαλτσα yakitori, πουρέ πατάτας, σουσάμι, λαχανικά βουτύρου",
            en: "pork ribs with yakitori sauce, mashed potatoes, sesame, butter vegetables",
          },
          price: "22",
          photo: photo,
        },
        {
          title: { el: "Φιλέτο Μοσχαρίσιο", en: "Beef Fillet" },
          desc: {
            el: "φιλέτο μοσχαρίσιο, baby πατάτες φούρνου, λαχανικά βουτύρου",
            en: "beef fillet, baby potatoes oven, butter vegetables",
          },
          price: "32",
          photo: photo,
        },
      ],
    },
    //Glika
    {
      title: { el: "Γλυκά", en: "Desserts" },
      isRest: true,
      icon: sweet_icon,
      products: [
        {
          title: { el: "Αρμενοβίλ", en: "Armenoville" },
          desc: {
            el: "",
            en: "",
          },
          price: "10",
          photo: armenovil,
        },
        {
          title: { el: "Προφιτερόλ", en: "Profiterol" },
          desc: { el: "", en: "" },
          price: "12",
          photo: photo,
        },
      ],
    },
  ],
};
export default data;
