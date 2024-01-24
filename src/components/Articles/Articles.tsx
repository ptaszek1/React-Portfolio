import React from "react";
import PortfolioData from "../../data/PortfolioData/PortfolioData";
import ArticleItem from "./ArticleItem";
import styles from "./Articles.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import SeeMore from "../SeeMore/SeeMore";
import Container from "../Container/Container";

interface ArticlesProps {
	sectionTitleTag?: keyof JSX.IntrinsicElements; // Allow any valid HTML tag for SectionTitle
}

const Articles: React.FC<ArticlesProps> = ({ sectionTitleTag = "div" }) => {
	return (
		<Container>
			<section className={styles["my-work"]}>
				<SectionTitle
					title="Moja praca"
					alignment="right"
					tag={sectionTitleTag}
				/>
				<SeeMore to="/portfolio" align="right" title="Więcej" />
				<div className={styles["my-work__wrapper"]}>
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
		</Container>
	);
};

export default Articles;
