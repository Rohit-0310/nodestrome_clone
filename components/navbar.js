function navbar() {

    return `<div id="top_nav">
    <div id="navbar">
        <div id="top_nav_1"><a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Nordstrom_Logo_2019.svg/1280px-Nordstrom_Logo_2019.svg.png"/></a></div>

        <div id="options">
            <input type="text" id="Search" placeholder="Search" />
            <button onclick="Search()" id="Search">Search</button>
            <h3><a href="SignIn.html">Sign In</a></h3>
            <h3><a href="cart.html">Cart</a></h3>
        </div>
    </div>
    
    <div id="navbar_2">
    
        <div><a href="BlackFriday.html">Black Friday</a></div>
        <div><a href="holidaygift.html">Holiday Gift</a></div>
        <div><a href="women.html">Women</a></div>
        <div><a href="men.html">Men</a></div>
        <div>Kids</div>
        <div>Young Adults</div>
        <div>Activewear</div>
        <div><a href="index.html">Home</a></div>
        <div>Beauty</div>
        <div>Designer</div>
        <div>Brands</div>
    
    </div>
    </div>`
    

}


export default navbar