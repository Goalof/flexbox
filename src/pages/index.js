import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="#F5FCF8" padding="70px 0 70px 0" display="none">
			<Text text-align="center" font="--headline2" margin="0px 0px 36px 0px">
				Flexbox Cheatsheet Cheatsheet{"\n\n\n"}
			</Text>
			<Box background="#EA8C8C" padding="20px 20px 20px 20px" display="flex">
				<Box padding="15px 15px 15px 15px" display="flex">
					<Box display="flex" width="100%" background="#C3E2D2" padding="15px 15px 15px 15px">
						<Image width="150px" height="150px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
					</Box>
				</Box>
				<Box padding="15px 15px 15px 15px" display="flex">
					<Box display="flex" width="100%" background="#C3E2D2" padding="15px 15px 15px 15px">
						<Image width="150px" height="150px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
					</Box>
				</Box>
				<Box padding="15px 15px 15px 15px" display="flex">
					<Box display="flex" width="100%" background="#C3E2D2" padding="15px 15px 15px 15px">
						<Image width="150px" height="150px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
					</Box>
				</Box>
			</Box>
		</Section>
		<Image width="100%" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/flexboxsheet.svg?v=2021-06-16T22:03:16.018Z" />
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
	</Theme>;
});