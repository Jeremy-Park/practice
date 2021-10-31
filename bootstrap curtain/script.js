// god bless whoever wrote this
// god bless america
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const template = document.createElement("template");

const itemImages = [
  "https://m.media-amazon.com/images/I/21Erq7u3BXL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/21j5U5z4vsL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/219SEeqnrIL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/21ZFmX2CuwL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31p21KCv5fL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/21WHnqT3HWL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31+a3rHQ65L._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31oDPX3v52L._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31OOke8Hu9L._SL500_.jpg",
  "https://m.media-amazon.com/images/I/415oGK3LlNL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31ON+FcqZDL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/41DMQDC4C7L._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31pb7ylVWSL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31Xp-oNxmgL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31oAZczltBL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31L0nEOubVL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/21ZaobwMz9L._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31asBjQzEQL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/313au6Jkn3L._SL500_.jpg",
  "https://m.media-amazon.com/images/I/21oqw81eF-S._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31GLt4cYVCL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31X+s05d3tL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/41If+fkqTrL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/41zVmULWe4L._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31wX-h5vyxL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/41ot1JyHpFL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/312iWuhX5bL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31Z14n++FsL._SL500_.jpg",
  "https://m.media-amazon.com/images/I/41YKhj+Mn3L._SL500_.jpg",
  "https://m.media-amazon.com/images/I/31bczmQAb1L._SL500_.jpg",
];

const itemNames = [
  "Ivilon Drapery Treatment Window Curtain Rod - Acrylic Ball 1 inch Pole. 28 to 48 Inch. Satin Nickel",
  "Ivilon Drapery Treatment Window Curtain Rod - Acrylic Ball 1 inch Pole. 28 to 48 Inch. Warm Gold",
  "Ivilon Drapery Treatment Window Curtain Rod - Acrylic Ball 1 inch Pole. 28 to 48 Inch. Black",
  "Ivilon Drapery Window Curtain Rod - End Cap Style Design 1 Inch Pole. 28 to 48 Inch Color Satin Nickel",
  "Ivilon Drapery Window Curtain Rod - End Cap Style Design 1 Inch Pole. 28 to 48 Inch Color Warm Gold",
  "Ivilon Drapery Window Curtain Rod - End Cap Style Design 1 Inch Pole. 28 to 48 Inch Color Black",
  "Ivilon Drapery Window Curtain Rod - Twisted Style Set, 28 to 48 Inch. Color Brushed Nickel",
  "Ivilon Window Curtain Rod - Edge Style Drapery Treatments, 28 to 48 Inch. Color Warm Gold",
  "Ivilon Drapery Window Curtain Rod - Twisted Style Set, 28 to 48 Inch. Color Black",
  'Ivilon Drapery Eyelet Curtain Rings - 2.3" Ring for Curtain Hook Pins, Set of 14 - Warm Gold',
  'Ivilon Drapery Eyelet Curtain Rings - 1.7" Ring for Curtain Hook Pins, Set of 14 - Warm Gold',
  'Ivilon Drapery Eyelet Curtain Rings - 2" Ring Loop for Hook Pins, Set of 14 - Warm Gold',
  'Ivilon Drapery Curtain Clip Rings - Clips Ring for Curtain Panels 1.7", Set of 14 - Warm Gold',
  'Ivilon Drapery Curtain Clips with Rings - Set of 14 Decorative Drapery Rings Curtain Clip Rings with Strong Clips 2" Diameter - Color Warm Gold',
  "Ivilon Draperies Window Curtain Rod - Fleur Design, 28 to 48 Inch. Color Oil Rubbed Bronze (ORB)",
  "Ivilon Curtain Rod with Ball Finials - 1 inch Pole. 28 to 48 Inch. Satin Nickel",
  "Ivilon Curtain Rod with Ball Finials - 1 inch Pole. 28 to 48 Inch. Black",
  "Ivilon Drapery Treatment Window Curtain Rod - Ball Style, 28 to 48 Inch. Color White / Ivory",
  "Ivilon Drapery Treatment Window Curtain Rod - Ball Style, 28 to 48 Inch. Color Satin Nickel",
  "Ivilon Drapery Treatment Window Curtain Rod - Ball Style, 28 to 48 Inch. Color Black",
  "Ivilon Decorative Window Curtain Rod - Carved Square Finials, 1 1/8 in Rod, 28 to 48 in. White/Ivory",
  "Ivilon Drapery Window Curtain Rod Set - Square Design 1 1/8 Rod. 28 to 48 Inch. Ivory / White",
  "Ivilon Decorative Window Curtain Rod - Carved Square Finials, 1 1/8 in Rod, 28 to 48 in. Satin Nickel",
  "Ivilon Drapery Treatment Window Curtain Rod - Square Design 1 1/8 Rod. 28 to 48 Inch. Satin Nickel",
  "Ivilon Decorative Window Curtain Rod - Carved Square Finials, 1 1/8 in Rod, 28 to 48 in. Antique Black",
  "Ivilon Window Treatment Curtain Rod - Square Finials, 1 1/8 in Rod, 28 to 48 Inch, Antique Black",
  "Ivilon Decorative Window Curtain Rod - Carved Square Finials, 1 1/8 in Rod, 28 to 48 in. Black",
  "Ivilon Drapery Treatment Window Curtain Rod - Square Design 1 1/8 Rod. 28 to 48 Inch. Black",
  "Ivilon Adjustable Brackets for Curtain Rods - for 1 or 1 1/8 Inch Rods. Set of 2 - Warm Gold",
  "Ivilon Fixed Brackets for Curtain Rods - for 1 or 1 1/8 Inch Rods. Set of 2 - Black",
];

const itemLinks = [
  "https://www.amazon.com/dp/B07GY3FD2W?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B07GY18321?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B07GXYB4ZM?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B06X9H5HD5?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B06X9H3B9V?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B06WWP9XXB?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B01GER4VGQ?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B071WQGFT8?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B01GER4KLM?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B07B2KX563?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B07B2KDHVD?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B07B2LHGF4?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B07B7WRF7M?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B06XC7BGZ7?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B074MDB9P7?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B07K7TPD4J?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B07K7V66QV?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B01N6UPROM?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B01GIQ0PVS?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B01GIQ0PTU?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B07BD42PQC?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B01MSB6DN6?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B07BD3ZSQP?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B01GOTKHVM?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B07BD2TL74?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B079K3H3RK?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B07BD3LMTM?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B01GOTKHSA?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B07FGBCR45?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
  "https://www.amazon.com/dp/B07DTW8XVR?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
];

const itemPrices = [
  "$31.87",
  "$31.98",
  "$29.78",
  "$26.95",
  "$27.02",
  "$27.79",
  "View price on Amazon",
  "$28.78",
  "View price on Amazon",
  "$8.41",
  "$7.90",
  "$8.19",
  "$7.99",
  "$8.75",
  "$12.51",
  "$31.17",
  "$28.06",
  "$26.24",
  "$27.93",
  "$25.84",
  "$29.12",
  "$30.00",
  "View price on Amazon",
  "$29.79",
  "$29.48",
  "$28.76",
  "$28.57",
  "$27.97",
  "$9.84",
  "$7.99",
];

// sample loop
for (let i = 0; i < itemImages.length; i++) {
  // item < amazonImageWrapper
  var amazonItem = document.createElement("div");
  amazonItem.classList.add("amazon_item");

  // amazonImageWrapper < image, overlay
  var amazonImageWrapper = document.createElement("div");
  amazonImageWrapper.classList.add("amazon_image_wrapper");

  amazonItem.appendChild(amazonImageWrapper);

  // image
  var amazonImage = document.createElement("div");
  amazonImage.classList.add("amazon_image");
  amazonImage.style.backgroundImage = "url(" + itemImages[i] + ")";
  amazonImage.setAttribute(
    "onClick",
    `window.open('${itemLinks[i]}', '_blank').focus();`
  );

  amazonImageWrapper.appendChild(amazonImage);


  // only do overlay if prices
  if (itemPrices[i] != "View price on Amazon") {
  // overlay < overlayText
  var amazonOverlay = document.createElement("div");
  amazonOverlay.classList.add("amazon_overlay");

  amazonImageWrapper.appendChild(amazonOverlay);

  // overlay text
  var amazonOverlayText = document.createElement("h5");
  amazonOverlayText.classList.add("amazon_overlay_text");

  var amazonOverlayTextText = document.createTextNode("AVAILABLE IN MORE OPTIONS");
  amazonOverlayText.appendChild(amazonOverlayTextText);

  amazonOverlay.appendChild(amazonOverlayText);
  }



  // description < name, pricerow, button
  var amazonDesc = document.createElement("div");
  amazonDesc.classList.add("amazon_description");

  amazonItem.appendChild(amazonDesc);

  // name
  var itemName = document.createElement("h4");
  itemName.classList.add("amazon_item_name");

  var itemNameText = document.createTextNode(itemNames[i]);
  itemName.appendChild(itemNameText);

  amazonDesc.appendChild(itemName);

  // pricerow < price, prime
  var priceRow = document.createElement("div");
  priceRow.classList.add("amazon_price_row");
  amazonDesc.appendChild(priceRow);

  // price
  var itemPrice = document.createElement("h4");
  itemPrice.classList.add("amazon_item_price");

  var itemPriceText = document.createTextNode(itemPrices[i]);
  itemPrice.appendChild(itemPriceText);

  priceRow.appendChild(itemPrice);

  // prime logo
  if (itemPrices[i] != "View price on Amazon") {
    var primeLogo = document.createElement("img");
    primeLogo.classList.add("prime_logo");
    primeLogo.setAttribute("src", "./img/prime.png");
    primeLogo.setAttribute("alt", "prime logo");

    priceRow.appendChild(primeLogo);
  }

  // button
  var itemButton = document.createElement("button");
  // itemButton.classList.add("btn");
  // itemButton.classList.add("btn_primary");
  itemButton.classList.add("amazon_button");

  // itemButton.setAttribute(
  //   "onClick",
  //   "window.location.href='" + itemImages[i] + "';"
  // );

  itemButton.setAttribute(
    "onClick",
    `window.open('${itemLinks[i]}', '_blank').focus();`
  );

  var itemButtonText = document.createTextNode("Buy now on Amazon");
  itemButton.appendChild(itemButtonText);

  amazonDesc.appendChild(itemButton);

  // add item to collection
  document.getElementById("amazon_wrapper").appendChild(amazonItem);
}
