export function Note() {
	return (
		<footer className="bottom-0 z-50 mx-auto flex h-10 w-fit items-center justify-center p-2">
			<div className="flex w-full items-center justify-between p-1">
				<div className="font-manrope flex flex-col items-start justify-center font-semibold">
					<span className="text-info text-sm">
						© {new Date().getFullYear()} Edgetributors SubDAO
					</span>
				</div>
			</div>
		</footer>
	);
}
