import React from "react";
import PortfolioData from "../../data/PortfolioData/PortfolioData";
import ArticleItem from "../../components/Articles/ArticleItem";
import styles from "./Portfolio.module.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "../../components/Container/Container";
import MotionWrapper from "../../components/MotionWrapper/MotionWrapper";
import PageTitleSetter from "../../components/PageTitleSetter/PageTitleSetter";
import GeometryTopLeft from "../../components/Svg/GeometryTopLeft";
import MetaDescriptionSetter from "../../components/MetaDescriptionSetter/MetaDescriptionSetter";

const Portfolio: React.FC = () => {
	return (
		<MotionWrapper className={styles.portfolio}>
			<GeometryTopLeft />
			<PageTitleSetter title="Mariusz Ptaszek - Portfolio" />
			<MetaDescriptionSetter description="Zobacz moje portfolio. Znajdziesz tutaj część moich projektów, które wykonałem w ciągu ostatnich lat. Każdy z nich jest inny, ale wszystkie są zrobione z pasją i zaangażowaniem." />
			<Container>
				<section className={styles["my-work"]}>
					<SectionTitle title="Portfolio" tag="h1" />
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
