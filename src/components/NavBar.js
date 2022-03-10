import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const webLinks = links.map(link => <a key={link} href={`#${link}`}>{link}</a>)

  return (
    <nav>
      {webLinks}
    </nav>
  )
}

export default NavBar;
