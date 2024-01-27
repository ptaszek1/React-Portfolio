import React from "react";
import PortfolioData from "../../data/PortfolioData/PortfolioData";
import ArticleItem from "../../components/Articles/ArticleItem";
import styles from "./Portfolio.module.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "../../components/Container/Container";
import MotionWrapper from "../../components/MotionWrapper/MotionWrapper";

const Portfolio: React.FC = () => {
	return (
		<MotionWrapper className={styles.portfolio}>
			<Container>
				<section className={styles["my-work"]}>
					<SectionTitle title="Portfolio" />
					<div className={styles["my-work__wrapper"]}>
						{PortfolioData.map((article) => (
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
		</MotionWrapper>
	);
};

export default Portfolio;
