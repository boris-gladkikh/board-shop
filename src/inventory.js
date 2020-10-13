const inventory ={
  products: [{
    id:"1wheelpint",
    name:"Onewheel Pint",
    brand:"Onewheel",
    description:"Onewheel’s intuitive ride and all-terrain crushability in smaller, lighter, more nimble package.",
    type:"all-terrain",
    range:"6-8 miles",
    topSpeed: "16mph",
    price:"950.00",
    qty:"100",
    img:"/img/boards/onewheel-pint.jpg",
    color:"dark grey",
    reviews:[]
  },
  {
    id:"1wheelxr",
    name:"Onewheel XR",
    brand:"Onewheel",
    description:" An all-terrain self-balancing single wheel electric board-sport, recreational personal transporter, often described as an electric skateboard. Unlike the electric unicycle, the riders feet (and body) are typically pointed at a perpendicular angle to the wheel.",
    type:"all-terrain",
    range:"12-18 miles",
    topSpeed:"19 mph",
    price:"1799.00",
    qty:"50",
    img:"/img/boards/onewheel-xr.jpg",
    color:"black, red, yellow, magenta, cyan",
    reviews: []
  },
  {
    id:"boostv2plus",
    name:"Boosted V2 Plus",
    brand:"Boosted",
    description:"stylish new design for the famous Boosted board, comes with such features as regenerative breaking, 25% grade hill climbing, replacable batteries, and top speeds of up to 22 mph. Boosted boards have been discontinued, so get them while you can!",
    type:"street",
    range:"12 miles",
    topSpeed:"22 mph",
    price:"1499.00",
    qty:"20",
    img:"/img/boards/boosted-v2-plus.jpg",
    color:"black",
    reviews:[]
  },
  {
    id:"evolveat",
    name:"Bamboo GTR All Terrain",
    brand:"Evolve",
    description:"Inspired by the build quality, performance and superior comfort of a classic muscle car, the Bamboo GTR marries the best features of old-school deck craftsmanship with the latest technology to produce the ultimate fun machine. Pimped with our newly forged aluminium ‘Super Carve’ trucks for the ultimate riding experience no compromise has been made when it comes to strength, durability and ride quality.",
    type:"all-terrain",
    range:"19 miles",
    topSpeed:"22 mph",
    price:"1699.00",
    qty:"50",
    img:"/img/boards/evolve-at.jpg",
    color:"wood finish",
    reviews:[]
  },
  {
    id:"evolvestreet",
    name:"Bamboo GTR Street",
    brand:"Evolve",
    description:"Inspired by the build quality, performance and superior comfort of a classic muscle car, the Bamboo GTR marries the best features of old-school deck craftsmanship with the latest technology to produce the ultimate fun machine. Pimped with our newly forged aluminium ‘Super Carve’ trucks for the ultimate riding experience no compromise has been made when it comes to strength, durability and ride quality.",
    type:"street",
    range:"31 miles",
    topSpeed:"26 mph",
    price:"1699.00",
    qty:"50",
    img:"/img/boards/evolve-street.jpg",
    color:"wood finish",
    reviews:[]
  },
  {
    id:"meepov3",
    name:"Meepo V3",
    brand:"Meepo",
    description:" This board is the best all around board that suit everyone. And with handle with push to start making this board very convenient to use. This is the model that Meepo started with, go though v1 v1.5 v2 and we are finally here at V3, the improvements are in all details. Water resistant, updated swappable battery, and a smooth riding experience.",
    type:"street",
    range:"20 miles",
    topSpeed:"28 mph",
    price:"389.00",
    qty:"50",
    img:"/img/boards/meepo-v3.jpg",
    color:"black",
    reviews:[]
  },
  {
    id:"meeponlspro",
    name:"Meepo NLS Pro",
    brand:"Meepo",
    description:"Meepo's most comfortable electric skateboard yet, the NLS Pro has been upgraded for speed and performance. Take your electric skateboard game to the next level with Meepo NLS Pro. This is the board for riders who have high standards both in terms of comfort and power. This board can handle up to 28 mph / 46 kph rides for up to 2 hours. It’s Meepo's fastest skateboard yet.",
    type:"street",
    range:"20 miles",
    topSpeed:"29 mph",
    price:"",
    qty:"50",
    img:"/img/boards/meepo-nls-pro.jpg",
    color:"black",
    reviews:[]
  },
  {
    id:"meepoawd",
    name:"Meepo AWD Pro",
    brand:"Meepo",
    description:"The AWD Pro might be the most powerful hub motor electric skateboard ever built. It’s an improved version of the AWD. This fierce 40” longboard skateboard features a powerful upgrade to its motors. The previous version had 4 hub motors x 300 (1200 watts) while the new and improved version, AWD Pro, has 4 hub motors of 540 watts each (2160 watts). This unique performance-oriented configuration means the AWD Pro can accelerate faster and brake faster and is designed for a fast, symmetrical ride. The AWD Pro has more than 1000 watts of engine power than the AWD GT. It features Premium ER cells as batteries. And by the way, the logo on the deck glows in the dark.",
    type:"all-terrain",
    range:"15 miles",
    topSpeed:"34 mph",
    price:"799.00",
    qty:"30",
    img:"/img/boards/meepo-awd.jpg",
    color:"black",
    reviews:[]
  },{
    id:"ownw2",
    name:"Ownboard W2",
    brand:"Ownboard",
    description:"The W2 ESC uses a customized Hobbywing ESC with sensor. Like other Ownboard models it still has a smooth acceleration & braking but with a faster startup speed and a more powerful climbing ability. The high discharge current of 40A will keep you and your eBoard always strong and powerful, even when you are riding on mountainous roads.",
    type:"street",
    range:"7.5 miles",
    topSpeed:"26 mph",
    price:"529.00",
    qty:"50",
    img:"/img/boards/ownboard-w2.jpg",
    color:"black",
    reviews:[]
  },
  {
    id:"ownat1w",
    name:"Ownboard AT1W",
    brand:"Ownboard",
    description:"Ownboard's new and improved all-terrain board. 105mm wheels for ehanced ride and comfort. superior wear resistance,special designed curved body, and heavy-duty Samsung 30Q 12Ah battery with improved 24 mile range. Don't sleep on this beast. ",
    type:"all-terrain",
    range:"24 miles",
    topSpeed:"25 mph",
    price:"799.00",
    qty:"100",
    img:"/img/boards/ownboard-at1w.jpg",
    color:"wood finish",
    reviews:[]
  }
  ],
  productsSimple: [{
    id:"1wheelpint",
    name:"Onewheel Pint",
    brand:"Onewheel",
    type:"all-terrain",
    price:"950.00",
    img:"/img/boards/onewheel-pint.jpg"
  },
  {
    id:"1wheelxr",
    name:"Onewheel XR",
    brand:"Onewheel",
    type:"all-terrain",
    price:"1799.00",
    img:"/img/boards/onewheel-xr.jpg"
  },
  {
    id:"boostv2plus",
    name:"Boosted V2 Plus",
    brand:"Boosted",
    type:"street",
    price:"1499.00",
    img:"/img/boards/boosted-v2-plus.jpg"
  },
  {
    id:"evolveat",
    name:"Bamboo GTR All Terrain",
    brand:"Evolve",
    type:"all-terrain",
    price:"1699.00",
    img:"/img/boards/evolve-at.jpg"
  },
  {
    id:"evolvestreet",
    name:"Bamboo GTR Street",
    brand:"Evolve",
    type:"street",
    price:"1699.00",
    img:"/img/boards/evolve-street.jpg"
  },
  {
    id:"meepov3",
    name:"Meepo V3",
    brand:"Meepo",
    type:"street",
    price:"389.00",
    img:"/img/boards/meepo-v3.jpg"
  },
  {
    id:"meeponlspro",
    name:"Meepo NLS Pro",
    brand:"Meepo",
    type:"street",
    price:"689.00",
    img:"/img/boards/meepo-nls-pro.jpg",
  },
  {
    id:"meepoawd",
    name:"Meepo AWD Pro",
    brand:"Meepo",
    type:"all-terrain",
    price:"799.00",
    img:"/img/boards/meepo-awd.jpg"
     },{
    id:"ownw2",
    name:"Ownboard W2",
    brand:"Ownboard",
    type:"street",
    price:"529.00",
    img:"/img/boards/ownboard-w2.jpg"
  },
  {
    id:"ownat1w",
    name:"Ownboard AT1W",
    brand:"Ownboard",
    type:"all-terrain",
    price:"799.00",
    img:"/img/boards/ownboard-at1w.jpg"
  }
  
  
  ]
} 

export default inventory;


//product schema:

/**
 * {
  id:"",
  name:"",
  brand:"",
  description:"",
  type:"",
  range:"",
  topSpeed:"",
  price:"",
  qty:"",
  img:"",
  color:"",
  reviews:[]
}
 */


 //onewheel,boosted, evolve, meepo, ownboard