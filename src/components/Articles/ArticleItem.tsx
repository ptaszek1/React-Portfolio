import React from "react";
import { NavLink } from "react-router-dom";

interface ArticleItemProps {
	title: string;
	image: string;
	technology: string;
	slug: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ title, image, technology, slug }) => {
	return (
		<div className="col-12 col-sm-6 col-md-4">
			<NavLink to={`/portfolio${slug}`} className="my-work__item">
				<div className="my-work__item-image">
					<picture>
						<img src={image} alt={title} />
					</picture>
					<div className="my-work__item-image-text">Szczegóły</div>
				</div>
				<div className="my-work__item-title">{title}</div>
				<div className="my-work__item-technology">{technology}</div>
			</NavLink>
		</div>
	);
};

export default ArticleItem;
