import Polkadot from "@/public/polkadot.svg";
import Image from "next/image";

export function Header() {
	return (
		<header className="bg-background sticky top-0 z-50 mx-auto flex h-14 w-full items-center p-2 backdrop-blur-sm">
			<nav className="flex h-12 w-full items-center justify-between">
				<div className="flex items-center gap-2">
					<Image
						src={Polkadot}
						alt="polkadot"
						width={24}
						height={24}
						priority
						className="hidden h-8 w-8 cursor-pointer max-sm:block"
					/>
					<h2 className="block max-sm:hidden">PAH Parser</h2>
				</div>
			</nav>
		</header>
	);
}
