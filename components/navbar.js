function navbar() {

    return `<div id="top_nav">
    <div id="navbar">
        <h3><a href="/">NORDSTROME</a></h3>

        <div id="options">
            <input type="text" id="Search" placeholder="Search" />
            <button onclick="Search()" id="Search">Search</button>
            <h3><a href="#">Sign In</a></h3>
            <h3><a href="#">Cart</a></h3>
        </div>
    </div>
    
    <div id="navbar_2">
    
        <div>Black Friday</div>
        <div>Holiday Gift</div>
        <div><a href="women.html">Women</a></div>
        <div><a href="men.html">Men</a></div>
        <div>Kids</div>
        <div>Young Adults</div>
        <div>Activewear</div>
        <div>Home</div>
        <div>Beauty</div>
        <div>Designer</div>
        <div>Brands</div>
    
    </div>
    </div>`
    

}


export default navbar