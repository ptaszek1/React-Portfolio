import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import Container from "../Container/Container";
import styles from "./Contact.module.scss";

const Contact: React.FC = () => {
	return (
		<section className={styles.contact}>
			<Container>
				<SectionTitle title="Napisz do mnie" />
				<div className={styles["contact__wrapper"]}>
					<div className={styles["contact__wrapper-form"]}>
						<ContactForm onSubmit={() => {}} />
					</div>
					<div className={styles["contact__wrapper-image"]}>
						<svg
							id="Contact_Image"
							data-name="Contact Image"
							xmlns="http://www.w3.org/2000/svg"
							width="464.205"
							height="279.539"
							viewBox="0 0 464.205 279.539"
						>
							<path
								id="Path_73"
								data-name="Path 73"
								d="M716.188,304.449l3.98-.688c.382-.067.761-.148,1.142-.218a32.675,32.675,0,0,1,20.864-60.234l-5.217,12.414,12.361-10.793a.555.555,0,0,1,.084.028,32.677,32.677,0,0,1,19.965,41.678c-.207.589-.453,1.151-.689,1.719a39.067,39.067,0,0,0,9.567-6.408c5.526-5.3,8.555-12.6,11.938-21.607,6.7-17.842,13.158-35.942,19.355-54.082A32.663,32.663,0,0,1,794.269,166.7c.332-.943.717-1.852,1.124-2.744.1-.223.2-.445.311-.665.414-.855.852-1.693,1.332-2.5.078-.132.166-.255.246-.386q.627-1.017,1.322-1.974c.173-.24.345-.478.523-.712.525-.687,1.069-1.355,1.643-1.993.192-.214.4-.413.592-.621q.661-.7,1.358-1.353c.245-.23.488-.462.739-.684.065-.057.125-.119.19-.176l.009.013a32.654,32.654,0,0,1,41.78-.939l-6.789,16.155,12.22-10.665a32.5,32.5,0,0,1,1.208,38.485l.034.011c-.133.2-.285.376-.422.568q-.387.542-.791,1.065c-.347.447-.708.879-1.076,1.305-.278.322-.552.646-.841.955-.423.453-.866.881-1.313,1.307-.261.249-.51.51-.778.749q-1.054.941-2.18,1.786c-.263.2-.541.371-.81.56-.527.371-1.057.736-1.6,1.075-.34.21-.688.4-1.035.6-.5.286-1.007.563-1.524.822-.366.183-.734.358-1.107.527-.53.241-1.067.465-1.609.679-.364.143-.726.288-1.095.418-.609.214-1.226.4-1.847.579-.314.09-.622.193-.938.274-.932.238-1.874.44-2.827.6-.179.029-.362.04-.542.066-.79.115-1.584.208-2.385.264-.344.024-.69.028-1.036.041-.647.025-1.3.038-1.946.024-.38-.008-.76-.028-1.141-.049q-.951-.054-1.9-.166c-.376-.044-.75-.087-1.126-.144-.681-.1-1.361-.238-2.041-.386-.045-.01-.089-.016-.134-.025q-3.923,11.479-7.992,22.91a32.654,32.654,0,0,1,47.35,3.9l-11.3,12.494,15.3-6.106a32.565,32.565,0,0,1,1.307,24.876,32.051,32.051,0,0,1-4.151,8.031,32.664,32.664,0,0,1-59.02-14.331c-.287.768-.565,1.545-.853,2.312-2.986,7.943-6.7,17.828-14.162,24.975-5.057,4.844-11.279,7.917-17.249,10.516q-5.831,2.538-11.817,4.692a32.749,32.749,0,0,1-14.624,4.661c-6.3,1.749-12.673,3.209-19.109,4.337l-4.013.692c-3.607.618-7.3,1.254-10.975,1.987.528.157,1.058.306,1.583.491a32.687,32.687,0,0,1,21.821,31.8L705,355.412l22.765,3.615a32.692,32.692,0,0,1-54.473,9.667q.347,1.161.7,2.319c.462,1.534.921,3.059,1.361,4.569,5.99,20.584,3.412,36.775-7.261,45.59l-5.791-7.01c10.388-8.581,7.165-26.262,4.321-36.04-.432-1.483-.884-2.982-1.338-4.488-3.9-12.962-8.325-27.654-2.6-41.154C671.313,312.133,696.2,307.872,716.188,304.449Z"
								transform="translate(-400.381 -144.877)"
								fill="#e2e2e3"
							/>
							<path
								id="Path_74"
								data-name="Path 74"
								d="M532.3,513.811H356.025a21.8,21.8,0,0,1-21.8-21.8V411.257a8.634,8.634,0,0,1,2.694-6.267l93.406-88.541a20.1,20.1,0,0,1,27.66,0l89.058,84.42a22.57,22.57,0,0,1,7.043,16.38v74.767A21.8,21.8,0,0,1,532.3,513.811Z"
								transform="translate(-223.862 -234.874)"
								fill="#242b58"
							/>
							<path
								id="Path_75"
								data-name="Path 75"
								d="M240.954,387.992H458.983v88.067a13.161,13.161,0,0,1-13.161,13.161H254.114a13.161,13.161,0,0,1-13.161-13.161V387.992Z"
								transform="translate(-130.586 -210.282)"
								opacity="0.1"
							/>
							<path
								id="Path_76"
								data-name="Path 76"
								d="M333.73,521.351"
								transform="translate(-223.591 -348.909)"
								fill="none"
								stroke="#3f3d56"
								strokeMiterlimit="10"
								strokeWidth="1"
							/>
							<rect
								id="Rectangle_279"
								data-name="Rectangle 279"
								width="162.148"
								height="162.148"
								rx="26.181"
								transform="translate(138.995 108.316)"
								fill="#6b84ff"
							/>
							<path
								id="Path_77"
								data-name="Path 77"
								d="M465.6,395.942v89.113H303.454V395.942l81.074,39.186Z"
								transform="translate(-164.458 -214.591)"
								opacity="0.1"
							/>
							<path
								id="Path_78"
								data-name="Path 78"
								d="M443.661,577.447l-103.882-50.21a4.215,4.215,0,0,0-6.049,3.795v86.387A13.161,13.161,0,0,0,346.89,630.58H540.43a13.161,13.161,0,0,0,13.161-13.161V532.512a5.143,5.143,0,0,0-7.381-4.631Z"
								transform="translate(-223.591 -351.872)"
								fill="#242b58"
							/>
							<rect
								id="Rectangle_280"
								data-name="Rectangle 280"
								width="45.346"
								height="6.413"
								transform="translate(152.966 123.202)"
								fill="#f2f2f2"
							/>
							<rect
								id="Rectangle_281"
								data-name="Rectangle 281"
								width="134.665"
								height="3.664"
								transform="translate(149.302 146.563)"
								fill="#f2f2f2"
							/>
							<rect
								id="Rectangle_282"
								data-name="Rectangle 282"
								width="134.665"
								height="3.664"
								transform="translate(149.302 158.93)"
								fill="#f2f2f2"
							/>
							<rect
								id="Rectangle_283"
								data-name="Rectangle 283"
								width="134.665"
								height="3.664"
								transform="translate(149.302 171.297)"
								fill="#f2f2f2"
							/>
							<line
								id="Line_8"
								data-name="Line 8"
								x2="377.429"
								transform="translate(27.92 278.708)"
								fill="none"
								stroke="#6b84ff"
								strokeMiterlimit="10"
								strokeWidth="1"
							/>
							<path
								id="Path_79"
								data-name="Path 79"
								d="M93.275,630.212c0,27.007,16.942,48.86,37.88,48.86"
								transform="translate(-93.275 -407.907)"
								fill="#242b58"
							/>
							<path
								id="Path_80"
								data-name="Path 80"
								d="M175.975,678.423c0-27.31,18.907-49.409,42.272-49.409"
								transform="translate(-138.095 -407.258)"
								fill="#6b84ff"
							/>
							<path
								id="Path_81"
								data-name="Path 81"
								d="M123.239,635.557c0,25.653,10.8,46.411,24.155,46.411"
								transform="translate(-109.514 -410.804)"
								fill="#6b84ff"
							/>
							<path
								id="Path_82"
								data-name="Path 82"
								d="M175.975,662.184c0-34.9,21.853-63.133,48.86-63.133"
								transform="translate(-138.095 -391.019)"
								fill="#242b58"
							/>
							<path
								id="Path_83"
								data-name="Path 83"
								d="M158.577,734.2s5.372-.165,6.991-1.318,8.264-2.529,8.665-.68,8.073,9.2,2.008,9.245-14.092-.945-15.708-1.929S158.577,734.2,158.577,734.2Z"
								transform="translate(-128.666 -462.69)"
								fill="#b0b0b2"
							/>
							<path
								id="Path_84"
								data-name="Path 84"
								d="M176.35,744.229c-6.065.049-14.092-.945-15.708-1.929-1.231-.75-1.721-3.439-1.885-4.68l-.179.007s.34,4.333,1.956,5.317,9.643,1.978,15.708,1.929c1.751-.014,2.355-.637,2.322-1.56C178.32,743.87,177.653,744.219,176.35,744.229Z"
								transform="translate(-128.666 -466.117)"
								opacity="0.2"
							/>
							<path
								id="Path_85"
								data-name="Path 85"
								d="M809.272,298.551c-.275,2.453-2.146,4.428-2.839,6.8-1.043,3.565.761,7.391,3.228,10.168a22.517,22.517,0,0,0,15.68,7.445,6.688,6.688,0,0,0,2.593-.283,5.55,5.55,0,0,0,1.972-1.348,12.609,12.609,0,0,0,3.254-7.055,37.557,37.557,0,0,0,.088-7.885,4.448,4.448,0,0,0-.291-1.59,4.073,4.073,0,0,0-1.024-1.258,23.854,23.854,0,0,0-4.393-3.191,5.043,5.043,0,0,1-1.841-1.408,4.552,4.552,0,0,1-.569-1.686l-.485-2.473a4.859,4.859,0,0,0-.713-2c-.857-1.156-2.5-1.314-3.936-1.37l-5.27-.207c-1.639-.064-3.8-.534-5.4-.212-1.494.3-1,1.678-.727,2.931A21.194,21.194,0,0,1,809.272,298.551Z"
								transform="translate(-479.611 -224.003)"
								fill="#a0616a"
							/>
							<path
								id="Path_86"
								data-name="Path 86"
								d="M809.272,298.551c-.275,2.453-2.146,4.428-2.839,6.8-1.043,3.565.761,7.391,3.228,10.168a22.517,22.517,0,0,0,15.68,7.445,6.688,6.688,0,0,0,2.593-.283,5.55,5.55,0,0,0,1.972-1.348,12.609,12.609,0,0,0,3.254-7.055,37.557,37.557,0,0,0,.088-7.885,4.448,4.448,0,0,0-.291-1.59,4.073,4.073,0,0,0-1.024-1.258,23.854,23.854,0,0,0-4.393-3.191,5.043,5.043,0,0,1-1.841-1.408,4.552,4.552,0,0,1-.569-1.686l-.485-2.473a4.859,4.859,0,0,0-.713-2c-.857-1.156-2.5-1.314-3.936-1.37l-5.27-.207c-1.639-.064-3.8-.534-5.4-.212-1.494.3-1,1.678-.727,2.931A21.194,21.194,0,0,1,809.272,298.551Z"
								transform="translate(-479.611 -224.003)"
								opacity="0.1"
							/>
							<path
								id="Path_87"
								data-name="Path 87"
								d="M853.738,534.275q-1.12,12.279-2.24,24.555c-.585,6.44-1.18,12.907-2.327,19.265-.4,2.191-.86,4.37-1.41,6.531-1.531,6-3.752,11.863-4.468,18.013-.023.177-.041.358-.06.539a15.654,15.654,0,0,1-.765,4c-.358.939-.909,1.795-1.3,2.723a17.37,17.37,0,0,0-.969,5.916,25.506,25.506,0,0,0-8.782-3c-1.49-.223-3.149-.381-4.163-1.493-1.124-1.229-1-3.111-.811-4.762q.888-7.692,1.772-15.377a40.089,40.089,0,0,1,1.12-6.531c.2-.713.449-1.414.7-2.115.343-.965.69-1.931.95-2.922a35.187,35.187,0,0,0,.784-4.868c.607-5.158,1.339-10.305,1.98-15.46l.034-.271a158.1,158.1,0,0,0,1.482-23.533c-.03-1.165-.079-2.33-.155-3.5-.106-1.693-.26-2.59,1.143-3.65a26.38,26.38,0,0,1,5.362-2.753c.954-.415,11.459-4.144,11.7-3.326a20.469,20.469,0,0,1,.769,5.362A59.64,59.64,0,0,1,853.738,534.275Z"
								transform="translate(-490.554 -349.333)"
								fill="#364182"
							/>
							<path
								id="Path_88"
								data-name="Path 88"
								d="M853.565,621.728c-.4,2.191-.86,4.37-1.41,6.531-1.531,6-3.752,11.863-4.468,18.013-.023.177-.041.358-.06.539-4.683-6.689-8.627-13.884-13.2-20.645.343-.965.69-1.931.95-2.922a35.219,35.219,0,0,0,.784-4.868c.607-5.158,1.339-10.305,1.98-15.46l.034-.271a16.016,16.016,0,0,0,1.142,3.171c3.069,6.237,10.362,9.389,13.929,15.358Q853.412,621.451,853.565,621.728Z"
								transform="translate(-494.947 -392.966)"
								opacity="0.1"
							/>
							<path
								id="Path_89"
								data-name="Path 89"
								d="M793.221,488.666a116.054,116.054,0,0,0,1.754,14.9l1.649,10.193c.9,5.579,1.842,11.271,4.482,16.268,1.975,3.738,4.82,6.927,7.394,10.281,6.328,8.244,11.082,17.583,17.082,26.068,1.744,2.466,4.237,5.134,7.214,4.619,1.954-.338,3.372-1.964,4.908-3.219,1.81-1.478,3.992-2.56,5.417-4.414s1.7-4.934-.226-6.252a10.179,10.179,0,0,0-2.209-.9c-2.992-1.138-4.928-4.059-6.16-7.013s-1.979-6.131-3.62-8.878c-3.567-5.969-10.86-9.121-13.931-15.36-1.72-3.494-1.883-7.522-2.015-11.414l-.335-9.922a7.244,7.244,0,0,1,.376-3.206c1.174-2.641,4.72-2.887,7.591-3.222a25.968,25.968,0,0,0,9.3-2.935,9.705,9.705,0,0,0,4.154-3.689,11.892,11.892,0,0,0,1.013-5l.994-17.982a11.26,11.26,0,0,0-.382-4.6c-1.369-3.642-5.968-4.832-9.854-4.658-7.232.323-13.909,3.435-20.729,5.536a52.7,52.7,0,0,1-5.138,1.34c-1.531.307-3.383.18-4.842.672-2.6.875-2.53,6.552-2.9,8.907A74.959,74.959,0,0,0,793.221,488.666Z"
								transform="translate(-472.605 -314.746)"
								fill="#364182"
							/>
							<path
								id="Path_90"
								data-name="Path 90"
								d="M875.795,692.208a4.6,4.6,0,0,1,1.012,2.476,84.551,84.551,0,0,1,1.432,14.975,2.445,2.445,0,0,0,.269,1.357,1.7,1.7,0,0,0,.7.566c1.843.878,3.983-.346,5.519-1.691,2.847-2.494,5.257-5.842,5.418-9.624a22.342,22.342,0,0,1,.1-2.919,12.182,12.182,0,0,1,1.814-3.911,33,33,0,0,0,3-6.72c.28-.881.466-1.99-.224-2.605a2.509,2.509,0,0,0-.821-.427l-8.327-3.092c-.722-.268-2.517,4.344-2.8,4.848a3.811,3.811,0,0,1-2.789,2.218c-1.427.291-3.127-.126-4.459.586C873.39,689.45,874.519,690.921,875.795,692.208Z"
								transform="translate(-516.585 -435.205)"
								fill="#242b58"
							/>
							<path
								id="Path_91"
								data-name="Path 91"
								d="M838.232,710.479a2.551,2.551,0,0,0-.634-.8,2.867,2.867,0,0,0-1.278-.434c-1.585-.269-3.464-.446-4.558.732-1.026,1.1-.849,2.9-1.707,4.144-.271.393-.639.716-.875,1.131a4.265,4.265,0,0,0-.384,2.029c-.044,1.922-.089,3.846.044,5.764a8.065,8.065,0,0,0,1.387,4.549c1.613,2.021,4.522,2.311,7.1,2.442l2.091.106a4.082,4.082,0,0,0,1.714-.157,2.821,2.821,0,0,0,1.478-1.626c1.089-2.705-.635-5.62-1.7-8.336C839.7,716.9,839.916,713.431,838.232,710.479Z"
								transform="translate(-491.871 -450.63)"
								fill="#242b58"
							/>
							<path
								id="Path_92"
								data-name="Path 92"
								d="M803.16,259.9a1.729,1.729,0,0,1,.118-.806c.306-.542,1.106-.394,1.709-.242,2.426.612,4.983.058,7.48.2s5.312,1.392,5.814,3.843a18.243,18.243,0,0,0,4.612-4.739,5.69,5.69,0,0,0,1.2-3.47c-.136-1.795-1.642-3.137-3.036-4.275l-4.156-3.393a6.262,6.262,0,0,0-1.861-1.183,9.274,9.274,0,0,0-3.021-.171c-3.025,0-6.251-1.375-8.941.008A9.653,9.653,0,0,0,800.3,248.2l-3.709,4.391a2.346,2.346,0,0,0-.593,1.005,4.464,4.464,0,0,0,.266,1.6c.175.981-.247,2.028.078,2.97.539,1.564,2.438,1.785,3.6,2.682.433.334,1.111,1.467,1.626,1.453C802.492,262.281,803.135,260.619,803.16,259.9Z"
								transform="translate(-474.105 -199.168)"
								fill="#3f3d56"
							/>
							<circle
								id="Ellipse_23"
								data-name="Ellipse 23"
								cx="11.878"
								cy="11.878"
								r="11.878"
								transform="translate(323.471 49.916)"
								fill="#a0616a"
							/>
							<path
								id="Path_93"
								data-name="Path 93"
								d="M797.664,321.363a5.754,5.754,0,0,0-5.6-3.855,1.708,1.708,0,0,1-1.033-.131,1.424,1.424,0,0,1-.425-.531,20.747,20.747,0,0,1-1.732-4.094c-.19-.629-.449-1.37-1.085-1.533a1.465,1.465,0,0,0-1.383.6,12.184,12.184,0,0,1-.988,1.242c-1.494,1.336-4.142.118-5.728,1.344-.259.2-.473.457-.745.639a3.477,3.477,0,0,1-.872.374,83.644,83.644,0,0,0-8.99,3.521c1.055,6.352,2.135,12.814,4.608,18.759,1.176,2.829,2.51,5.6,3.452,8.516,2.087,6.46,2.18,13.372,2.2,20.161.016,4.646-.007,9.392-1.51,13.789a13.011,13.011,0,0,0-.849,3.029,3.139,3.139,0,0,0,1.063,2.824,3.636,3.636,0,0,0,1.64.576c2.6.382,5.231-.311,7.8-.9,6.874-1.592,13.886-2.5,20.883-3.412l11.726-1.523a6.806,6.806,0,0,0,2.426-.627c2.146-1.175,2.349-4.4,1.017-6.454a35.085,35.085,0,0,1-2.077-2.833,2.632,2.632,0,0,1,.342-3.223c1.88-1.469,1.319-4.195,1.409-6.579q.376-10-.1-20a39.833,39.833,0,0,1-.066-4.149,36.745,36.745,0,0,1,1.293-6.923l3.563-14.029a7.31,7.31,0,0,0-4.4-2.828c-1.688-.424-3.447-.548-5.109-1.064-3.406-1.055-6.439-3.734-10-3.484a1.814,1.814,0,0,0-.775.189c-.8.454-.675,1.611-.727,2.531-.113,2.037-1.612,3.739-3.266,4.933a58.113,58.113,0,0,0-5.063,3.425A2.26,2.26,0,0,0,797.664,321.363Z"
								transform="translate(-459.533 -233.575)"
								fill="#242b58"
							/>
							<path
								id="Path_94"
								data-name="Path 94"
								d="M721.26,360.386a14.026,14.026,0,0,1-2.5,1.286,8.212,8.212,0,0,0-2.393,1.161,3.752,3.752,0,0,0-.832,1.028,4.573,4.573,0,0,0,4.217,6.813,9.18,9.18,0,0,0,3.118-.93l8.378-3.63c1.418-.614,2.95-1.334,3.62-2.727a.633.633,0,0,0,.082-.433.716.716,0,0,0-.344-.362,18.718,18.718,0,0,1-4.878-4.6c-.344-.467-.764-1.569-1.25-1.848C726.7,355.123,722.679,359.465,721.26,360.386Z"
								transform="translate(-430.193 -259.291)"
								fill="#a0616a"
							/>
							<path
								id="Path_95"
								data-name="Path 95"
								d="M900.6,359.084l3.089,3.528c.663.757,1.327,1.516,1.931,2.321a27.085,27.085,0,0,1,3.537,6.664,11.637,11.637,0,0,1,.994,5.509,13.481,13.481,0,0,1-.772,2.8,34.87,34.87,0,0,1-2.1,5.055,28.793,28.793,0,0,1-2.362,3.539,82.646,82.646,0,0,1-7.83,8.956c-1.056,1.045-1.5,2.735-1.958,4.148-.848,2.606-2.865,4.636-4.816,6.561a13.388,13.388,0,0,1-2.068,1.78,6.736,6.736,0,0,1-3.763,1.072,4.131,4.131,0,0,1-1.7-.351,4.382,4.382,0,0,1-2.153-3.649,7.763,7.763,0,0,1,.649-3.9c1.772-3.926,6.324-5.628,9.541-8.492a30.991,30.991,0,0,0,4.752-5.877,20.309,20.309,0,0,0,2.4-4.212c.719-1.917.439-4.187,1.067-6.135.265-.824.737-1.567,1.022-2.384a2.781,2.781,0,0,0-.142-2.494,3.623,3.623,0,0,0-1.4-1.024c-2.055-1.043-4.357-2.385-4.75-4.656a4.989,4.989,0,0,1,.92-3.556,14.819,14.819,0,0,1,2.592-2.716C898.186,360.773,899.7,359.879,900.6,359.084Z"
								transform="translate(-519.969 -260.968)"
								fill="#a0616a"
							/>
							<path
								id="Path_96"
								data-name="Path 96"
								d="M707.546,372.639a5.739,5.739,0,0,0-2.328-2.773,4.289,4.289,0,0,0-3.383-.014,12.719,12.719,0,0,0-2.969,1.8l-2.662,1.963a6.552,6.552,0,0,0-1.581,1.459,6.16,6.16,0,0,0-.823,2.259,16.146,16.146,0,0,0-.419,5.587c.422,3,2.233,5.623,4.225,7.908,1.245,1.428,2.782,2.869,4.675,2.93a2.144,2.144,0,0,0,2.066-1.04,2.591,2.591,0,0,0,.185-.926c.2-3.349-.993-6.62-2.39-9.67a6.2,6.2,0,0,1-.771-2.6.712.712,0,0,1,.114-.435.735.735,0,0,1,.454-.222c1.912-.378,5.205,1.107,6.546-1.016C709.356,376.468,708.164,373.887,707.546,372.639Z"
								transform="translate(-418.462 -266.618)"
								fill="#a0616a"
							/>
							<path
								id="Path_97"
								data-name="Path 97"
								d="M801.8,251.738a1.729,1.729,0,0,1,.118-.806c.306-.542,1.106-.394,1.709-.242,2.426.612,4.983.058,7.48.2s5.312,1.392,5.814,3.843a18.243,18.243,0,0,0,4.612-4.739,5.69,5.69,0,0,0,1.2-3.47c-.136-1.795-1.642-3.137-3.036-4.275l-4.156-3.393a6.264,6.264,0,0,0-1.861-1.183,9.273,9.273,0,0,0-3.021-.171c-3.025,0-6.251-1.375-8.941.008a9.652,9.652,0,0,0-2.785,2.533l-3.709,4.391a2.344,2.344,0,0,0-.593,1.005,4.464,4.464,0,0,0,.266,1.6c.175.981-.247,2.028.078,2.97.539,1.564,2.438,1.785,3.6,2.682.432.334,1.111,1.467,1.626,1.453C801.132,254.122,801.775,252.46,801.8,251.738Z"
								transform="translate(-473.367 -194.747)"
								fill="#242b58"
							/>
							<path
								id="Path_98"
								data-name="Path 98"
								d="M747.714,335.691a4.828,4.828,0,0,0-1.243,1.157c-.435.658-.524,1.49-.9,2.185-.8,1.488-2.673,2.017-3.841,3.237a1.208,1.208,0,0,0-.369.633,1.41,1.41,0,0,0,.314.911l5.632,8.855c1.875.165,3.674-1.01,5.551-.854a5.576,5.576,0,0,0,2.089.093,5.993,5.993,0,0,0,1.341-.82c1.119-.708,2.61-.79,3.549-1.724a4.861,4.861,0,0,0,1.005-3.569,14.345,14.345,0,0,0-.335-3.283c-.829-3.4-3.429-6.007-5.058-9.018-.793-1.466-1.225-2.324-2.9-1.317S749.3,334.529,747.714,335.691Z"
								transform="translate(-444.51 -246.149)"
								fill="#242b58"
							/>
							<path
								id="Path_99"
								data-name="Path 99"
								d="M893.12,327.052a13.176,13.176,0,0,1,2.834,2.482c.858,1.106,1.344,2.46,2.168,3.592a40.106,40.106,0,0,0,2.793,2.957,22.838,22.838,0,0,1,3.219,5.245,78.367,78.367,0,0,1-7.286,8.234,2.35,2.35,0,0,1-1.106.727,1.785,1.785,0,0,1-1.564-.638c-.406-.426-.693-.95-1.081-1.392a5.57,5.57,0,0,0-3.444-1.665,23.649,23.649,0,0,0-3.9-.054,1.542,1.542,0,0,1-.833-.14,1.4,1.4,0,0,1-.455-.521c-1.525-2.595-1.034-5.853-.5-8.814l1.234-6.8a15.254,15.254,0,0,1,1.027-3.777c.468-1,1.513-2.694,2.8-2.395S892.03,326.268,893.12,327.052Z"
								transform="translate(-521.51 -241.988)"
								fill="#242b58"
							/>
							<ellipse
								id="Ellipse_24"
								data-name="Ellipse 24"
								cx="18.78"
								cy="18.814"
								rx="18.78"
								ry="18.814"
								transform="translate(126.857 92.055)"
								fill="#fff"
							/>
							<path
								id="Path_100"
								data-name="Path 100"
								d="M384.674,338.851A22.444,22.444,0,1,0,407.118,361.3,22.444,22.444,0,0,0,384.674,338.851Zm-4.608,34.411-11.5-11.5,3.226-3.226,8.287,8.287,17.491-17.491,3.226,3.226-20.729,20.707Z"
								transform="translate(-239.037 -250.002)"
								fill="#57b894"
							/>
						</svg>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Contact;
