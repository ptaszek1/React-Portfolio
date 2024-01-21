const socials: { id: number; name: string; icon: JSX.Element; link: string }[] = [
	{
		id: 0,
		name: "email",
		icon: (
			<svg
				aria-hidden="true"
				width="21"
				height="21"
				focusable="false"
				data-prefix="far"
				data-icon="envelope"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<path
					fill="currentColor"
					d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
				></path>
			</svg>
		),
		link: "mailto:mariusz.ptaszek2@gmail.com",
	},
	{
		id: 1,
		name: "github",
		icon: (
			<svg
				aria-hidden="true"
				width="21"
				height="21.68"
				focusable="false"
				data-prefix="fab"
				data-icon="github"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 496 512"
			>
				<path
					fill="currentColor"
					d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
				></path>
			</svg>
		),
		link: "https://github.com/ptaszek1/",
	},
	{
		id: 2,
		name: "linkedin",
		icon: (
			<svg
				aria-hidden="true"
				width="21"
				height="24"
				focusable="false"
				data-prefix="fab"
				data-icon="linkedin-in"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
			>
				<path
					fill="currentColor"
					d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
				></path>
			</svg>
		),
		link: "https://www.linkedin.com/in/mariusz-ptaszek-9abb45162/",
	},
	{
		id: 3,
		name: "codewars",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				aria-hidden="true"
				focusable="false"
				width="16"
				height="16"
				style={{ transform: "rotate(360deg)" }}
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 24 24"
			>
				<path
					d="M1.072.142A1.072 1.072 0 0 0 0 1.214v21.572a1.072 1.072 0 0 0 1.072 1.072h21.856A1.072 1.072 0 0 0 24 22.786V1.214A1.072 1.072 0 0 0 22.928.142zm9.736 1.818a.904.904 0 0 1 .828.539a.784.784 0 0 1 1.274.493a.639.639 0 0 1 .29-.06c.33.008.59.262.625.575a1.322 1.322 0 0 1 .624-.515a1.325 1.325 0 0 1 1.718.71a1.098 1.098 0 0 1 .306-.236a1.102 1.102 0 0 1 1.483.479a1.094 1.094 0 0 1 .12.47a.994.994 0 0 1 1.322 1.214a.904.904 0 0 1 .874 1.438a.784.784 0 0 1 .176 1.356a.639.639 0 0 1 .19.224a.642.642 0 0 1-.011.613a1.326 1.326 0 0 1 .482.235a1.334 1.334 0 0 1 .258 1.842a1.098 1.098 0 0 1 .35.15a1.102 1.102 0 0 1 .337 1.516a1.094 1.094 0 0 1-.344.344a.994.994 0 0 1 .228 1.318a1.006 1.006 0 0 1-.605.434a.904.904 0 0 1-.803 1.482a.814.814 0 0 0-.008-.04a.784.784 0 0 1-1.075.873a.639.639 0 0 1-.098.28a.625.625 0 0 1-.43.288a1.33 1.33 0 0 1 .023.456a1.334 1.334 0 0 1-1.44 1.173a1.098 1.098 0 0 1 .054.377a1.102 1.102 0 0 1-1.128 1.072a1.098 1.098 0 0 1-.47-.12a.994.994 0 0 1-1.696.583a.904.904 0 0 1-1.685.075a.784.784 0 0 1-1.274-.493a.639.639 0 0 1-.29.064a.64.64 0 0 1-.621-.58l.004-.007a1.326 1.326 0 0 1-.632.523a1.334 1.334 0 0 1-1.718-.706a1.098 1.098 0 0 1-.306.232a1.102 1.102 0 0 1-1.48-.478a1.094 1.094 0 0 1-.123-.471a.994.994 0 0 1-1.318-1.21a.904.904 0 0 1-.874-1.442a.784.784 0 0 1-.176-1.356a.639.639 0 0 1-.194-.224a.642.642 0 0 1 .011-.61l.019.004a1.326 1.326 0 0 1-.497-.239a1.334 1.334 0 0 1-.262-1.845a1.098 1.098 0 0 1-.35-.146a1.102 1.102 0 0 1-.337-1.52a1.094 1.094 0 0 1 .347-.34A.994.994 0 0 1 2.88 9a.904.904 0 0 1 .803-1.48a.784.784 0 0 1 1.083-.836a.639.639 0 0 1 .098-.28a.649.649 0 0 1 .433-.288a1.33 1.33 0 0 1-.026-.452A1.334 1.334 0 0 1 6.716 4.49a1.098 1.098 0 0 1-.06-.377a1.101 1.101 0 0 1 1.13-1.073a1.094 1.094 0 0 1 .47.115a.994.994 0 0 1 1.696-.579a.904.904 0 0 1 .857-.617zM3.683 7.519a.784.784 0 0 0 .008.041l-.004-.04a.904.904 0 0 0-.004-.001zM17.502 19.61a1.098 1.098 0 0 0-.002-.004h-.037a1.334 1.334 0 0 0 .039.004zM13.825 3.507a1.322 1.322 0 0 0-.008.012l.008-.011zm-2.369-.014l-.003.003a.9.9 0 0 1-.665.27a.896.896 0 0 1-.583-.232a.994.994 0 0 1-.986.732a.99.99 0 0 1-.362-.075a1.098 1.098 0 0 1-1.061 1.046a1.326 1.326 0 0 1 .123.736a1.334 1.334 0 0 1-.725 1.035a1.1 1.1 0 0 1 .307.795a1.106 1.106 0 0 1-.232.65c.321.18.53.523.523.915a1.016 1.016 0 0 1-.07.337a.915.915 0 0 1 .82.937a.923.923 0 0 1-.01.138a.74.74 0 0 1 .157-.01c.343.007.627.25.702.57a.661.661 0 0 1 .38-.111c.31.007.561.224.632.511a.418.418 0 0 1 .381-.015a1.352 1.352 0 0 1 .303-.63a.418.418 0 0 1-.12-.143a.422.422 0 0 1 .004-.392a.665.665 0 0 1-.325-1.117a.736.736 0 0 1-.359-.336a.74.74 0 0 1 .385-1.023a.747.747 0 0 0-.06.026a.915.915 0 0 1-.201-.262a.915.915 0 0 1 .623-1.315V6.53a1.02 1.02 0 0 1 .437-1.371a1.012 1.012 0 0 1 .553-.112a1.11 1.11 0 0 1 .598-1.054a1.12 1.12 0 0 1 .06-.026a.642.642 0 0 1-.109-.21a.784.784 0 0 1-.455.132a.784.784 0 0 1-.662-.396zm4.573 1.512a1.326 1.326 0 0 1-.587.46a1.334 1.334 0 0 1-1.255-.142v-.011a1.11 1.11 0 0 1-.553.66a1.106 1.106 0 0 1-.683.113a1.02 1.02 0 0 1-.553.889a1.016 1.016 0 0 1-.329.105a.918.918 0 0 1-.43 1.169a.923.923 0 0 1-.127.056a.74.74 0 0 1 .086.13a.738.738 0 0 1-.168.89a.661.661 0 0 1 .28.283a.655.655 0 0 1-.149.796a.418.418 0 0 1 .153.164c.019.034.03.068.038.101a1.356 1.356 0 0 1 .672-.015a.422.422 0 0 1 .056-.142a.422.422 0 0 1 .34-.194a.665.665 0 0 1 .796-.848a.736.736 0 0 1 .112-.478a.733.733 0 0 1 1.016-.224a.915.915 0 0 1 .127-.306a.915.915 0 0 1 1.27-.28a.915.915 0 0 1 .179.153a1.02 1.02 0 0 1 1.408-.314a1.012 1.012 0 0 1 .374.422c.355-.24.833-.261 1.214-.015a1.11 1.11 0 0 1 .209.172a.642.642 0 0 1 .082-.108a.784.784 0 0 1-.332-.337a.784.784 0 0 1 .03-.77a.9.9 0 0 1-.553-.455a.896.896 0 0 1-.075-.624a.994.994 0 0 1-1.117-.511a.994.994 0 0 1-.104-.359a1.098 1.098 0 0 1-1.427-.43zM5.249 7.37a.784.784 0 0 1-.124.46a.784.784 0 0 1-.68.362c.06.235.026.49-.112.71a.896.896 0 0 1-.5.377c.31.325.373.829.12 1.225a.99.99 0 0 1-.255.269a1.098 1.098 0 0 1 .351 1.45a1.326 1.326 0 0 1 .691.276a1.334 1.334 0 0 1 .512 1.154c.28-.064.579-.019.84.15a1.106 1.106 0 0 1 .438.53a1.02 1.02 0 0 1 1.05.03a1.016 1.016 0 0 1 .257.231a.914.914 0 0 1 1.225-.224a.919.919 0 0 1 .112.086a.74.74 0 0 1 .071-.142a.74.74 0 0 1 .852-.306a.661.661 0 0 1 .1-.381a.664.664 0 0 1 .763-.273a.418.418 0 0 1 .246-.373a1.36 1.36 0 0 1-.358-.523v-.008a.418.418 0 0 1-.25.075a.422.422 0 0 1-.344-.19a.665.665 0 0 1-1.132-.243a.736.736 0 0 1-.47.149a.733.733 0 0 1-.718-.755a.915.915 0 0 1-.329.049a.915.915 0 0 1-.855-1.177h-.004a1.016 1.016 0 0 1-.993-1.042a1.012 1.012 0 0 1 .168-.534a1.11 1.11 0 0 1-.64-1.035a1.11 1.11 0 0 1 .068-.358a.65.65 0 0 1-.1-.019zm11.127 2.133a.913.913 0 0 1-1.225.224a.926.926 0 0 1-.112-.082a.74.74 0 0 1-.067.142a.74.74 0 0 1-.852.302a.661.661 0 0 1-.105.385a.662.662 0 0 1-.762.277a.418.418 0 0 1-.063.212a.426.426 0 0 1-.075.086a1.356 1.356 0 0 1 .314.564a.418.418 0 0 1 .187-.04a.422.422 0 0 1 .343.194a.665.665 0 0 1 1.136.242a.736.736 0 0 1 .467-.153c.41.008.728.348.72.755a.74.74 0 0 1 0 .008v-.005a.915.915 0 0 1 .326-.052a.915.915 0 0 1 .896.941a.919.919 0 0 1-.037.236c.564.015 1.008.482.993 1.046a1.012 1.012 0 0 1-.168.534a1.11 1.11 0 0 1 .647 1.035a1.11 1.11 0 0 1-.075.362l.004-.007l.1.018a.784.784 0 0 1 .124-.46a.784.784 0 0 1 .68-.362a.9.9 0 0 1 .112-.71a.896.896 0 0 1 .504-.373a.994.994 0 0 1-.123-1.225a.99.99 0 0 1 .257-.269a1.098 1.098 0 0 1-.35-1.453a1.326 1.326 0 0 1-.696-.273h-.003a1.334 1.334 0 0 1-.512-1.158a1.082 1.082 0 0 1-.837-.145a1.106 1.106 0 0 1-.44-.535a1.02 1.02 0 0 1-1.05-.026a1.016 1.016 0 0 1-.258-.235zm-.094 3.116l-.007.066a.74.74 0 0 0 .007-.066zm-2.864-.259a1.36 1.36 0 0 1-.363.598a.418.418 0 0 1 .194.187a.422.422 0 0 1-.007.396a.665.665 0 0 1 .329 1.113a.736.736 0 0 1 .358.336a.739.739 0 0 1-.32.994a.915.915 0 0 1 .197.261a.91.91 0 0 1-.396 1.233a.919.919 0 0 1-.224.082v.004a1.02 1.02 0 0 1-.44 1.374a1.012 1.012 0 0 1-.55.109a1.11 1.11 0 0 1-.661 1.083a.642.642 0 0 1 .112.21a.026.026 0 0 1-.004 0v.003a.784.784 0 0 1 .456-.134a.784.784 0 0 1 .661.392a.9.9 0 0 1 .665-.27a.896.896 0 0 1 .587.236a.994.994 0 0 1 .982-.736a.99.99 0 0 1 .362.079v.022a1.1 1.1 0 0 1 1.061-1.072a1.326 1.326 0 0 1-.123-.736c.056-.46.34-.837.725-1.035l.003.004a1.102 1.102 0 0 1-.31-.795a1.106 1.106 0 0 1 .232-.654a1.02 1.02 0 0 1-.452-1.251a.915.915 0 0 1-.822-.934a.923.923 0 0 1 .011-.142a.74.74 0 0 1-.157.015a.74.74 0 0 1-.698-.572a.661.661 0 0 1-.385.112a.667.667 0 0 1-.627-.512a.418.418 0 0 1-.217.053a.418.418 0 0 1-.18-.045zm-.964.93a1.36 1.36 0 0 1-.336.042c-.112 0-.22-.012-.322-.038a.418.418 0 0 1-.06.295a.422.422 0 0 1-.343.195a.665.665 0 0 1-.792.844a.736.736 0 0 1-.112.478a.74.74 0 0 1-1.02.224a.915.915 0 0 1-.127.306a.915.915 0 0 1-1.266.28a.919.919 0 0 1-.183-.153v.004a1.02 1.02 0 0 1-1.408.31a1.012 1.012 0 0 1-.374-.418c-.355.239-.83.261-1.214.015a1.113 1.113 0 0 1-.21-.172a.65.65 0 0 1-.081.105a.784.784 0 0 1 .336.336a.784.784 0 0 1-.034.77a.89.89 0 0 1 .553.455a.896.896 0 0 1 .075.624a.994.994 0 0 1 1.12.515a.99.99 0 0 1 .101.355a1.098 1.098 0 0 1 1.431.43a1.326 1.326 0 0 1 .587-.46c.43-.172.896-.104 1.255.142a1.106 1.106 0 0 1 .549-.65a1.106 1.106 0 0 1 .683-.108a1.02 1.02 0 0 1 .553-.893a1.02 1.02 0 0 1 .333-.104a.916.916 0 0 1 .425-1.17a.919.919 0 0 1 .131-.052a.736.736 0 0 1-.09-.134a.738.738 0 0 1 .169-.886a.661.661 0 0 1-.28-.284a.67.67 0 0 1 .149-.799a.418.418 0 0 1-.15-.164a.418.418 0 0 1-.048-.24z"
					fill="#626262"
				/>
			</svg>
		),
		link: "https://www.codewars.com/users/ptaszek1",
	},
];

export default socials;
