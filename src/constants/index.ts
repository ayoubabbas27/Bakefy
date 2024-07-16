
// NAVIGATION
export const NAV_LINKS = [
    { href: "/" , key: 'home' , label: 'Home' , icon: '/icons/home.svg'},
    { href: "/about_us" , key: 'about_us' , label: 'About Us' , icon: '/icons/aboutUs.svg'},
    { href: "/menu" , key: 'menu' , label: 'Menu' , icon: '/icons/bread_black.svg'},
    { href: "/contact_us" , key: 'contact_us' , label: 'Contact Us' , icon: '/icons/message.svg'},
];

// HERO SECTION
export const HERO_CONTENT = {
    HEADER: 'Experience Freshness in Every Bite',
    SLOGAN: 'Indulge in our handcrafted pastries and breads, baked daily with love and the finest ingredients. Visit us for a taste of tradition and quality.'
};

// Testimonials
export const TESTIMONIALS = [
    {
        name: 'Emily R.',
        content: '"Bakefy has transformed my mornings! I love being able to order fresh croissants and have them delivered to my door. It saves me so much time, and the quality is always top-notch."',
        rating: 5
    },
    {
        name: 'Michael S.',
        content: '"As a busy professional, finding time to visit a bakery is almost impossible. Bakefy makes it so easy to get delicious, fresh baked goods without the hassle. Highly recommended!"',
        rating: 5
    },
    {
        name: 'Sophia L.',
        content: '"I hosted a brunch last weekend and ordered pastries from Bakefy. My guests could not stop raving about how fresh and tasty everything was. Bakefy is my new go-to for all special occasions!"',
        rating: 5
    }
];

// MENU 
export const MENU = [
    {
        name: 'Croissants',
        image: '/images/croissants.avif',
        price: '$2.50',
        description: 'Flaky, buttery croissants',
        ingredients: 'Flour, butter, yeast, salt, sugar'
    },
    {
        name: 'Bagels',
        image: '/images/bagels.avif',
        price: '$3.00',
        description: 'Freshly baked bagels with assorted toppings',
        ingredients: 'Flour, water, yeast, salt, toppings (sesame seeds, poppy seeds, etc.)'
    },
    {
        name: 'Sourdough Bread',
        image: '/images/sourdough.avif',
        price: '$5.00',
        description: 'Artisanal sourdough loaf with crispy crust',
        ingredients: 'Whole wheat flour, water, sourdough starter, salt'
    },
    {
        name: 'Chocolate Chip Cookies',
        image: '/images/cookies.jpg',
        price: '$1.50 each',
        description: 'Soft and chewy cookies loaded with chocolate chips',
        ingredients: 'Flour, butter, sugar, eggs, chocolate chips'
    },
    {
        name: 'Red Velvet Cupcakes',
        image: '/images/cupcakes.avif',
        price: '$3.50 each',
        description: 'Moist red velvet cupcakes with cream cheese frosting',
        ingredients: 'Flour, cocoa powder, buttermilk, vinegar, red food coloring, cream cheese'
    },
    {
        name: 'Apple Pie',
        image: '/images/apple-pie.jpg',
        price: '$20.00 (Whole)',
        description: 'Classic apple pie with a flaky crust',
        ingredients: 'Apples, sugar, cinnamon, nutmeg, flour, butter'
    },
    {
        name: 'Cinnamon Rolls',
        image: '/images/cinnamon-rolls.jpg',
        price: '$3.50 each',
        description: 'Soft and gooey cinnamon rolls with icing',
        ingredients: 'Flour, butter, sugar, cinnamon, yeast, icing sugar'
    },
    {
        name: 'Cheesecake',
        image: '/images/cheesecake.jpg',
        price: '$30.00 (Whole)',
        description: 'Creamy New York-style cheesecake with graham cracker crust',
        ingredients: 'Cream cheese, sugar, eggs, sour cream, vanilla extract'
    },
    {
        name: 'Pain au Chocolat',
        image: '/images/pain-au-chocolat.avif',
        price: '$3.00',
        description: 'Flaky pastry filled with chocolate',
        ingredients: 'Flour, butter, chocolate, yeast, salt, sugar'
    },
    {
        name: 'Lemon Tart',
        image: '/images/lemon-tart.avif',
        price: '$4.00 each',
        description: 'Tangy lemon tart with a buttery crust',
        ingredients: 'Flour, butter, sugar, eggs, lemon juice, lemon zest'
    }
];


// FOOTER
export const FOOTER_LINKS = [
    {
        title: 'Learn More',
        links: [
            'About Bakefy',
            'Press Releases',
            'Environment',
            'Jobs',
            'Privacy Policy',
            'Contact Us'
        ]
    },
    {
        title: 'Products',
        links: [
            'New Menu',
            'Featured Menu',
            'Favorites'
        ]
    },
];

export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
        { label: 'Admin Officer', value: '123-456-7890' , icon: '/icons/email.svg'},
        { label: 'Email Officer', value: 'bakefy@emailofficer.com' , icon: '/icons/phone.svg'}
    ]
};

export const SOCIALS = {
    title: 'Social',
    links: [
        '/icons/facebook.svg',
        '/icons/instagram.svg',
        '/icons/twitter.svg',
        '/icons/youtube.svg',
    ]
}

// TEAM 
export const TEAM = [
    {
        name: 'Jane Thompson',
        position: 'Head Baker',
        experience: '15 years in artisanal baking',
        message: '"We pour love into every loaf. Enjoy our passion!"',
        image: '/images/profile1.avif'
    },
    {
        name: 'Alex Martinez',
        position: 'Operations Manager',
        experience: '10 years in bakery logistics.',
        message: '"I am here to ensure your Bakefy experience is seamless and delightful."',
        image: '/images/profile2.jpg'
    },
    {
        name: 'Lisa Wong',
        position: 'Creative Director',
        experience: '12 years in pastry design.',
        message: '"Every treat is a work of art. Enjoy the creativity!"',
        image: '/images/profile3.avif'
    },
]

// ORDER
export const DELIVERY_PARTNERS = [
    { 
        name: 'Uber Eats',
        href: 'https://www.ubereats.com/fr',
        description: 'A widely used food delivery service that partners with numerous restaurants and bakeries to deliver food to customers quickly.',
        logo: '/icons/UberEats.svg'
    },
    { 
        name: 'DoorDash',
        href: 'https://www.doordash.com/',
        description: 'Another popular delivery platform that offers a vast selection of restaurants, including local bakeries, with fast and reliable service.',
        logo: '/icons/DoorDash.svg'
    },
    { 
        name: 'Grubhub',
        href: 'https://www.grubhub.com/',
        description: 'Known for its extensive restaurant network and convenient delivery options, Grubhub is a go-to choice for many customers.',
        logo: '/icons/Grubhub.svg'
    }
]