import React from "react";
import styles from "./Nav.module.scss";
import MenuItem from "./MenuItem";
import MenuData from "../../data/Menu/MenuData";

const Nav: React.FC = () => {
	return (
		<nav>
			<ul id={styles["menu-main-menu"]}>
				{MenuData.map((item) => (
					<MenuItem title={item.title} to={item.to} key={item.id} />
				))}
			</ul>
		</nav>
	);
};

export default Nav;
