const products = [
    {
        id: '1',
        name: 'Akira vol 5',
        price: 8800,
        category:'mangas',
        img: 'https://pirulocoleccionables.com/wp-content/uploads/2023/07/9789878190839.jpg',
        stock: 15,
        description: 'tomo volumen5 de la saga de akira'
    },
    {
        id: '2',
        name: 'Action Comic VOL1',
        price: 6400,
        category:'comics',
        img: 'https://pirulocoleccionables.com/wp-content/uploads/2022/09/action_comics_vol_01_cov_arg1-e971f540e4dabedada15952922634188-640-0-200x283.jpg',
        stock: 20,
        description: 'tomo volumen1 de la saga action comics'
    },
    {
        id: '3',
        name: 'Catan',
        price: 57500,
        category:'juegos de mesa',
        img: 'https://pirulocoleccionables.com/wp-content/uploads/2022/08/catan-600x600-1-200x200.jpg',
        stock: 5,
        description: 'de 2 a 4 jugadores'
    },

]

export const getProducts =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById =(id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id===id))
        },500)
    })
}

export const getProductsByCategory =(categoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod=>prod.category===categoryId))
        },500)
    })
}