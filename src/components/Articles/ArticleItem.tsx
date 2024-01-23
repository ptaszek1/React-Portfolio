import React from "react";

interface ArticleItemProps {
	title: string;
	image: string;
	technology: string;
	link: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ title, image, technology, link }) => {
	return (
		<div className="col-12 col-sm-6 col-md-4">
			<a href={link} className="my-work__item">
				<div className="my-work__item-image">
					<picture>
						{/* Add your source elements here based on your requirements */}
						<img src={image} alt={title} />
					</picture>
					<div className="my-work__item-image-text">Szczegóły</div>
				</div>
				<div className="my-work__item-title">{title}</div>
				<div className="my-work__item-technology">{technology}</div>
			</a>
		</div>
	);
};

export default ArticleItem;
