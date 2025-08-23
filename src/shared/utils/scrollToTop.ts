export const scrollToTop = (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
	if (e?.ctrlKey) return;

	const body = document.querySelector('#root') as Element;
	body.scrollIntoView();
};
