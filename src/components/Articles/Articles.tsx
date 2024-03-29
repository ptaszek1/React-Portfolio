import React from "react";
import PortfolioData from "../../data/PortfolioData/PortfolioData";
import ArticleItem from "./ArticleItem";
import styles from "./Articles.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import SeeMore from "../SeeMore/SeeMore";
import Container from "../Container/Container";
import ManyShapes from "../Svg/ManyShapes";

interface ArticlesProps {
	sectionTitleTag?: keyof JSX.IntrinsicElements;
	limit?: number;
	showShapes?: boolean;
}

const Articles: React.FC<ArticlesProps> = ({
	sectionTitleTag = "div",
	limit,
	showShapes = false,
}) => {
	const articlesToDisplay = limit ? PortfolioData.slice(0, limit) : PortfolioData;

	return (
		<Container>
			<section className={styles["my-work"]}>
				{showShapes && (
					<div className={styles["my-work__shapes"]}>
						<ManyShapes />
					</div>
				)}
				<SectionTitle
					title="Moja praca"
					alignment="right"
					tag={sectionTitleTag}
				/>
				<SeeMore to="/portfolio" align="right" title="Więcej" />
				<div className={styles["my-work__wrapper"]}>
					{articlesToDisplay.map((article) => (
						<ArticleItem
							key={article.id}
							title={article.title}
							image={article.smallImage}
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
