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
  "https://m.media-amazon.com/images/I/21WHnqT3HWL._SL500_.jpg"
];

const itemNames = [
  "Ivilon Drapery Treatment Window Curtain Rod - Acrylic Ball 1 inch Pole. 28 to 48 Inch. Satin Nickel",
  "Ivilon Drapery Treatment Window Curtain Rod - Acrylic Ball 1 inch Pole. 28 to 48 Inch. Warm Gold",
  "Ivilon Drapery Treatment Window Curtain Rod - Acrylic Ball 1 inch Pole. 28 to 48 Inch. Black",
  "Ivilon Drapery Window Curtain Rod - End Cap Style Design 1 Inch Pole. 28 to 48 Inch Color Satin Nickel",
  "Ivilon Drapery Window Curtain Rod - End Cap Style Design 1 Inch Pole. 28 to 48 Inch Color Warm Gold",
  "Ivilon Drapery Window Curtain Rod - End Cap Style Design 1 Inch Pole. 28 to 48 Inch Color Black"
];

const itemPrices = ["$31.87", "$31.98", "$29.78", "$26.95", "$27.02", "$27.79"];

// sample loop
for (let i = 0; i < itemImages.length; i++) {

  // item < image, desc
  var amazonItem = document.createElement("div");
  amazonItem.classList.add("amazon_item");


  // image
  var amazonImage = document.createElement("div");
  amazonImage.classList.add("amazon_image");
  amazonImage.style.backgroundImage = 'url(' + itemImages[i] + ')';

  amazonItem.appendChild(amazonImage);

  // description < name, price, button
  var amazonDesc = document.createElement("div");
  amazonDesc.classList.add("amazon_description");

  amazonItem.appendChild(amazonDesc);

  // name
  var itemName = document.createElement("h4");
  itemName.classList.add("amazon_item_name");

  var itemNameText = document.createTextNode(itemNames[i]);
  itemName.appendChild(itemNameText);

  amazonDesc.appendChild(itemName);

  // price
  var itemPrice = document.createElement("h4");
  itemPrice.classList.add("amazon_item_price");

  var itemPriceText = document.createTextNode(itemPrices[i]);
  itemPrice.appendChild(itemPriceText);

  amazonDesc.appendChild(itemPrice);

  // button
  var itemButton = document.createElement("button");
  itemButton.classList.add("btn");
  itemButton.classList.add("btn_primary");
  itemButton.classList.add("amazon_button");

  var itemButtonText = document.createTextNode("Buy now on Amazon");
  itemButton.appendChild(itemButtonText);

  amazonDesc.appendChild(itemButton);

  // add item to collection
  document.getElementById("collection").appendChild(amazonItem);
}
