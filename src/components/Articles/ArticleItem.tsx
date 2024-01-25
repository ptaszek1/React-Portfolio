import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ArticleItem.module.scss";

interface ArticleItemProps {
	title: string;
	image: string;
	technology: string;
	slug: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ title, image, technology, slug }) => {
	return (
		<NavLink to={`/portfolio/${slug}`} className={styles["my-work__item"]}>
			<div className={styles["my-work__item-image"]}>
				<picture>
					<img src={image} alt={title} />
				</picture>
				<div className={styles["my-work__item-image-text"]}>Szczegóły</div>
			</div>
			<div className={styles["my-work__item-title"]}>{title}</div>
			<div className={styles["my-work__item-technology"]}>{technology}</div>
		</NavLink>
	);
};

export default ArticleItem;
