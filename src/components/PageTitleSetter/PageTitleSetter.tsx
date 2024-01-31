import React, { useEffect } from "react";

type PageTitleSetterProps = {
	title: string;
};

const PageTitleSetter: React.FC<PageTitleSetterProps> = ({ title }) => {
	useEffect(() => {
		document.title = title;
	}, [title]);

	return null;
};

export default PageTitleSetter;
