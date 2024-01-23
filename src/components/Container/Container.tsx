import React, { ReactNode } from "react";
import styles from "./Container.module.scss";

type ContainerProps = {
	children: ReactNode;
};

class Container extends React.Component<ContainerProps> {
	render() {
		const { children } = this.props;
		return <div className={`${styles["container"]}`}>{children}</div>;
	}
}

export default Container;
