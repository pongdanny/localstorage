window.addEventListener("DOMContentLoaded", (event) => {
  const showCart = () => {
    const shoppingCart = document.getElementById("shopping-cart");
    for (let index = 0; index < localStorage.length; index++) {
      const keyName = localStorage.key(index);
      const keyValue = localStorage.getItem(keyName);
      // console.log(keyName);
      // console.log(keyValue);
      const newItem = document.createElement("div");
      newItem.setAttribute("id", keyName);
      newItem.innerHTML = keyName + " quantity is " + keyValue + "!";
      const removeButton = document.createElement("button");
      // console.log(removeButton);
      removeButton.setAttribute("class", "remove-button");
      newItem.appendChild(removeButton);
      shoppingCart.appendChild(newItem);
    }
  };

  const storeItem = () => {
    const addToCart = document.getElementById("add-to-cart");
    // console.log(addToCart);
    addToCart.addEventListener("click", (event) => {
      let quantity = document.getElementById("quantity").value;
      // console.log(quantity);
      let items = document.getElementById("items").value;
      // console.log(items);
      localStorage.setItem(items, quantity);
    });
    showCart();
  };

  const removeItem = () => {
    const removeButtons = document.querySelectorAll(".remove-button");
    // console.log(removeButtons);
    removeButtons.forEach((singleButt) => {
      singleButt.addEventListener("click", (event) => {
        localStorage.removeItem(event.target.parentNode.id);
        location.reload();
        showCart();
      });
    });
  };

  storeItem();
  // showCart();
  removeItem();
});
