import Link from "next/link";

const Navbar = () => {
  // logica
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo nome */}
        <div className="text-xl font-bold">
          <Link href={"/dashboard"}>SG-Talent</Link>
        </div>
        {/* Links de navegação */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href={"/dashboard"} className="hover:underline">
                Início
              </Link>
            </li>
            <li>
              <Link href={"/#"} className="hover:underline">
                Cadatrar Curso
              </Link>
            </li>
            <li>
              <Link href={"/#"} className="hover:underline">
                Configurações
              </Link>
            </li>
            <li>
              <Link href={"/contato"} className="hover:underline">
                Contato
              </Link>
            </li>
            <li>
              <Link href={"/#"} className="hover:underline">
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
