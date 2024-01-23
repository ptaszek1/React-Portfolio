// Catering Gorąco Polecam

import $cgp from "../../assets/images/portfolio/cgp/goraco-polecam.jpg";
import $cgpHome from "../../assets/images/portfolio/cgp/gp-sg.png";
import $cgpCart from "../../assets/images/portfolio/cgp/gp-koszyk.png";
import $cgpSingle from "../../assets/images/portfolio/cgp/gp-single-product.png";

// MR - Medyczna rejestracja

import $mr from "../../assets/images/portfolio/mr/medycznarejestracja1.jpg";
import $mrBlog from "../../assets/images/portfolio/mr/mr-blog.png";
import $mrHome from "../../assets/images/portfolio/mr/mr-strona-glowna.png";
import $mrBenefits from "../../assets/images/portfolio/mr/mr-korzysci.png";

const PortfolioData: {
	id: number;
	title: string;
	description: string;
	technology: Array<string>;
	link: string;
	slug: string;
	gallery: Array<string>;
	mainImage: string;
	date: string;
}[] = [
	{
		id: 1,
		title: "Catering Gorąco Polecam",
		description: "",
		technology: ["Wordpress", "Woocommerce", "Sass", "Javascript", "ACF Pro", "PHP"],
		link: "https://catering.goraco-polecam.pl",
		slug: "/catering-goraco-polecam",
		gallery: [$cgpHome, $cgpCart, $cgpSingle],
		mainImage: $cgp,
		date: "03.02.2023",
	},
	{
		id: 2,
		title: "Medyczna rejestracja",
		description: "Opis",
		technology: ["Wordpress", "Sass", "Javascript", "ACF Pro", "PHP"],
		link: "https://medycznarejestracja.pl/",
		slug: "/medyczna-rejestracja",
		gallery: [$mrBlog, $mrHome, $mrBenefits],
		mainImage: $mr,
		date: "03.05.2021",
	},
];

export default PortfolioData;
