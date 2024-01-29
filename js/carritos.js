const pintarCarrito= ()=> {
    modalContainer.innerHTML="";
    modalContainer.style.display= "block";
    console.log ("hola funciona");
    const modalHeader = document.createElement ("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML =
    `<h1 class="modal-header-title"> Shopping cart.</h1>`;
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
        <span class="delete-product"> ❌ </span>`;
        
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
        //let eliminar = document.createElement("span");
       // eliminar.innerText= "❌"
       // eliminar.className= "delete-product";
       // carritoContent.append (eliminar);

       // eliminar.addEventListener("click",eliminarProducto)
        
        });

    const total = carrito.reduce ((acc,el)=>  acc + el.precio * el.cantidad,0);

     const totalBuying= document.createElement("div")
     totalBuying.className="total-content"
     totalBuying.innerHTML= `Total order : ${total} $`;
     modalContainer.append (totalBuying);
    }
    verCarrito.addEventListener("click", pintarCarrito)
    
    const eliminarProducto= (id) => {
        const foundId = carrito.find((element) => element.id === id);
        
        carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
        
        });
        
        
        saveLocal();
        pintarCarrito();
        };
        

     
        



