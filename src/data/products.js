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
      { id: 'v11', size: 'regular', color: 'Black', stock: 18, price: 4800, imageIndex: 3 },
      { id: 'v12', size: 'regular', color: 'Brown', stock: 20, price: 4800, imageIndex: 4 },
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
    }
];