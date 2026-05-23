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
const sunbed_icon = "images/icons/rest/cake.png";

const salads_icon = "images/icons/rest/salad.png";
const meat_icon = "images/icons/rest/meat.png";
const starters_icon = "images/icons/rest/starters.png";
const fish_icon = "images/icons/rest/fish.png";
const sweet_icon = "images/icons/rest/cake.png";
const bread_icon = "images/icons/rest/bread.png";

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
          title: { el: "Εσπρέσσο", en: "Espresso" },
          desc: { el: "", en: "" },
          price: "3",
          photo: photo,
        },
        {
          title: { el: "Διπλό Εσπρέσσο", en: "Double Espresso" },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Φρέντο Εσπρέσσο", en: "Freddo Espresso " },
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
          title: { el: "Americano ", en: "Americano" },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Διπλό Kαπουτσίνο", en: "Double Capuccino" },
          desc: { el: "", en: "" },
          price: "6",
          photo: photo,
        },
        {
          title: { el: "Φρέντο Kαπουτσίνο", en: "Freddo Capuccino" },
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
          title: { el: "Nes", en: "Nes" },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Φραπέ Μπέιλις", en: "Frappe with Baileys" },
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
          title: { el: "Κόκα Κόλα", en: "Coca-Cola" },
          desc: { el: "Normal / Zero ", en: "Normal / Zero " },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Sprite", en: "Sprite" },
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
          title: { el: "Premium αναψυκτικά", en: "Premium soft drinks" },
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
          title: { el: "Aqua Carpatica με γεύσεις", en: "Aqua Carpatica flavours" },
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
          title: { el: "Μηλίτης", en: "Cider" },
          desc: { el: "330ml", en: "330ml" },
          price: "7",
          photo: photo,
        },
        {
          title: { el: "A Toda Madre", en: "A Toda Madre" },
          desc: { el: "330ml", en: "330ml" },
          price: "7",
          photo: photo,
        },
        {
          title: { el: "Weiss", en: "Weiss" },
          desc: { el: "500ml", en: "500ml" },
          price: "8",
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
          title: { el: "Ποτό", en: "Drink" },
          desc: { el: "" },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Ποτό premium", en: "Premium Drink" },
          desc: { el: "", en: "" },
          price: "14",
          photo: photo,
        },
        {
          title: { el: "Φιάλη", en: "Bottle" },
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
        {
          title: { el: "Σφηνάκι", en: "Shot" },
          desc: {
            el: "",
            en: "",
          },
          price: "4",
          photo: photo,
        },
        {
          title: { el: "Σέικερ", en: "Shaker" },
          desc: {
            el: "",
            en: "",
          },
          price: "20",
          photo: photo,
        },
      ],
    },
    {
      title: { el: "Ούζο-Τσίπουρο", en: "Ouzo-Tsipouro" },
      isRest: false,
      icon: drinks_icon,
      products: [
        {
          title: { el: "Ούζο", en: "Ouzo" },
          desc: { el: "Ατομικό", en: "Single Served" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Τσίπουρο", en: "Tsipouro" },
          desc: { el: "Ατομικό", en: "Single Served" },
          price: "5",
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
            el: "φύλλα δυόσμου, λάιμ, σιρόπι ζάχαρης, sprite",
            en: "mint leaves, lime, sugar syrup, sprite",
          },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Pina Colada 0%", en: "Pina Colada 0%" },
          desc: {
            el: "χυμός ανανά, πουρέ ανανά, γάλα καρύδας",
            en: "pineapple juice, pineapple puree, coconut milk",
          },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Mai Tai 0%", en: "Mai Tai 0%" },
          desc: {
            el: "χυμός ανανά, χυμός πορτοκάλι, λάιμ, σιρόπι αμυγδάλου, γρεναδίνη",
            en: "pineapple juice, orange juice, lime, almond syrup, grenadine",
          },
          price: "10",
          photo: mai_tai,
        },
        {
          title: { el: "Jack Sparrow Nightmare", en: "Jack Sparrow Nightmare" },
          desc: {
            el: "gin 0%, φρούτα του πάθους, σιρόπι αμυγδάλου, λάιμ",
            en: "gin 0%, passion fruit puree, almond syrup, lime",
          },
          price: "12",
          photo: photo,
        }
      ],
    },
    //classic Kokteils
    {
      title: { el: "Κλασικά Κοκτέιλς", en: "Classic Cocktails" },
      isRest: false,
      icon: cocktail_icon,
      products: [
        {
          title: { el: "Μοχίτο", en: "Mojito" },
          desc: {
            el: "ρούμι, φύλλα δυόσμου, λάιμ, ζάχαρη, σόδα ",
            en: "rum, spearmint leaves, lime, sugar, soda ",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Πίνα Κολάντα", en: "Pina colada" },
          desc: {
            el: "malibu, batida de coco, χυμός ανανά, πουρέ ανανά, γάλα καρύδας",
            en: "malibu,  batida de coco, pinnapple juice, pinnapple puree, coconut milk",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Παλόμα", en: "Paloma" },
          desc: {
            el: "τεκίλα, γρέιπφρουτ σόδα, λάιμ, σιρόπι αγαύης",
            en: "tequila, grapefruit soda, lime, agave syrup",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Mai Tai", en: "Mai Tai" },
          desc: {
            el: "λευκό ρούμι, μαύρο ρούμι, λικέρ πορτοκαλιού, σιρόπι αμυγδάλου, σιρόπι μελιού, λάιμ, angostura bitters",
            en: "white rum, dark rum, οrange liquer, almond syrup, honey syrup, lime, angostura bitters",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Μαργαρίτα ", en: "Margarita " },
          desc: {
            el: "τεκίλα, λικέρ πορτοκάλι, λάιμ, σιρόπι αγαύης",
            en: "tequila, orange liquer, lime, agave syrup",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Cuba libre", en: "Cuba libre" },
          desc: {
            el: "ρούμι, κόκα κόλα, λάιμ",
            en: "rum, coca cola, lime",
          },
          price: "12",
          photo: photo,
        },
      ],
    },
    //signatures
    {
      title: { el: "Signature Κοκτέιλς", en: "Signature Cocktails" },
      isRest: false,
      icon: drinks_icon,
      products: [
        {
          title: { el: "Glysteri Spritz", en: "Glysteri Spritz" },
          desc: {
            el: "aperol, prosecco, grapefruit soda",
            en: "aperol, prosecco, grapefruit soda",
          },
          price: "14",
          photo: aperol,
        },
        {
          title: { el: "Glysteri Bramble", en: "Glysteri Bramble" },
          desc: {
            el: "gin, triple sec, raspberry syrup, λάιμ",
            en: "gin, triple sec, raspberry syrup, lime",
          },
          price: "14",
          photo: brumble,
        },
        {
          title: { el: "Πασιονίτο", en: "Passionito" },
          desc: {
            el: "ρούμι, archers, πουρέ passion fruit, χειροποίητο falernum syrup, λάιμ, angostura bitters",
            en: "rum, archers, pineapple puree, passion fruit puree, handmade falernum syrup, lime, angostura bitters",},
          price: "15",
          photo: passionito,
        },
        {
          title: { el: "Jolly Roger", en: "Jolly Roger" },
          desc: {
            el: "ρούμι, πουρές ανανά, χειροποίητο allspice dram, χειροποίητο σιρόπι falernum, λάιμ, σιρόπι μελιού, χυμός πορτοκάλι, angostura bitters",
            en: "rum, pineapple puree, handmade allspice dram, handmade falernum syrup, lime, honey syrup, orange juice, angostura bitters",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Coolcumber", en: "Coolcumber" },
          desc: {
            el: "gin, μαστίχα, χειροποίητο σιρόπι falernum, αγγούρι, λάιμ",
            en: "gin, mastiha, handmade falernum syrup, cucumber, lime",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Ζόμπι", en: "Zombie" },
          desc: {
            el: "Λευκό ρούμι, spiced ρούμι, παλαιωμένο ρούμι, πουρές φρούτα του πάθους, πουρές ανανά,  χειροποίητο σιρόπι falernum, χειροποίητο σιρόπι καννέλας, λάιμ, γρεναδίνη, angostura bitters",
            en: "white rum, spiced rum, aged rum, passion fruit puree, pineapple puree, handmade falernum syrup, handmade cinnamon syrup, lime, grenadine, angostura bitters"},
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Going merry", en: "Going merry" },
          desc: {
            el: "Ρούμι, πουρές φρούτα του πάθους, χειροποίητο allspice dram, σιρόπι βανίλιας, χυμός πορτοκάλι, λάιμ, angostura bitters",
            en: "rum, passion fruit puree, handmade allspice dram, vanilla syrup, orange juice, lime, angostura bitters",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Gin Basil", en: "Gin Basil" },
          desc: {
            el: "gin, φύλλα βασιλικού, λάιμ, σιρόπι ζάχαρης",
            en: "gins, basil leaves, lime, sugar syrup",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Lollipop", en: "Lollipop" },
          desc: {
            el: "Λευκό ρούμι, πουρές φράουλας, λικέρ πορτοκαλιού, λάιμ, σιρόπι βανίλιας, orange bitters",
            en: "white rum, strawberry puree, orange liqueur, lime, vanilla syrup, orange bitters",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Mela verde", en: "Mela verde" },
          desc: {
            el: "gin, πουρές πράσινου μήλου, χειροποίητο σιρόπι κανέλας, σιρόπι αμυγδάλου, λάιμ, angostura bitters",
            en: "gin, green apple puree, handmade cinnamon syrup, almond syrup, lime, angostura bitters",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "The Dawn Treader", en: "The Dawn Treader" },
          desc: {
            el: "gin, χειροποίητο σιρόπι falernum, πουρές φρούτα του πάθους, σιρόπι αμυγδάλου, λάιμ",
            en: "gin, handmade falernum syrup, passion fruit puree, almond syrup, lime",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Chilli mexico", en: "Chilli mexico" },
          desc: {
            el: "κίτρινη τεκίλα, πουρές ανανά, λικέρ πορτοκαλιού, χειροποίητο σιρόπι chilli, λάιμ, σιρόπι αγαύης, orange bitters",
            en: "tequila yellow, pineapple puree, orange liqueur, handmade chilli syrup, lime, agave syrup, orange bitters",
          },
          price: "15",
          photo: photo,
        },
      ],
    },
    //white wines
    {
      title: { el: "Ατομικά Κρασιά", en: "Single-serve wines" },
      isRest: false,
      icon: wine_icon,
      products: [
        {
          title: { el: "Λευκό Κρασί", en: "White Wine" },
          desc: { el: "187ml", en: "187ml" },
          price: "8",
          photo: photo,
        },
        {
          title: { el: "Ροζέ Κρασί", en: "Rose Wine" },
          desc: { el: "187ml", en: "187ml" },
          price: "8",
          photo: photo,
        },
        {
          title: { el: "Προσέκο", en: "Prosecco" },
          desc: { el: "187 ml", en: "187 ml" },
          price: "10",
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
          desc: { el: "τυρί, ζαμπόν ή γαλοπούλα, σερβίρεται με τηγανητές πατάτες", en: "cheese, ham or turkey, served with french fries" },
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
            el: "Δαμάσκηνο Σκοπέλου (γλυκό του κουταλιού)",
            en: "Skopelos local plum (spoon sweet)",
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
          price: "12",
          photo: photo,
        }
      ],
    },
    //snacks
    {
      title: { el: "Σνακ", en: "Snacks" },
      isRest: false,
      icon: snak_icon,
      products: [
        {
          title: { el: "Φοκάτσια", en: "Focaccia" },
          desc: {
            el: "κατίκι σκοπέλου, ντομάτα, ελιές, ρίγανη",
            en: "Skopelos katiki cheese, tomato, olives, oregano",
          },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Φοκάτσια πέστο", en: "Focaccia pesto" },
          desc: {
            el: "προσούτο,  παρμεζάνα, χειροποίητο πέστο, ντομάτα, ρόκα",
            en: "prosciutto, parmesan, handmade pesto, tomato, rocket",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Τηγανητές πατάτες", en: "French fries" },
          desc: {
            el: "",
            en: "",
          },
          price: "6",
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
            el: "τυρί,  ζαμπόν ή γαλοπούλα, μπέικον, μαρούλι, ντομάτα, μαγιονέζα, σερβίρεται με τηγανητές πατάτες",
            en: "cheese, ham or turkey, bacon, lettuce, tomato, mayonnaise, served with french fries",
          },
          price: "14",
          photo: club_clas,
        },
        {
          title: { el: "Κοτόπουλο", en: "Chicken" },
          desc: {
            el: "τυρί, κοτόπουλο, τηγανητό αυγό, μαρούλι, ντομάτα, σως μουστάρδας, σερβίρεται με τηγανητές πατάτες",
            en: "cheese, chicken, fried egg, lettuce, tomato, mustard sauce, served with french fries",
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
            el: "ντομάτα, αγγούρι, πιπεριά, κρεμμύδι, ελιές, φέτα, ρίγανη, ελαιόλαδο",
            en: "tomato, cucumber, pepper, onion, olives, feta cheese, oregano, olive oil",
          },
          price: "12",
          photo: xoriatiki,
        },
        {
          title: { el: "Ντάκος", en: "Dakos" },
          desc: {
            el: "παξιμάδι κριθαριού, τριμμένη τομάτα, φέτα, ελιές, ρίγανη, ελαιόλαδο",
            en: "barley rusk, grated tomato, feta cheese, olives, oregano, olive oil",
          },
          price: "12",
          photo: ntakos_nap,
        },
        {
          title: { el: "Μακαρονοσαλάτα", en: "Pasta salad" },
          desc: {
            el: "βίδες, τόνος, γιαούρτι, αγγούρι πίκλα, καλαμπόκι, λιαστή ντομάτα, άνηθος",
            en: "fusilli, tuna, yogurt, pickled cucumber, corn, sun-dried tomato, dill",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Kαίσαρα", en: "Ceasar salad" },
          desc: {
            el: "μαρούλι, κοτόπουλο, μπέικον, ντοματίνια, καλαμπόκι, κρουτόν,  φλοίδες παρμεζάνας, σως caesar",
            en: "lettuce, chicken, bacon, cherry tomatoes, corn, croutons, parmesan flakes, caesar dressing",
          },
          price: "15",
          photo: photo,
        },
        
      ],
    },
    //burgers
    {
      title: { el: "Burgers", en: "Burgers" },
      isRest: false,
      icon: burger_icon,
      products: [
        {
          title: { el: "Cheeseburger", en: "Cheeseburger" },
          desc: {
            el: "χειροποίητο μπιφτέκι από 100% μοσχαρίσιο κιμά, τσένταρ, μαρούλι, ντομάτα, σως πίκλας, κέτσαπ, μουστάρδα, σερβίρεται με τηγανητές πατάτες ",
            en: "handmade 100% beef burger, cheddar cheese, lettuce, tomato, pickle sauce, ketchup, mustard, served with french fries ",
          },
          price: "17",
          photo: photo,
        },
        {
          title: { el: "Μπέργκερ κοτόπουλο", en: "Chicken burger" },
          desc: {
            el: "φιλέτο μπούτι κοτόπουλου σε πάνκο, iceberg, μπέικον, ντομάτα, τηγανητό αυγό, σως μουστάρδας - μελιού, σερβίρεται με τηγανητές πατάτες",
            en: "chicken leg fillet in panko, iceberg, bacon, tomato, fried egg, honey - mustard sauce, served with french fries",
          },
          price: "18",
          photo: chicken_burger,
        },
        {
          title: { el: "Γλυστέρι", en: "Glysteri" },
          desc: {
            el: "χειροποίητο μπιφτέκι από 100% μοσχαρίσιο κιμά, τσένταρ, μαρούλι, ντομάτα, μπέικον, ντομάτα, τηγανητό αυγό, καραμελωμένα κρεμμύδια, σως πίκλας, σερβίρεται με τηγανητές πατάτες",
            en: "handmade 100% beef burger, cheddar cheese, lettuce, tomato, bacon, tomato, lettuce, fried egg, caramelized onions, pickle sauce, served with french fries",
          },
          price: "19",
          photo: burger_Gli,
        },
        
      ],
    },
    //pissa
    {
      title: { el: "Πίτσες", en: "Pizza" },
      isRest: false,
      icon: pizzas_icon,
      products: [
        {
          title: { el: "Μαργαρίτα", en: "Margherita" },
          desc: {
            el: "σάλτσα ντομάτας, μοτσαρέλα, φρέσκα φύλλα βασιλικού",
            en: "tomato sauce, mozzarella, fresh basil leaves",
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
            el: "σάλτσα ντομάτας, φέτα, φέτες ντομάτας, πιπεριές, ελιές, ρίγανη, ελαιόλαδο",
            en: "tomato sauce, feta cheese, tomato slices, olives, peppers, oregano, olive oil",
          },
          price: "18",
          photo: pizz_gr,
        },
        {
          title: { el: "Καρμπονάρα", en: "Carbonara" },
          desc: {
            el: "κρέμα γάλακτος, μοτσαρέλα, μπέικον, μανιτάρια ",
            en: "white cream, mozzarella, bacon, mushrooms ",
          },
          price: "18",
          photo: photo,
        },
        {
          title: { el: "Ιταλική", en: "Italian" },
          desc: {
            el: "σάλτσα ντομάτας, μοτσαρέλα, προσούτο, ρόκα",
            en: "tomato sauce, mozzarela, prosciutto, rocket",
          },
          price: "19",
          photo: pizz_it,
        },
      ],
    },
    {
      title: { el: "Σετ Ξαπλώστρες", en: "Sunbed set" },
      isRest: false,
      icon: sunbed_icon,
      products: [
        {
          title: { el: "Παραλίας", en: "Beach" },
          desc: { el: "", en: "" },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Πριβέ", en: "Private" },
          desc: { el: "", en: "" },
          price: "50",
          photo: photo,
        },
      ],
    },

    //RESTAURANT

    //orektika
    {
      title: { el: "Ορεκτικά", en: "Appetizers" },
      isRest: true,
      icon: starters_icon,
      products: [
        {
          title: { el: "Κολοκυθοκεφτέδες", en: "Zucchini Balls" },
          desc: {
            el: "κολοκύθι, τυρί φέτα, καρότο, κρεμμύδι, κρεμμύδι φρέσκο, μαϊντανός, άνηθος, αυγό, ελαιόλαδο",
            en: "zucchini, feta cheese, carrot, onion, spring onions, parsley, dill, egg, olive oil",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Χειροποίητα Κεφτεδάκια", en: "Handmade Meatballs" },
          desc: {
            el: "100% μοσχαρίσιος κιμάς, κρεμμύδι, σκόρδο, δυόσμος, άνηθος, μαϊντανός, αυγό, συνοδεύονται με σως γιαουρτιού",
            en: "ground meat of 100% beef, onion, garlic, spearmint, dill, parsley, egg, served with yogurt sauce",
          },
          price: "14",
          photo: photo,
        },
        {
          title: { el: "Γαρίδες σαγανάκι", en: "Saganaki shrimps" },
          desc: {
            el: "* γαρίδες, σάλτσα ντομάτας, φέτα, σκόρδο, μαϊντανός, ούζο",
            en: "* shrimps, tomato sauce, feta cheese, garlic, parsley, ouzo",
          },
          price: "18",
          photo: photo,
        },
        {
          title: { el: "Τζατζίκι", en: "Tzatziki" },
          desc: {
            el: "γιαούρτι, αγγούρι, σκόρδο, άνηθος, ελαιόλαδο",
            en: "yogurt, cucumber, garlic, dill, olive oil",
          },
          price: "9",
          photo: photo,
        },
        {
          title: { el: "Μελιτζανοσαλάτα", en: "Eggplant Salad" },
          desc: {
            el: "μελιτζάνα ψητή, κόκκινη πιπεριά ψητή, φέτα, κρεμμύδι, μαϊντανός, σκόρδο",
            en: "grilled eggplant, grilled red pepper, feta cheese, onion, parsley, garlic",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Κατίκι Σκοπέλου", en: "Skopelos Katiki cheese" },
          desc: {
            el: "",
            en: "",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Baby πατάτες φούρνου", en: "Baked Baby Potatoes" },
          desc: {
            el: "",
            en: "",
          },
          price: "9",
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
          title: { el: "Παντζάρι", en: "Beetroot" },
          desc: {
            el: "παντζάρι με μους σκόρδου",
            en: "beetroot with garlic mousse",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Μεσογειακή", en: "Mediterranean" },
          desc: {
            el: "ντομάτα, αγγούρι, φέτα, κρεμμύδι, πιπεριά, ελιές, κάπαρη, ρίγανη, ελαιόλαδο",
            en: "tomato, cucumber, feta cheese, onion, pepper, olives, caper, oregano, olive oil",
          },
          price: "14",
          photo: photo,
        },
        {
          title: { el: "Σκοπελίτικος Ντάκος", en: "Skopelos Dakos" },
          desc: {
            el: "παξιμάδι κριθαριού, τριμμένη τομάτα, κατίκι σκοπέλου, κάπαρη, ελαιόλαδο",
            en: "barley rusk, grated tomato, Skopelos katiki cheese, caper, olive oil",
          },
          price: "14",
          photo: photo,
        },
        {
          title: { el: "Γλυστέρι", en: "Glysteri" },
          desc: {
            el: "μαρούλι, ταλαγάνι, φράουλα, δαμάσκηνο, σουσάμι, dressing γλυστέρι",
            en: "lettuce, talagani cheese, strawberry, plum, sesame seeds, glysteri dressing",
          },
          price: "17",
          photo: photo,
        },
        
      ],
    },
    //Marakonades
    {
      title: { el: "Ζυμαρικά / Κριθαρότο", en: "Pasta / Orzotto" },
      isRest: true,
      icon: pasta_icon,
      products: [
        {
          title: { el: "Aglio e olio", en: "Aglio e olio" },
          desc: {
            el: "λιγκουίνι, σκόρδο, τσίλι, ελαιόλαδο, παρμεζάνα, μαϊντανός",
            en: "linguine, garlic, chilli, olive oil, parmesan, parsley",
          },
          price: "14",
          photo: photo,
        },
        {
          title: { el: "Καρμπονάρα", en: "Carbonara" },
          desc: {
            el: "λιγκουίνι, κρέμα γάλακτος, μπέικον, μανιτάρια, κρεμμύδι, παρμεζάνα",
            en: "linguine, white sauce, bacon, mushrooms, onion, parmesan",
          },
          price: "16",
          photo: karbonara,
        },
        {
          title: { el: "Μακαρόνια με Κιμά", en: "Bolognese" },
          desc: {
            el: "λιγκουίνι, μοσχαρίσιος κιμάς 100%, σάλτσα ντομάτας, ξερή μυζήθρα σκοπέλου",
            en: "linguine, ground beef 100%, tomato sauce, dry Skopelos mizithra cheese",
          },
          price: "18",
          photo: photo,
        },
        {
          title: { el: "Πέστο", en: "Pesto" },
          desc: {
            el: "πέννες, χειροποίητο πέστο βασιλικού, κουκουνάρι, παρμεζάνα",
            en: "penne, homemade basil pesto, pine, parmesan",
          },
          price: "17",
          photo: photo,
        },
        {
          title: { el: "Κριθαρότο θαλασσινών", en: "Orzotto Seafood" },
          desc: {
            el: "κριθαράκι, * γαρίδα, καλαμάρι, κολοκύθι, ντοματίνια, κρεμμύδι, σκόρδο",
            en: "orzo, * shrimp, squid, zucchini, cherry tomatoes, onion, garlic",
          },
          price: "22",
          photo: photo,
        },
        {
          title: { el: "Γαριδομακαρονάδα", en: "Shrimp Pasta" },
          desc: {
            el: "λιγκουίνι, * γαρίδες, μπισκ, σάλτσα ντομάτας, σκόρδο, μαϊντανός",
            en: "linguine, * shrimps, bisque, tomato sauce, garlic, parsley",
          },
          price: "24",
          photo: garidomak,
        },
        {
          title: { el: "Γαριδομακαρονάδα λευκή", en: "Shrimp white Pasta" },
          desc: {
            el: "λιγκουίνι, * γαρίδες, κρέμα γάλακτος, χυμό λεμόνι, σκόρδο, μαϊντανός",
            en: "linguine, * shrimps, white sauce, lemon juice, garlic, parsley",
          },
          price: "24",
          photo: photo,
        },
        {
          title: { el: "Αστακομακαρονάδα", en: "Lobster Pasta" },
          desc: {
            el: "λιγκουίνι, αστακός, μπισκ, σκόρδο, μαϊντανός / για δύο άτομα",
            en: "linguine, lobster, bisque, garlic, parsley / for two people",
          },
          price: "120",
          photo: photo,
        },
      ],
    },
    //psaria
    {
      title: { el: "Θαλασσινά", en: "Seafood" },
      isRest: true,
      icon: fish_icon,
      products: [
        {
          title: { el: "Γαρίδες ψητές", en: "Grilled Shrimps" },
          desc: {
            el: "* γαρίδες, σως λαδολέμονου, χοντρό αλάτι",
            en: "* shrimps, lemon-olive oil sauce, coarse salt",
          },
          price: "20",
          photo: photo,
        },
        {
          title: { el: "Καλαμάρι ψητό", en: "Grilled Squid" },
          desc: {
            el: "καλαμάρι με σως λαδολέμονου",
            en: "squid with lemon-olive oil sauce",
          },
          price: "21",
          photo: photo,
        },
        {
          title: { el: "Χταπόδι ψητό", en: "Grilled Octopus" },
          desc: {
            el: "* χταπόδι ψητό, φάβα, φρέσκο κρεμμύδι, ελαιόλαδο",
            en: "* grilled octopus, fava, spring onion, olive oil",
          },
          price: "22",
          photo: photo,
        },
        {
          title: { el: "Κοντοσούβλι τόνου", en: "Kontosouvli Tuna" },
          desc: {
            el: "μαριναρισμένος τόνος με λαχανικά",
            en: "marinated tuna with vegetables",
          },
          price: "24",
          photo: photo,
        },
        {
          title: { el: "Κοντοσούβλι ξιφία", en: "Kontosouvli Swordfish" },
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
      title: { el: "Kρεατικά", en: "Μeat dishes" },
      isRest: true,
      icon: meat_icon,
      products: [
        {
          title: { el: "Κοτόπουλο φιλέτο", en: "Chicken fillet" },
          desc: {
            el: "κοτόπουλο φιλέτο με baby πατάτες φούρνου και ανάμεικτη πράσινη σαλάτα",
            en: "chicken fillet with baked baby potatoes and mixed green salad",
          },
          price: "17",
          photo: photo,
        },
        {
          title: {
            el: "Μπιφτέκι Μοσχαρίσιο",
            en: "Beef Patty",
          },
          desc: {
            el: "χειροποίητο μπιφτέκι 100% μοσχαρίσιο με baby πατάτες και ανάμεικτη πράσινη σαλάτα",
            en: "handmade 100% beef patty with baked baby potatoes and mixed green salad",
          },
          price: "18",
          photo: photo,
        },
        {
          title: { el: "Σουτζουκάκια", en: "Soutzoukakia" },
          desc: {
            el: "μοσχαρίσια σουτζουκάκια με πουρέ πατάτας και βραστά ανάμεικτα λαχανικά",
            en: "beef soutzoukakia with mashed potatoes and boiled mixed vegetables",
          },
          price: "19",
          photo: photo,
        },
        {
          title: {
            el: "Μπιφτέκι γεμιστό",
            en: "Stuffed patty",
          },
          desc: {
            el: "χειροποίητο μπιφτέκι 100% μοσχαρίσιο γεμιστό με τυρί regato, baby πατάτες φούρνου και ανάμεικτη πράσινη σαλάτα",
            en: "handmade 100% beef patty stuffed with regato cheese, baked baby potatoes and mixed green salad",
          },
          price: "20",
          photo: photo,
        },
        {
          title: { el: "Κοντοσούβλι Κοτόπουλο ", en: "Chicken Kontosouvli" },
          desc: {
            el: "από μπούτι κοτόπουλο με λαχανικά και ανάμεικτη πράσινη σαλάτα",
            en: "made by chicken leg with vegetables and mixed green salad",
          },
          price: "20",
          photo: photo,
        },
        {
          title: { el: "Κοντοσούβλι Χοιρινό", en: "Pork Kontosouvli" },
          desc: {
            el: "από χοιρινό λαιμό με λαχανικά και ανάμεικτη πράσινη σαλάτα",
            en: "made by pork with vegetables and mixed green salad",
          },
          price: "20",
          photo: photo,
        },
        
        {
          title: { el: "Ψαρονέφρι", en: "Tenderloin" },
          desc: {
            el: "ψαρονέφρι με σάλτσα κρασιού, πουρέ πατάτας και λαχανικά βουτύρου",
            en: "pork tenderloin with wine sauce, mashed potatoes and buttered vegetables",
          },
          price: "22",
          photo: photo,
        },
        {
          title: { el: "Yakitori Ribs", en: "Yakitori Ribs" },
          desc: {
            el: "χοιρινά πλευρά με σάλτσα yakitori, πουρέ πατάτας, σουσάμι και λαχανικά βουτύρου",
            en: "pork ribs with yakitori sauce, mashed potatoes, sesame seeds and buttered vegetables",
          },
          price: "22",
          photo: photo,
        },
        {
          title: { el: "Φιλέτο Μοσχαρίσιο", en: "Beef Fillet" },
          desc: {
            el: "φιλέτο μοσχαρίσιο με baby πατάτες φούρνου και λαχανικά βουτύρου",
            en: "beef fillet with baked baby potatoes and buttered vegetables",
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
          title: { el: "Προφιτερόλ", en: "Profiterole" },
          desc: { el: "", en: "" },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Αρμενοβίλ", en: "Armenoville" },
          desc: {
            el: "",
            en: "",
          },
          price: "12",
          photo: armenovil,
        },
        
      ],
    },
    {
      title: { el: "Κουβέρ", en: "Cover" },
      isRest: true,
      icon: bread_icon,
      products: [
        {
          title: { el: "Ψώμι", en: "Bread" },
          desc: { el: "ανά άτομο", en: "per person" },
          price: "2",
          photo: photo,
        },
      ],
    },
  ],
};
export default data;
