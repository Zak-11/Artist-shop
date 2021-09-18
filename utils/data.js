import bcrypt from 'bcryptjs'
const data = {
    users: [
        {
            name: 'Diana',
            email: 'admin@rambler.ru',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Kris',
            email: 'user@erambler.ru',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [

        {
            name: 'Soap bubbles in Paris',
            slug: 'Soap-bubbles-in-Paris',
            category: 'Paris',
            image: '/images/bubblePa.jpg',
            isFeatured: true,
            featuredImage: '/images/bubblePa.jpg',
            price: 50,
            brand: 'KT',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular please ',
        }, {
            name: 'Building in Paris',
            slug: 'Building-in-Paris',
            category: 'Paris',
            image: '/images/bildPa.jpg',
            isFeatured: true,
            featuredImage: '/images/car.jpg',
            price: 65,
            brand: 'KT',
            rating: 4.8,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular please ',
        }, {
            name: 'Eliel in Paris',
            slug: 'Eliel-in-Paris',
            category: 'Paris',
            image: '/images/bashPa.jpg',
            price: 55,
            brand: 'KT',
            rating: 4.2,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular please ',
        }, {
            name: ' Window in Berlin',
            slug: ' Window-in-Berlin',
            category: 'Berlin',
            image: '/images/windBer.jpg',
            price: 55,
            brand: 'KT',
            rating: 4.6,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular please ',
        }, {
            name: 'Rand in Berlin',
            slug: 'Rand-in-Berlin',
            category: 'Berlin',
            image: '/images/raundBr.jpg',
            price: 70,
            brand: 'KT',
            rating: 4.7,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular please ',
        }, {
            name: 'Rive in Berlin',
            slug: 'Rive-in-Berlin',
            category: 'Berlin',
            image: '/images/riveBer.jpg',
            price: 70,
            brand: 'KT',
            rating: 4.7,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular please ',
        }
    ]
}

export default data