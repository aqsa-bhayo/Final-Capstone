import React, { useState } from 'react';
import sandwichImage from '../../../assets/sendwichch.jpg';
import cheesyFriesImage from '../../../assets/cheesy fries.jpg';
import chickenWingsImage from '../../../assets/chicken wings.jpg';
import vegBurgerImage from '../../../assets/vg burger.jpg';
import onionRingsImage from '../../../assets/onion rings.jpg';
import cheesyNachosImage from '../../../assets/cheesy nochos.jpg';
import garlicBreadImage from '../../../assets/garlic bread.jpg';
import mozzarellaSticksImage from '../../../assets/moxrela sticks.jpg';
import springRollsImage from '../../../assets/spring rolls.jpg'
import bbqBurgerImage from '../../../assets/bbq burger1.jpg';
import mushroomBurgerImage from '../../../assets/mashroom burger.jpg';
import spicyBurgerImage from '../../../assets/spicy burger.jpg';
import classicBurgerImage from '../../../assets/classic burger.jpg';
import veggieBurgerImage from '../../../assets/veggie burger.jpg';
import curlyFriesImage from '../../../assets/curly fries.jpg';
import sweetPotatoFriesImage from '../../../assets/potato fries.jpg';
import chocolateShakeImage from '../../../assets/chocklate shake.jpg';
import vanillaShakeImage from '../../../assets/vanila shake.jpg';
import strawberryShakeImage from '../../../assets/strawberry shake.jpg';
import cocoColaImage from '../../../assets/coco cola.jpg';
import spriteImage from '../../../assets/sprite.jpg';
import fantaImage from '../../../assets/fanta.jpg';
import Header from '../../../components/Header/Header';

function FootDetailPage() {
    const [activeTab, setActiveTab] = useState('All'); // Default tab is 'All'

    const menuItems = {
        Popular: [
            { id: 1, name: 'Fried Chicken Sandwich', price: 'Rs. 625.50', description: 'Crispy Fried Chicken Patty, Swiss Cheese Slice, Jalapenos...', image: sandwichImage },
            { id: 2, name: 'Cheesy Fries', price: 'Rs. 350', description: 'Golden fries topped with melted cheese', image: cheesyFriesImage },
            { id: 3, name: 'Chicken Wings', price: 'Rs. 400', description: 'Crispy fried chicken wings', image: chickenWingsImage },
            { id: 4, name: 'Veg Burger', price: 'Rs. 300', description: 'Vegetarian burger with fresh veggies', image: vegBurgerImage },
            { id: 5, name: 'Onion Rings', price: 'Rs. 150', description: 'Crispy fried onion rings', image: onionRingsImage },
        ],
        Starters: [
            { id: 1, name: 'Cheesy Nachos', price: 'Rs. 350', description: 'Crispy nachos topped with melted cheese and jalapenos.', image: cheesyNachosImage },
            { id: 2, name: 'Garlic Bread', price: 'Rs. 250', description: 'Toasted bread with garlic and butter', image: garlicBreadImage },
            { id: 3, name: 'Mozzarella Sticks', price: 'Rs. 280', description: 'Crispy mozzarella sticks served with marinara sauce', image: mozzarellaSticksImage },
            { id: 4, name: 'Spring Rolls', price: 'Rs. 200', description: 'Crispy spring rolls filled with vegetables', image: springRollsImage },
        ],
        'Premium Burgers': [
            { id: 1, name: 'BBQ Bacon Burger', price: 'Rs. 850', description: 'Juicy beef patty with BBQ sauce and crispy bacon', image: bbqBurgerImage },
            { id: 2, name: 'Mushroom Swiss Burger', price: 'Rs. 780', description: 'Beef patty topped with mushrooms and Swiss cheese', image: mushroomBurgerImage },
            { id: 3, name: 'Spicy Chicken Burger', price: 'Rs. 600', description: 'Spicy fried chicken patty with jalapenos', image: spicyBurgerImage },
        ],
        'Classic Burgers': [
            { id: 1, name: 'Classic Cheeseburger', price: 'Rs. 500', description: 'Beef patty with cheddar cheese', image: classicBurgerImage },
            { id: 2, name: 'Veggie Burger', price: 'Rs. 350', description: 'A healthy veggie patty with fresh toppings', image: veggieBurgerImage },
        ],
        Fries: [
            { id: 1, name: 'Curly Fries', price: 'Rs. 180', description: 'Crispy curly fries', image: curlyFriesImage },
            { id: 2, name: 'Sweet Potato Fries', price: 'Rs. 220', description: 'Crispy sweet potato fries', image: sweetPotatoFriesImage },
        ],
        Shakes: [
            { id: 1, name: 'Chocolate Shake', price: 'Rs. 350', description: 'Rich and creamy chocolate shake', image: chocolateShakeImage },
            { id: 2, name: 'Vanilla Shake', price: 'Rs. 300', description: 'Classic vanilla shake with whipped cream', image: vanillaShakeImage },
            { id: 3, name: 'Strawberry Shake', price: 'Rs. 320', description: 'Sweet and tangy strawberry shake', image: strawberryShakeImage },
        ],
        Beverages: [
            { id: 1, name: 'Coca-Cola', price: 'Rs. 100', description: 'Refreshing Coca-Cola', image: cocoColaImage },
            { id: 2, name: 'Sprite', price: 'Rs. 100', description: 'Lemon-lime soda', image: spriteImage },
            { id: 3, name: 'Fanta', price: 'Rs. 100', description: 'Citrusy Fanta', image: fantaImage },
        ],
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Header />
            <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>

                {/* Main Food Item Section */}
                <div style={{ display: 'flex', marginBottom: '30px', justifyContent: 'space-between' }}>
                    <img
                        src="https://images.deliveryhero.io/image/fd-pk/LH/p1pb-listing.jpg?width=200&height=200"
                        alt="Fried Chicken Sandwich"
                        style={{ width: '200px', height: '200px', borderRadius: '8px' }}
                    />
                    <div style={{ flex: 1, paddingLeft: '20px' }}>
                        <h1 style={{ fontSize: '24px', margin: '0' }}>Fried Chicken Sandwich</h1>
                        <p style={{ fontSize: '18px', color: '#555', margin: '5px 0' }}>
                            from Rs. 625.50 <span style={{ textDecoration: 'line-through', color: '#999' }}>Rs. 695</span>
                        </p>
                        <p style={{ fontSize: '14px', color: '#777' }}>
                            Crispy Fried Chicken Patty, Swiss Cheese Slice, Jalapenos, Gherkin...
                        </p>
                    </div>
                </div>

                {/* Tabs Section */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginBottom: '30px',
                        backgroundColor: '#f8f8f8',
                        padding: '10px',
                        borderRadius: '8px',
                    }}
                >
                    {['All', 'Popular', 'Starters', 'Premium Burgers', 'Classic Burgers', 'Fries', 'Shakes', 'Beverages'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            style={{
                                border: 'none',
                                background: 'none',
                                padding: '5px 10px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                color: '#ff3366',
                                fontWeight: activeTab === tab ? 'bold' : 'normal',
                                borderBottom: activeTab === tab ? '2px solid #ff3366' : 'none',
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Menu Sections */}
                <div>
                    {/* Show Items for the Selected Tab */}
                    {activeTab === 'All' && (
                        Object.keys(menuItems).map((category) => (
                            <div key={category}>
                                <h2 style={{ fontSize: '20px', marginBottom: '20px', color: '#333', marginTop: '50px' }}>
                                    🔥 {category}
                                </h2>
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                                        gap: '20px',
                                    }}
                                >
                                    {menuItems[category].map((item) => (
                                  <div key={item.id} style={{
                                    border: '1px solid #eee',
                                    borderRadius: '12px', // Added border radius for rounded corners
                                    padding: '20px',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between', // Ensures that content is spaced out properly
                                    height: '450px', // Fixed height to ensure uniformity
                                    backgroundColor: '#fff',
                                    boxSizing: 'border-box', // Ensures padding doesn't affect overall height
                                    overflow: 'hidden', // Prevents any content overflow
                                }}>
                                
                                    {/* Image Section */}
                                    <img src={item.image} alt={item.name} style={{
                                        width: '200px',
                                        height: '200px',
                                        objectFit: 'cover',
                                        marginBottom: '15px',
                                        borderRadius: '8px',
                                        alignSelf: 'center', // Centers the image
                                    }} />
                                
                                    {/* Title Section */}
                                    <h3 style={{
                                        fontSize: '16px',
                                        margin: '5px 0',
                                        color: '#333',
                                        fontWeight: 'bold',
                                    }}>
                                        {item.name}
                                    </h3>
                                
                                    {/* Price Section */}
                                    <p style={{
                                        fontSize: '14px',
                                        color: '#555',
                                        margin: '5px 0',
                                    }}>
                                        {item.price} <span style={{
                                            textDecoration: 'line-through',
                                            color: '#999',
                                        }}>Rs. 695</span>
                                    </p>
                                
                                    {/* Description Section */}
                                    <p style={{
                                        fontSize: '12px',
                                        color: '#777',
                                        margin: '5px 0',
                                        height: '50px', // Make sure description area has fixed height if needed
                                        overflow: 'hidden',
                                    }}>
                                        {item.description}
                                    </p>
                                
                                    {/* Add to Cart Button */}
                                    <button style={{
                                        padding: '10px 20px',
                                        backgroundColor: '#ff3366',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '8px', // Rounded corners for the button
                                        cursor: 'pointer',
                                        marginTop: 'auto', // Keeps button at the bottom of the card
                                        fontSize: '14px',
                                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                                        transition: 'background-color 0.3s', // Smooth hover effect
                                    }}
                                    onMouseOver={(e) => e.target.style.backgroundColor = '#e02a56'}
                                    onMouseOut={(e) => e.target.style.backgroundColor = '#ff3366'}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                                
                                    
                                    ))}
                                </div>
                            </div>
                        ))
                    )}

                    {/* Repeat similar logic for the other tabs (Popular, Starters, etc.) */}
                    {activeTab !== 'All' && (
                        <div>
                            <h2>{activeTab}</h2>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                                    gap: '20px',
                                }}
                            >
                                {menuItems[activeTab]?.map((item) => (
                                    <div key={item.id} style={{
                                        border: '1px solid #eee',
                                        borderRadius: '8px',
                                        padding: '20px',
                                        textAlign: 'center',
                                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                        height: '380px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                    }}>
                                        <img src={item.image} alt={item.name} style={{
                                            width: '200px',
                                            height: '200px',
                                            objectFit: 'cover',
                                            marginBottom: '15px',
                                            borderRadius: '8px',
                                            alignSelf: 'center',
                                        }} />
                                        <h3 style={{ fontSize: '16px', margin: '5px 0', color: '#333' }}>
                                            {item.name}
                                        </h3>
                                        <p style={{ fontSize: '14px', color: '#555', margin: '5px 0' }}>
                                            {item.price} <span style={{ textDecoration: 'line-through', color: '#999' }}>Rs. 695</span>
                                        </p>
                                        <p style={{ fontSize: '12px', color: '#777' }}>{item.description}</p>
                                        <button style={{
                                            padding: '10px 20px',
                                            backgroundColor: '#ff3366',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            marginTop: 'auto',
                                            fontSize: '14px',
                                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                                        }}>
                                            Add to Cart
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default FootDetailPage;
