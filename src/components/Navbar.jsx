import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light " id="navbar" style={{ backgroundColor: "rgba(184, 47, 47, 1)" }}>
			<Link to={"/create-contact"}>
				<button
					className="btn text-white fw-bold px-4 py-2 ms-3 "
					style={{
						backgroundColor: "#b30000",
						borderColor: "#990000",
						fontSize: "1.1rem",
						boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
						transition: "0.3s ease-in-out",
					}}
				>
					🔥 ¡Crea el contacto más irresistible!
				</button>
			</Link>
		</nav>
	);
};