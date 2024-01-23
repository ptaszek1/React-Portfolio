import React from "react";
import PortfolioData from "../../data/PortfolioData/PortfolioData";
import ArticleItem from "../../components/Articles/ArticleItem";
import styles from "./Portfolio.module.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Portfolio: React.FC = () => {
	return (
		<div className="container w">
			<section className={styles["my-work"]}>
				<SectionTitle title="Portfolio" />
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

export default Portfolio;
