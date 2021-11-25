const products = [
  
   {
    name: 'Dettol Antiseptic Liquid Bottle',
    image: '/images/Dettol.jpg',
    description:'One of the safest and trusted brands in hygiene is Dettol. This Dettol Hand Sanitizer has an antimicrobial effect. ',
    brand: 'DETTOL',
    category: 'Antiseptic Liquid',
    price: 129.99,
    countInStock: 400,
    rating: 930,
    numReviews: 1224,
  },

{
    name: 'Calcimax',
    image: '/images/Calcimax.jpg',
    description:'PharmEasy Hot Water Bag is specially designed to provide a hot compress that can help to relieve pain when applied locally. It is made with high-quality rubber that is not affected by hot water.',
    brand: 'Calcimax',
    category: 'Vitamine',
    price: 210.00,
    countInStock:10,
    rating: 3,
    numReviews: 4,
  },
{
    name: 'Protinex',
    image: '/images/Protinex.jpg',
    description:'The daily meal you eat may often give you only half the nutrition required by your body to lead an active life.',
    brand: 'Protinex',
    category: 'Immunity Booster',
    price: 400.99,
    countInStock: 100,
    rating: 120,
    numReviews: 210,
  },

//new




{
    name: 'Pharmeasy Hot Water Bag',
    image: '/images/Water Bag.jpg',
    description:'PharmEasy Hot Water Bag is specially designed to provide a hot compress that can help to relieve pain when applied locally.  It is made with high-quality rubber that is not affected by hot water. It does not melt or leak and has enhanced durability.',
    brand: 'Amazon',
    category: 'Pain relieve',
    price: 399.99,
    countInStock:20,
    rating: 5,
    numReviews: 30,
  },


{
    name: 'Kofol Cough Syrup Bottle Of 100 Ml',
    image: '/images/Kofol.jpg',
    description:'Kofol Cough Syrup is specially formulated to alleviate the recurrence and urge of coughing. Coughing is caused due to respiratory tract infection and allergies.',
    brand: 'Kofol',
    category: 'Cough Syrup',
    price: 59.99,
    countInStock: 50,
    rating: 3,
    numReviews: 120,
  },

{
    name: 'Revital H Health Supplement Capsules',
    image: '/images/Revital.jpg',
    description:'The daily meal you eat may often give you only half the nutrition required by your body to lead an active life. Protinex is a power-packed beverage mix that helps you lead a complete and healthy life.',
    brand: 'Revital',
    category: 'Immunity Booster',
    price:279.99,
    countInStock: 50,
    rating: 150,
    numReviews: 285,
  },

{
    name: 'Becozym C Forte ( Vitamin B Complex + Biotin + Vitamin C )',
    image: '/images/Becozym.jpg',
    description:
      'Becozym C Forte is a vitamin supplement tablet that contains 3 vital and essential vitamins that are required by the body for regular functioning. These vitamins play an important role in boosting and supporting the immune system, helping with energy requirements as well as improving skin quality.',
    brand: 'Becozym',
    category: 'Vitamin',
    price: 49.99,
    countInStock: 30,
    rating: 500,
    numReviews: 700,
  },

{
    name: 'Saridon Headache Relief Tablet',
    image: '/images/Saridon.jpg',
    description:
      'Saridon tablets are usually used for headache relief. This tablet acts as a mild analgesic medicine that is primarily used as a pain reliever. It can also be used to relieve toothache, menstrual pain and postoperative pain. It is recommended by the doctors during fever as it contains paracetamol.',
    brand: 'Saridon',
    category: 'Headache Relief',
    price: 39.99,
    countInStock: 60,
    rating: 500,
    numReviews: 823,
  },

{
    name: 'Volini Pain Relief Gel Tube',
    image: '/images/Volini.jpg',
    description:
      'The Volini Gel is a pain relief gel that comes in a squeeze tube for easy application on the problem areas of the skin. Volini works by making blood vessels open up near the skin, in the area where it is applied. This increases blood flow to the painful area, which relieves the pain.',
    brand: 'Volini',
    category: 'Pain Relief Gel',
    price: 119.99,
    countInStock: 110,
    rating: 480,
    numReviews: 650,
  },

{
    name: 'Moov Body Pain Gel',
    image: '/images/Moov.jpg',
    description:'When you face chronic or sudden pain from daily activities, Moov Gel has you covered. With a fast-acting pain relief action, Moov Body Pain Gel is the perfect addition to your first aid kit. Whether you get a cramp from being too exhausted or a sprain from carrying heavy objects, Moov cream will help you find relief quickly and effectively.',
    brand: 'Moov',
    category: 'Body Pain Gel',
    price: 49.99,
    countInStock: 80,
    rating: 70,
    numReviews: 200,
  },

{
    name: 'Moov Pain Relief Spray Bottle',
    image: '/images/MoovSpray.jpg',
    description:'Modern lifestyles can cause both men and women to suffer from innumerable pain, for several reasons, on various body parts. Pain always comes uninvited and can occur even while doing everyday tasks such as lifting heavy objects or wrong posture at work or home.',
    brand: 'Moov',
    category: 'Pain Relief Spray',
    price: 179.99,
    countInStock: 50,
    rating: 50,
    numReviews: 90,
  },

{
    name: 'Vicks Cough Drops',
    image: '/images/Vicks.jpg',
    description:'Vicks Cough Drops composition delivers an on the spot remedy to your throat disorders. Ayurvedic medicine is an ancient Indian system of medicine and is extensively used in these cough drops.',
    brand: 'Vicks',
    category: 'Cough Drops',
    price: 149.99,
    countInStock: 80,
    rating: 30,
    numReviews: 130,
  },

{
    name: 'Dettol Clinical Strength Antiseptic Hand Rub Sanitizer',
    image: '/images/Sanitizer.jpg',
    description:'One of the safest and trusted brands in hygiene is Dettol. This Dettol Hand Sanitizer has an antimicrobial effect. It works against bacteria, fungus, viruses and other germs. Dettol Hand Sanitizer has 99.99% efficacy against killing germs.',
    brand: 'Dettol',
    category: 'Antiseptic Hand Rub Sanitizer',
    price: 329.99,
    countInStock: 180,
    rating: 40,
    numReviews: 430,
  },

{
    name: 'Safent Particulate Respirator N95 Mask',
    image: '/images/Mask.jpg',
    description: 'An N95 respirator is a respiratory protective device designed to achieve a very close facial fit and very efficient filtration of airborne particles. Note that the edges of the respirator are designed to form a seal around the nose and mouth. Surgical N95 Respirators are commonly used in healthcare settings and are a subset of N95 Filtering Facepiece Respirators (FFRs),often referred to as N95s.',
    brand: 'SAFENT PM-2.5 AIR POLLUTION N95 MASK &NDASH; BLACK/WHITE',
    category: 'N95 Mask',
    price: 349.99,
    countInStock: 50,
    rating: 25,
    numReviews: 462,
  },

{
    name: 'Calpol 650mg',
    image: '/images/Calpol.jpg',
    description:'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Pain and fever',
    price: 36.99,
    countInStock: 110,
    rating: 40,
    numReviews: 565,
  },

{
    name: 'Waterproof Flexible Tip Digital Thermometer',
    image: '/images/Thermometerl.jpg',
    description:'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'DR TRUST',
    category: 'Digital Thermometer',
    price: 189.99,
    countInStock: 140,
    rating: 35,
    numReviews: 923,
  },

{
    name: 'Sumo Strip Of 15 Tablets',
    image: '/images/Sumo.jpg',
    description:'Sumo tablet is a pain-relieving. It contains a combination of paracetamol and nimesulide. Sumo tablet used for the treatment of fever and pain. It helps relieve the different types of pain such as headache, toothache, ear pain, joint pain and menstrual pain.',
    brand: 'Sumo',
    category: 'Fever and pain',
    price: 24.99,
    countInStock: 200,
    rating: 20,
    numReviews: 824,
  },



{
    name: 'Boost Nutrition Drink',
    image: '/images/Boost.jpg',
    description:'Boost nutrition drink is a malt-based nutrition drink made for consumption by growing kids. Packed with essential nutrients, Boost nutrition drink is very helpful in aiding the growth of kids. It comes in a delicious chocolate flavour which is a favourite among kids. Boost has been clinically demonstrated to increase stamina threefold than what would be normally.',
    brand: 'Boost',
    category: 'Nutrition Drink',
    price: 169.99,
    countInStock: 220,
    rating: 38,
    numReviews: 488,
  },

{
    name: 'Colgate Toothpaste - Total Charcoal - Advanced Protection',
    image: '/images/Colgate.jpg',
    description:'Colgate Strong Teeth Toothpaste is created to help you achieve stronger teeth by replacing the calcium naturally in your teeth. It is constructed in such a way that it is easy to use. It san antibacterial toothpaste that aggressively seeks bacteria and kills germs on teeth, tongue, cheeks and gums for up to 12 hours, leaving your mouth clean.',
    brand: 'Colgate',
    category: 'Toothpaste',
    price: 119.99,
    countInStock: 220,
    rating: 15,
    numReviews: 455,
  },

{
    name: 'Horlicks Health & Nutrition Drink Jar',
    image: '/images/Horlicks.jpg',
    description:'Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.',
    brand: 'Horlicks',
    category: 'Health & Nutrition Drink',
    price: 225.85,
    countInStock: 55,
    rating: 330,
    numReviews: 724,
  },

{
    name: 'Tears Plus Eye Drops',
    image: '/images/Eye.jpg',
    description: 'Tears Plus Eye Drop is an antibiotic. The active ingredient of this medication is Azithromycin. It is used to treat many bacterial infections associated with different parts of the body. It works by killing the bacteria responsible for the infection. You should always take this medicine for the prescribed duration for effective infection control.',
    brand: 'Tears Plus Eye Drops',
    category: 'Bacterial infection',
    price: 92.99,
    countInStock: 60,
    rating: 20,
    numReviews: 644,
  },


]

export default products
