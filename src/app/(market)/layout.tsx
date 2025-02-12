const ShopLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="border-t mt-6 max-w-7xl w-full mx-auto p-4 pb-16 lg:pb-24">
			{children}
		</div>
	);
};

export default ShopLayout;
