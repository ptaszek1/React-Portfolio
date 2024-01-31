import React from "react";
import styles from "./CategoryTitle.module.scss";

type CategoryTitleProps = {
	children: React.ReactNode;
};

const CategoryTitle: React.FC<CategoryTitleProps> = ({ children }) => {
	return <div className={styles["category-title"]}>{children}</div>;
};

export default CategoryTitle;
