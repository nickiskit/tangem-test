import { useMemo, useState, useEffect, RefObject } from 'react';

const useIsInViewport = (ref: RefObject<HTMLDivElement>, top: number) => {
	const [isIntersecting, setIsIntersecting] = useState<boolean>(true);

	const observer = useMemo(
		() =>
			new IntersectionObserver(([entry]) => {
				setIsIntersecting(
					entry.boundingClientRect.height + entry.boundingClientRect.top >= top
				);
			}),
		[]
	);

	useEffect(() => {
		if (ref.current) {
			observer.observe(ref.current);

			return () => {
				observer.disconnect();
			};
		}
	}, [ref, observer]);

	return isIntersecting;
};

export default useIsInViewport;
