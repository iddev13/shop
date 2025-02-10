const ShopLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="border-t mt-6 max-w-7xl w-full mx-auto p-4 pb-24 lg:pb-32">
			{children}
		</div>
	);
};

export default ShopLayout;
