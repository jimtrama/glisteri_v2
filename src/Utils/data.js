import burger_Gli from "./../images/menu/Glysteri_photos/Food/s_burg_egg.jpg";
import xoriatiki from "./../images/menu/Glysteri_photos/Food/s_chor_sal.jpg";

import club_kot from "./../images/menu/Glysteri_photos/Food/s_club_cea.jpg";
import pizz_it from "./../images/menu/Glysteri_photos/Food/s_pizz_it.jpg";

// Change
import pizz_gr from "./../images/menu/pizza/s_p1big.jpg";
import past_nap from "./../images/menu/pasta/s_p1big.jpg";
import ntakos_nap from "./../images/menu/salads/s_p2big.jpg";

//cange
import armenovil from "./../images/menu/photos_extra/s_armenovile.jpg";
import backeta_koto from "./../images/menu/photos_extra/s_bageta_kot.jpg";
import toast from "./../images/menu/photos_extra/s_toast.jpg";
import club_clas from "./../images/menu/photos_extra/s_club_kot.jpg";
import garidomak from "./../images/menu/photos_extra/s_shrimps_pasta.jpg";
import special_pissa from "./../images/menu/photos_extra/s_special_pissa.jpg";
import karbonara from "./../images/menu/photos_extra/s_karbonara.jpg";
import chicken_burger from "./../images/menu/photos_extra/s_chicken.jpg";

//icons
import coffees_icon from "./../images/icons/beach/coffee.png";
import beers_icon from "./../images/icons/beach/beer.png";
import juice_icon from "./../images/icons/beach/juice.png";
import smothie_icon from "./../images/icons/beach/smoothie.png";
import soda_icon from "./../images/icons/beach/soda.png";
import drinks_icon from "./../images/icons/beach/drinks.png";
import sparkling_icon from "./../images/icons/beach/sparkling-wine.png";
import clubsand_icon from "./../images/icons/beach/clubsandwich.png";
import burger_icon from "./../images/icons/beach/burger.png";
import pizzas_icon from "./../images/icons/beach/pizza.png";
import pasta_icon from "./../images/icons/beach/pasta.png";
import cocktail_icon from "./../images/icons/beach/cocktail.png";
import breakfast_icon from "./../images/icons/beach/breakfast.png";
import baobun_icon from "./../images/icons/beach/baobun.png";
import mocktail_icon from "./../images/icons/beach/mocktail.png";
import pie_icon from "./../images/icons/beach/pie.png";
import yogurt_icon from "./../images/icons/beach/yogurt.png";
import wine_icon from "./../images/icons/beach/wine-bottle.png";
import snak_icon from "./../images/icons/beach/toast.png";

import salads_icon from "./../images/icons/rest/salad.png";
import meat_icon from "./../images/icons/rest/meat.png";
import starters_icon from "./../images/icons/rest/starters.png";
import fish_icon from "./../images/icons/rest/fish.png";
import sweet_icon from "./../images/icons/rest/cake.png";

//new
import aperol from "./../images/menu/resized_images/aperol_sort.jpg";
import brumble from "./../images/menu/resized_images/brumb_sort.jpg";
import lager from "./../images/menu/resized_images/lager_sort.jpg";
import mai_tai from "./../images/menu/resized_images/mai_tai_free_sort.jpg";
import passionito from "./../images/menu/resized_images/passionito_sort.jpg";
import pils from "./../images/menu/resized_images/pils_sort.jpg";
import pizza_marg from "./../images/menu/resized_images/pissa_mag_sort.jpg";
import weis from "./../images/menu/resized_images/weis_sort.jpg";

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
          title: { el: "Tόνικ εσπρέσο", en: "Tonic espresso" },
          desc: { el: "", en: "" },
          price: "7",
          photo: photo,
        },
        {
          title: { el: "Καφες Brumble", en: "Brumble coffee" },
          desc: {
            el: "φρέσκος χύμος προρτοκάλι με εσπρέσο",
            en: "fresh orange juice with espresso",
          },
          price: "7",
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
      title: { el: "Χυμοί", en: "Juices" },
      isRest: false,
      icon: juice_icon,
      products: [
        {
          title: { el: "Φυσικός Χυμός Πορτοκάλι", en: "Fresh Orange Juice" },
          desc: { el: "", en: "" },
          price: "7",
          photo: photo,
        },
        {
          title: { el: "Χυμός  Ποτήρι", en: "Cup of carton juice" },
          desc: { el: "", en: "" },
          price: "5",
          photo: photo,
        },
        {
          title: { el: "Παιδικός Χυμός", en: "Carton juice for kids" },
          desc: { el: "", en: "" },
          price: "3",
          photo: photo,
        },
      ],
    },
    //smoothies
    {
      title: { el: "Smoothies", en: "Smoothies" },
      isRest: false,
      icon: smothie_icon,
      products: [
        {
          title: { el: "Green Power", en: "Green Power" },
          desc: { el: "", en: "" },
          price: "8",
          photo: photo,
        },
        {
          title: { el: "Fraulita", en: "Fraulita" },
          desc: { el: "", en: "" },
          price: "8",
          photo: photo,
        },
        {
          title: { el: "Peachy Peachy", en: "Peachy Peachy" },
          desc: { el: "", en: "" },
          price: "8",
          photo: photo,
        },
        {
          title: { el: "Everyday", en: "Everyday" },
          desc: { el: "", en: "" },
          price: "8",
          photo: photo,
        },
        {
          title: { el: "Smoothies με αλκοόλ", en: "Smoothies with alcohol" },
          desc: { el: "", en: "" },
          price: "12",
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
          desc: { el: "Kανονικό", en: "Normal" },
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
          title: { el: "Weiss Beer", en: "Weiss Beer" },
          desc: { el: "500ml", en: "500ml" },
          price: "8",
          photo: weis,
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
        },
        {
          title: { el: "Odyssey", en: "Odyssey" },
          desc: { el: "", en: "" },
          price: "8",
          photo: photo,
        },
        {
          title: { el: "Gulden Draak", en: "Gulden Draak" },
          desc: { el: "", en: "" },
          price: "12",
          photo: photo,
        },
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
          price: "9",
          photo: photo,
        },
        {
          title: { el: "Ποτό premium", en: "Premium Drink" },
          desc: { el: "" },
          price: "14",
          photo: photo,
        },
        {
          title: { el: "Σφηνάκι", en: "Shot" },
          desc: { el: "" },
          price: "4",
          photo: photo,
        },
        {
          title: { el: "Σέικερ Σφηνάκια", en: "Shot Shaker" },
          desc: {
            el: "",
            en: "",
          },
          price: "30",
          photo: photo,
        },
        {
          title: { el: "Ούζο - Τσίπουρο", en: "Ouzo - Tsipouro" },
          desc: { el: "" },
          price: "6",
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
          title: { el: "Φιάλη σπέσιαλ", en: "Special Bottle" },
          desc: {
            el: "",
            en: "",
          },
          price: "120",
          photo: photo,
        },
        {
          title: { el: "Φιάλη premium", en: "Premium Bottle" },
          desc: {
            el: "",
            en: "",
          },
          price: "160",
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
          title: { el: "Jack Sparrow Nightmare", en: "Jack Sparrow Nightmare" },
          desc: {
            el: "gin 0%, passion fruit puree, almond syrup, lime",
            en: "gin 0%, passion fruit puree, almond syrup, lime",
          },
          price: "10",
          photo: photo,
        },
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
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Πίνα Κολάντα", en: "Pina colada" },
          desc: {
            el: "malibu, batida de coco, χυμός ανανά , πουρέ ανανά, γάλα καρύδας",
            en: "malibu,  babatida de coco, pinnapple juice, pinnapple puree, coconut milk",
          },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Παλόμα", en: "Paloma" },
          desc: {
            el: "τεκίλα, σιρόπι αγάβης, σόδα γρέιπφρουτ, λάιμ",
            en: "tekila, agave syrup, soda grapefruit, lime",
          },
          price: "10",
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
            el: "gin ,fresh basil leaves, lime, simple syrup",
            en: "gin ,fresh basil leaves, lime, simple syrup",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Mela verde", en: "Mela verde" },
          desc: {
            el: "gin ,fresh basil leaves, lime, simple syrup",
            en: "gin ,fresh basil leaves, lime, simple syrup",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "The Dawn Treader", en: "The Dawn Treader" },
          desc: {
            el: "gin ,fresh basil leaves, lime, simple syrup",
            en: "gin ,fresh basil leaves, lime, simple syrup",
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
          price: "5",
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
          price: "9",
          photo: photo,
        },
        {
          title: { el: "Γιαούρτι", en: "Yoghurt" },
          desc: { el: "μέλι, φρούτα", en: "honey, fruits" },
          price: "9",
          photo: photo,
        },
        {
          title: { el: "Γιαούρτι", en: "Yoghurt" },
          desc: { el: "γκρανόλα, φρούτα, μέλι", en: "granola, fruits, honey" },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Γιαούρτι", en: "Yoghurt" },
          desc: {
            el: "τσατνει Δαμασκηνο Σκοπελου",
            en: "Skopelos traditional plum chutney",
          },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Φρουτοσαλάτα", en: "Fruit salad" },
          desc: { el: "", en: "" },
          price: "10",
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
    //bao bans
    {
      title: { el: "Bao Bun", en: "Bao Bun" },
      isRest: false,
      icon: baobun_icon,
      products: [
        {
          title: { el: "Κοτόπουλο (2 τεμ.)", en: "Chicken (2 pic.)" },
          desc: {
            el: "παναρισμένες μπουκιές κοτόπουλου / coleslaw / ραπανάκι / σχοινόπρασο",
            en: "chicken nuggets / coleslaw / radish / chives",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Γαριδα (2 τεμ.)", en: "Shrimp (2 pic.)" },
          desc: {
            el: "γαριδες tempura, αγγουρι, καροτο, sweet chilli μαγιονεζα, σουσαμι",
            en: "shrimp tempura, cucumber, carrot, sweet chilli mayonnaise, sesame seeds",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Vegan (2 τεμ.)", en: "Vegan (2 pic.)" },
          desc: {
            el: "αβοκάντο / πιπεριές / αγγούρι / καρότο / παπαρδέλες κολοκυθιού / ραπανάκι / σχοινόπρασο / hoisin sauce",
            en: "avocado / peppers/ cucumber / carrot / zucchini / radish / chives / hoisin sauce",
          },
          price: "12",
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
          title: { el: "Kαίσαρα", en: "Ceasar's" },
          desc: {
            el: "iceberg, ντοματίνια , καλαμπόκι , κοτόπουλο , κρουτόν , μπέικον , φλοιδες παρμεζάνα , σως caesar's",
            en: "iceberg, cherry tomatoes , corn , chicken , croutons, parmesan flakes, bacon, caesar's dressing",
          },
          price: "14",
          photo: photo,
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
            el: "χειροποίητο μπιφτέκι με 100% μοσχαρίσιο κυμά / τσένταρ / μαρούλι / ντομάτα / σως πίκλας / κέτσαπ / μουστάρδα , σερβίρεται με τηγανητές πατάτες ",
            en: "handmade 100% beef burger / cheddar / lettuce / tomato / pickle sauce / ketchup / mustard , served with fried fries ",
          },
          price: "16",
          photo: photo,
        },
        {
          title: { el: "Γλυστέρι", en: "Glisteri" },
          desc: {
            el: "χειροποίητο μπιφτέκι με 100% μοσχαρίσιο κυμά, τσένταρ, μαρούλι, ντομάτα, σως πίκλας , μπέικον , ντομάτα , τηγανητό αυγό , καραμελωμένα κρεμμύδια , σερβίρεται με τηγανητές πατάτες",
            en: "handmade 100% beef burger / cheddar / lettuce / tomato / pickle sauce / bacon / tomato / lettuce / fried egg / caramelized onions , served with fried fries",
          },
          price: "18",
          photo: burger_Gli,
        },
        {
          title: { el: "Μπέργκερ κοτόπουλο", en: "Chicken burger" },
          desc: {
            el: "φιλέτο κοτόπουλο σε πάνκο, iceberg , μπέικον , ντομάτα , τηγανητό αυγό , σως μουστάρδας - μελιού, σερβίρεται με τηγανητές πατάτες",
            en: "chicken fillet in panko, iceberg , bacon, tomato, fried egg , honey - mustard sauce, served with fried fries",
          },
          price: "17",
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
            el: "σάλτσα ντομάτας , κίτρινα τυριά , μοσταρέλα , βασιλικό",
            en: "tomato sauce , yellow cheeses , mozzarella , fresh basil",
          },
          price: "15",
          photo: pizza_marg,
        },
        {
          title: { el: "Σπέσιαλ", en: "Special" },
          desc: {
            el: "σάλτσα ντομάτας, κίτρινα τυριά, μπέικον, ζαμπόν, μανιτάρια, πιπεριές",
            en: "tomato sauce, mix of yellow cheeses, bacon, ham, mushrooms, peppers",
          },
          price: "17",
          photo: special_pissa,
        },
        {
          title: { el: "Πεπερόνι", en: "Pepperoni" },
          desc: {
            el: "σάλτσα ντομάτας , κίτρινα τυριά , πεπερόνι",
            en: "tomato sauce , mix of yellow cheeses, pepperoni ",
          },
          price: "17",
          photo: photo,
        },
        {
          title: { el: "Μεσογειακή", en: "Mediterranean" },
          desc: {
            el: "σάλτσα ντομάτας , φέτες ντομάτας , πιπεριές , κρεμμύδι , ελιές , φέτα , ρίγανη , ελαιόλαδο",
            en: "tomato sauce , tomato slices, onions , feta cheese  , olives , peppers , oregano , olive oil",
          },
          price: "17",
          photo: pizz_gr,
        },
        {
          title: { el: "Ιταλική", en: "Italian" },
          desc: {
            el: "σάλτσα ντομάτας , τοματίνια , μοτσαρέλα , παρμεζάνα , ρόκα , προσούτο",
            en: "tomato sauce , cherry tomatoes , mozzarela , parmesan , arugula , prosciutto ",
          },
          price: "18",
          photo: pizz_it,
        },

        {
          title: { el: "Καρμπονάρα", en: "Carbonara" },
          desc: {
            el: "λευκή σάλτσα , κίτρινα τυριά , μπέικον , μανιτάρια ",
            en: "white sauce , mix of yellow cheeses, bacon, mushrooms ",
          },
          price: "17",
          photo: photo,
        },

        {
          title: { el: "Kαίσαρα", en: "Caesar's" },
          desc: {
            el: "σάλτσα ντομάτας, κίτρινα τυριά, μπέικον, κοτόπουλο, caesar's σως, παρμεζάνα",
            en: "tomato sauce, mix of yellow cheeses, bacon, chicken, caesar's sauce ,parmesan",
          },
          price: "18",
          photo: photo,
        },
      ],
    },

    //RESTAURANT
    //breakfast
    {
      title: { el: "Πρωινά", en: "Breakfast" },
      isRest: true,
      icon: breakfast_icon,
      products: [
        {
          title: { el: "CROQUE MONSIEUR", en: "CROQUE MONSIEUR" },
          desc: { el: "", en: "" },
          price: "9",
          photo: photo,
        },
        {
          title: { el: "CROQUE MADAME", en: "CROQUE MADAME" },
          desc: { el: "", en: "" },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Ομελέτα με λαχανικά", en: "Omelette with vegetables" },
          desc: { el: "", en: "" },
          price: "9",
          photo: photo,
        },
        {
          title: {
            el: "Scrambled αυγά με κοτόπουλο και δαμάσκηνο",
            en: "Scrambled eggs with chicken and plum",
          },
          desc: { el: "", en: "" },
          price: "12",
          photo: photo,
        },
      ],
    },
    //orektika
    {
      title: { el: "Ορεκτικά", en: "Starters" },
      isRest: true,
      icon: starters_icon,
      products: [
        {
          title: { el: "Ποικιλία Αλοιφών", en: "Variety of dips" },
          desc: {
            el: "ταραμας, τζατζικι, μελιτζανοσαλατα σερβιρεται με πιτακια",
            en: "taramas, tzatziki, eggplant salad served with pita bread",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Κολοκυθοκεφτέδες", en: "Zucchini Balls" },
          desc: {
            el: "σερβιρεται με σως γιαουρτιου",
            en: "served with yoghurt sauce",
          },
          price: "12",
          photo: photo,
        },
        {
          title: { el: "Ρολάκια Μελιτζάνας", en: "Eggplant Rolls" },
          desc: {
            el: "μελιτζανα, μοτσαρελα, σαλτσα ντοματας",
            en: "eggplant, mozzarella, tomato sauce",
          },
          price: "14",
          photo: photo,
        },
        {
          title: { el: "Μπρουσκέτα", en: "Bruschetta" },
          desc: {
            el: "φίλετο σαρδελας, ελιες, ντοματινια κονφι, ριγανη, ξυσμα λεμονιου",
            en: "sardine fillet, tomato confit, olives, oregano, lemon zest",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "Φέτα Πανέ", en: "Fried Feta" },
          desc: {
            el: "φετα πανέ σερβιρεται με τσάτνει ντοματας",
            en: "pan-fried feta cheese served with tomato chutney",
          },
          price: "10",
          photo: photo,
        },
        {
          title: { el: "Κεφτεδάκια", en: "Meatballs" },
          desc: {
            el: "με πατάτες τηγανητές",
            en: "with french fries",
          },
          price: "15",
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
          title: { el: "BURRATA", en: "BURRATA" },
          desc: {
            el: "ντοματινια κονφι, πεστο βασιλικου σε χωμα απο παξιμαδια χαρουπιου, burrata",
            en: "tomato confit, basil pesto on a carob rusk, burrata cheese",
          },
          price: "16",
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
          title: { el: "Γλυστέρι", en: "Glysteri" },
          desc: {
            el: "μαρουλι, iceberg, ντοματινια, ψητο ταλαγανη, καρύδι, κρισπι προσούτο, dressing δαμάσκηνο Σκοπελου",
            en: "lettuce, iceberg, cherry tomatoes, grilled talagani cheese, walnut,crispy prosciutto chips, Skopelos plum dressing",
          },
          price: "17",
          photo: photo,
        },
        {
          title: { el: "CAPRESE", en: "CAPRESE" },
          desc: {
            el: "φρεσκια μοτσαρελα, ντοματα, φυλλα βασιλικου, ελαιολαδο",
            en: "fresh mozzarella, tomato, basil leaves, olive oil",
          },
          price: "12",
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
          title: { el: "Ναπολιτέν", en: "Napoliten" },
          desc: {
            el: " ",
            en: "",
          },
          price: "12",
          photo: past_nap,
        },
        {
          title: { el: "Καρμπονάρα", en: "Carbonara" },
          desc: {
            el: "κρεμα γαλακτος, μπεικον, μανιταρια, παρμεζανα",
            en: "heavy cream, bacon, mushrooms, parmesan",
          },
          price: "15",
          photo: karbonara,
        },
        {
          title: { el: "Γαριδομακαρονάδα", en: "Shrimp Pasta" },
          desc: {
            el: "γαριδες, μπισκ, σαλτσα ντοματας",
            en: "shrimps, bisque, tomato sauce",
          },
          price: "24",
          photo: garidomak,
        },
        {
          title: { el: "ΚΑΛΑΜΑΡΑΤΑ ΘΑΛΛΑΣΙΝΩΝ", en: "SEΑ FOOD CALAMARΑΤΑ" },
          desc: {
            el: "καλαμαρι, γαριδες, χταποδι, φρεσκο κρεμμυδι, σκορδο, μπισκ,ντοματινια, παρμεζανα, ξυσμα από λαιμ",
            en: "squid, shrimp, octopus, fresh onion, garlic, bisque,cherry tomatoes, parmesan, lemon zest",
          },
          price: "28",
          photo: photo,
        },
        {
          title: { el: "ΡΙΖΟΤΟ ΘΑΛΛΑΣΙΝΩΝ", en: "SEAFOOD RISOTTO" },
          desc: {
            el: "καλαμαρι, γαριδα, χταποδι, φρεσκο κρεμμυδι, σκορδο, μπισκ,βουτυρο, παρμεζανα",
            en: "squid, shrimp, octopus, fresh onion, garlic, bisque, butter, parmesan",
          },
          price: "22",
          photo: photo,
        },
        {
          title: { el: "ΡΙΖΟΤΟ ΛΑΧΑΝΙΚΩΝ", en: "VEGEΤΑBLE RISOTTO" },
          desc: {
            el: "καροτο, κολοκυθι, κοκκινη πιπερια, φρεσκο κρεμυδι, σκορδο, βουτυρο,παρμεζανα",
            en: "carrot, zucchini, red pepper, fresh onion garlic, butter, parmesan",
          },
          price: "15",
          photo: photo,
        },
        {
          title: { el: "ΡΙΖΟΤΟ MANITAPIΩN", en: "MUSHROOM RISOTTO" },
          desc: {
            el: "μανιταρια, βουτυρο, παρμεζανα",
            en: "mushrooms, butter, parmesan",
          },
          price: "16",
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
            el: "γαριδες μαριναρισμενες σε σουβλακι με σως κοκτειλ και σαλατα",
            en: "marinated shrimps on a skewer with cocktail sauce and salad",
          },
          price: "20",
          photo: photo,
        },
        {
          title: { el: "ΣΑΡΔΈΛΑ ΠΛΑΚΊ ΦΟΎΡΝΟΥ", en: "ΟVEΝ ΒΑKED SARDINES" },
          desc: {
            el: "",
            en: "",
          },
          price: "17",
          photo: photo,
        },
        {
          title: { el: "ΚΑΛΑΜΑΡΙ ΨΗΤΟ", en: "GRILLED SQUID" },
          desc: {
            el: "",
            en: "",
          },
          price: "22",
          photo: photo,
        },
        {
          title: { el: "ΚΑΛΑΜΑΡΙ ΓΕΜΙΣΤΟ", en: "STUFFED SQUID" },
          desc: {
            el: "καλαμαρι γεμιστο με τυρια, ντοματα, πιπερια",
            en: "squid stuffed with cheese, tomato, pepper",
          },
          price: "24",
          photo: photo,
        },
        {
          title: { el: "ХТАПОΔІ ФHTO", en: "GRILLED OCTOPUS" },
          desc: {
            el: "χταποδι ψητο με ταραμα και σαλατα από μαυροματικα φασολια",
            en: "grilled octopus with tarama and black-eyed pea salad",
          },
          price: "22",
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
            el: "κοτόπουλο φιλέτο με ψητά λαχανικά",
            en: "chicken fillet with grilled vegetables",
          },
          price: "16",
          photo: photo,
        },
        {
          title: { el: "RIB EYE", en: "RIB EYE" },
          desc: {
            el: "rib eye με ψητα λαχανικα",
            en: "rib eye with grilled vegetables",
          },
          price: "29",
          photo: photo,
        },
        {
          title: { el: "ΚΟΤΟΠΟΥΛΟ ΚΟΝΤΟΣΟΥΒΛΙ", en: "CHICKΕΝ SOUVLAΚΙ" },
          desc: {
            el: "κοτοπουλο σουβλακι με πιπεριες, ντοματα",
            en: "chicken souvlaki with peppers, tomato",
          },
          price: "20",
          photo: photo,
        },
        {
          title: { el: "ΧΟΙΡΙΝΟ ΚΟΝΤΟΣΟΥΒΛΙ", en: "ΡORK SOUVLAKI" },
          desc: {
            el: "χοιρινο σουβλακι με πιπεριες,ντοματα",
            en: "pork souvlaki with peppers,tomatoes",
          },
          price: "20",
          photo: photo,
        },
        {
          title: {
            el: "ΜΠΙΦΤΕΚΙ ΑΠΛΟ / ΓΕΜΙΣΤΟ",
            en: "SIMPLE / STUFFED BURGER",
          },
          desc: {
            el: "μπιφτεκι μοσχαρισιο γεμιστο με τυρια",
            en: "beef burger stuffed with cheese",
          },
          price: "18 / 20",
          photo: photo,
        },
        {
          title: { el: "ΚΟΤΟΠΟΥΛΟ ΜΠΙΦΤΕΚΙ", en: "CHICKEN BURGER" },
          desc: {
            el: "κοτοπουλο μπιφτεκι με ψητα λαχανικα",
            en: "chicken burger with grilled vegetables",
          },
          price: "18",
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
          price: "12",
          photo: armenovil,
        },
        {
          title: { el: "Προφιτερόλ", en: "Profiterol" },
          desc: { el: "", en: "" },
          price: "10",
          photo: photo,
        },
      ],
    },
  ],
};
export default data;
