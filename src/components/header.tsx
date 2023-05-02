import * as React from "react";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/turtlehead-tacos",
  },
  {
    label: "locator",
    url: "/locator",
  },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <div className="w-full bg-black">
      <div className="centered-container">
        <div className="py-6   items-center justify-between">
          <img
            src="https://www.dyson.com/etc.clientlibs/dyson/clientlibs/clientlib-main/resources/images/dyson-logo.svg"
            width="50"
            height="50"
          ></img>
          <nav className=" flex mt-4 items-center justify-between">
            <ul className=" text-sm flex items-center justify-between text-white w-1/2">
              <li>
                <a href="/floor-care">Vaccum Cleaners</a>
              </li>
              <li>
                <a href="/hair-care">Hair Care</a>
              </li>
              <li>
                <a href="/lighting">Lighting</a>
              </li>
              <li>
                <a href="/accessories">Spares and accessories</a>
              </li>
              <li>
                <a href="/help_articles">Help Articles</a>
              </li>
              <li>
                <a href="/environmental_control">Environmental Control</a>
              </li>
              <li>
                <a href="/locator">Locator</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
