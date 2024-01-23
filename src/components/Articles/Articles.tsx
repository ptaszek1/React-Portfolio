import React from "react";
import PortfolioData from "../../data/PortfolioData/PortfolioData";
import ArticleItem from "./ArticleItem";
import styles from "./Articles.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";

interface ArticlesProps {
	sectionTitleTag?: keyof JSX.IntrinsicElements; // Allow any valid HTML tag for SectionTitle
}

const Articles: React.FC<ArticlesProps> = ({ sectionTitleTag = "div" }) => {
	return (
		<div className="container w">
			<section className={styles["my-work"]}>
				<SectionTitle
					title="Moja praca"
					alignment="right"
					tag={sectionTitleTag}
				/>
				<div className="row">
					<div className="col-12">
						<a href="/portfolio" className="view-all right">
							Więcej
						</a>
					</div>
				</div>
				<div className="row">
					{PortfolioData.map((article) => (
						<ArticleItem
							key={article.id}
							title={article.title}
							image={article.mainImage}
							technology={article.technology[0]}
							slug={article.slug}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default Articles;
