import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Flexible Box
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/favicon.png?v=2021-06-17T22:36:04.119Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/favicon.png?v=2021-06-17T22:36:04.119Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/favicon.png?v=2021-06-17T22:36:04.119Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/favicon.png?v=2021-06-17T22:36:04.119Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/favicon.png?v=2021-06-17T22:36:04.119Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/favicon.png?v=2021-06-17T22:36:04.119Z"} />
			<meta name={"msapplication-TileColor"} content={"#000000"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<meta name={"viewport"} content={"width=1024"} place={"endOfHead"} rawKey={"60cbbde0646a83f804839baf"} />
		</RawHtml>
	</Theme>;
});