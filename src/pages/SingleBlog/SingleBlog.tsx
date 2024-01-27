import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PortfolioData from "../../data/PortfolioData/PortfolioData";
import Container from "../../components/Container/Container";
import styles from "./SingleBlog.module.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import MotionWrapper from "../../components/MotionWrapper/MotionWrapper";

const SingleBlogPage: React.FC = () => {
	const [index, setIndex] = useState<number>(-1);
	const { slug } = useParams<{ slug: string }>();
	const portfolioItem = PortfolioData.find((item) => item.slug === slug);

	if (!portfolioItem) {
		return <div>Portfolio item not found</div>;
	}

	const { mainImage, date, title, description, technology, link, gallery } =
		portfolioItem;

	return (
		<MotionWrapper>
			<Container>
				<div className={styles["single-article"]}>
					<div className={styles["single-article__image"]}>
						<img src={mainImage} alt={`${title} - main image`} />
					</div>
					<div className={styles["single-article__date"]}>{date}</div>
					<h1 className={styles["single-article__title"]}>{title}</h1>
					{description && (
						<div className={styles["single-article__description"]}>
							{description}
						</div>
					)}
					<div className={styles["single-article__technologies"]}>
						<SectionTitle title="Użyte technologie" size="small" />
						{technology &&
							technology.map((tech, index) => (
								<div
									className={
										styles["single-article__technologies-item"]
									}
									key={index}
								>
									{tech}
								</div>
							))}
					</div>
					{link && (
						<>
							<SectionTitle title="Link" size="small" />
							<a
								href={link}
								className={styles["single-article__link"]}
								target="_blank"
							>
								{title}
							</a>
						</>
					)}
					{gallery && (
						<>
							<SectionTitle title="Galeria" size="small" />
							<div className={styles["single-article__gallery"]}>
								{gallery.map((image, index) => (
									<div
										className={styles["single-article__gallery-item"]}
										key={index}
									>
										<img
											src={image.small}
											alt={`${title} - image ${index + 1}`}
											onClick={() => setIndex(index)}
										/>
									</div>
								))}
							</div>
							<Lightbox
								slides={gallery.map((image) => ({ src: image.original }))}
								open={index >= 0}
								index={index}
								close={() => setIndex(-1)}
								plugins={[Slideshow, Thumbnails, Zoom]}
							/>
						</>
					)}
				</div>
			</Container>
		</MotionWrapper>
	);
};

export default SingleBlogPage;
