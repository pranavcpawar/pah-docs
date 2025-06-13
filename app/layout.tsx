import type { Metadata } from "next";
import {
	geist,
	manrope,
	montserrat,
	poppins,
	unbounded,
	workSans,
} from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Header } from "@/app/header";
import { Note } from "@/app/note";
import { Toaster } from "sonner";

export const metadata: Metadata = {
	title: "PAH Parser",
	description: "PAH Parser by Edgetributors SubDAO",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					manrope.variable,
					poppins.variable,
					geist.variable,
					unbounded.variable,
					montserrat.variable,
					workSans.variable,
					"antialiased"
				)}
			>
				<div className="flex min-h-dvh w-full flex-col items-center justify-between px-1 pt-1 pb-2">
					<Header />
					<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#131313_1px,transparent_1px),linear-gradient(to_bottom,#131313_1px,transparent_1px)] bg-[size:2rem_2rem]" />
					<main className="font-geist-sans flex w-full flex-1 flex-col items-center gap-2 p-2">
						{children}
					</main>
					<Note />
				</div>
        <Toaster position="bottom-right" richColors theme="dark" className="text-sm font-manrope font-medium" />
			</body>
		</html>
	);
}
