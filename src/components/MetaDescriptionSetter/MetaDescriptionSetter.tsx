import React, { useEffect } from "react";

type MetaDescriptionSetterProps = {
	description: string;
};

const MetaDescriptionSetter: React.FC<MetaDescriptionSetterProps> = ({ description }) => {
	useEffect(() => {
		const existingMetaDescription = document.querySelector(
			'meta[name="description"]'
		);

		if (existingMetaDescription) {
			existingMetaDescription.setAttribute("content", description);
		} else {
			const metaDescriptionTag = document.createElement("meta");
			metaDescriptionTag.name = "description";
			metaDescriptionTag.content = description;
			document.head.appendChild(metaDescriptionTag);
		}
	}, [description]);

	return null;
};

export default MetaDescriptionSetter;
