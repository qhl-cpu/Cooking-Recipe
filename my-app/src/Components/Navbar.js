import "../css/navbar.css"

export default function Navbar() {

  return (
    <header>
        
        <h1 className = "logo"> RecipeMaster</h1>
        <input type="checkbox" id = "nav-toggle" className = "nav-toggle"/>
        <nav id = "navbar">
            <ul id = "navbarList">
                <li><a href = "recipeWebsite.html">Home </a></li>
                <li><a href = "about.html">About </a></li>
                <li><a href = "recipeWebsite.html">Example recipes </a></li>
                <li><a href = "recipeWebsite.html">Contact </a></li>
                <li><a href = "recipeWebsite.html">Join Us </a></li>
            </ul>
        </nav>
        <label htmlFor = "nav-toggle" className = "nav-toggle-label">
          <span></span>
        </label>
    </header>
    
  );
}
