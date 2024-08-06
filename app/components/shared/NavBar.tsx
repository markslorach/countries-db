import { ThemeToggle } from "./ThemeToggle"

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
        <h1>Countries of the world</h1>
        <ThemeToggle/>
    </nav>
  )
}

export default NavBar