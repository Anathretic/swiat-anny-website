import { useState, useEffect } from 'react';

const initialState = 'Wyślij';

export const useContactFormButton = () => {
	const [buttonText, setButtonText] = useState(initialState);

	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout>;
		if (buttonText !== initialState) {
			timeout = setTimeout(() => setButtonText(initialState), 2500);
		}
		return () => clearTimeout(timeout);
	}, [buttonText]);

	return [buttonText, setButtonText] as const;
};
