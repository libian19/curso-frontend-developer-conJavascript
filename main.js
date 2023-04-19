//ACTIVAR EL MENU DEL EMAIL
const activarEmail = document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
//ACTIVAR EL MENU BURGERICON
const burgerIcon= document.querySelector('.menu');
const movilMenu= document.querySelector('.mobile-menu');
//ACTIVAR MY ORDER
const shoppingCart= document.querySelector('.navbar-shopping-cart');
const myOrder= document.querySelector('.productList-detail');
//DETALLE DEL PRODUCTO
const productCard= document.querySelector('.product-card');
const productDetail= document.querySelector('.product-detail');
const productDetailClosed = document.querySelector('.product-detail-closed');
//CARDS CONTAINER
const containerCard = document.querySelector('#containerCard');


activarEmail.addEventListener('click', toggleMenuEmail);
burgerIcon.addEventListener('click', toggleMenuMobil);
shoppingCart.addEventListener('click', togglemyOrder);


function toggleMenuEmail(){
   const ismyOrderClosed= myOrder.classList.contains('inactive'); 
   const isproductDetailClosed= productDetail.classList.contains('inactive');

   if (!ismyOrderClosed){
      myOrder.classList.add('inactive');
   } 
   if(!isproductDetailClosed){
      productDetail.classList.add('inactive')
   }
   desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobil(){
   const ismyOrderClosed= myOrder.classList.contains('inactive'); 

   if (!ismyOrderClosed){
      myOrder.classList.add('inactive');
   } 
   productDetail.classList.add('inactive');
   movilMenu.classList.toggle('inactive');
}

function togglemyOrder(){
   const ismovilMenuClosed= movilMenu.classList.contains('inactive'); 
   const isproductDetailClosed= productDetail.classList.contains('inactive');

   if (!ismovilMenuClosed){
      movilMenu.classList.add('inactive');
   } 
   if(!isproductDetailClosed){
      productDetail.classList.add('inactive')
   }
   myOrder.classList.toggle('inactive');
}

function toggleCloseMenu(){
   desktopMenu.classList.add("inactive");
   movilMenu.classList.add("inactive");
   myOrder.classList.add('inactive');
   
}

function closedProductDetail(){
   productDetail.classList.add('inactive');
  
}

function openProductDetail(){
   toggleCloseMenu();
   
   productDetail.classList.remove("inactive");

   const containerCard = document.querySelector('#containerCard');
   const containerImg = document.createElement('div')

   if(containerCard){
      containerCard.innerHTML = ' '
   } 
   
   const productImgDetail = document.createElement('img')
   productImgDetail.setAttribute("id","img-detail");
   productImgDetail.setAttribute("src", "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");

   const productInfoDetail = document.createElement('div');
   productInfoDetail.className = 'product-info-detail'
   
   const priceDetail = document.createElement('p')
   priceDetail.textContent = 'precio'
   
   const nameDetail = document.createElement('p')
   nameDetail.textContent = 'nombre'
   
   const descriptionDetail = document.createElement('p') 
   descriptionDetail.textContent = 'aqui la descripcion'

   containerImg.appendChild(productImgDetail);
   productInfoDetail.append(priceDetail, nameDetail, descriptionDetail)
   containerCard.append(containerImg, productInfoDetail)

   productDetailClosed.addEventListener('click', closedProductDetail);
}

const productList = [];
productList.push({
   name: 'Bike',
   price: 150,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
   name: 'Computadora',
   price: 350,
   image: 'https://www.tecnologia-informatica.com/wp-content/uploads/2018/07/funciones-de-la-computadora-1.jpeg',
})
productList.push({
   name: 'Televisor',
   price: 250,
   image: 'https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/10001674.jpg',
})
productList.push({
   name: 'Sonido',
   price: 250,
   image: 'https://www.lg.com/co/images/sistemas-de-audio/md05260705/gallery/medium01.jpg',
})
productList.push({
   name: 'Impresora',
   price: 100,
   image: 'https://mediaserver.goepson.com/ImConvServlet/imconv/73461fb77d7f424f37899fa294f5df16b5613880/1200Wx1200H?use=banner&assetDescr=foto-ecotank-L8180-1-690x480',
})
productList.push({
   name: 'Tablet',
   price: 400,
   image: 'https://tienda.claro.com.co/wcsstore/Claro//images/catalog/equipos/646x1000/4894461886169.jpg',
})

function renderProducts(arr){
   for (product of arr){
      const cardsContainer = document.querySelector('.cards-container')

      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click', openProductDetail);

      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');

      const productInfoDiv = document.createElement('div');
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;

      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);

      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
            
      productInfoFigure.appendChild(productImgCart);
      
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);

      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);

      cardsContainer.appendChild(productCard);
   }
   productCard.addEventListener('click', openProductDetail);
}
renderProducts(productList);







