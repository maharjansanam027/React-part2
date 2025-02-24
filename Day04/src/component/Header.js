function Header(){
    return(
        <div className="header">
            <div className="logo">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-logo-icon-download-in-svg-png-gif-file-formats--shopping-brand-online-application-app-mobile-indian-companies-pack-logos-icons-2249158.png?f=webp&w=256" alt="" height="50px" width="50px"/>
            </div>
            <div className="navbar">
                <button className="but">MEN</button>
                <button className="but">WOMEN</button>
                <button className="but">KIDS</button>
                <button className="but">HOME & LIVING</button>
                <button className="but">BEAUTY</button>
            </div>
            <input type="search" className="searchbar" placeholder="Search for Products, Brand and More" />
            <div className="right-side">
                <button className="but">Profile</button>
                <button className="but">Wishlist</button>
                <button className="but">Bag</button>
            </div>
        </div>
    )
}

export default Header;