import React from 'react'

function HeaderList() {
    const headerNav = [
        {
          display: "Salads and Soup",
          path: "/",
        },
        {
          display: "From the BarnYard",
          path: "/SeeAll",
        },
        {
          display: "From the Hen House",
          path: "/tv",
        },
        {
            display: "Fresh from the sea",
            path: "/tv",
          },
      ];
  return (
    <div>
    <ul className="header__nav mb-0">
    {headerNav.map((e, i) => (
      <li key={i} className={`${i === active ? "active" : ""}`}>
        <Link to={e.path}>{e.display}</Link>
      </li>
    ))}</ul>
    </div>
  )
}

export default HeaderList