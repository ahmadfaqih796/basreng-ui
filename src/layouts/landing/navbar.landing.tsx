import React from "react";

const NAV_LINKS = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export const NavbarLanding = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="w-full h-[70px] bg-amber-100 shadow-md px-4 flex items-center justify-between sticky top-0">
      <h1 className="text-2xl font-bold">Faqih</h1>
      <ul className="hidden sm:flex sm:items-center sm:gap-5">
        {NAV_LINKS.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden">
        <button onClick={handleToggle}>
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          )}
        </button>
      </div>
      {toggle && (
        <div className="w-[100px] h-[160px] absolute top-[80px] right-2 bg-amber-100 rounded-2xl shadow-md sm:hidden">
          <ul className="flex flex-col justify-around items-center gap-5 w-full h-full">
            {NAV_LINKS.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
