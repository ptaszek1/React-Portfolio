const SkillsData: {
	id: number;
	title: string;
	description: string;
	technology: Array<string>;
	link: string;
	gallery: Array<string>;
	mainImage: string;
}[] = [
	{
		id: 1,
		title: "Medyczna rejestracja",
		description: "Opis",
		technology: ["Wordpress", "Sass", "Javascript", "ACF Pro", "PHP"],
		link: "https://medycznarejestracja.pl/",
		gallery: ["http://mariuszptaszek.pl/wp-content/uploads/2023/05/mr-blog.png"],
		mainImage:
			"https://medycznarejestracja.pl/wp-content/uploads/2021/03/medyczna-rejestracja-1.png",
	},
];

export default SkillsData;
