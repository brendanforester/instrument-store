new Vue({
  el: "#instrument-store",
  data: {
    newName: "",
    newType: "",
    newBrand: "",
    newPrice: "",
    count: 0,
    addInstrument: true,
    submitTwo: true,
    cart: [],
    cards: [
      {
        name: "Piano",
        image:
          "https://cdnm2-kraftmusic.netdna-ssl.com/media/catalog/product/cache/3fedc8207dcd37094c7cd808f4dc6b12/c/a/cas-ap270bk_angle.jpg",
        type: "Percussion",
        brand: "yamaha",
        price: "$970",
        popUp: false
      },
      {
        name: "Guitar",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51RFApv%2BmbL._AC_SL1200_.jpg",
        type: "String",
        brand: "fender",
        price: "$750",
        popUp: false
      },
      {
        name: "Drums",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71eIgXWPJ2L._AC_SL1500_.jpg",
        type: "Percussion",
        brand: "maton",
        price: "$420",
        popUp: false
      },
      {
        name: "Violin",
        image:
          "https://www.corilon.com/media/image/c9/34/57/79_1_1_1890x1890.jpg",
        type: "String",
        brand: "yamaha",
        price: "$170",
        popUp: false
      },
      {
        name: "Flute",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/31P2TjeREkL._AC_.jpg",
        type: "Woodwind",
        brand: "fender",
        price: "$150",
        popUp: false
      },
      {
        name: "Trumpet",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/712ZyImPK8L._AC_SL1500_.jpg",
        type: "Brass",
        brand: "maton",
        price: "$450",
        popUp: false
      }
    ]
  },
  methods: {
    addInstrument: function (index) {
      this.cards[index].addInstrument = !this.cards[index].addInstrument;
    },
    closeLook: function (index) {
      this.cards[index].popUp = !this.cards[index].popUp;
    },
    addNew: function () {
      this.cards.push({
        name: this.newName,
        type: this.newType,
        brand: this.newBrand,
        price: this.newPrice,
        popUp: false,
        submitTwo: false
      });
      this.newName = "";
      this.newType = "";
      this.newBrand = "";
      this.newPrice = "";
    },
    submit: function () {
      this.count += 1;
    }
    //     clearCart:
  }
});