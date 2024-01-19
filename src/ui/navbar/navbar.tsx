import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const routes = [
  {
    path: '/forecasts',
    title: 'Previsões',
  },
  {
    path: '/add-forecasts',
    title: 'Adicionar Local',
  },
];
export function NavBar(): JSX.Element {
  const { pathname } = window.location;
  const activeRoute = useMemo(() => routes.find((r) => r.path === pathname), [pathname]);
  return (
    <nav className="p-0 m-0 bg-gray-950">
      <ul className="list-none overflow-hidden p-0 m-0">
        {routes.map((r) => (
          <li className="float-left" key={r.path}>
            <Link
              className="block py-4 px-6 text-xl text-center text-neutral-50 aria-checked:bg-gray-600 aria-checked:hover:bg-gray-500 hover:bg-gray-500"
              aria-checked={activeRoute?.path === r.path}
              to={r.path}
            >
              {r.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
