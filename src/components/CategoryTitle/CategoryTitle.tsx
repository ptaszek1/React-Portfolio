import React from "react";
import styles from "./CategoryTitle.module.scss";

type CategoryTitleProps = {
	className?: string;
	children: React.ReactNode;
};

const CategoryTitle: React.FC<CategoryTitleProps> = ({ children, className }) => {
	return <div className={styles["category-title"]}>{children}</div>;
};

export default CategoryTitle;
