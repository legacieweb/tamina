export const heroSlides = [
  {
    id: 'slide1',
    image: "https://i.imgur.com/VJClvtl.jpeg",
    tag: "Featured Collection",
    title: "Summer Beauty Edit",
    subtitle: "Glow Naturally",
    description: "Discover our curated summer collection featuring lightweight formulas and radiant finishes.",
    link: "/collections/summer-beauty",
    targetDate: "2026-07-15",
    discount: 25
  },
  {
    id: 'slide2',
    image: "https://i.imgur.com/gY8jMB4.jpeg",
    tag: "Limited Offer",
    title: "Makeup Mastery Set",
    subtitle: "Complete Kit",
    description: "Everything you need for a flawless look. Limited edition packaging.",
    link: "/collections/makeup-mastery",
    targetDate: "2026-06-30",
    discount: 35
  },
  {
    id: 'slide3',
    image: "https://i.imgur.com/yyv8mYf.jpeg",
    tag: "New Arrivals",
    title: "Nail Care Studio",
    subtitle: "Professional Grade",
    description: "Elevate your manicure with our professional nail care collection.",
    link: "/collections/nail-professional",
    discount: 15
  },
  {
    id: 'slide4',
    image: "https://i.imgur.com/v9Wyh3w.jpeg",
    tag: "Shop All",
    title: "All Products",
    subtitle: "Complete Collection",
    description: "Explore our complete beauty collection with skincare, makeup, haircare, fragrance, nails, tools, and supplements.",
    link: "/products",
    discount: 0
  }
]

export const collections = [
  {
    id: 'summer-beauty',
    title: "Summer Beauty Edit",
    subtitle: "Glow Naturally",
    description: "Discover our curated summer collection featuring lightweight formulas and radiant finishes.",
    heroImage: "https://i.imgur.com/v9Wyh3w.jpeg",
    productIds: [1, 2, 3, 26],
    discount: 25,
    targetDate: "2026-07-15",
    tag: "Featured Collection"
  },
  {
    id: 'makeup-mastery',
    title: "Makeup Mastery Set",
    subtitle: "Complete Kit",
    description: "Everything you need for a flawless look. Limited edition packaging.",
    heroImage: "https://images.unsplash.com/photo-1596461408998-547ba9e4b7c9?w=1600&auto=format&fit=crop&q=80",
    productIds: [5, 6, 7, 8, 25],
    discount: 35,
    targetDate: "2026-06-30",
    tag: "Limited Offer"
  },
  {
    id: 'nail-professional',
    title: "Nail Care Studio",
    subtitle: "Professional Grade",
    description: "Elevate your manicure with our professional nail care collection.",
    heroImage: "https://cf.cjdropshipping.com/quick/product/85df27d4-af43-4b3b-81aa-74a81fd5e394.jpg?x-oss-process=image%2Fformat%2Cwebp",
    productIds: [17, 18, 19, 20],
    discount: 15,
    tag: "New Arrivals"
  },
  {
    id: 'hair-growth-supplements',
    title: "Hair Growth Supplements",
    subtitle: "Stronger Hair From Within",
    description: "Premium vitamin blends for thicker, healthier hair growth.",
    heroImage: "https://images.unsplash.com/photo-1559757148-5c1b2c7c0e7a?w=1600&auto=format&fit=crop&q=80",
    productIds: [31, 33],
    discount: 20,
    targetDate: "2026-08-01",
    tag: "Wellness"
  },
  {
    id: 'glowing-skin-vitamins',
    title: "Glowing Skin Vitamins",
    subtitle: "Radiance Inside Out",
    description: "Essential nutrients for luminous, youthful-looking skin.",
    heroImage: "https://images.unsplash.com/photo-15449891c0e4b8b3c4e8f6a7d9e2c3f5a?w=1600&auto=format&fit=crop&q=80",
    productIds: [32, 34],
    discount: 15,
    tag: "Beauty Boost"
  },
  {
    id: 'daily-beauty-multivitamin',
    title: "Hair & Beauty Supplements Bundle",
    subtitle: "Complete Wellness",
    description: "All-in-one beauty formula with vitamins, biotin, and antioxidants for hair, skin, and nail health.",
    heroImage: "https://images.unsplash.com/photo-1556909189-5ac749df0ab1?w=1600&auto=format&fit=crop&q=80",
    productIds: [31, 32, 33, 34],
    discount: 25,
    targetDate: "2026-07-20",
    tag: "Bundle"
  }
]

export const products = [
  // SKINCARE (4 products)
  {
    id: 1,
    name: "Nicotinamide Hyaluronic Acid Solution Skin Care Products",
    price: 20,
    description: "A luxurious facial serum infused with Kenyan rose extract and hyaluronic acid for radiant, hydrated skin.",
    images: [
      "https://cf.cjdropshipping.com/5a4a668c-6b9d-4440-8be2-d2f1cc3ebbc3.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/3a2f2215-734f-483b-a3cc-d8eca9278ebf.png?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/8ffd34b8-3f30-4ac2-a05b-facdb0d08638.png?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/2f2e72e0-a10f-4bc2-b96d-998af606e335.png?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/eed60afd-50ea-4939-ba0d-789f0575e36f.png?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/31862164-f603-4da8-a58a-3938963bd31e.png?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/57d2c9aa-dfab-4f8d-9c2b-d796269a9cdb.png?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/09/19/06/9043df1f-a925-4d57-abdb-9ba4c2e74968.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v1', size: '1pc',  stock: 20, price: 20, imageIndex: 0 },
      { id: 'v2', size: '2pc', stock: 15, price: 39, imageIndex: 7 },
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "9-15 business days",
      UK: "6-9 business days"
    },
    category: "Skincare",
    rating: 4.9
  },
  {
    id: 2,
    name: "Moisturizing And Rejuvenating Facial Skincare",
    price: 18,
    description: "Rich moisturizing cream with locally-sourced baobab and moringa extracts for nourished skin.",
    images: [
      "https://cf.cjdropshipping.com/17187552/2406190920190327300.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v3', size: '1pc', stock: 25, price: 18 },
      { id: 'v4', size: '2pc', stock: 18, price: 32 },
    ],
    shipping: {
      USA: "10-25 business days",
      Canada: "10-25 business days",
      UK: "10-25 business days"
    },
    category: "Skincare",
    rating: 4.8
  },
  {
    id: 3,
    name: "Tanning Skin Care Cream",
    price: 20,
    description: "Get that perfect summer beach tan with our Tanning skin care cream. This moisturizing and firming skin sun cream is just what you need for a glowing and radiant look. The cream is enriched with coconut oil and walnut oil, known for their soothing properties.",
    images: [
      "https://cf.cjdropshipping.com/63101d71-212a-428e-854f-6bfc01307b23.png?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/c8a43324-2579-4ef5-8b21-a2d362f7d440.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/3f078816-f590-4f78-a15d-e2a99f2c3268.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/eb28466a-6210-4a78-b678-134c8554824e.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/ed8c168e-640a-4f8f-ad67-28e746f938f3.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/ddab3d2c-69d3-4c5e-a994-16d157646f38.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/1705871f-3416-4a3b-950b-7b5aa37d8336.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v5', size: '1pc', stock: 30, price: 20, imageIndex: 0 },
    ],
    shipping: {
      USA: "6-13 business days"
    },
    category: "Skincare",
    rating: 4.7
  },
  {
    id: 4,
    name: "Facial Wrinkle Weakening And Smoothing Patch",
    price: 15,
    description: "Forehead Wrinkle Patch",
    images: [
      "https://cf.cjdropshipping.com/a6c33546-0530-43ce-8f74-4a3674bca62d.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/3d6f7aa0-aacb-4814-98c1-15e0c08c2443.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/6fef2716-61fe-4108-a722-8c18187c6e0d.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/96ff01d4-6b5b-4aa0-a775-77df6d4623e0.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/a8d32e4d-3f5e-4930-8fa4-8c87ab503c70.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/0bd93152-baa8-4a60-b9e3-726119d2f45d.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v6', size: '10pc', stock: 22, price: 15 },
      { id: 'v7', size: '20pc', stock: 16, price: 30 },
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "6-13 business days",
      UK: "4-9 business days"
    },
    category: "Skincare",
    rating: 4.8
  },

  // MAKEUP (4 products)
  {
    id: 5,
    name: "High Sweet Shimmer Lipstick Lip Glaze Natural No Stain On Cup",
    price: 12,
    description: "Long-wearing matte lipstick in 6 versatile shades, enriched with shea butter and vitamin E.",
    images: [
      "https://cf.cjdropshipping.com/17186688/2406180708050327900.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/430d8895-fc99-4924-9cbc-a479fc6ad025.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/72eb9f23-5e8f-460f-a935-eaf60a03166b.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/96d61969-e9a4-4715-8472-8e5f24f94c2f.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/17186688/2406180708040321000.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17186688/2406180708040322400.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v8', size: 'Regular', color: 'Ginkgo yellow', stock: 50, price: 12, imageIndex: 0 },
      { id: 'v9', size: 'Regular', color: 'Peach', stock: 45, price: 12, imageIndex: 2 },
      { id: 'v10', size: 'Regular', color: 'Brown', stock: 30, price: 12, imageIndex: 3 },
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "9-15 business days",
      UK: "6-9 business days"
    },
    category: "Makeup",
    rating: 4.9
  },
  {
    id: 6,
    name: "Eyeliner Is Waterproof And Long-lasting Without Smudging",
    price: 10,
    description: "Waterproof waterproof eyeliner with long-lasting formula that resists smudging and transfer.",
    images: [
      "https://cf.cjdropshipping.com/1eea4123-8ebb-4d21-a68e-10728bdadddb.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/e1d8e209-a35d-4728-a7bc-98fca0e0147f.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/22ca133a-b2ff-4b11-a686-cbb664392ce2.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/770ee6b6-1021-4b97-9dfa-5b616238600f.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/eb597b31-cfe2-4141-8a47-4152358e7266.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v11', size: 'regular', color: 'Black', stock: 18, price: 10, imageIndex: 3 },
      { id: 'v12', size: 'regular', color: 'Brown', stock: 20, price: 10, imageIndex: 4 },
    ],
    shipping: {
      USA: "5-11 business days",
      UK: "6-9 business days"
    },
    category: "Makeup",
    rating: 4.8
  },
  {
    id: 7,
    name: "PHOFAY Moisturizing Setting Spray",
    price: 22,
    description: "Moisturizing Setting Spray",
    images: [
      "https://cf.cjdropshipping.com/17502048/1935203848859947008.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17502048/1935203851099705344.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17502048/1935203850114043904.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17502048/1935203847786205184.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17502048/1935203852676763648.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17502048/1935203853553373184.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v13', size: 'Regular', stock: 60, price: 22 },
    ],
    shipping: {
      USA: "3-8 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Makeup",
    rating: 4.7
  },
  {
    id: 8,
    name: "PHOFAY Juicy Lip Oil Set",
    price: 40,
    description: "Ultra-moisturizing, non sticky",
    images: [
      "https://cf.cjdropshipping.com/17400096/1892389690271862784.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17400096/1892389692331266048.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17400096/1892389693438562304.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17400096/1892389694340337664.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17400096/1892389695762206720.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17400096/1892389696982749184.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17400096/1892389698731773952.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17400096/1892389700111699968.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v14', size: 'Set', stock: 25, price: 40 },
    ],
    shipping: {
      USA: "3-8 business days",
      Canada: "8-12 business days",
      UK: "8-12 business days"
    },
    category: "Makeup",
    rating: 4.8
  },

  // HAIRCARE (4 products)
  {
    id: 9,
    name: "Hair Care Moisturizing Liquid Nutrition",
    price: 12,
    description: "Ingredients: water, glycerin, tocopherol (vitamin E), 1,2-hexanediol, hydroxyethyl cellulose, ginger root oil, rosemary oil.",
images: [
       "https://oss-cf.cjdropshipping.com/product/2025/09/02/11/77e8cf1d-4234-4117-ba8b-c86b4e551ed3.jpg?x-oss-process=image%2Fformat%2Cwebp",
       "https://oss-cf.cjdropshipping.com/product/2025/09/02/11/e762d50d-9037-41bb-99c5-719e53c57080.jpg?x-oss-process=image%2Fformat%2Cwebp",
       "https://oss-cf.cjdropshipping.com/product/2025/09/02/11/22a36777-f044-4446-ae19-6467f38968b7.jpg?x-oss-process=image%2Fformat%2Cwebp"
     ],
    variants: [
      { id: 'v15', size: '30ml', stock: 35, price: 12 },
    ],
    shipping: {
      USA: "6-11 business days",
      Canada: "9-15 business days",
      UK: "6-9 business days"
    },
    category: "Haircare",
    rating: 4.9
  },
  {
    id: 10,
    name: "West&Month Curl Bouncer Moisturizing Curl Defining Volume Bouncing Strengthening Hair Smoothing Frizz Conditioning",
    price: 18,
    description: "Our Curl Bouncer contains argan oil, camellia oil, and cyclopentadienoxane.It protects hair from damage and maintains elasticity while improving shine.It is easy to use: first wash your hair, then rinse and air dry or blow dry until 80%, then pour the right amount of this product on your hands and rub your hair evenly, dip your hands into some of the product and follow the direction of your hair from the bottom to the top, slowly and evenly applying and grabbing your hair.Adds shine and heat protection, moderate light molding ability, easy care.",
    images: [
      "https://cf.cjdropshipping.com/bcb62a58-82f4-440f-8969-c9ee2769c59a.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/294e5927-1a1f-4423-b458-74970cf9ddb5.png?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/b6644b9e-8fef-419b-bf1b-532b29440170.png?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/25422f34-5c92-49ce-9c61-8993c622923e.png?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/87379fc7-968c-4eaf-84b1-9fccdca2a413.png?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v16', size: '1pc',  stock: 28, price: 18 },
      { id: 'v17', size: '2pc',  stock: 15, price: 32 },
    ],
    shipping: {
      USA: "3-5 business days"
    },
    category: "Haircare",
    rating: 4.8
  },
  {
    id: 11,
    name: "Hair Shampoo Herbal Essence Moisturizing And Smooth",
    price: 13,
    description: "Ingredients; Glycerin, ginseng extract, Morocco nuts oil, black sesame, Polygonum multiflorum",
    images: [
      "https://cf.cjdropshipping.com/quick/product/2dd08c2e-e66a-478a-87ca-e06656fe1f3c.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/17165952/2405250211270320500.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17165952/2405250211270324900.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17165952/2405250211280321700.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17165952/2405250211280326900.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17165952/2405250211290321000.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17165952/2405250211290324500.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17165952/2405250211290328700.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17165952/2405250211300320900.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17165952/2405250211300325600.jpg?x-oss-process=image%2Fformat%2Cwebp",

      "https://cf.cjdropshipping.com/quick/product/37e8730b-a35d-40fe-a68b-ba496f1ede4d.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/d0209d1d-9ee8-42be-bb84-848c64db498f.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/02/12/06/f7d1c401-05b8-4190-a793-3721fb5bdc59.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/5b494925-5ab8-4cab-b455-f5cfffd5927a.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/a4ea94a8-a577-4954-b1f1-d5cfabdc41bd.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/026c9d23-8995-40aa-99d4-0abad0e43a60.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v18', size: '100ml', color: 'Black', stock: 40, price: 13, imageIndex: 10 },
      { id: 'v19-1', size: '100ml', color: 'Brown', stock: 32, price: 13, imageIndex: 11  },
      { id: 'v19-2', size: '100ml', color: 'Light Brown', stock: 32, price: 13, imageIndex: 12  },
      { id: 'v19-3', size: '100ml', color: 'Purple', stock: 32, price: 13, imageIndex: 13 },
      { id: 'v19-4', size: '100ml', color: 'Silver grey', stock: 32, price: 13, imageIndex: 14 },
      { id: 'v19-5', size: '100ml', color: 'Wine red', stock: 32, price: 13, imageIndex: 15 },

    ],
    shipping: {
      USA: "8-12 business days",
      Canada: "9-15 business days",
      UK: "7-14 business days"
    },
    category: "Haircare",
    rating: 4.7
  },
  {
    id: 12,
    name: "Protein Soft Nourishing Hair Mask Hair Hot Dyeing Fluffy Spray",
    price: 15,
    description: "Ingredients: Water, glycerin, lavender extract, keratin, vitamin E",
    images: [
      "https://cf.cjdropshipping.com/17178048/2406081441320325800.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17178048/2406081441320321100.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17178048/2406081441320327800.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17178048/2406081441330324000.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17178048/2406081441330327100.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17178048/2406081441340321600.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17178048/2406081441340324300.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17178048/2406081441340327500.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v20', size: '100ml', stock: 30, price: 15 },
    ],
    shipping: {
      USA: "8-12 business days",
      Canada: "9-15 business days",
      UK: "8-12 business days"
    },
    category: "Haircare",
    rating: 4.8
  },

  // FRAGRANCE (4 products)
  {
    id: 13,
    name: "Roxelis Velvet Petal Eau De Parfum Spray Lasting Fragrance Fresh And Natural Couples Dating Carry The Atmosphere Encounter Perfume",
    price: 16,
    description: "Our Velvet Petal perfume spray contains almond oil, cherry blossom extract, camellia extract. It can highlight your charm add elegance and confidence, make yourself stand out in social situations, attract more attention and appreciation, help create a romantic atmosphere, increase the attraction of emotional communication, make the date more memorable. Its use method is very simple: spray the perfume on the wrists, neck, behind the ears, or spray the perfume in the air and then mist, so that the perfume evenly distributed throughout the body, leaving a fragrant aroma. Fruity and floral notes combine to create a sweet and deep scent.",
    images: [
      "https://i.imgur.com/jVDh4eU.png",
      "https://i.imgur.com/Lw512YQ.png",
      "https://i.imgur.com/xQdAIAY.png",
      "https://i.imgur.com/mSOQx3K.png",
    ],
    variants: [
      { id: 'v21', size: '1pc', stock: 12, price: 16 },
      { id: 'v22', size: '2pc', stock: 8, price: 31 },
    ],
    shipping: {
      USA: "3-5 business days",
    },
    category: "Fragrance",
    rating: 4.9
  },
  {
    id: 14,
    name: "Roxelis Coconut Passionate Perfume Spray Lasting Fragrance",
    price: 14,
    description: "Our coconut perfume spray contains coconut extract, vanilla, sandalwood extract. It can enhance your charm and infectiousness, make yourself stand out in social situations, attract more attention and appreciation, help create a romantic atmosphere, increase the attractiveness of emotional communication, and make dates more unforgettable. Its use method is very simple: spray perfume on the wrist, neck and behind the ears, or spray perfume in the air and turn it into a mist, so that perfume can be evenly distributed throughout the body, leaving a fragrant fragrance. The sweet and warm fragrance makes you feel like you are in a coconut grove, experiencing the unique island scenery.",
    images: [
      "https://cf.cjdropshipping.com/2fb438e7-cd0e-43df-ae74-fab95d726250.png?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/cac64ddc-817e-48f3-94aa-69a4aee8d6b7.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/cac64ddc-817e-48f3-94aa-69a4aee8d6b8.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/0c5d59dc-8418-437e-a6ad-74c8d592fbeb.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/c3b17267-efe1-4715-b143-37bb07cc68d7.jpg?x-oss-process=image%2Fformat%2Cwebp",
    ],
    variants: [
      { id: 'v23', size: '1pc', stock: 25, price: 14 },
    ],
    shipping: {
      USA: "3-5 business days",
    },
    category: "Fragrance",
    rating: 4.8
  },
  {
    id: 15,
    name: "Pheromone Perfume Rose Smell Tone Perfume Niche Flower Fragrance",
    price: 23,
    description: "Ingredients: rose essential oil, patchouli, grapefruit oil, Jasmine essential oil, pomegranate extracts",
    images: [
      "https://cf.cjdropshipping.com/quick/product/17ffa132-c31c-4ad0-92a8-add7f42bc59a.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/17182368/2406130258500323400.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17182368/2406130258500326900.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17182368/2406130258510320100.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17182368/2406130258510323200.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17182368/2406130258520321600.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17182368/2406130258520326900.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17182368/2406130258530322400.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v24', size: '12ml', stock: 40, price: 23 },
    ],
    shipping: {
      USA: "8-12 business days",
      Canada: "8-12 business days",
      UK: "8-12 business days"
    },
    category: "Fragrance",
    rating: 4.7
  },
  {
    id: 16,
    name: "Rose Light Perfume Perfume Natural Portable Portable",
    price: 18,
    description: "Moisturising",
    images: [
      "https://cf.cjdropshipping.com/quick/product/e63dee0d-76b1-42bf-bdc9-87a04de8d936.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/17180640/2406110916140329100.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17180640/2406110916150321200.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17180640/2406110916150325800.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17180640/2406110916160323700.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17180640/2406110916160328500.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17180640/2406110916170320600.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v25', size: '15ml', stock: 35, price: 18 },
    ],
    shipping: {
      USA: "4-9 business days",
      Canada: "7-15 business days",
      UK: "9-10 business days"
    },
    category: "Fragrance",
    rating: 4.8
  },

  // NAILS (4 products)
  {
    id: 17,
    name: "Stars And Moon",
    price: 11.99,
    description: "Style: French, flashing, cool, fresh, European and American, sweet and cool, INS style",
    images: [
      "https://cf.cjdropshipping.com/17197056/2406300129050329400.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17197056/2406300129050325900.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17197056/2406300129060321800.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17197056/2406300129060325700.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/16/11/ea6188e2-b4c0-48e1-95c2-0d4e0a5ac8fb.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/02/16/11/f54df433-9715-4619-828f-6b9113a70e98.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v26', size: 'regular', color: 'light blue', stock: 50, price: 11.99, imageIndex: 0 },
      { id: 'v27', size: 'regular', color: 'TD213FDD0021', stock: 45, price: 11.99, imageIndex: 4 },
      { id: 'v28', size: 'regular', color: 'ZTDM0001', stock: 40, price: 11.99, imageIndex: 5 },
    ],
    shipping: {
      USA: "4-8 business days",
      Canada: "6-10 business days",
      UK: "5-9 business days"
    },
    category: "Nails",
    rating: 4.9
  },
  {
    id: 18,
    name: "Flame Red Cat Eye Gel Enhancements",
    price: 13.99,
    description: "3D three-dimensional color is full",
    images: [
      "https://cf.cjdropshipping.com/c7e2c3ce-3ae9-41a6-aa93-8b950e935e7f.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/fc67d8d7-e7db-4f63-8519-0c1d2c432629.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/3ef27879-d03a-4711-bfa0-c0aa28b763b9.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/a236ea76-c861-4d68-9bbe-7fd330bc0e3b.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/fb2442f5-1062-4a51-a3fd-94527e4b1cd7.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/3a4e7490-3226-4be1-8460-6349f6183268.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/81b02b59-24f4-4bff-9492-293ef8d71e24.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/931fa87c-feb5-4443-954a-c54260451419.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v29-1', size: 'Set', color: 'Color25', stock: 30, price: 13.99, imageIndex: 2},
      { id: 'v29-2', size: 'Set', color: 'Color26', stock: 30, price: 13.99, imageIndex: 3},
      { id: 'v29-3', size: 'Set', color: 'Color27', stock: 30, price: 13.99, imageIndex: 4},
      { id: 'v29-4', size: 'Set', color: 'Color28', stock: 30, price: 13.99, imageIndex: 5},
      { id: 'v29-5', size: 'Set', color: 'Color29', stock: 30, price: 13.99, imageIndex: 6},
      { id: 'v29-6', size: 'Set', color: 'Color30', stock: 30, price: 13.99, imageIndex: 7},
    ],
    shipping: {
      USA: "8-12 business days",
      Canada: "8-12 business days",
      UK: "8-12 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 19,
    name: "Handmade Wear Armor Blue Ice Transparent Three-dimensional Love",
    price: 13.99,
    description: "Pattern: Bow, leopard print",
    images: [
      "https://cf.cjdropshipping.com/17191872/2406240338500328100.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17191872/2406240338500324400.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v30-1', size: 'extra small', stock: 60, price: 13.99},
      { id: 'v30-2', size: 'small', stock: 60, price: 13.99},
      { id: 'v30-3', size: 'medium', stock: 60, price: 13.99},
      { id: 'v30-4', size: 'large', stock: 60, price: 13.99},
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "5-12 business days"
    },
    category: "Nails",
    rating: 4.7
  },
  {
    id: 20,
    name: "Bluetooth music nail phototherapy machine",
    price: 75,
    description: "Nail-Art Tools LCD Display Led UV Nail Lamp Light",
    images: [
      "https://cf.cjdropshipping.com/d6d06034-fa47-4c3b-bc12-e54ef1a1b816.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/0598383a-197e-418c-bb0b-c9b054eb660f.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/35ab7411-33c6-4760-8a9c-3069bfcee389.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/fe73f52a-6739-4ad5-888b-8da64bdd808f.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/d52cac06-d069-44ea-9ec8-06a3e908cdbb.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v31-1', size: 'EU Style', stock: 20, price: 75 },
      { id: 'v31-2', size: 'UK Style', stock: 20, price: 75 },
      { id: 'v31-3', size: 'US Style', stock: 20, price: 75 },
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "4-7 business days",
      UK: "4-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },

  // BEAUTY TOOLS (4 products)
  {
    id: 21,
    name: "Silicone Ice Face Roller ",
    price: 18,
    description: " Contour Shrink Pores Remove Dark Circles Massage Skin Beauty Facial Roller For Eyes Neck Skin Care Tool",
    images: [
      "https://i.ebayimg.com/images/g/dSsAAeSw8fpqGfiD/s-l1600.webp",
      "https://cf.cjdropshipping.com/17094240/2403030800120328400.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17094240/2403030800120328000.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17094240/2403030800120326900.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17094240/2403030800120327400.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/29fa192a-cc2b-42d0-965c-5af7c653917e.jpg",
      "https://cf.cjdropshipping.com/quick/product/e7ff8c5e-11a1-4d33-a8d2-0c6870f80914.jpg",
      "https://cf.cjdropshipping.com/quick/product/1c022a27-089f-44fd-b010-902e6f6078c4.jpg",
      "https://cf.cjdropshipping.com/quick/product/b4e89540-bcad-4a90-a157-88f724b5c113.jpg",
      "https://cf.cjdropshipping.com/quick/product/c822e2dd-dbc1-4391-b4e4-e579cd8f8dc1.jpg"
    ],
    variants: [
      { id: 'v32-1', size: 'Regular', color: 'Pink', stock: 40, price: 18, imageIndex: 5 },
      { id: 'v32-2', size: 'Regular', color: 'Green', stock: 40, price: 18, imageIndex: 6 },
      { id: 'v32-3', size: 'Regular', color: 'Purple', stock: 40, price: 18, imageIndex: 7 },
      { id: 'v32-4', size: 'Regular', color: 'Red', stock: 40, price: 18, imageIndex: 8 },
      { id: 'v32-5', size: 'Regular', color: 'Yellow', stock: 40, price: 18, imageIndex: 9 },

    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "4-7 business days",
      UK: "4-9 business days"
    },
    category: "Beauty Tools",
    rating: 4.9
  },
{
id: 22,
      name: "Wireless Hair Straightener Flat Iron Mini 2 IN 1 Roller",
      price: 59.99,
      description: "Wireless Hair Straightener Flat Iron Mini 2 IN 1 Roller USB 5000mAh Max 200 Degree Portable Cordless Curler 4 Levels Dry And Wet Uses [4 Adjustable Temperature Setting ]flat iron with adjustable temperature ranging from 140℃ to 200℃ that you can choose the favorable temperature for all hairstyles.",
      images: [
        "https://i.ebayimg.com/images/g/8OkAAOSw4xJle4f8/s-l960.webp",
        "https://cf.cjdropshipping.com/17061408/2401250602400326200.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/17061408/2401250602400326600.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/17061408/2401250602400327000.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/17061408/2401250602400327500.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/17061408/2401250602400328100.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/17061408/2401250602400329900.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/17061408/2401250602410321300.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://newplatform.cjdropshipping.com/platform-notify/images/ebay/66a2fd60-dd00-4bcc-a764-3e5d5e93b587.png?sign=JKZpydu3BBWcrSZK8WxZog%3D%3D",
        "https://newplatform.cjdropshipping.com/platform-notify/images/ebay/2888fe13-4435-4e63-8fd2-154a4ece0ac4.png?sign=JKZpydu3BBWcrSZK8WxZog%3D%3D",
        "https://newplatform.cjdropshipping.com/platform-notify/images/ebay/cf2fda58-850d-4a99-9975-126705375e41.png?sign=JKZpydu3BBWcrSZK8WxZog%3D%3D",
        "https://cf.cjdropshipping.com/7937469a-0577-4210-bd23-bb2f7ae9d86c.png"
      ],
      variants: [
        { id: 'v33-1', size: 'Regular', color: 'Pink', stock: 25, price: 59.99, imageIndex: 10 },
        { id: 'v33-2', size: 'Regular', color: 'Black', stock: 25, price: 59.99, imageIndex: 8 },
        { id: 'v33-3', size: 'Regular', color: 'Green', stock: 25, price: 59.99, imageIndex: 9 },
        { id: 'v33-4', size: 'Regular', color: 'White', stock: 25, price: 59.99, imageIndex: 11 },
      ],
      shipping: {
        USA: "4-9 business days",
        Canada: "4-7 business days",
        UK: "5-9 business days"
      },
      category: "Beauty Tools",
      rating: 4.8
    },
    {
      id: 23,
      name: "Crystal Magic Crystal Epilator",
      price: 20,
      description: "The Magic Crystal Hair Remover is a reusable, painless hair removal and exfoliating tool that uses Nano-Crystal Technology. By simply rubbing the device against your skin in circular motions, it gently buffs away unwanted hair and dead skin cells, leaving the surface feeling silky and smooth",
      images: [
        "https://cf.cjdropshipping.com/17159040/2405170409180329300.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/17159040/2405170409190322100.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/17159040/2405170409190324800.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/17159040/2405170409190328700.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/17159040/2405170409200322800.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/17159040/2405170409210323200.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/17159040/2405170409210326200.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://glownestessential.com/cdn/shop/files/1c8e45ed-93b2-4818-b17e-ef8c342cf186.jpg?v=1731981329&width=823",
        "https://glownestessential.com/cdn/shop/files/add5597c-d95e-4ad8-a034-e142f751eec8.jpg?v=1731981324&width=823",
        "https://glownestessential.com/cdn/shop/files/fc0a3c8b-3b2d-411d-9759-adb2c67a8bf6.jpg?v=1731981337&width=823"
      ],
      variants: [
        { id: 'v34-1', size: 'Frost', color: 'Black', stock: 35, price: 20, imageIndex: 7 },
        { id: 'v34-2', size: 'Frost', color: 'Green', stock: 35, price: 20, imageIndex: 8 },
        { id: 'v34-3', size: 'Frost', color: 'Purple', stock: 35, price: 20, imageIndex: 9 },
      ],
      shipping: {
        USA: "3-8 business days",
        UK: "4-7 business days"
      },
      category: "Beauty Tools",
      rating: 4.7
    },
    {
      id: 24,
      name: "EMS Current Ultrasonic Fat Removal Machine",
      price: 48,
      originalPrice: 60,
      discount: 20,
      description: "The microcurrent generated by EMS stimulates muscle movement, and muscle contraction helps muscle exercise to achieve a firming and strengthening effect, thereby shaping body curves and repairing skin texture. Microcurrent can also stimulate collagen and elastin to make the skin younger.",
      images: [
        "https://cf.cjdropshipping.com/7990b37e-dc04-47c1-b515-051ade435945.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800",
        "https://cf.cjdropshipping.com/9472ef07-2c35-483d-8cbe-a2b1a8cf924a.png?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/063ce34c-6539-4e8b-a555-34ca16c4148a.png?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/c0459f66-6978-4959-b0a6-c4222de3ba1a.png?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/3421231c-b812-4875-9562-4896b7080788.png?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/fa3e0d35-be7b-48cd-99cb-c65a93eb30d9.png?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/c419a1ab-7766-4bf5-bf9d-bb6315ec82ff.png?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/6f6aba52-e4a9-49a8-a107-e01249f285b2.png?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/64915b12-0a9b-4918-ba93-17091b2c7537.png?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/699f5784-6e8b-4c3d-9171-775d77759196.png?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/3dfa39ed-b0a4-4021-bb72-edb8a7b02119.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://cf.cjdropshipping.com/812ee653-7c96-4ccf-8bca-99b83bfa066f.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://cf.cjdropshipping.com/9ea96733-3b14-44ae-a508-b012e8323c69.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
      ],
      variants: [
        { id: 'v35-1', size: '340g',  color: 'Pink', stock: 25, price: 48, imageIndex: 10 },
        { id: 'v35-2', size: '340g',  color: 'Rose gold', stock: 18, price: 48, imageIndex: 11 },
        { id: 'v35-3', size: '340g',  color: 'White', stock: 12, price: 48, imageIndex: 12 },
      ],
      shipping: {
        USA: "5-7 business days"
      },
      category: "Beauty Tools",
      rating: 4.8,
      tags: ["deal"]
},
    {
      id: 25,
      name: "PHOFAY Ultra-Glossy Lip Gloss Nude Lipliner Kit",
     price: 25,
     originalPrice: 50,
     discount: 50,
     description: "Exclusive Lip Gloss and Nude Lipliner Kit",
     images: [
       "https://cf.cjdropshipping.com/17312832/1855823806090973184.jpg?x-oss-process=image%2Fformat%2Cwebp",
       "https://cf.cjdropshipping.com/17312832/1855823793227042816.jpg?x-oss-process=image%2Fformat%2Cwebp",
       "https://cf.cjdropshipping.com/17312832/1855823794971873280.jpg?x-oss-process=image%2Fformat%2Cwebp",
       "https://cf.cjdropshipping.com/17312832/1855823796225970176.jpg?x-oss-process=image%2Fformat%2Cwebp",
       "https://cf.cjdropshipping.com/17312832/1855823797882720256.jpg?x-oss-process=image%2Fformat%2Cwebp",
       "https://cf.cjdropshipping.com/17312832/1855823800659349504.jpg?x-oss-process=image%2Fformat%2Cwebp",
       "https://cf.cjdropshipping.com/17312832/1855823803826049024.jpg?x-oss-process=image%2Fformat%2Cwebp"
     ],
     variants: [
       { id: 'v36', size: 'Set', stock: 12, price: 25 },
     ],
     shipping: {
       USA: "4-8 business days",
       Canada: "6-10 business days",
       UK: "5-9 business days"
     },
     category: "Makeup",
     rating: 4.9,
     tags: ["limited"]
   },
   {
     id: 26,
     name: "Turmeric Skincare Set",
     price: 40,
     originalPrice: 80,
     discount: 50,
     description: "face wash, butter, scrub",
     images: [
       "https://cf.cjdropshipping.com/17118432/2403310416480329900.jpg?x-oss-process=image%2Fformat%2Cwebp"
     ],
     variants: [
       { id: 'v37-1', size: 'Mini Travel Kit', stock: 15, price: 25 },
       { id: 'v37-2', size: 'Full Size Bundle', stock: 12, price: 40 },
       { id: 'v37-3', size: 'Deluxe Gift Set', stock: 5, price: 65 },
     ],
     shipping: {
       USA: "4-9 business days",
       Canada: "8-11 business days",
       UK: "9-10 business days"
     },
category: "Skincare",
      rating: 4.8,
      tags: ["featured"]
    },

    // WIGS (4 products)
    {
      id: 27,
      name: "Human Hair With Small Curly Hair And Long Hair Sets",
      price: 88,
      description: "Luxurious Brazilian deep wave lace front wig with natural hairline and adjustable strap.",
      images: [
        "https://cf.cjdropshipping.com/1615696954650.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/1615696954652.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/1615696954654.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/1615697002988.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/1615696954656.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v38-1', size: '8 inch', stock: 15, price: 88},
        { id: 'v38-2', size: '10 inch', stock: 12, price: 94 },
        { id: 'v38-2', size: '12 inch', stock: 12, price: 98 },
        { id: 'v38-2', size: '14 inch', stock: 12, price: 102 },
        { id: 'v38-2', size: '16 inch', stock: 12, price: 112 },
        { id: 'v38-2', size: '18 inch', stock: 12, price: 134 },
        { id: 'v38-2', size: '20 inch', stock: 12, price: 152 },
        { id: 'v38-2', size: '22 inch', stock: 12, price: 244 },
        { id: 'v38-2', size: '24 inch', stock: 12, price: 292 },
        { id: 'v38-2', size: '26 inch', stock: 12, price: 332 },

      ],
      shipping: {
        USA: "5-11 business days",
        Canada: "4-7 business days",
        UK: "4-5 business days"
      },
      category: "Wigs",
      rating: 4.9,
      tags: ["deal"]
    },
    {
      id: 28,
      name: "European And American Wigs Women's Short Curly Hair Wigs",
      price: 25,
      originalPrice: 30,
      discount: 17,
      description: "European and American style short curly wigs offer a bold, voluminous look, often featuring defined curls or pixie cuts. These wigs typically utilize heat-resistant synthetic fibers or premium human hair built on breathable rose nets or lace frontals, allowing for a comfortable, versatile fit.",
      images: [
        "https://cf.cjdropshipping.com/1618826467286.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/1618826467543.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/1618826467910.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/1618826467585.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/1618826467843.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/1618826467248.jpg?x-oss-process=image%2Fformat%2Cwebp"


      ],
      variants: [
        { id: 'v39-1', size: 'Regular', color: 'Black', stock: 18, price: 25 }
      ],
      shipping: {
        USA: "4-8 business days",
        Canada: "6-13 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8,
      tags: ["limited"]
    },
    {
      id: 29,
      name: "6x4 Density Virgin Human Hair",
      price: 168,
      description: "You are looking for a highly specific, realistic, and ready-to-wear unit. A 6x4 HD/Transparent lace wig gives you a 6-inch wide by 4-inch deep parting space for versatile styling, while high-density Vietnamese raw hair ensures a thick, naturally voluminous finish.",
      images: [
        "https://cf.cjdropshipping.com/a5d11699-46c2-4a10-afa2-c7addee69897.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://cf.cjdropshipping.com/0ee98796-d01b-4319-940b-ff2a8f814599.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://cf.cjdropshipping.com/0c4cd28a-2ba4-4b7b-980a-21b186a2425c.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/f392ddeb-6ef0-470c-b719-a811424e1a6d.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/710827bf-1249-4ca2-93df-01df8bc999c1.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/5304baaa-8e9d-4979-959f-b2de9a52c0c0.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://cf.cjdropshipping.com/05554d11-f12f-44e1-816d-48cfe6d524ac.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v40-1', size: '6x4 26Inch', stock: 22, price: 168 },
        { id: 'v40-2', size: '6x4 28Inch', stock: 22, price: 204 }

      ],
      shipping: {
        USA: "3-5 business days"
      },
      category: "Wigs",
      rating: 5.0,
      tags: ["new"]
    },
    {
      id: 30,
      name: "European And American Ladies Color Human Wigs",
      price: 272,
      originalPrice: 340,
      discount: 20,
      description: "Vibrant curly afro synthetic wig with bouncy texture and natural volume.",
      images: [
        "https://oss-cf.cjdropshipping.com/product/2025/03/01/07/e70e9249-3f5c-4667-b394-38d0461a44e8.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/03/01/07/abef1912-6631-4db2-b108-68e0142678b2.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/03/01/07/849a1219-47e4-4e27-ba5f-512cc25d76f8.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/03/01/07/659128b2-7327-44ac-b78f-8a8ed5dcc69b.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/03/01/07/812865d3-5f08-4ec9-b912-79cb3f7925fd.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/03/01/07/76a37ada-3c96-47fe-8f9e-c53ef9069eeb.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/03/01/07/e3c686a6-b755-492d-a10b-4eca52384574.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v41-1', size: '18 inch', color: 'PinkBW', stock: 25, price: 272, imageIndex: 0 },
        { id: 'v41-2', size: '18 inch', color: 'PinkST', stock: 18, price: 272, imageIndex: 1 },
        { id: 'v41-3', size: '18 inch', color: 'PinklightpinkBW', stock: 18, price: 272, imageIndex: 2 },
        { id: 'v41-4', size: '18 inch', color: 'BlueBW', stock: 18, price: 272, imageIndex: 3 },
        { id: 'v41-5', size: '18 inch', color: 'BlueST', stock: 18, price: 272, imageIndex: 4 },
        { id: 'v41-6', size: '18 inch', color: 'YellowBW', stock: 18, price: 272, imageIndex: 5 },
        { id: 'v41-7', size: '18 inch', color: 'YellowST', stock: 18, price: 272, imageIndex: 6 },

      ],
      shipping: {
        USA: "5-11 business days",
        Canada: "4-8 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.9,
      tags: ["featured"]
    },

    // SUPPLEMENTS (4 products)
    {
      id: 31,
      name: "Creatine Monohydrate Soft Candy Complex Contains L-carnitine And Taurine",
      price: 27,
      originalPrice: 30,
      discount: 10,
      description: "Delicious strawberry gummies with creatine monohydrate, L-carnitine, and taurine for improved athletic performance and recovery.",
      images: [
        "https://cf.cjdropshipping.com/17501184/1934778609831251968.jpg?x-oss-process=image%2Fformat%2Cwebp",    
        "https://cf.cjdropshipping.com/b425e2cf-0973-4d66-8a86-d642d272f264.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
      ],
      variants: [
        { id: 'v42-1', size: 'Mixed flavors', stock: 30, price: 27,imageIndex: 0 },
        { id: 'v42-2', size: 'Set', stock: 30, price: 100, imageIndex: 1}
      ],
      shipping: {
        USA: "5-10 business days",
        Canada: "4-8 business days",
        UK: "8-112 business days"
      },
      category: "Supplements",
      rating: 4.9,
      tags: ["deal"]
    },
    {
      id: 32,
      name: "Hair Nail Jelly",
      price: 30.10,
      originalPrice: 35,
      discount: 14,
      description: "Premium marine collagen powder with hyaluronic acid for radiant skin and strong nails.",
      images: [
        "https://cf.cjdropshipping.com/17501184/1934779058290429952.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v43', size: '80 tablets', stock: 25, price: 30.10 }
      ],
      shipping: {
        USA: "8-12 business days",
        Canada: "4-8 business days",
        UK: "8-12 business days"
      },
      category: "Supplements",
      rating: 4.4,
      tags: ["limited"]
    },
    {
      id: 33,
      name: "Breast Enhancement Soft Candy",
      price: 24,
      description: "High-potency vitamin C with hyaluronic acid for glowing, even-toned skin.",
      images: [
        "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17501184/1934779609971429376.jpg?x-oss-process=image%2Fformat%2Cwebp"      ],
      variants: [
        { id: 'v44', size: '90 Capsules', stock: 40, price: 24 }
      ],
      shipping: {
        USA: "3-8 business days",
        Canada: "4-8 business days",
        UK: "8-12 business days"
      },
      category: "Supplements",
      rating: 4.9,
      tags: ["new"]
    },
    {
      id: 34,
      name: "Glucosamine Chondroitin Ginger Yellow Tablets",
      price: 17,
      description: "Nighttime formula with melatonin, magnesium, and beauty vitamins for restful sleep.",
      images: [
        "https://cf.cjdropshipping.com/17501184/1934779392119279616.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v45-1', size: '180 Tablets', stock: 35, price: 17 },
      ],
      shipping: {
        USA: "3-7 business days",
        Canada: "4-8 business days",
        UK: "8-12 business days"
      },
      category: "Supplements",
      rating: 4.7,
      tags: ["featured"]
    },



     {
    id: 35,
    name: "Five Point Freckle Stamp Pen Liquid Air Cushion",
    price: 19,
    description: "The Five Point Freckle Stamp Pen is a makeup tool designed to quickly create realistic, sun-kissed faux freckles. Its unique multi-pronged cushion tip mimics organic freckle patterns in a single press, allowing for an effortless, smudge-proof, and long-lasting finish",
    images: [
      "https://i.ebayimg.com/thumbs/images/g/nskAAeSwmxJodB0-/s-l500.jpg",
      "https://cf.cjdropshipping.com/quick/product/beb2598f-4cd6-42a8-890a-90a308088f39.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/0a00e741-eeaf-4b51-ac2b-c7f144dd20ac.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/a2268bc4-3703-43ef-8430-04f111d4431c.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/881a90a1-b211-49e7-8365-fd7cadad7659.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/4216a0d8-d6fa-4d3a-8744-326189642448.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/a55acf74-3bf9-4e34-958f-93ed13d4a4e6.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/8c6050fb-465d-4376-851a-4877e0739666.jpg",
      "https://cf.cjdropshipping.com/quick/product/b459df51-8496-4e01-a82e-adc9a108d036.jpg",
      "https://cf.cjdropshipping.com/quick/product/b2ae827e-1e67-4116-9950-b51f79d6ab8e.jpg",
      "https://cf.cjdropshipping.com/quick/product/46f2144b-4110-4675-a645-e95c456b1be7.jpg"
    ],
    variants: [
      { id: 'v46-1', size: 'regular', color: 'Dark', stock: 18, price: 19, imageIndex: 7 },
            { id: 'v46-2', size: 'regular', color: 'Medium', stock: 18, price: 19, imageIndex: 8 },
      { id: 'v46-3', size: 'regular', color: 'ESPRESSO', stock: 18, price: 19, imageIndex: 9 },
      { id: 'v46-4', size: 'regular', color: 'Light', stock: 18, price: 19, imageIndex: 10 }
    ],
    shipping: {
      USA: "5-11 business days",
      UK: "9-10 business days",
      Canada: "4-12 business days"
    },
    category: "Makeup",
    rating: 4.8
  },
       {
    id: 36,
    name: "Low Saturation Ice Permeable Blue Smoked Eye Shadow ",
    price: 11.99,
    description: "Designed for a cool-toned, icy smoky aesthetic, it combines soft matte transition shades with high-sparkle shimmer, chunky glitter, and metallic diamond finishes.",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/05/05/08/a93d0451-d49f-4b60-845e-a06f91bd9305.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/05/08/9e6d7960-16d9-46e1-989a-104db094902e.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/05/08/96f995b8-1d6f-4b49-a486-1c69a06d3406.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/05/08/ac372b41-3a98-4a1e-b267-45d5a652989a.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/05/08/69679a28-6e40-46f0-b305-34d22bb32666.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/05/08/37745fbd-4a4b-488e-9124-350607476c14.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/05/08/a8304106-43f3-445c-bc85-b6cb1c549389.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v47', size: 'regular', stock: 18, price: 11.99,}
    ],
    shipping: {
      USA: "5-11 business days",
      UK: "6-9 business days",
      Canada: "8-12 business days"
    },
    category: "Makeup",
    rating: 4.8
  },
         {
    id: 37,
    name: "16 Colors Shimmer Matte Multi-functional Makeup Set",
    price: 26,
    description: "a versatile makeup staple featuring a mix of neutral, bold, or vibrant shades. Often designed for multi-functional use, these highly pigmented pressed powders allow you to seamlessly transition from soft daytime looks to dramatic, long-lasting evening glam",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/04/14/09/3bd761b9-a6e9-4032-a20f-b8d1725d0e5e_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/04/14/09/673b77b9-ba16-4de2-8c39-5134385b026f_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/04/14/09/39101bd0-3f50-4048-b382-71c9d6f58454_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/04/14/09/b710ffd5-f38b-4c22-b758-546c59d29c59_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/04/14/09/21bead86-2b9f-4df6-af10-dde6f16c2dce_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/04/14/09/f0c23617-92c3-414c-8e16-4fe6f50955d2_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/04/14/09/056cb1c9-5899-4cea-8fbc-a15148f46731_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/04/14/09/fdc73a57-6312-41bf-b1eb-159c67f09bd0_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/04/14/09/3a985a2f-0dfa-462a-bf6c-0ea556e048cb_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/04/14/09/056cb1c9-5899-4cea-8fbc-a15148f46731_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/04/14/09/f0c23617-92c3-414c-8e16-4fe6f50955d2_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/04/14/09/fdc73a57-6312-41bf-b1eb-159c67f09bd0_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v48-1', size: 'regular', color: 'Sunset Plate', stock: 18, price: 26, imageIndex: 8},
            { id: 'v48-2', size: 'regular', color: 'Peach Coral Plate', stock: 18, price: 26, imageIndex: 0}
    ],
    shipping: {
      USA: "8-12 business days",
      UK: "9-10 business days",
      Canada: "8-12 business days"
    },
    category: "Makeup",
    rating: 4.8
  },
         {
    id: 38,
    name: "PHOFAY Juicy Lip Plump Set",
    price: 24.99,
    description: "Hydrating, long-wearing lip plumping system designed to give lips a non-sticky, glossy, and full-volume finish. It provides a pop of color while keeping lips nourished throughout the day.",
    images: [
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/26abaa96-c354-401e-b9f5-38df4853ba0b.png?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/9071300f-dc7d-4ac3-a350-143ffbd682bc.png?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17309376/1854360747455549440.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17309376/1854360739431845888.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17309376/1854360740560113664.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17309376/1854360738072891392.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17309376/1854360744465010688.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17309376/1854360746474082304.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17309376/1854360742728568832.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17309376/1854360741554163712.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v49-1', size: 'regular', color: '01and02and04Set', stock: 18, price: 25.99, imageIndex: 0},
      { id: 'v49-2', size: 'regular', color: '01and05and06Set', stock: 18, price: 25.99, imageIndex: 1},
      { id: 'v49-3', size: 'regular', color: '01 02 03 Set', stock: 18, price: 25.99, imageIndex: 2},
      { id: 'v49-4', size: 'regular', color: '02 03 04 Set', stock: 18, price: 25.99, imageIndex: 3},
      { id: 'v49-5', size: 'regular', color: '05 06 07 Set', stock: 18, price: 25.99, imageIndex: 4},
      { id: 'v49-6', size: 'regular', color: '06 07 08 Set', stock: 18, price: 25.99, imageIndex: 5},
      { id: 'v49-7', size: 'regular', color: '07 08 Set', stock: 18, price: 18.99, imageIndex: 6},
      { id: 'v49-8', size: 'regular', color: '01 02 Set', stock: 18, price: 18.99, imageIndex: 7},
      { id: 'v49-9', size: 'regular', color: '03 04 Set', stock: 18, price: 18.99, imageIndex: 8},
      { id: 'v49-10', size: 'regular', color: '05 06 Set', stock: 18, price: 18.99, imageIndex: 9},

    ],
    shipping: {
      USA: "3-8 business days",
      UK: "9-10 business days",
      Canada: "8-12 business days"
    },
    category: "Makeup",
    rating: 4.8
  },
           {
    id: 39,
    name: "16 Colors Shimmer Matte Multi-functional Makeup Set",
    price: 14,
    description: "a popular, space-saving kit designed for on-the-go touch-ups.",
    images: [
      "https://cf.cjdropshipping.com/16977600/1715282679903162368.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/16977600/1715282679760556032.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/16977600/1715282680330981376.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/16977600/1715282680632971264.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/16977600/1715282680502947840.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/b4b01047-e573-49c6-a1b1-9880da745241_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/e1db7d32-37f6-4cd6-a816-1d8436971eb1_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v50-1', size: 'regular', color: 'Sky Blue 5 Pieces', stock: 18, price: 14, imageIndex: 1},
            { id: 'v50-2', size: 'regular', color: 'Bean Pink 5 Pieces', stock: 14, price: 26, imageIndex: 2},
            { id: 'v50-3', size: 'regular', color: 'Pink 5 Pieces', stock: 14, price: 26, imageIndex: 3},
            { id: 'v50-4', size: 'regular', color: 'Apricot 5 Pieces', stock: 14, price: 26, imageIndex: 4},
    ],
    shipping: {
      USA: "5-11 business days",
      UK: "4-9 business days",
      Canada: "4-7 business days"
    },
    category: "Makeup",
    rating: 4.8
  },
             {
    id: 40,
    name: "PHOFAY Mousse Liquid Blush",
    price: 14,
    description: "The PHOFAY Mousse Liquid Blush is a lightweight, airy cheek tint that glides onto the skin to provide a natural, buildable matte finish. Designed to be non-greasy and non-fading, this highly pigmented formula is meant to deliver a seamless, streak-free, sun-kissed flush that lasts all day",
    images: [
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17242848/1826468505625825280.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17242848/1826468506192056320.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17242848/1826468506691178496.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17242848/1826468507404210176.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17242848/1826468507928498176.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17242848/1826468508368900096.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17242848/1826468508859633664.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss.cjdropshipping.com/product/2024/08/23/02/86fc736d-12fb-4b10-8fab-0dbe7bdf7a0c.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17242848/1826468507370655744.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17242848/1826468505462247424.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17242848/1826468506582126592.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17242848/1826468506099781632.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17242848/1826468507039305728.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/3a9374d4-4533-4b20-9e6c-f090a8f86cab.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v51-1', size: 'regular', color: '01', stock: 18, price: 14, imageIndex: 7},
            { id: 'v51-2', size: 'regular', color: '02', stock: 14, price: 14, imageIndex: 8},
            { id: 'v51-3', size: 'regular', color: '03', stock: 14, price: 12, imageIndex: 9},
            { id: 'v51-4', size: 'regular', color: '04', stock: 14, price: 14, imageIndex: 10},
            { id: 'v51-5', size: 'regular', color: '05', stock: 14, price: 14, imageIndex: 11},
            { id: 'v51-6', size: 'regular', color: '06', stock: 14, price: 14, imageIndex: 12},
            { id: 'v51-7', size: 'regular', color: 'Set', stock: 14, price: 50, imageIndex: 13},


    ],
    shipping: {
      USA: "3-8 business days",
      UK: "9-10 business days",
      Canada: "8-12 business days"
    },
    category: "Makeup",
    rating: 4.8
  },
               {
    id: 41,
    name: "PHOFAY Super Coverage Concealer",
    price: 15,
    description: "The PHOFAY Super Coverage Concealer is a weightless, tattoo-grade liquid concealer that provides full coverage without a cakey finish",
    images: [
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17253216/1830931719688294400.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17242848/1826468506192056320.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17253216/1830931720107724800.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17253216/1830931721441513472.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17253216/1830931722708193280.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17253216/1830931724021010432.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17253216/1830931725082169344.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17253216/1830931726973800448.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17253216/1830931727573585920.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17253216/1830931722330705920.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17253216/1830931725212192768.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17253216/1830931723777740800.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17253216/1830931719688294400.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17253216/1830931720418103296.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17253216/1830931721089191936.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/86fb6a74-0795-4075-ac61-26b6aacd3f7c.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v52-1', size: 'regular', color: '01 Swan', stock: 18, price: 15, imageIndex: 8},
      { id: 'v52-2', size: 'regular', color: '2 Snow', stock: 14, price: 15, imageIndex: 9},
      { id: 'v52-3', size: 'regular', color: '03 Pearl', stock: 14, price: 15, imageIndex: 10},
      { id: 'v52-4', size: 'regular', color: '04 Porcelain', stock: 14, price: 15, imageIndex: 10},
      { id: 'v52-5', size: 'regular', color: '05 Warm sand', stock: 14, price: 15, imageIndex: 11},
      { id: 'v52-6', size: 'regular', color: '06 Honey', stock: 14, price: 15, imageIndex: 12},
      { id: 'v52-7', size: 'regular', color: 'Set', stock: 14, price: 62, imageIndex: 13},


    ],
    shipping: {
      USA: "3-8 business days",
      UK: "9-10 business days",
      Canada: "8-12 business days"
    },
    category: "Makeup",
    rating: 4.8
  },
                 {
    id: 44,
    name: "12 Rows Of 150 Segmented Lashes In Clusters",
    price: 16.99,
    description: "12 Rows of 150 segment lash clusters refer to high-capacity DIY lash extension trays (often featuring 150 individual clusters spread across 12 rows or multiple lengths). They allow you to easily customize your lash volume, length, and style at home",
    images: [
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/d6078acd-6471-4618-a1db-ca296371109e.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/ad8311b4-7c62-40b3-8bbd-35370db001a3.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/9bc61fbf-ef86-44bc-9dc9-f6900f4e18d1.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/178c4d36-c19f-49d4-b17a-117c8e0e7e1f.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/1f8a0cd2-53e8-4d17-aa0a-21d014d0e627.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v53', size: 'Segmented lash set', stock: 18, price: 16.99}


    ],
    shipping: {
      USA: "3-7 business days",
      UK: "9-10 business days",
      Canada: "8-12 business days"
    },
    category: "Makeup",
    rating: 4.8
  },
    {
    id: 45,
    name: "PHOFAY Waterproof Colorful Eyeliner Set",
    price: 35,
    description: "The PHOFAY Waterproof Colorful Eyeliner Set features an 8-piece collection of vibrant, highly pigmented gel eyeliner pencils. Designed for an effortless glide, the creamy formula locks down into a long-lasting, matte finish that is completely waterproof, sweatproof, and transfer-resistant for up to 24 hours.",
    images: [
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17368128/1879041910799339520.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17368128/1879041912401563648.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17368128/1879041916943994880.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17368128/1879041914003787776.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17368128/1879041915073335296.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17368128/1879041916373569536.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17368128/1879041917908684800.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v54', size: '8Color Set', stock: 35, price: 35}


    ],
    shipping: {
      USA: "3-8 business days",
      UK: "8-12 business days",
      Canada: "8-12 business days"
    },
    category: "Makeup",
    rating: 4.8
  },
  {
    id: 46,
    name: "PHOFAY Waterproof Oil Control Setting Cream",
    price: 17,
    description: "The PHOFAY Waterproof Oil Control Setting Cream is a velvety, balm-like setting product (10g) designed to keep makeup looking flawless and shine-free all day. It provides a smooth, mattifying base or finishing touch while resisting sweat and excess oil.",
    images: [
      "https://cf.cjdropshipping.com/17413056/1897899896795828224.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17413056/1897899898532270080.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17413056/1897899899761201152.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17413056/1897899901485060096.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17413056/1897899902365863936.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17413056/1897899903720624128.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17413056/1897899904513347584.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v53', size: '75g', stock: 35, price: 17}


    ],
    shipping: {
      USA: "3-7 business days",
      UK: "9-10 business days",
      Canada: "8-12 business days"
    },
    category: "Makeup",
    rating: 4.8
  },




      {
      id: 47,
      name: "European And American Wigs Women's Short Curly Hair Wigs",
      price: 26.40,
      originalPrice: 33,
      discount: 20,
      description: "Short, gradient (ombre) bob wigs with a middle or side split are stylish, convenient, and low-maintenance.",
      images: [
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/906e71b3-5d50-49da-a173-1cb9f4e47ff0.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/b7ead3e5-c69b-40c8-bc0e-98cd42d2327d.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/3105ab02-1604-4d57-afd6-7e9737983e1b.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/9678d034-1863-4648-936a-d7756bdb2168.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/1bb85a17-167e-40d4-a671-1b8d8d372ab9.jpg?x-oss-process=image%2Fformat%2Cwebp"


      ],
      variants: [
        { id: 'v54', size: 'Regular', stock: 18, price: 26.40 }
      ],
      shipping: {
        USA: "5-11 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
          {
      id: 48,
      name: "Small Curly Wig, Partial Long Curly Hair, High Temperature Silk Chemical Fiber Headgear",
      price: 35,
      description: "A synthetic, heat-resistant half-wig or partial headpiece. It is crafted from high-temperature synthetic fibers that mimic the look of human hair, featuring tight, small curls that typically blend with your natural hair",
      images: [
        "https://cf.cjdropshipping.com/e07f72f9-6cf4-4c08-8ec5-80a03464f7d7.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/5f82bbd6-a74b-4623-982c-825c63057fdb.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v55-1', size: '24 inch', stock: 18, price: 35 },
                { id: 'v55-2', size: '26 inch', stock: 18, price: 38 },
        { id: 'v55-3', size: '32 inch', stock: 18, price: 45 }
      ],
      shipping: {
        USA: "5-11 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
              {
      id: 49,
      name: "European And American Ladies Front Lace Synthetic Wigs",
      price: 25,
      description: "offer a highly realistic hairline and versatile styling using high-temperature, heat-resistant fibers. They feature breathable rose-net caps, adjustable straps, and hand-tied lace fronts for a natural look",
      images: [
        "https://cf.cjdropshipping.com/17116704/2403290236050326200.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/06/27/06/0c5d5733-32de-4631-8620-2409966b98e4_fine.jpeg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://cf.cjdropshipping.com/17116704/2403290236050323400.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/17116704/2403290236050325300.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/12/05/05/ab66cf72-9f1c-434f-ba28-9e5bc2c58c08.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/02/11/09/f59bf509-a154-4268-b18b-c3b0db47da17.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://cf.cjdropshipping.com/17116704/2403290236050327200.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/17116704/2403290236050324200.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v56-1', size: '20 inch', color: 'Yellow', stock: 18, price: 25, imageIndex: 0 },
                { id: 'v56-2', size: '26 inch', color: 'yellow', stock: 18, price: 28, imageIndex: 1 },
        { id: 'v56-3', size: '34 inch', color: 'Yellow', stock: 18, price: 35, imageIndex: 2 },
        { id: 'v56-4', size: '30 inch', color: 'M17001B30', stock: 18, price: 30, imageIndex: 3 },
        { id: 'v56-5', size: '36 inch', color: 'Beige', stock: 18, price: 36, imageIndex: 4 },
        { id: 'v56-6', size: '28 inch', color: 'Beige', stock: 18, price: 30, imageIndex: 4 },
        { id: 'v56-7', size: '26 inch', color: 'Piano', stock: 18, price: 28, imageIndex: 5 },

      ],
      shipping: {
        USA: "5-11 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },

              {
      id: 50,
      name: "Women's Short Curly African Small Curly Hair",
      price: 30,
      description: "African Small Curly Hair",
      images: [
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/17097696/2403070314260323500.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/17097696/2403070314260324100.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/17097696/2403070314260324500.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/17097696/2403070314260325000.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/17097696/2403070314260325700.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v57', size: '293g', stock: 18, price: 30 }
      ],
      shipping: {
        USA: "5-11 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
                  {
      id: 51,
      name: "Small Volume Wound Tube Afro Long Curly Wig",
      price: 40,
      description: "African Small Curly Hair",
      images: [
        "https://cf.cjdropshipping.com/quick/product/b9e1d470-c1c0-49e1-808b-110fae57dbb4.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/121e9ee9-c532-4f93-a9d0-6505c0543702.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2024/10/11/03/0d8bdd46-0689-4df7-95a0-967883bb3c79_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/104558d4-e96b-47cb-b6ee-0c2836b96d27.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/bdb855c7-4582-404c-824a-521c63d4efae.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/c97936f8-288a-4952-964d-31f0994d27a2.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v58-1', size: '4 inches', stock: 18, price: 40 },
        { id: 'v58-2', size: '6 inches', stock: 18, price: 40 },
        { id: 'v58-3', size: '8 inches', stock: 18, price: 40 },
        { id: 'v58-4', size: '10 inches', stock: 18, price: 40 },
        { id: 'v58-5', size: '12 inches', stock: 18, price: 40 },
        { id: 'v58-6', size: '14 inches', stock: 18, price: 40 },
        { id: 'v58-7', size: '16 inches', stock: 18, price: 40 },
        { id: 'v58-8', size: '18 inches', stock: 18, price: 40 },
        { id: 'v58-9', size: '20 inches', stock: 18, price: 40 },
        { id: 'v58-10', size: '22 inches', stock: 18, price: 40 },
        { id: 'v58-11', size: '24 inches', stock: 18, price: 40 },
        { id: 'v58-12', size: '26 inches', stock: 18, price: 40 },
        { id: 'v58-13', size: '28 inches', stock: 18, price: 40 },
        { id: 'v58-14', size: '30 inches', stock: 18, price: 40 },
        { id: 'v58-15', size: '32 inches', stock: 18, price: 40 }
      ],
      shipping: {
        USA: "5-11 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
                      {
      id: 52,
      name: "Wig Full-head Wig Bangs Short Curly Hair",
      price: 27,
      description: "Short curly wigs with bangs are low-maintenance, glue-free protective styles.",
      images: [
        "https://oss-cf.cjdropshipping.com/product/2024/10/10/02/9e6f34f3-176a-44c5-8b39-aeeec97efc97.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2024/10/10/02/9f4efd53-c8a4-4135-989e-2f39f69c3076.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2024/10/10/02/fcdda06b-72f7-427e-abe1-d1ef09f104d6.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2024/10/10/02/356ba690-189c-4b04-a524-5fad754239b4.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/08/21/01/c6021d11-e23b-45cb-a920-d7a0ade97a5e.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/d83f8e10-5bbd-44ca-971f-7960228320c8.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/2a7e323d-530e-411f-bc37-46efe07b29d0.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/14b62cab-3808-4b85-91e6-edf548478d87.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/ff8efa3a-bfe9-4e61-aae9-7ffabfdf7126.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/7efa1162-5c69-4835-8d8a-b67dc4d51a08.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/4e3cf8e8-e06b-49d1-9305-24c03c048d4e.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/434d6029-ccab-4da2-9ca0-0b03d4a6ce16.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/546f782e-da3b-4a95-a511-7a931f63878f.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/b1e419fc-b91a-4071-b816-2baaf2d3ee25.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/74e67acf-7537-45b1-9076-8324899bedf3.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/ff729cd3-4e74-459c-b8be-df7c82e5220e.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/9ea0b48f-7ff0-4aaf-83a2-dd61fb963e2b.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/af930776-7561-4693-abe4-a0b7e1968ecf.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/e5a18033-2096-4695-9d95-d252fb15ac94.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/f9fd28cf-0c6b-45f5-a238-a3a742c43e7e.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/65ea67df-2091-44c8-b00c-9cc047ec9e16.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2026/05/27/07/b1f6babc-f7af-4dfa-a058-a4b41e6f8137.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
      ],
      variants: [
        { id: 'v59-1', size: 'Regular', color: 'Yellow', stock: 18, price: 27, imageIndex: 1 },
        { id: 'v59-2', size: 'Regular', color: 'A2', stock: 18, price: 27, imageIndex: 2 },
        { id: 'v59-3', size: 'Regular', color: 'Purple', stock: 18, price: 27, imageIndex: 3 },
        { id: 'v59-4', size: 'Regular', color: 'LC10061', stock: 18, price: 27, imageIndex: 4 },
        { id: 'v59-5', size: 'Regular', color: 'WL10063', stock: 18, price: 27, imageIndex: 5 },
        { id: 'v59-6', size: 'Regular', color: 'Wl11582', stock: 18, price: 27, imageIndex: 6 },
        { id: 'v59-7', size: 'Regular', color: 'Wl11583', stock: 18, price: 27, imageIndex: 7 },
        { id: 'v59-8', size: 'Regular', color: 'Wl11584', stock: 18, price: 27, imageIndex: 8 },
        { id: 'v59-9', size: 'Regular', color: 'Wl10772', stock: 18, price: 27, imageIndex: 9 },
        { id: 'v59-10', size: 'Regular', color: 'Lc0301', stock: 18, price: 27, imageIndex: 10 },
        { id: 'v59-11', size: 'Regular', color: 'Lc0521', stock: 18, price: 27, imageIndex: 11 },
        { id: 'v59-12', size: 'Regular', color: 'Lc0581', stock: 18, price: 27, imageIndex: 12 },
        { id: 'v59-13', size: 'Regular', color: '6BR10', stock: 18, price: 27, imageIndex: 13 },
        { id: 'v59-14', size: 'Regular', color: '7BL10', stock: 18, price: 27, imageIndex: 14 },
        { id: 'v59-15', size: 'Regular', color: '1BR12', stock: 18, price: 27, imageIndex: 15 },
        { id: 'v59-16', size: 'Regular', color: '2BR12', stock: 18, price: 27, imageIndex: 16},
        { id: 'v59-17', size: 'Regular', color: '5BL10', stock: 18, price: 27, imageIndex: 17},
        { id: 'v59-18', size: 'Regular', color: '2BR10', stock: 18, price: 27, imageIndex: 18},
        { id: 'v59-19', size: 'Regular', color: '3BL10', stock: 18, price: 27, imageIndex: 19},
        { id: 'v59-20', size: 'Regular', color: '4BL10', stock: 18, price: 27, imageIndex: 20},
        { id: 'v59-21', size: 'Regular', color: '8GR10', stock: 18, price: 27, imageIndex: 21},


      ],
      shipping: {
        USA: "5-11 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
                  {
      id: 53,
      name: "Wig Ladies Mid-length Curly Hair Hand-wrapped Small Curls",
      price: 28,
      description: "Applicable people: General",
      images: [
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/1621561862921.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/1621561862923.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/1621561862922.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/1621561862925.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cc-west-usa.oss-accelerate.aliyuncs.com/1621561863173.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v60-1', size: '320g', color: 'Button mesh black', stock: 18, price: 26 },
                { id: 'v60-1', size: '320g', color: 'Rose net black', stock: 18, price: 28 }
      ],
      shipping: {
        USA: "5-11 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
      {
      id: 54,
      name: "Red Brown 33color Huamn Hair Wig 134HD Transparent Lace",
      price: 104,
      description: "Applicable people: General",
      images: [
        "https://oss-cf.cjdropshipping.com/product/2025/08/01/06/c67dbbd7-e45b-4ae9-aae7-7efdf931810e.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/08/01/06/bb430a10-7af2-40be-8475-825b2b9cf62c.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/08/01/06/48950689-344b-45cb-8ab1-614f2cb497f2.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/08/01/06/1ede9643-0602-4bc3-8676-e5b3db595089.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/69c405c8-665b-4b88-82e1-7ef0fb8dc6b5.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/08/01/06/1ede9643-0602-4bc3-8676-e5b3db595089.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v61-1', size: '16 inches', stock: 18, price: 104 },
        { id: 'v61-2', size: '18 inches', stock: 18, price: 120 },
        { id: 'v61-3', size: '20 inches', stock: 18, price: 140 },
        { id: 'v61-4', size: '22 inches', stock: 18, price: 166 },
        { id: 'v61-5', size: '24 inches', stock: 18, price: 216 },
        { id: 'v61-6', size: '26 inches', stock: 18, price: 248 },
        { id: 'v61-7', size: '28 inches', stock: 18, price: 302 },
        { id: 'v61-8', size: '30 inches', stock: 18, price: 340 }

      ],
      shipping: {
        USA: "4-9 business days",
        Canada: "4-7 business days",
        UK: "4-5 business days"
      },
      category: "Wigs",
      rating: 4.0
    },
     {
      id: 55,
      name: "Curly Loose Deep Wave Lace Forehead Wig 13x4",
      price: 56,
      description: "Ombre Honey Blonde Deep Wave 360 Lace Frontal Wig Human Hair - Curly Water Wave 13x4 Lace Front Wig is a stunning, pre-styled unit that delivers effortless glamour and a natural-looking hairline for confident, everyday wear.",
      images: [
        "https://oss-cf.cjdropshipping.com/product/2025/08/20/02/7795f17a-3843-4c6c-bc56-e26c3b7ae1ba_fine.jpeg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/09/26/05/d02cddf3-287f-4b27-be8e-ef2218f1efe9.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/09/26/05/f6c13dff-5737-4a62-a48b-b81e35545328.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/09/26/05/bc16c4e9-b1fe-4407-b2bb-69e37b8d226a.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v62-1', size: '14 inches', stock: 18, price: 56 },
        { id: 'v62-2', size: '16 inches', stock: 18, price: 58 },
        { id: 'v62-3', size: '18 inches', stock: 18, price: 60 },
        { id: 'v62-4', size: '22 inches', stock: 18, price: 64 },
        { id: 'v62-5', size: '24 inches', stock: 18, price: 66 },
        { id: 'v62-6', size: '26 inches', stock: 18, price: 68 },
        { id: 'v62-7', size: '28 inches', stock: 18, price: 70 },
        { id: 'v62-8', size: '30 inches', stock: 18, price: 72 },
        { id: 'v62-9', size: '34 inches', stock: 18, price: 74 },
        { id: 'v62-10', size: '36 inches', stock: 18, price: 76 }
      ],
      shipping: {
        USA: "5-11 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
         {
      id: 56,
      name: "Fashion Split Big Wave Wig Long Curly Hair",
      price: 29.99,
      description: "The Fashion Split Big Wave Long Curly Wig is a popular, glamorous style featuring a dramatic, flowing curl pattern and a versatile center or side part. Whether you are going for a natural synthetic look or a premium human hair version, this bouncy, voluminous style offers instant elegance",
      images: [
        "https://cf.cjdropshipping.com/quick/product/4fa8da45-b325-4b8b-9398-adc13354c4a1.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/76247f62-075c-4499-b25b-c3170be33a86.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/ed30c065-f14e-4753-8fd6-d90c01cd1201.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v63', size: '24 inches', stock: 18, price: 29.99 }
      ],
      shipping: {
        USA: "5-11 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
             {
      id: 57,
      name: "Fashion Highlight Cool Pull Wig For Women",
      price: 28,
      description: "long curly hair side bangs head",
      images: [
        "https://cf.cjdropshipping.com/quick/product/0e69417c-5dca-482d-9524-761e80e70370.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/902e8615-28b5-4dbc-b67c-bc0a55915dea.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/89a847f8-f0ed-46be-9122-a8978e6e705c.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v64', size: 'Regular', color: 'Black Pink', stock: 18, price: 28 }
      ],
      shipping: {
        USA: "4-9 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
                 {
      id: 58,
      name: "Women's Fashion Simple And Short Curly Wig",
      price: 80,
      description: "Simple And Short Curly Wig",
      images: [
        "https://cf.cjdropshipping.com/quick/product/12a5da7f-1868-4668-9547-1f529da0a964.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/5b617cef-d7d2-43c0-a16c-6ecc424fc088.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/d10032f8-ed22-4513-b24e-c9c7c0001a5f.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/9728fefc-a553-40fe-a51e-87bc2adde746.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/1e5adc5d-81c8-42c0-9e29-06f922e39423.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/86794504-8c86-410c-90ba-dec12aad36c3.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v65-1', size: '10 inch', stock: 18, price: 80 },
        { id: 'v65-2', size: '12 inch', stock: 18, price: 92 },
        { id: 'v65-3', size: '14 inch', stock: 18, price: 108 },
        { id: 'v65-4', size: '16 inch', stock: 18, price: 126 },
      ],
      shipping: {
        USA: "4-9 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
     {
      id: 59,
      name: "Wig Female Synthetic Wigs Wavy Curly Hair Head Cover",
      price: 30,
      originalPrice: 60,
      discount: 50,
      description: "Made from high-quality, heat-resistant fibers, they hold their bounce and volume.",
      images: [
        "https://oss-cf.cjdropshipping.com/product/2025/05/19/06/f922a0ff-f338-4178-9ed2-cf4fbca158f5.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/05/19/06/88546550-8d63-4213-89dc-a2ffd84d3e96.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/05/19/06/e2855688-ee4f-4ced-b737-009543d79202.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/05/19/06/61bf6635-7ea0-4350-a9cb-67d2df031825.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/05/19/06/c1ff5e51-afc4-47bc-92cc-b58520ba7b12.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v66-1', size: 'Regular', color: '1B', stock: 18, price: 30, imageIndex: 0 },
        { id: 'v66-2', size: 'Regular', color: 'No4', stock: 18, price: 30, imageIndex: 1 }
      ],
      shipping: {
        USA: "4-9 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8,
      tags: ["deal"]

    },

     {
      id: 60,
      name: "Wig Female Synthetic Wigs Wavy Curly Hair Head Cover",
      price: 21,
      description: "Gradient color big-wave long curly wigs made from high-temperature chemical fiber offer an affordable, versatile way to dramatically change your look.",
      images: [
        "https://oss-cf.cjdropshipping.com/product/2024/10/02/06/c0aeaa83-830d-4348-a3f3-9f72f135dca8.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2024/10/02/06/4b4d9223-4412-47ba-a947-039dc8686a71.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/998cf37e-05ab-4354-82b3-3129241a3d85.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/95060578-c664-4a74-aa37-8ea146e462b7.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v67', size: 'Regular', color: 'K132', stock: 18, price: 21 }
        ],
      shipping: {
        USA: "5-11 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
        {
      id: 61,
      name: "26-inch Elegant Women's Wig Brown Mixed Color Wavy Long Hair Synthetic Fiber Rose Mesh Cap Daily Wear",
      price: 39.99,
      description: " Designed with a lightweight and breathable rose mesh cap, it is tailored for comfortable, all-day daily wear, offering soft, natural layers and an effortless, voluminous look.",
      images: [
        "https://oss-cf.cjdropshipping.com/product/2024/11/02/08/a6029dcb-266e-4105-be31-99e04ca27c2c_fine.jpeg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2024/11/02/08/f7524150-99d7-4854-87a8-60f668c6f501_fine.jpeg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://oss-cf.cjdropshipping.com/product/2024/11/02/08/df1918ac-8920-4ee2-8da2-b72eae702800_fine.jpeg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2024/11/02/08/17d6846b-3bb9-4d89-bf55-de744efc4eec_fine.jpeg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2024/11/02/08/e46b655d-d4eb-4b2e-95ca-f230036fde55.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v68', size: '26-inch', color: 'Dark Brown', stock: 18, price: 39.99 }
        ],
      shipping: {
        USA: "4-9 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
          {
      id: 62,
      name: "Black Medium Long Straight Hair Chemical Fiber T-shaped Front Lace Wig",
      price: 44,
      description: "features a natural-looking hairline with parting space directly in the center. Made of heat-resistant synthetic fiber, it is budget-friendly, lightweight, and gives you a sleek, classic look without the high maintenance of human hair.",
      images: [
        "https://cf.cjdropshipping.com/quick/product/4bd14fbf-726d-4771-9397-8a075e6685cd.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/fe7c4e35-4630-431e-a95b-e7ba0484a03c.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/03/05/04/3cde8647-8d91-4702-b9f5-410ad0c1e4a8_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v69', size: '26-inch', stock: 18, price: 44 }
        ],
      shipping: {
        USA: "4-9 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },

         {
      id: 63,
      name: "Wig Headband Headscarf Long Straight Hair Long Curly Hair",
      price: 28,
      originalPrice: 33,
      description: "Made from high-quality, heat-resistant fibers, they hold their bounce and volume.",
      images: [
        "https://oss-cf.cjdropshipping.com/product/2025/05/29/01/c16c5f2f-9673-4901-bc9c-7c771e1a7089.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/05/29/01/824b0d07-e5eb-4bb4-9391-2b4586eae6f2.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/05/29/01/6f523b48-5ba6-48e9-ad09-1dd4b4ed98f2.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/05/29/01/566a27c0-d39f-463e-aa7c-3ee6fc491dd4.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2025/05/29/01/294bfac0-6384-4dff-9f0e-51179492612a.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v70-1', size: 'Regular', color: 'Black Straight Hair', stock: 18, price: 28, imageIndex: 1 },
        { id: 'v70-2', size: 'Regular', color: 'Black Curly Hair', stock: 18, price: 30, imageIndex: 2 },
        { id: 'v70-2', size: 'Regular', color: 'Wine Red', stock: 18, price: 30, imageIndex: 3 },

      ],
      shipping: {
        USA: "4-9 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
             {
      id: 64,
      name: "Eight Braids Hand-woven Former Lace Head Cap",
      price: 170,
      description: "A specialized, glueless wig base or protective cap featuring pre-braided patterns (usually 8 or more) stitched onto a breathable lace foundation. It is designed to save time during DIY protective styling and crochet installations.",
      images: [
        "https://cf.cjdropshipping.com/quick/product/ea660cc6-7cb3-4e49-b95a-017e90b56701.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://cf.cjdropshipping.com/quick/product/91c0ab7f-ac5e-425c-9fc6-5a66b62ee1f7.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://cf.cjdropshipping.com/quick/product/a69dee4b-ee60-4781-a720-bc3f19669634.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://cf.cjdropshipping.com/quick/product/a400e6b7-a3c1-4eef-b774-84c9b50c950f.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://cf.cjdropshipping.com/quick/product/b34ed41d-3c8e-4732-8e5d-d1a85fa47bce.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
        "https://cf.cjdropshipping.com/quick/product/beb95bdf-1fb3-4c59-b2cf-4132947ea941.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
      ],
      variants: [
        { id: 'v71-1', size: 'Regular', color: 'Black', stock: 18, price: 170, imageIndex: 1 },
        { id: 'v71-2', size: 'Regular', color: 'Blonde', stock: 18, price: 170, imageIndex: 0 },
        { id: 'v71-3', size: 'Regular', color: 'Wine Red', stock: 18, price: 170, imageIndex: 2 },
        { id: 'v71-4', size: 'Regular', color: 'Brown', stock: 18, price: 170, imageIndex: 3 },
        { id: 'v71-5', size: 'Regular', color: 'Red', stock: 18, price: 170, imageIndex: 4 },
        { id: 'v71-6', size: 'Regular', color: '3033 Mixed Color', stock: 18, price: 170, imageIndex: 5 }

      ],
      shipping: {
        USA: "4-9 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
                 {
      id: 65,
      name: "Natural Fluffy Big Wave Long Curly Wig",
      price: 26,
      description: "A natural fluffy big wave long curly wig is a voluminous, bouncy hairpiece featuring soft, elongated curls.",
      images: [
        "https://oss-cf.cjdropshipping.com/product/2024/10/06/05/539de078-98ff-44a1-b65f-0f78719fc0cc_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2024/10/06/05/8123c0a2-b3db-40af-9597-aa095503b8de_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2024/10/06/05/956f6d0a-b152-407e-a3ec-a438f9164918_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2024/10/06/05/77e17821-4e74-4ff2-90ff-8798b93babf7_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
        "https://oss-cf.cjdropshipping.com/product/2024/10/06/05/af79f346-32cc-4ddf-a6f3-20c1f8064a58_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v72-1', size: '10 inches', stock: 18, price: 27},
        { id: 'v72-2', size: '12 inches', stock: 18, price: 28},
        { id: 'v72-3', size: '14 inches', stock: 18, price: 29},
        { id: 'v72-4', size: '16 inches', stock: 18, price: 30},
        { id: 'v72-5', size: '18 inches', stock: 18, price: 31},
        { id: 'v72-6', size: '20 inches', stock: 18, price: 32},
        { id: 'v72-7', size: '22 inches', stock: 18, price: 33},
        { id: 'v72-8', size: '24 inches', stock: 18, price: 34},
        { id: 'v72-9', size: '26 inches', stock: 18, price: 35},
        { id: 'v72-10', size: '28 inches', stock: 18, price: 36},
        { id: 'v72-11', size: '30 inches', stock: 18, price: 37}



      ],
      shipping: {
        USA: "4-9 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },
                     {
      id: 66,
      name: "Factory Wig Real Human Hair Silk",
      price: 60,
      description: " They feature a multi-layered scalp where individual hair knots are hidden between layers of silk, preventing hair returns and creating the exact appearance of hair growing directly from the skin.",
      images: [
        "https://cf.cjdropshipping.com/quick/product/12a5da7f-1868-4668-9547-1f529da0a964.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/5b617cef-d7d2-43c0-a16c-6ecc424fc088.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/d10032f8-ed22-4513-b24e-c9c7c0001a5f.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/9728fefc-a553-40fe-a51e-87bc2adde746.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/1e5adc5d-81c8-42c0-9e29-06f922e39423.jpg?x-oss-process=image%2Fformat%2Cwebp",
        "https://cf.cjdropshipping.com/quick/product/86794504-8c86-410c-90ba-dec12aad36c3.jpg?x-oss-process=image%2Fformat%2Cwebp"
      ],
      variants: [
        { id: 'v73-1', size: '8 inch', stock: 18, price: 60 },
        { id: 'v73-2', size: '10 inch', stock: 18, price: 80 },
        { id: 'v73-3', size: '12 inch', stock: 18, price: 100 },
        { id: 'v73-4', size: '14 inch', stock: 18, price: 120 },
        { id: 'v73-5', size: '16 inch', stock: 18, price: 140 }
      ],
      shipping: {
        USA: "4-9 business days",
        Canada: "4-7 business days",
        UK: "4-7 business days"
      },
      category: "Wigs",
      rating: 4.8
    },






      {
    id: 67,
    name: "Foreign Trade Silicone Oil Free English Version Polygonum Ginseng Soap Nourishing Soap Shampoo Soap Essential Oil Soap Shampoo Soap",
    price: 12,
    description: "a natural, silicone-free herbal bar designed to nourish the scalp, control oil, and promote hair health",
    images: [
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/17054496/2401170909150321900.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/17054496/2401170909150322200.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/17054496/2401170909150324400.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/17054496/2401170909150323300.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.cjdropshipping.com/b82d09b0-222b-4f61-a217-507298119e4c.png?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/17054496/2401170909150322600.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v74-1', size: 'Naked with blister film', stock: 25, price: 12, imageIndex: 0 },
      { id: 'v74-2', size: 'Separate aluminum box', stock: 25, price: 10, imageIndex: 1 },
      { id: 'v74-3', size: 'Style one aluminum box package', stock: 25, price: 18, imageIndex: 2 },
      { id: 'v74-4', size: 'Style two aluminum box package', stock: 25, price: 18, imageIndex: 3 },
      { id: 'v74-5', size: 'Set', stock: 25, price: 26, imageIndex: 4 }

    ],
    shipping: {
      USA: "3-8 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Skincare",
    rating: 4.8
  },
   {
    id: 68,
    name: "Women For Smooth Skin Moisturizes Soft Serve Shave Oil Truly After Shave Oil Facial Hair Removal Cream",
    price: 18,
    description: "This moisturizing and soothing after shave oil is designed to hydrate and soothe the skin after shaving. It contains natural ingredients such as aloe vera and chamomile to provide a gentle cleanse and nourishment.",
    images: [
      "https://i.ebayimg.com/images/g/GlMAAeSwSXVoPmab/s-l1600.webp",
      "https://i.ebayimg.com/images/g/YIcAAeSwo6VoPmab/s-l960.webp",
      "https://i.ebayimg.com/images/g/-sQAAeSwR8toPmab/s-l960.webp",
      "https://i.ebayimg.com/images/g/~VMAAeSwsrloPmab/s-l960.webp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/19/07/3d13b6ed-3fda-4d29-9822-145595b99ef8.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v75', size: '30g', stock: 30, price: 18},

    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Skincare",
    rating: 4.7
  },
     {
    id: 70,
    name: "Collagen Tearing Mask Cleansing Facial Moisturizing",
    price: 18,
    description: "formulated to provide deep hydration, gently exfoliate, and boost skin elasticity.",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2026/05/14/02/b94bd8ab-55a8-4a7d-8b95-83f4a4204adb.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2026/05/14/02/4039d83c-a698-44c1-a5e4-1b2fb31ddb05.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/82138fba-f45c-4d4b-996b-2e34bf820744.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/bc85e5f1-a052-4107-961e-2eb4d9382f25.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/1ddf62e3-df2a-43f3-a4c8-ca893cded5e6.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/9ca2d874-85bd-4c45-8a7a-d93a42c95d75.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2026/05/14/02/af9f5325-783b-4f36-a31c-3f76cd923ed4.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/5df396f3-7218-4b73-acdf-76d7d6326731.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v76', size: '75g Plus Brush', stock: 30, price: 18},

    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Skincare",
    rating: 4.7
  },
        {
    id: 71,
    name: "Moisturizer Solid Stick, Dry Moisturizer Stick",
    price: 17,
       originalPrice: 20,
      discount: 15,
    description: "Deep Moisturizing Hand And Foot Balm, Powerful Nourishing Stick.",
    images: [
      "https://jovanko.com/cdn/shop/files/c2a0334e-db81-4bc4-beca-c5a191e3629c.jpg?v=1763193137&width=550",
      "https://onebyonebeauty.com/cdn/shop/files/9fdc43ff-30ac-4398-8332-9c7becf58262.jpg?v=1779919752&width=1200",
      "https://onebyonebeauty.com/cdn/shop/files/9ef9ce7e-3d7c-4d95-a931-4551535fe292.jpg?v=1779919752&width=1200",
      "https://onebyonebeauty.com/cdn/shop/files/240b60f9-427a-451e-94d2-28e0dc747b4e.jpg?v=1779919752&width=1200",
      "https://onebyonebeauty.com/cdn/shop/files/e4714f0d-c6a9-4690-a509-d748a096bc66.jpg?v=1779919752&width=1200",
      "https://onebyonebeauty.com/cdn/shop/files/1b50ba0c-56aa-4c09-844b-dfccf5f53448.jpg?v=1779919752&width=1200",
      "https://onebyonebeauty.com/cdn/shop/files/26856810-1a4b-40b6-af66-74170e1bc0b1.jpg?v=1779919752&width=1200",
      "https://onebyonebeauty.com/cdn/shop/files/493b9ad1-b5ba-4757-b0e9-47f4040bb598.jpg?v=1779919752&width=1200",
      "https://onebyonebeauty.com/cdn/shop/files/547501b3-2c54-4176-9dc1-cec6fd84409c.jpg?v=1779919752&width=1200",
      "https://oss-cf.cjdropshipping.com/product/2025/06/08/05/d15a9e29-555b-4026-b2e6-752b564604f3.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/08/05/ee66f69b-5eaf-4ba5-b992-a98c4b6b0385.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/08/05/30b8723c-9890-4180-8e10-4725ab311b37.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/08/05/c1f76530-1ca1-4552-ad3c-f076e6c3c56d.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/08/05/2171c36c-111f-483b-bd95-c85bad327fb6.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/08/05/f50095ad-7228-4d2b-ba83-f1f6255c5227.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v77-1', size: 'Blue', stock: 25, price: 17, imageIndex: 1 },
      { id: 'v77-2', size: 'Pink', stock: 25, price: 17, imageIndex: 2 },
      { id: 'v77-3', size: 'Strawberry', stock: 25, price: 17, imageIndex: 3 },
      { id: 'v77-4', size: 'Blueberry', stock: 25, price: 17, imageIndex: 4 },
      { id: 'v77-5', size: 'Fragrant Citrus', stock: 25, price: 17, imageIndex: 5 },
      { id: 'v77-6', size: 'Banana', stock: 25, price: 17, imageIndex:  6},
      { id: 'v77-7', size: 'Apple', stock: 25, price: 17, imageIndex: 7 },
      { id: 'v77-8', size: 'Coconut', stock: 25, price: 17, imageIndex: 8 },
      { id: 'v77-9', size: 'Set', stock: 25, price: 34, imageIndex: 9 }

    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Skincare",
    rating: 4.8
  },
    {
    id: 72,
    name: "Foot Calluses Skin Neck Cream",
    price: 20,
    description: "Foot calluses and neck skin require completely different formulations due to varying skin thickness and sensitivity. Callus creams use potent acids to dissolve thick, dead layers, while neck creams use gentle anti-aging peptides and vitamins.",
    images: [
      "https://cf.cjdropshipping.com/quick/product/80cf2d49-4f91-44ac-b571-2d7e9a5a45b9.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/17178048/2406080826130327100.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17178048/2406080826150327500.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17178048/2406080826180322100.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17178048/2406080826200320600.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17178048/2406080826210329800.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/30/03/9960e5ba-13ec-4978-bf66-1adf5888da09.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v78-1', size: '50g', stock: 30, price: 20,imageIndex: 0},
      { id: 'v78-2', size: 'Set', stock: 30, price: 26,imageIndex: 6},


    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Skincare",
    rating: 4.7
  },
      {
    id: 73,
    name: "ZOZU Moisturizing Eye Mask 30pairs",
    price: 19.99,
    description: "budget-friendly hydrogel skincare treatment designed to hydrate the delicate under-eye area, reduce puffiness, and minimize dark circles.",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/09/18/03/c23d5275-7bd4-4ae4-b8f9-dc2429dae50d.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/09/18/03/8df05c21-34c3-4fd6-b53c-6f780a13e7fe.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/09/18/03/1855f849-18dd-4b23-a93c-dc52f5f95dcb.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/09/18/03/69597226-f012-44eb-b825-1f057ae0b6f5.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/09/18/03/4214d000-d8e9-43d5-b13c-f138a589f9ec.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/09/18/03/4400c2cd-f505-463a-9389-76d899cd77f8.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/09/18/03/44029614-76e8-459a-9d0e-37162805c0ac.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/09/18/03/117b9b8b-950a-43ea-ba8d-99e92f4cce71.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v79', size: '60pcs', stock: 30, price: 19.99}

    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Skincare",
    rating: 4.7
  },



    {
    id: 74,
    name: "Handmade UV Nail Beauty Patch Finished Product",
    price: 16,
    description: "Handmade UV Nail Beauty",
    images: [
      "https://cf.cjdropshipping.com/17191872/2406240337490326500.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17191872/2406240337500328600.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17191872/2406240337480323500.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17191872/2406240337480320700.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v80-1', size: 'XS', stock: 20, price: 16 },
      { id: 'v80-2', size: 'S', stock: 20, price: 16 },
      { id: 'v80-3', size: 'M', stock: 20, price: 16 },
      { id: 'v80-4', size: 'L', stock: 20, price: 13 }
    ],
    shipping: {
      USA: "4-9 business days",
      Canada: "4-7 business days",
      UK: "4-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
    {
    id: 75,
    name: "Almond Double French",
    price: 14,
    description: "Z796 pink girl",
    images: [
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/17180640/2406110659490326000.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/17180640/2406110659480321300.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/17180640/2406110659490329000.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v81', size: 'Regular', stock: 20, price: 14 },
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-12 business days"
    },
    category: "Nails",
    rating: 4.8
  },
      {
    id: 76,
    name: "Wear Nail Pure Handmade Manicure",
    price: 16,
    description: "Purple Iris Tectorum Butterfly",
    images: [
      "https://cf.cjdropshipping.com/17191872/2406240351540321300.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17191872/2406240351540324900.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17191872/2406240351530329500.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v82-1', size: 'XS', stock: 20, price: 16 },
      { id: 'v82-2', size: 'S', stock: 20, price: 16 },
      { id: 'v82-3', size: 'M', stock: 20, price: 16 },
      { id: 'v82-4', size: 'L', stock: 20, price: 15 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "4-7 business days",
      UK: "4-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
        {
    id: 77,
    name: "K9 Metal Butterfly Wear Armor",
    price: 16,
    description: "Elk",
    images: [
      "https://cf.cjdropshipping.com/17191872/2406240336300323200.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17191872/2406240336290328300.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17191872/2406240336300320000.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17191872/2406240336300320900.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17191872/2406240336300321600.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v83-1', size: 'XS', stock: 20, price: 16 },
      { id: 'v83-2', size: 'S', stock: 20, price: 16 },
      { id: 'v83-3', size: 'L', stock: 20, price: 16 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "4-5 business days"
    },
    category: "Nails",
    rating: 4.8
  },
   {
    id: 78,
    name: "Handmade Wear Armor Ice Transparent Temperament",
    price: 15,
    description: "Long Ladder",
    images: [
      "https://cf.cjdropshipping.com/17191872/2406240338150325600.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17191872/2406240338150328500.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/07/05/03/5287538e-ccec-4e98-b2ba-f502c04c8662_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v84-1', size: 'XS', stock: 20, price: 15 },
      { id: 'v84-2', size: 'S', stock: 20, price: 15 },
      { id: 'v84-3', size: 'M', stock: 20, price: 15 },
      { id: 'v84-4', size: 'L', stock: 20, price: 15 }
    ],
    shipping: {
      USA: "4-9 business days",
      Canada: "4-8 business days",
      UK: "4-5 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 79,
    name: "Almond Nail Pure Flower Wear Nail",
    price: 13,
    description: "Removable Fake Nails",
    images: [
      "https://cf.cjdropshipping.com/quick/product/ab208715-05cb-4713-b532-492fc6c939f5.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/481a1588-9029-4008-a3a6-99f22c3492ba.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/dd4cf576-b73e-4110-8f13-ef4d1ecca100.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v85', size: 'XXS268', stock: 20, price: 13 }
    ],
    shipping: {
      USA: "4-9 business days",
      Canada: "4-8 business days",
      UK: "4-5 business days"
    },
    category: "Nails",
    rating: 4.8
  },
   {
    id: 80,
    name: "Rose Halo Dye Powder Blusher Nail Dressing Finished Product",
    price: 22,
    description: "24 pieces",
    images: [
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/2e452eb7-3a89-49ec-8a79-3e1bc912fbd8.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/3d5ed46d-73a3-4938-af17-efefdf9329dc.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/a8838896-b2eb-4d2a-a6a0-f42e336b46d3.png?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v86', size: 'JP1099', stock: 20, price: 22 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "4-8 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 81,
    name: "Nail Stickers Removable Nail Butterfly Fake Nails",
    price: 22,
    description: "Butterfly",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/02/20/10/71521955-ee8c-46c0-92f2-aa26ae77f117.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/20/12/1bab4d3e-2edc-4c24-83f4-943616c00a90.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/20/10/5a6bc6c2-c56a-49ce-8f2f-6ea3517b3eec.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/20/10/29c42630-14aa-4c4e-ba0d-1462eaa45986.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/20/10/14322a2c-e00e-4f9a-aed3-fc48f2c0743d_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v87', size: 'Z937 stereo butterfly', stock: 20, price: 22 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "4-8 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 82,
    name: "Pure Desire Sweet Flowers Wear Armor Removable Fake Nails",
    price: 24,
    description: "Flowers",
    images: [
      "https://cf.cjdropshipping.com/quick/product/6815b925-d890-4596-aeab-70eb6bc02177.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/82eb2247-8d4b-4748-b27b-0a8c9730b3f5.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/237e97cf-fae7-4ec6-933b-3fdcb133ffda.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v88', size: 'XXS267', stock: 20, price: 24 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "4-8 business days"
    },
    category: "Nails",
    rating: 4.8
  },
   {
    id: 83,
    name: "Line Pattern Fake Nails Wear Nail Removable Nail Sticker Patch",
    price: 11,
    description: "Line Pattern",
    images: [
      "https://cf.cjdropshipping.com/quick/product/827f542f-0264-4b18-9e7b-32b202f0ec37.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/06/02/04/fc8702fb-c859-46a1-9922-a5a3baa3093c_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/02/04/8cb726da-74b5-4d04-8ec8-f68c1c3cade0_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v89', size: 'French Line Glue', stock: 20, price: 11 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "4-8 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 84,
    name: "Short Method Type Wearing Nail Press Type",
    price: 22,
    description: "Removable",
    images: [
      "https://cf.cjdropshipping.com/quick/product/5e6723a0-f368-4a47-9066-a48d49ce39ce.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/01/03/03/05cb1a18-a6da-49b1-bfbe-786a0ab1de4c.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/f21be647-a735-401a-82f2-42ec6cd21c5a.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v90', size: 'YY CW90', stock: 20, price: 22 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "6-11 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
   {
    id: 85,
    name: "Yellow Lemon Soda French Wear Armor",
    price: 12,
    description: "Bow, butterfly",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/06/24/08/ecefbadf-2f06-4f5f-948a-8d58f6e89eb2.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/24/08/1140bebd-a617-4971-8f6f-bc76649619af.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/24/07/51cf5c4e-2d7e-47cc-bce3-fa664ed1e3a7.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/24/08/2196440c-22ff-4e48-a920-b01a4986cdb1.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v91-1', size: 'Glue Type', stock: 20, price: 12 },
            { id: 'v91-2', size: 'Jelly Glue Rubbing Terms', stock: 20, price: 12 },
      { id: 'v91-3', size: 'Toolkit', stock: 20, price: 12.30 }

    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
    {
    id: 86,
    name: "Heavy Industry Dark Series Camellia Lace European And American Style Handmade Wear Armor",
    price: 18,
    description: "Long Almond",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/97c20e81-2c47-4b64-aed0-1a75ff78ccaa.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/70a6f8a8-a1ce-457c-841b-c245e2d94f6e.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/7c51f570-410d-4862-a27f-68bf19453e86.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v92-1', size: 'XS', stock: 20, price: 18 },
      { id: 'v92-2', size: 'S', stock: 20, price: 18 },
      { id: 'v92-3', size: 'M', stock: 20, price: 18 }

    ],
    shipping: {
      USA: "8-12 business days",
      Canada: "8-12 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 87,
    name: "Handmade Carved Blooming Three-dimensional Modeling Patch Wear Nail Tip",
    price: 24,
    description: "Pattern: Cross, Rose, tulip, cartoon, strawberry, marble, lemon, flower, love heart, Shell, peach, cat's paw, bow, starry sky, plaid, butterfly, leopard print, embossed, crocheted, chessboard, cow pattern, XINGX, candy",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/02/06/09/4b150778-c3e4-4426-b414-35aff3b107e7.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/06/06/ec719e28-1dcc-4273-b224-059e5c227eb7_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/06/06/40e4053d-7dda-43ea-9da9-d91cd209c59c_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/06/06/40e4053d-7dda-43ea-9da9-d91cd209c59c_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v93-1', size: 'XS', stock: 20, price: 24 },
      { id: 'v93-2', size: 'S', stock: 20, price: 24 },
      { id: 'v93-3', size: 'M', stock: 20, price: 24 },
      { id: 'v93-4', size: 'L', stock: 20, price: 24 }
    ],
    shipping: {
      USA: "8-12 business days",
      Canada: "8-12 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 88,
    name: "Women's Black And White Blooming T-shaped Manicure",
    price: 16,
    description: "Long T",
    images: [
      "https://cf.cjdropshipping.com/quick/product/7b21dec1-ac4e-452e-8aaf-fe50434dcad5.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/f7fc8204-20ae-48a8-ba36-d29f100e3274.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/4c074dbe-b081-484f-a76f-b49e585c4233.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/29b6d0a1-6243-47be-8618-234e8f0d8872_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/8eca316e-e4d5-4c0b-9dc5-f4ab48cd6d5a_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v94-1', size: 'XS', stock: 20, price: 16 },
      { id: 'v94-2', size: 'S', stock: 20, price: 16 },
      { id: 'v94-3', size: 'M', stock: 20, price: 16 },
      { id: 'v94-4', size: 'L', stock: 20, price: 16 }
    ],
    shipping: {
      USA: "8-12 business days",
      Canada: "8-12 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 89,
    name: "Metal Relief Almond Nail Art Ice Transparent French Pure Desire Heavy Industry Wear Nail",
    price: 20,
    description: "Medium Almond",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/07/25e1b425-ffc2-41b3-9d4a-ff33a6df6862.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/07/a84cf46b-9c2e-4db3-83bb-909dcb191ff1.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/07/ce98931c-021b-4a15-9df4-4f3ccaaa6939.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v95-1', size: 'XS', stock: 20, price: 20 },
      { id: 'v95-2', size: 'S', stock: 20, price: 20 },
      { id: 'v95-3', size: 'M', stock: 20, price: 20 },
      { id: 'v95-4', size: 'L', stock: 20, price: 20 }
    ],
    shipping: {
      USA: "8-12 business days",
      Canada: "8-12 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 90,
    name: "Pure Bow Wear Armor Nail Sticker",
    price: 12,
    description: "Love Pearl Bow",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/07/bbe5345e-4187-4646-94f5-9564c29f6982.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/07/e10c11ca-9b4e-46ce-a159-cdb3963859f7.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/07/5e9114ab-424e-44a6-b63b-2ef54033f3df.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/13/8e03bb66-5e25-41ae-9e7b-721432648a55_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/13/3e213892-743d-41c1-89f0-167d94b46738.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v96-1', size: 'Glue Type', stock: 20, price: 12 },
      { id: 'v96-2', size: 'Jelly Glue Style', stock: 20, price: 12 }
    ],
    shipping: {
      USA: "8-12 business days",
      Canada: "8-12 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 91,
    name: "European And American Style Mid-length Purple Striped Nail Stickers",
    price: 12,
    description: "Color: Y191",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/06/03/08/abf5fa5d-74fc-4c46-959e-3a02ec3896fc.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/03/08/1a9b3214-d458-4dd3-aec4-b4745f0f9b6a.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/03/08/ffef83fa-e3a3-462f-9589-319fb46660c2.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/03/08/0943be3e-8d33-45e6-9964-736727fb7acd.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v97', size: 'Regular', stock: 20, price: 12 }
    ],
    shipping: {
      USA: "8-12 business days",
      Canada: "8-12 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
   {
    id: 92,
    name: "Fake Nail Patch Removable Wear Armor",
    price: 14,
    description: "Color: B584-ydajere [glue type],B584-ydajere [wear type]",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/06/e2c8f5d2-d285-4794-a043-9f1fa6f10a4d.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/06/ea45967a-652c-4561-b3a5-4272f8994a72.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/06/8e0460b3-ee0c-4896-89e7-21f76202c8fa.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/06/fa1ad597-3628-4e8d-8507-552115f3439a.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v98-1', size: 'Glue Type', stock: 20, price: 14 },
            { id: 'v98-2', size: 'Wear Style', stock: 20, price: 14 },
    ],
    shipping: {
      USA: "8-12 business days",
      Canada: "8-12 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
   {
    id: 93,
    name: "Women's Fashion Hand-painted Starry Sky Wear Armor",
    price: 16,
    description: "Short C392",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/39116bd0-d259-4a49-a943-a676d3c00352.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/975ccf18-dfaf-4d7c-95ec-d90ee1155ea9_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v99-1', size: 'XS', stock: 20, price: 16 },
      { id: 'v99-2', size: 'S', stock: 20, price: 16 },
      { id: 'v99-3', size: 'M', stock: 20, price: 16 },
      { id: 'v99-4', size: 'L', stock: 20, price: 16 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "4-5 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 94,
    name: "Handmade Wear Nail Dark Princess Plaster Rose Heavy Industry Manicure",
    price: 18,
    description: "A202 Dark Princess",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/657663e8-9940-4e42-9c0d-caa7932c0131.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/3ab97307-7cf1-4462-9766-81e4bbf03e40.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v100-1', size: 'XS', stock: 20, price: 18 },
      { id: 'v100-2', size: 'S', stock: 20, price: 18 },
      { id: 'v100-3', size: 'M', stock: 20, price: 18 },
      { id: 'v100-4', size: 'L', stock: 20, price: 18 }
    ],
    shipping: {
      USA: "8-12 business days",
      Canada: "8-12 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 95,
    name: "Wear Fake Nail Tip Gradient",
    price: 11,
    description: "MY9160",
    images: [
      "https://cf.cjdropshipping.com/quick/product/eaa1c25a-e7b1-455c-9274-a2e3dc8d7cc7.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/04/23/02/3273e903-c212-4738-9464-985dffbb55c1_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/4031ef50-28d2-4996-b9a5-6a106c21ebfd.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/0185b7af-3e8d-408b-8972-3647c2ff0c02.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v101', size: 'Regular', stock: 20, price: 11 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "4-7 business days",
      UK: "4-5 business days"
    },
    category: "Nails",
    rating: 4.8
  },
   {
    id: 96,
    name: "Wear Fake Nail Tip Gradient",
    price: 13,
    description: "NZ406 Broken Flash Butterfly",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/05/7b56b915-19fe-4186-be75-7f181618710c_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/05/b0fdbf97-1eef-42cb-a788-70c6a9a5dc41_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/05/2e924164-945d-4c94-818b-076c903bd775_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/05/5b8c29c7-b04a-4aa6-864d-c425cb301e4c_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v102', size: 'Regular', stock: 20, price: 13 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 97,
    name: "Cross-border European And American Style Short Retro Jump Color Leopard Print Metallic T-shaped Wear Armor Finished Nail Beauty 10 Pieces Wholesale",
    price: 18,
    description: "Color: short C292",
    images: [
      "https://cf.cjdropshipping.com/quick/product/94612712-bcfb-4be7-a9dd-1086b29d1e2c.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/f42496a5-c72d-4272-b95a-65a1bd640ea7.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/f6bed86c-59fc-47f9-a42a-39a9926bb134.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/29/12/894fb373-246d-4d49-984e-9b3e9a24a812_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/29/12/e36ae400-b926-40ae-9c7c-2fbade3fed68_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/77e1b4dc-f760-4aaf-b7b4-5070d653907d.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v103-1', size: 'XS', stock: 20, price: 18 },
      { id: 'v103-2', size: 'S', stock: 20, price: 18 },
      { id: 'v103-3', size: 'M', stock: 20, price: 18 },
      { id: 'v103-4', size: 'L', stock: 20, price: 18 }
    ],
    shipping: {
      USA: "8-12 business days",
      Canada: "8-12 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
   {
    id: 98,
    name: "Carved Wear Armor Hand-painted Marine Three-dimensional Pattern Combination Nail Stickers",
    price: 22,
    description: "Color: Ocean",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/9393f5b7-b3c5-40a3-aa4e-2acb0dfaf54c.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/ad84f703-f1b3-41b9-befd-912a35ab5ad0.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/9eeb20f3-4ef9-44f2-bd9e-8063d0b4b141.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v104-1', size: 'XS', stock: 20, price: 22 },
      { id: 'v104-2', size: 'S', stock: 20, price: 22 },
      { id: 'v104-3', size: 'M', stock: 20, price: 22 },
      { id: 'v104-4', size: 'L', stock: 20, price: 22 }
    ],
    shipping: {
      USA: "4-9 business days",
      Canada: "4-7 business days",
      UK: "4-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 99,
    name: "Removable Cat's Eye Small Flower Wear Armor",
    price: 13,
    description: "short, almond, wearable",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/03/22/05/098a4be9-b91d-4e84-b402-a4bdb9d6deba.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/03/22/05/3c09f365-4eba-486c-bbe0-fe0fc2e1c543.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/03/22/11/47ce660c-6045-46af-80fa-2469bf6cea51.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/03/22/11/99c2e5e6-620f-4779-a6ae-7b0d7c477588.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v105', size: 'Regular', color: 'Idyllic Flowers', stock: 20, price: 13 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
   {
    id: 100,
    name: "Dark Cool Spicy Punk European And American Nail Sticker Love Butterfly Wearable Fake Nails",
    price: 13,
    description: "long, wearable, long pointed",
    images: [
      "https://cf.cjdropshipping.com/quick/product/cdad89e4-3162-43a2-895f-bbfbdd439aa8.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/cb063359-efe1-4cb0-991d-ba577d97126c.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/bdf56d87-91d1-4634-b71c-114ad6a824c4.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/5b1bc865-d05b-4fc2-8cea-449c780dd503.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v106-1', size: 'Glue Type', color: 'CJCY410', stock: 20, price: 13 },
            { id: 'v106-2', size: 'Jelly Glue Style', color: 'CJCY410', stock: 20, price: 13 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 101,
    name: "Cowherd Sequins Laser UV Polish",
    price: 15,
    description: "long, wearable, long pointed",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2024/06/14/03/5ce52e54-d036-4984-8f59-b23f366a8a20_trans.jpeg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2024/06/14/03/6080a46f-c58f-4848-8db4-3ca22aeb7dcc_trans.jpeg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2024/06/14/03/4b2cfb66-60a4-47b1-92aa-45e4c047389f_trans.jpeg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2024/06/14/03/2a421376-416e-4ae4-a797-15beffac2581_trans.jpeg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2024/06/14/03/da30f2fa-fd73-4449-86de-221b2c2bc784_trans.jpeg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2024/06/14/03/97ea9c4a-961e-4f6e-a482-ae27793fb40a_trans.jpeg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2024/06/14/03/855bce61-6e33-4c91-8606-009665a28c3d_trans.jpeg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2024/06/14/03/e5e45ab9-4556-4868-9aee-8185dae6bb07_trans.jpeg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/17183232/2406140606440320900.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v107-1', size: 'Regular', color: 'Blazing Cowherd 02', stock: 20, price: 15, imageIndex: 1 },
      { id: 'v107-2', size: 'Regular', color: 'Blazing Cowherd 04', stock: 20, price: 15, imageIndex: 2 },
      { id: 'v107-3', size: 'Regular', color: 'Blazing Cowherd 05', stock: 20, price: 15, imageIndex: 3 },
      { id: 'v107-4', size: 'Regular', color: 'Cowherd Full Set Of 6 Colors', stock: 20, price: 75, imageIndex: 4 },
      { id: 'v107-5', size: 'Regular', color: 'Flash Cowherd 01', stock: 20, price: 15, imageIndex: 5 },
      { id: 'v107-6', size: 'Regular', color: 'Flash Cowherd 03', stock: 20, price: 15, imageIndex: 6 },
      { id: 'v107-7', size: 'Regular', color: 'Flash Cowherd 06', stock: 20, price: 15, imageIndex: 7 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 102,
    name: "Short Oval Nail Polish Flower",
    price: 20,
    description: "Style: short, oval, wearable",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/01/03/03/e50aed9b-bef4-43f1-a523-8df69be1e1dd.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/01/03/03/7b9c8c50-125e-4c9b-bbce-a1aaa1d6554a.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/01/03/03/36c81602-341a-4c8b-95f6-8acb532ad617.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/01/03/04/3c6d4345-f1ec-4001-a0a7-41a24948a0fd_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v108', size: 'Regular', color: 'W1739 ', stock: 20, price: 20 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
    {
    id: 103,
    name: "Nail File Polishing Manicure Set",
    price: 11,
    description: "long, wearable, long pointed",
    images: [
      "https://cf.cjdropshipping.com/quick/product/e4f547bc-fa6e-48e5-9616-560aaf87839d.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2024/11/13/05/2a223e68-9033-41c2-b43b-262532ecf346_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2024/11/13/05/a8da6f07-1a41-4370-b3cb-92fe42d2272d_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/053b7664-feac-44aa-b581-6ffee9a25739.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/7732f641-639a-4c0c-83e5-c2554b09e095.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/44ef04d3-3ccf-42b1-94f0-278acaa40111.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/3cbda5a7-a94c-40f5-adc1-fdbac22981cb.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/182400be-f88d-401d-8679-3aa7ee91e0c8.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/7add89ad-772b-4788-b4ad-a34023c0a9b5.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v109-1', size: 'Regular', color: 'Blue Boxed', stock: 20, price: 11, imageIndex: 3 },
      { id: 'v109-2', size: 'Regular', color: 'Cyan Boxed', stock: 20, price: 11, imageIndex: 4 },
      { id: 'v109-3', size: 'Regular', color: 'Green Boxed', stock: 20, price: 11, imageIndex: 5 },
      { id: 'v109-4', size: 'Regular', color: 'Pink Boxed', stock: 20, price: 11, imageIndex: 6 },
      { id: 'v109-5', size: 'Regular', color: 'Purple Boxed', stock: 20, price: 11, imageIndex: 7 },
      { id: 'v109-6', size: 'Regular', color: 'Yellow Boxed', stock: 20, price: 11, imageIndex: 8 }
    
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "4-7 business days",
      UK: "4-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 104,
    name: "Finished Product Nail Patch Students",
    price: 13,
    description: "Cute",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/13/123341f8-e838-452a-953a-8b8705a6a77d.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/13/ce493206-4ef7-4d83-a9f7-7efebc2e0077.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/13/c4219931-8c45-4fe5-a687-1e7d2f6ac6f7.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/13/51607687-eeb2-43a7-8755-38905a0e18c1.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v110-1', size: 'Glue Type', color: 'Black French', stock: 20, price: 13 },
            { id: 'v110-2', size: 'Jelly Glue Style', color: 'Black French', stock: 20, price: 13 }
    ],
    shipping: {
      USA: "8-11 business days",
      Canada: "8-12 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 105,
    name: "Finished Product Nail Patch Students",
    price: 12,
    description: "Cute",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/01/03/03/f5e6f0fe-f642-46d5-a982-37dcb2fd7b3f.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/01/03/03/51b6a7df-7f28-4b79-a90a-a3c37a542745.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/01/03/03/43ba9e25-8a92-472f-b592-8fd175d5aa09.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/01/03/03/da172ce8-a79f-424d-97e4-c811daf27748.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v111', size: 'Regular', color: 'W1535 Butterfly Flower Glue', stock: 20, price: 12 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 106,
    name: "Non-stick Hand Pinch Shaping UV Nail Extension",
    price: 15,
    description: "Non-stick hand extension gel is a putty-like, solid UV builder gel that you can roll and pinch with your bare fingers without it sticking to your skin. It makes sculpting and applying nail extensions completely mess-free, allowing for easy pinching, shaping, and curing.",
    images: [
      "https://cf.cjdropshipping.com/17055360/2401180905560321800.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17055360/2401180905560322200.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17055360/2401180905560322600.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/abba284c-9164-44fe-ac3d-f76217a2eea7.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/1fe81dd2-55b9-4438-8859-ff5e1deb5899.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/8f29766d-5868-40b3-bf97-a577434b0fdb.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/c6c75094-de78-4287-a683-90dca62ba984.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/4918cd7a-e43b-4c14-9df5-dc92fc712fcf.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/c0f08dd5-23bc-4307-bcfe-8b92385c1e57.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/ad1cdf49-ba4d-4655-9228-167903dc269a.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/91390c63-67c6-42c6-b6ee-676349201cfc.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/1f503791-81e8-4088-90b6-9005eb0fdb48.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/67b15952-08ee-49a1-9aab-176ec582a16b.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v112-1', size: 'Regular', color: 'LM17101', stock: 20, price: 15, imageIndex: 3 },
      { id: 'v112-2', size: 'Regular', color: 'LM17102', stock: 20, price: 15, imageIndex: 4 },
      { id: 'v112-3', size: 'Regular', color: 'LM17103', stock: 20, price: 15, imageIndex: 5 },
      { id: 'v112-4', size: 'Regular', color: 'LM17104', stock: 20, price: 15, imageIndex: 6 },
      { id: 'v112-5', size: 'Regular', color: 'LM17105', stock: 20, price: 15, imageIndex: 7 },
      { id: 'v112-6', size: 'Regular', color: 'LM17106', stock: 20, price: 15, imageIndex: 8 },
      { id: 'v112-7', size: 'Regular', color: 'LM17107', stock: 20, price: 15, imageIndex: 9 },
      { id: 'v112-8', size: 'Regular', color: 'LM17108', stock: 20, price: 15, imageIndex: 10 },
      { id: 'v112-9', size: 'Regular', color: 'LM17109', stock: 20, price: 15, imageIndex: 11 },
      { id: 'v112-10', size: 'Regular', color: 'LM17110', stock: 20, price: 15, imageIndex: 12 }


    
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "4-7 business days",
      UK: "4-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 107,
    name: "Non-stick Hand Pinch Shaping UV Nail Extension",
    price: 15,
    description: "Non-stick hand extension gel is a putty-like, solid UV builder gel that you can roll and pinch with your bare fingers without it sticking to your skin. It makes sculpting and applying nail extensions completely mess-free, allowing for easy pinching, shaping, and curing.",
    images: [
      "https://cf.cjdropshipping.com/17183232/2406140940270329700.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17183232/2406140940280323100.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17183232/2406140940280328200.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/7b3ddd6f-0ce3-4fbc-bc7f-c34b37a35291.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/67b52e0a-799d-48d2-967b-5746152ced12.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/abdeeb87-fef6-472d-93b7-d3e544409e02.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/269ef03c-03e3-43dd-bb6a-2cd3d6f3cade.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/8dafdd03-98ec-4c35-a8bd-6fccef3b28eb.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/b0591e02-f630-4539-8c31-d08e5b1a91da.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/820e4ee1-a5ec-4120-bff1-653400ae8dff.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v113-1', size: 'Regular', color: 'Line Pulling Gel 01 Silver', stock: 20, price: 15, imageIndex: 3 },
      { id: 'v113-2', size: 'Regular', color: 'Line Pulling Gel 02 Gold', stock: 20, price: 15, imageIndex: 4 },
      { id: 'v113-3', size: 'Regular', color: 'Line Pulling Gel 03 Rose Gold', stock: 20, price: 15, imageIndex: 5 },
      { id: 'v113-4', size: 'Regular', color: 'Line Pulling Gel 04', stock: 20, price: 15, imageIndex: 6 },
      { id: 'v113-5', size: 'Regular', color: 'Line Pulling Gel 05', stock: 20, price: 15, imageIndex: 7 },
      { id: 'v113-6', size: 'Regular', color: 'Line Pulling Gel 06', stock: 20, price: 15, imageIndex: 8 },
      { id: 'v113-7', size: 'Regular', color: 'Line Pulling Gel 07', stock: 20, price: 15, imageIndex: 9 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
   {
    id: 108,
    name: "Colorful Lines Almond-shaped Rainbow Nail Sticker set",
    price: 35,
    description: "Colorful lines almond-shaped rainbow nail sticker is a fun and colorful nail sticker that adds a pop of color to your nails. It is easy to apply and remove, making it a great choice for any nail art project.",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/06/05/03/9f510266-85b2-48f8-8b51-6c1d96767b9e.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/06/05/03/45dcb560-e14d-4160-99e9-82c1bff861ec_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/05/03/996ef891-3618-4d69-bf39-d3d51347ed6b_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/05/03/8fb09210-faad-481a-8a09-4906e4557f51_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/9faa09a3-8a26-45c7-b5f4-3f615479548a.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/abdeeb87-fef6-472d-93b7-d3e544409e02.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/269ef03c-03e3-43dd-bb6a-2cd3d6f3cade.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/06/05/03/b281ca8b-d8e4-43bb-9a67-42317d3a9a99.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/06/05/03/e8b686ae-9a71-4c97-965e-ef6f96df3e30.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/06/05/03/74f9e689-4a47-48c8-b69f-a8cfb0c378ba.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v114-1', size: 'Regular', color: '4pcs', stock: 20, price: 35, imageIndex: 0 },
      { id: 'v114-2', size: 'Regular', color: 'BKS1999', stock: 20, price: 13, imageIndex: 4 },
      { id: 'v114-3', size: 'Regular', color: 'BKS2046', stock: 20, price: 13, imageIndex: 5 },
      { id: 'v114-4', size: 'Regular', color: 'BKS2131', stock: 20, price: 13, imageIndex: 6 },
      { id: 'v114-5', size: 'Regular', color: 'BKS2354', stock: 20, price: 13, imageIndex: 7 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "4-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 109,
    name: "Ice-through Jade Nude Powder Dirty Purple Nail Polish",
    price: 11,
    description: "Ice-through Jade Nude Powder Dirty Purple Nail Polish is a bold and vibrant nail polish that adds a pop of color to your nails. It is easy to apply and remove, making it a great choice for any nail art project.",
    images: [
      "https://cf.cjdropshipping.com/1620540025055.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/1620540025063.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/1620540025058.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/1620540036863.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/1620540025062.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/1620540025064.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v115-1', size: 'Regular', color: 'A', stock: 20, price: 11, imageIndex: 0 },
      { id: 'v115-2', size: 'Regular', color: 'B', stock: 20, price: 11, imageIndex: 1 },
      { id: 'v115-3', size: 'Regular', color: 'C', stock: 20, price: 11, imageIndex: 2 },
      { id: 'v115-4', size: 'Regular', color: 'D', stock: 20, price: 11, imageIndex: 3 },
      { id: 'v115-5', size: 'Regular', color: 'E', stock: 20, price: 11, imageIndex: 4 },
      { id: 'v115-6', size: 'Regular', color: 'F', stock: 20, price: 11, imageIndex: 5 }

    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "4-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 110,
    name: "Removable Wear Nail Art Ballet A Fake Nail Patch",
    price: 13,
    description: "Removable Wear Nail Art Ballet A Fake Nail Patch is a popular choice for those who want to add a touch of elegance to their nails. It is easy to apply and remove, making it a great choice for any nail art project.",
    images: [
      "https://cf.cjdropshipping.com/quick/product/998eca98-008b-40f3-a0d9-ed9d51dd95c9.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://oss-cf.cjdropshipping.com/product/2025/08/19/11/bb5c2af3-7e72-4516-b781-975908aa162a.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_8000",
      "https://cf.cjdropshipping.com/quick/product/08f50e40-5cc1-4b78-b913-63b86ca7e3ff.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/8f5e151b-fc98-4800-9d2a-ba00701e7c72.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/097d6894-6d36-4e3b-9578-ae82b48bc88b.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/7a812036-aac5-4ad2-885d-5910e577a1d8.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/a0222ff2-2c5b-41ab-b8a9-6161ce70cd06.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/3b9c95f2-a7b4-407d-a36f-ea66bbbb73ed.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/607b3e40-3bfa-41f0-9338-b3183dbfe20b.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/b5c0279b-e315-476c-a0a0-e27a21ba8e08.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/58108edd-ed13-47da-a234-af128bd5b328.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/60b3a67f-cef6-484e-9011-fe7bfe61e082.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/36e5fcdd-71f1-469a-8057-0f255c462954.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/3ef573f3-c3f9-4bbe-b7be-bf8b84e81a75.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/82a9a82d-f7d5-452d-822c-902c7256da88.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/ca597e7e-4be5-47fe-8bba-af28a4a22e02.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/54ecd92d-a2b0-431b-83e4-d06ebb00c9be.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800",
      "https://cf.cjdropshipping.com/quick/product/f807a60c-624c-4299-8ccd-64a765a3f878.jpg?x-oss-process=image/format,webp,image/resize,m_fill,m_pad,w_800,h_800"
    ],
    variants: [
      { id: 'v116-1', size: 'Regular', color: 'W1 Blue Star Pink', stock: 20, price: 13, imageIndex: 0 },
      { id: 'v116-2', size: 'Regular', color: 'CW327', stock: 20, price: 13, imageIndex: 1 },
      { id: 'v116-3', size: 'Regular', color: 'Striped Square Armor', stock: 20, price: 13, imageIndex: 2 },
      { id: 'v116-4', size: 'Regular', color: 'W10 Gradient Ballet', stock: 20, price: 13, imageIndex: 3 },
      { id: 'v116-5', size: 'Regular', color: 'W108 Silver Edge Pearl', stock: 20, price: 13, imageIndex: 4 },
      { id: 'v116-6', size: 'Regular', color: 'W11 Soybean Pink', stock: 20, price: 13, imageIndex: 5 },
      { id: 'v116-7', size: 'Regular', color: 'W12V Method Black Edge', stock: 20, price: 13, imageIndex: 6 },
      { id: 'v116-8', size: 'Regular', color: 'W13V Method White Edge', stock: 20, price: 13, imageIndex: 7 },
      { id: 'v116-9', size: 'Regular', color: 'W14 Gray Frosted Silver', stock: 20, price: 13, imageIndex: 8 },
      { id: 'v116-10', size: 'Regular', color: 'W15 Brown Coffee Star Pink', stock: 20, price: 13, imageIndex: 9 },
      { id: 'v116-11', size: 'Regular', color: 'W2 Dark Red Pearlescent', stock: 20, price: 13, imageIndex: 10 },
      { id: 'v116-12', size: 'Regular', color: 'W3 Pink Red Star Pink', stock: 20, price: 13, imageIndex: 11 },
      { id: 'v116-13', size: 'Regular', color: 'W4 Beige Star Pink', stock: 20, price: 13, imageIndex: 12 },
      { id: 'v116-14', size: 'Regular', color: 'W5 Green Line', stock: 20, price: 13, imageIndex: 13 },
      { id: 'v116-15', size: 'Regular', color: 'W6 Gray Red Flame', stock: 20, price: 13, imageIndex: 14 },
      { id: 'v116-16', size: 'Regular', color: 'W7 Deep Coffee Line', stock: 20, price: 13, imageIndex: 15 },
      { id: 'v116-17', size: 'Regular', color: 'W8 Matcha Golden Edge', stock: 20, price: 13, imageIndex: 16 },
      { id: 'v116-18', size: 'Regular', color: 'W9 French Ballet', stock: 20, price: 13, imageIndex: 17 }

    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "6-11 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 111,
    name: "Short Hot Girl Handmade Manicure",
    price: 22.55,
    description: "cool",
    images: [
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/17180640/2406110811220320100.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v117-1', size: 'XS', stock: 20, price: 22.55 },
      { id: 'v117-2', size: 'S', stock: 20, price: 22.55 },
      { id: 'v117-3', size: 'M', stock: 20, price: 22.55 },
      { id: 'v117-4', size: 'L', stock: 20, price: 22.55 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 112,
    name: "Gorgeous Sweet Cool Flower Design Press-type Wear Armor",
    price: 15,
    description: "Pattern: Flowers",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/06/04/01/86e46876-8f72-4bc8-87fc-ecf338bf2348.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/04/01/61cd472b-ee29-427b-b903-90dfa452414f.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/04/01/908b1311-2aab-4bfd-853f-d53f0f4797c5.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/06/04/01/48691eaf-8d16-49fd-87e4-9ba44de3ca1f.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v118', size: 'Regular', color: 'Flashing Flowers', stock: 20, price: 15 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 113,
    name: "Gradient Wear Manicure Detachable",
    price: 11,
    description: "Style: wearable, ballet",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/07/18/08/d9bd1cc4-019c-41f2-8310-b38eba8bc993.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/07/18/08/fb33c9c7-c94a-4c28-bc8b-ef673539d008.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/07/18/08/de94dd42-ab04-4064-a793-365dc5f447dc.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v119', size: 'Regular', stock: 20, price: 11 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 114,
    name: "Zebra Pattern Lily Hand Carving Nail Art",
    price: 28,
    description: "extra cute",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/05/21/08/7ce4cabd-2d99-4999-9ca6-b91df2f19d08.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/21/08/6590b8a3-df43-4545-acb2-81e588fd3675.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/21/08/c83eaa06-c895-48a0-9c5d-02fc6c31bf40.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/21/07/64448c6e-0fee-441f-ba80-4b3cc822c486_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ], // Added empty strings for the remaining images
    variants: [
      { id: 'v120-1', size: 'XS', stock: 20, price: 28 },
      { id: 'v120-2', size: 'S', stock: 20, price: 28 },
      { id: 'v120-3', size: 'M', stock: 20, price: 28 },
      { id: 'v120-4', size: 'L', stock: 20, price: 28 }
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
    {
    id: 115,
    name: "High-grade Aurora Manicure Fake Nail Tip",
    price: 15,
    description: "Cute",
    images: [
      "https://cf.cjdropshipping.com/quick/product/86a5e7ee-76c3-4975-83b9-e2aff84e3583.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/ee140c06-cd72-4f73-ba05-7700a0fef291.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/01/12/06/e73a576a-7e38-4d08-bb60-e818c39a7fc5_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/01/12/06/1f865396-d9da-4bbd-abec-fcf2248c89a1_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/01/12/06/a03065c0-c381-47ba-9d52-62f4f86fbe6d_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v121-1', size: 'Yellow Jelly Glue', color: 'DS29 Aurora', stock: 20, price: 15 },
      { id: 'v121-2', size: 'Black Jelly Glue', color: 'DS29 Aurora', stock: 20, price: 15 }
      
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "4-5 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 116,
    name: "Nail Stickers Advanced Sense Wine Red Camellia",
    price: 14.99,
    description: "Pattern: Camellia",
    images: [
      "https://cf.cjdropshipping.com/quick/product/a92b5b50-eff6-4a4b-a715-a56a37917e14.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/17/02/9fee2cd3-00b2-43f3-a3d3-f68a5880bfc8_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v122-1', size: 'Glue type', color: 'M304 Wine Red Camellia', stock: 20, price: 14.99 },
      { id: 'v122-2', size: 'Jelly Glue style', color: 'M304 Wine Red Camellia', stock: 20, price: 14.99 }
      
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
   {
    id: 117,
    name: "European And American Ins Style Nail Stickers Hand Wear Fake Nails Nail Sticker",
    price: 19.99,
    description: "Super cute",
    images: [
      "https://cf.cjdropshipping.com/quick/product/85df27d4-af43-4b3b-81aa-74a81fd5e394.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/a3c7f536-f64c-43d9-a0f2-1245d26575fb.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/eaaf5816-6519-404d-bc04-c946b6218bc9.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ],
    variants: [
      { id: 'v123-1', size: 'Glue type', color: 'CBLCY347', stock: 20, price: 19.99 },
      { id: 'v123-2', size: 'Jelly Glue style', color: 'CBLCY347', stock: 20, price: 19.99 }
      
    ],
    shipping: {
      USA: "5-11 business days",
      Canada: "6-11 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 118,
    name: "Handmade Wear Nail Gold Powder Heavy Industry Manicure",
    price: 22,
    description: "Pattern: Tulip, flower, embossed",
    images: [
      "https://cf.cjdropshipping.com/quick/product/60cfafb2-5004-4672-8d58-5fb4187ddad7.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/quick/product/57f603ef-f967-41c5-9e19-f374d0fb838f.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ], // Added empty strings for the remaining images
    variants: [
      { id: 'v124-1', size: 'XS', stock: 20, price: 22 },
      { id: 'v124-2', size: 'S', stock: 20, price: 22 },
      { id: 'v124-3', size: 'M', stock: 20, price: 22 },
      { id: 'v124-4', size: 'L', stock: 20, price: 22 }
    ],
        shipping: {
      USA: "5-11 business days",
      Canada: "6-11 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
   {
    id: 119,
    name: "Women's Fashion Hand-painted Handmade Wear Manicure",
    price: 16.77,
    description: "Color: short C389",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/8426c1d0-b98a-4a2f-b136-01da5d4900ad.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/b72515f0-b448-40c0-abd0-ac0a7541b652_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ], // Added empty strings for the remaining images
    variants: [
      { id: 'v125-1', size: 'XS', stock: 20, price: 16.77 },
      { id: 'v125-2', size: 'S', stock: 20, price: 16.77 },
      { id: 'v125-3', size: 'M', stock: 20, price: 16.77 },
      { id: 'v125-4', size: 'L', stock: 20, price: 16.77 }
    ],
        shipping: {
      USA: "4-9 business days",
      Canada: "4-8 business days",
      UK: "4-5 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 120,
    name: "Metal Butterfly Fake Nails Detachable Handmade Wear Armor",
    price: 19.99,
    description: "Color: short C389",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/b0de69a6-0cfe-45b2-8b0e-995ebce113e0.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/e71344ce-6e7b-4799-b6ce-2f611f939171.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/d1db8210-4b02-4127-880b-3cbac2e735bb.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/76c0faf5-a305-4627-b440-0cb961aa4c6e.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/08/31/08/9deb8faa-ed3a-42ea-80eb-bdb5a1fcf8d3.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ], // Added empty strings for the remaining images
    variants: [
      { id: 'v126-1', size: 'XS', stock: 20, price: 19.99 },
      { id: 'v126-2', size: 'S', stock: 20, price: 19.99 },
      { id: 'v126-3', size: 'M', stock: 20, price: 19.99 },
      { id: 'v126-4', size: 'L', stock: 20, price: 19.99 }
    ],
        shipping: {
      USA: "8-12 business days",
      Canada: "8-12 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 121,
    name: "24 Pieces Steel Ball Flower Leopard Print Medium Water Pipe Nail Tip",
    price: 19.99,
    description: "Cute",
    images: [
      "https://i.ebayimg.com/images/g/B0oAAeSwoZ5pYrsI/s-l960.webp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/03/05/e2ef723b-06a8-409b-91c6-82e362095a0f_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/03/05/f60f9de0-3474-4d2d-a9e5-442a72918915_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/03/05/f60f9de0-3474-4d2d-a9e5-442a72918915_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/03/05/b2b7cec1-ebbf-4eba-b2a2-7f17bb25ae6a_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/05/03/05/1ac6db4e-8cdb-469c-b572-0c81a64df669_trans.jpeg?x-oss-process=image%2Fformat%2Cwebp"
    ], // Added empty strings for the remaining images
    variants: [
      { id: 'v127', size: 'Glue Type', color: 'Leopard Print French Style', stock: 20, price: 19.99 }
    ],
        shipping: {
      USA: "8-12 business days",
      Canada: "6-11 business days",
      UK: "6-9 business days"
    },
    category: "Nails",
    rating: 4.8
  },
    {
    id: 122,
    name: "Three-dimensional Carved Cat's Eye Line Wearing Armor Removable Nail Sticker",
    price: 15,
    description: "Cute",
    images: [
      "https://oss-cf.cjdropshipping.com/product/2025/02/20/05/962678d6-90bb-4850-bfc4-e5b634eb40cc.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/20/05/fb88ca24-8c7a-413d-9405-0e75f03ba5ae.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/20/05/6e46b6e0-9f52-4264-a1d6-c60e7fc7b4b7.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://oss-cf.cjdropshipping.com/product/2025/02/20/05/218b9ddd-f01c-4cf2-b873-234e05d35330.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ], // Added empty strings for the remaining images
    variants: [
      { id: 'v128', size: 'Regular', color: 'Z976 Flash Carved Glue', stock: 20, price: 15 }
    ],
        shipping: {
      USA: "5-11 business days",
      Canada: "4-8 business days",
      UK: "4-5 business days"
    },
    category: "Nails",
    rating: 4.8
  },
  {
    id: 123,
    name: "Pink Mid-length Nail Sequins White Cute Sweet And Simple Wear",
    price: 20,
    description: "Cute",
    images: [
      "https://cf.cjdropshipping.com/17162496/2405210338250329400.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17162496/2405210338260321800.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17162496/2405210338260324200.jpg?x-oss-process=image%2Fformat%2Cwebp",
      "https://cf.cjdropshipping.com/17162496/2405210338250327200.jpg?x-oss-process=image%2Fformat%2Cwebp"
    ], // Added empty strings for the remaining images
    variants: [
      { id: 'v129', size: 'Regular', color: 'Glue Type', stock: 20, price: 20 }
    ],
        shipping: {
      USA: "5-11 business days",
      Canada: "8-12 business days",
      UK: "9-10 business days"
    },
    category: "Nails",
    rating: 4.8
  },
];