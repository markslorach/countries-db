import { ThemeToggle } from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav className="h-20 mb-20 border-b">
      <div className="container flex h-full justify-between items-center">
        <h1 className="font-semibold">Countries of the world</h1>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
