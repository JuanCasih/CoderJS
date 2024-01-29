const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById ("ver-carrito");
const modalContainer = document.getElementById ("modal-container");



let carrito = JSON.parse(localStorage.getItem ("carrito")) || [];

const getProducts = async () => {
    const response = await fetch ("data.json");
    const data = await response.json ();
    console.log (data)

    data.forEach((product)=>{
        let content = document.createElement ("div");
        content.className="card"
        content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
        `;
        shopContent.append(content)
       
        let comprar= document.createElement("button")
        comprar.innerText ="🛒";
        comprar.className="comprar"
        content.append (comprar);
        const repeat= carrito.some((repeatProduct) => repeatProduct.id === product.id);
    
    
        comprar.addEventListener("click", ()=>{
            const repeat= carrito.some((repeatProduct) => repeatProduct.id === product.id);
            
            if(repeat){
                carrito.map((prod) => {
                if (prod.id === product.id) {
                prod.cantidad++;
                }
                });
                }else{
            carrito.push ({
                id:product.id,
                img:product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad:product.cantidad,
                
            })
        }
    console.log (carrito)
    console.log (carrito.length)
    saveLocal ();
    
    
    });
    });
    
    
    verCarrito.addEventListener ("click",()=>{
        modalContainer.innerHTML="";
        modalContainer.style.display= "block";
        console.log ("hola funciona");
        const modalHeader = document.createElement ("div")
        modalHeader.className = "modal-header"
        modalHeader.innerHTML =
        `<h1 class="modal-header-title">Cart.</h1>`;
        modalContainer.append(modalHeader);
        
        const modalbutton = document.createElement ("h1")
        modalbutton.innerText="x";
        modalbutton.className= "modal-header-button";
      
        modalHeader.append(modalbutton);
      
        modalbutton.addEventListener("click",()=>{
        modalContainer.style.display = "none"});
       
        
        
        carrito.forEach ((product)=> {
            let carritoContent=  document.createElement ("div");
            carritoContent.className = "modal-content";
            carritoContent.innerHTML=`
            <img src="${product.img}"
            <h3>${product.nombre}</h3>
            <p>${product.precio} $</p>
            <span class="restar"> - </span>
            <p> Amount: ${product.cantidad}</p>
            <span class="sumar"> + </span>
            <p> Total: ${product.cantidad * product.precio}</p>
            <span class="delete-product"> ❌ </span>
            `;
            modalContainer.append(carritoContent);
            let restar = carritoContent.querySelector(".restar")
        
            restar.addEventListener ("click", () => {
            if (product.cantidad !== 1){
            product.cantidad --;}
            pintarCarrito ();
});
            let sumar = carritoContent.querySelector(".sumar")
        
            sumar.addEventListener ("click", () => {
            product.cantidad ++;
            pintarCarrito ();
});
           let eliminar = carritoContent.querySelector(".delete-product");
           eliminar.addEventListener ("click", () => {
           eliminarProducto (product.id);
}); 
          
           

});
    
        const total = carrito.reduce ((acc,el)=>  acc + el.precio,0);
    
         const totalBuying= document.createElement("div")
         totalBuying.className="total-content"
         totalBuying.innerHTML= `Total order : ${total} $`;
         modalContainer.append (totalBuying);

         const payCard = document.createElement ("button")
         payCard.className= "pay"
         payCard.innerHTML = `Pay`
         modalContainer.append (payCard);
         payCard.addEventListener ("click", () => {
            Swal.fire({
                title: "You want to finalize the purchase?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Confirm",
                denyButtonText: `Delete`
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire("Payment Confirmed", "", "success");
                } else if (result.isDenied) {
                  Swal.fire("See you soon!", "", "info");
                }
              });

         })


         

     
 });
  

   
        
    
    
};
    getProducts ();


const saveLocal = () => {
    localStorage.setItem ("carrito", JSON.stringify (carrito)  )
}



