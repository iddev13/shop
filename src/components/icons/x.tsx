type IconType = {
	className?: string;
};

export const XIcon = ({ className }: IconType) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className}>
			<g>
				<path
					fill="transparent"
					d="M486 392.599C486 443.97 443.97 486 392.599 486H119.401C68.03 486 26 443.97 26 392.599V119.401C26 68.031 68.03 26 119.401 26h273.198C443.97 26 486 68.031 486 119.401z"
					opacity="1"
					data-original="#41464a"
				></path>
				<path
					d="m290.425 233.064 110.65-137.91h-32.05l-94.62 117.94-94.63-117.94H74.125l147.45 183.78-110.66 137.92h32.05l94.63-117.95 94.64 117.95h105.65zm-164.2-112.911h41.55l218 271.7h-41.55z"
				></path>
			</g>
		</svg>
	);
};
