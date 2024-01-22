const productos = [
    {
        id: 1,
        nombre: "Remera",
        precio: 50,
        
    },
    {
        id: 2,
        nombre: "Musculosa",
        precio: 70,
        
    },
    {
        id: 3,
        nombre: "Pantalon",
        precio: 90,
        
    },
    {
        id: 4,
        nombre: "Gorra",
        precio: 30,
        
 
    },
];


guardar_localstorage();

function guardar_localstorage(){
    let stock = [
        {
            id: 1,
            nombre: "Remera",
            precio: 50,
            
        },
        {
            id: 2,
            nombre: "Musculosa",
            precio: 70,
            
        },
        {
            id: 3,
            nombre: "Pantalon",
            precio: 90,
            
        },
        {
            id: 4,
            nombre: "Gorra",
            precio: 30,
            
     
        },
    ];
    
    localStorage.setItem ("stock", JSON.stringify (stock)  )
};



