import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box, Section, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Section background="#F5FCF8" padding="70px 0 150px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text text-align="center" font="normal 900 65px/1.2 --fontFamily-sansHelvetica" margin="0px 0px 40px 0px">
				Flexbox Cheatsheet Cheatsheet{"\n\n\n"}
			</Text>
			<Box
				background="#EA8C8C"
				padding="10px 10px 80px 10px"
				display="flex"
				width="70%"
				position="relative"
			>
				<Box
					height="100%"
					display="flex"
					align-items="flex-start"
					justify-content="center"
					position="absolute"
					left="-150px"
					flex-direction="column"
					top="-40px"
					bottom="auto"
					right="auto"
				>
					<Text font="normal 800 30px/1.2 --fontFamily-sansHelvetica" color="#EA8C8C">
						flex
						<br />
						container
					</Text>
					<Image
						src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2025.svg?v=2021-06-17T12:23:02.182Z"
						top="150px"
						bottom="0px"
						right="auto"
						left="0px"
						width="150px"
					/>
				</Box>
				<Box
					display="flex"
					align-items="center"
					justify-content="center"
					position="absolute"
					left="0px"
					flex-direction="column"
					top="auto"
					right="auto"
					width=" 72%"
					bottom="-140px"
				>
					<Image
						src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2027.svg?v=2021-06-17T12:23:02.171Z"
						top="150px"
						bottom="0px"
						right="auto"
						left="0px"
						width="250px"
					/>
					<Text font="normal 800 30px/1.2 --fontFamily-sansHelvetica" color="#9CD8B4">
						flex items{"\n\n"}
					</Text>
				</Box>
				<Box padding="15px 15px 15px 15px">
					<Box padding="15px 15px 15px 15px" background="#C3E2D2">
						<Image width="150px" height="150px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
					</Box>
				</Box>
				<Box padding="15px 15px 15px 15px">
					<Box padding="15px 15px 15px 15px" background="#C3E2D2">
						<Image width="150px" height="150px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
					</Box>
				</Box>
				<Box padding="15px 15px 15px 15px">
					<Box padding="15px 15px 15px 15px" background="#C3E2D2">
						<Image width="150px" height="150px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="#F5FCF8" padding="70px 0 150px 0">
			<Override
				slot="SectionContent"
				align-items="center"
				flex-direction="row"
				flex-wrap="wrap"
				justify-content="center"
			/>
			<Box width="100%" display="flex" align-items="center" justify-content="center">
				<Text font="normal 800 30px/1.2 --fontFamily-sansHelvetica" color="#765373" margin="0px 0px 0px 0px">
					cross axis{" \n\n\n"}
				</Text>
			</Box>
			<Box
				width="22.5%"
				height="274px"
				display="flex"
				align-items="center"
				justify-content="flex-end"
			>
				<Text margin="-5px 8px 0px 0px" color="#765373" font="normal 800 30px/1.2 --fontFamily-sansHelvetica">
					main axis{"\n\n"}
				</Text>
			</Box>
			<Box
				background="#EA8C8C"
				padding="30px 0px 30px 0px"
				display="flex"
				width="55%"
				position="relative"
				align-items="center"
				justify-content="center"
			>
				<Box
					width="100%"
					display="flex"
					align-items="center"
					justify-content="center"
					position="absolute"
					height="104%"
				>
					<Image width="100%" height="100%" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2028%20%281%29.svg?v=2021-06-17T13:19:59.656Z" />
				</Box>
				<Box
					width="102%"
					display="flex"
					align-items="center"
					justify-content="center"
					position="absolute"
					height="100%"
				>
					<Image width="100%" height="100%" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2029.svg?v=2021-06-17T13:23:55.959Z" />
				</Box>
				<Box padding="15px 15px 15px 15px">
					<Box padding="15px 15px 15px 15px" background="#C3E2D2">
						<Image width="150px" height="150px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
					</Box>
				</Box>
				<Box padding="15px 15px 15px 15px">
					<Box padding="15px 15px 15px 15px" background="#C3E2D2">
						<Image width="150px" height="150px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
					</Box>
				</Box>
				<Box padding="15px 15px 15px 15px">
					<Box padding="15px 15px 15px 15px" background="#C3E2D2">
						<Image width="150px" height="150px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
					</Box>
				</Box>
			</Box>
			<Box
				width="22.5%"
				height="274px"
				display="flex"
				align-items="flex-start"
				justify-content="space-between"
				flex-direction="column"
			>
				<Text margin="0px 0px 0px 8px" color="#9CD8B4" font="normal 500 25px/1.2 --fontFamily-sansHelvetica">
					cross axis start{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 8px" color="#EA8C8C" font="normal 500 25px/1.2 --fontFamily-sansHelvetica">
					cross axis end{"\n\n"}
				</Text>
			</Box>
			<Box
				width="55%"
				display="flex"
				align-items="center"
				justify-content="space-between"
				padding="0px 0px 0px 0px"
			>
				<Text font="normal 500 25px/1.2 --fontFamily-sansHelvetica" color="#9CD8B4" margin="8px 0px 0px 0px">
					main axis start{"\n\n"}
				</Text>
				<Text font="normal 500 25px/1.2 --fontFamily-sansHelvetica" color="#EA8C8C" margin="8px 0px 0px 0px">
					main axis end{"\n\n\n"}
				</Text>
			</Box>
		</Section>
		<Section
			background="#F5FCF8"
			padding="70px 0 150px 0"
			border-width="20px 0px 0px 0px"
			border-style="solid"
			border-color="#9CD8B4"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				flex-direction="row"
				flex-wrap="wrap"
				justify-content="center"
			/>
			<Text text-align="center" font="normal 900 46px/1.2 --fontFamily-sansHelvetica" margin="0px 0px 40px 0px" width="100%">
				To activate powers{"\n\n\n\n\n\n"}
			</Text>
			<Box
				background="#FCF9E6"
				padding="30px 20px 20px 20px"
				border-width="5px"
				border-style="solid"
				border-radius="5px"
				border-color="#9CD8B4"
			>
				<Text margin="0px 0px 16px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
					<Span
						background="#B7ABB6"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						{" "}display: flex;
					</Span>
					{" "}on flex{" "}
					<Span
						color="#EA8C8C"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						container
					</Span>
					{"\n\n"}
				</Text>
				<Image src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/scren1.png?v=2021-06-17T16:37:51.102Z" />
			</Box>
			<Text font="normal 900 46px/1.2 --fontFamily-sansHelvetica" text-align="center" margin="50px 0px 40px 0px" width="100%">
				Do you want rows or columns?{"\n\n\n"}
			</Text>
			<Box width="100%" display="flex" justify-content="space-around">
				<Box display="flex" flex-direction="column">
					<Image src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2026.svg?v=2021-06-17T16:46:08.834Z" width="70px" />
					<Text color="#5E405D" font="normal 900 36px/1.2 --fontFamily-sansHelvetica" margin="16px 0px 16px -40px">
						rows{"\n\n"}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column">
					<Image src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2030.svg?v=2021-06-17T16:46:25.513Z" width="70px" />
					<Text font="normal 900 36px/1.2 --fontFamily-sansHelvetica" color="#5E405D" margin="16px 0px 16px 0px">
						columns{"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box display="flex" width="100%" justify-content="space-between">
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="450px"
				>
					<Text margin="0px 0px 16px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="left">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n"}flex-direction: row;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Image
						src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/scren2.png?v=2021-06-17T19:20:12.767Z"
						width="100%"
						height="260px"
						object-fit="cover"
						object-position="0% 0%"
					/>
				</Box>
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="450px"
				>
					<Text margin="0px 0px 16px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n"}flex-direction: column;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Image
						src="https://screenshot.ukit.com/src/goalov/23/2021-06-18-01-22-00.png"
						width="100%"
						height="260px"
						object-fit="cover"
						object-position="0% 0%"
					/>
				</Box>
			</Box>
			<Box width="100%" display="flex" padding="20px 0px 20px 0px" justify-content="space-around">
				<Text margin="0px 200px 0px 0px" color="#9CD8B4" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 200px" color="#9CD8B4" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
			</Box>
			<Box display="flex" width="100%" justify-content="space-between">
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="500px"
					align-items="center"
				>
					<Text margin="0px 0px 16px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n"}flex-direction: row
-reverse;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Image
						src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2031.svg?v=2021-06-17T19:51:13.172Z"
						height="260px"
						width="100%"
						object-position="50% 50%"
						margin="30px 0px 0px 0px"
					/>
				</Box>
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="500px"
					align-items="center"
				>
					<Text margin="0px 0px 16px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n"}flex-direction: column-reverse

;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Image src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2032.svg?v=2021-06-17T19:51:13.188Z" object-fit="cover" object-position="0% 0%" width="250px" />
				</Box>
			</Box>
		</Section>
		<Section
			background="#FCFAFA"
			padding="70px 0 150px 0"
			border-width="0px"
			border-style="solid"
			border-color="#9CD8B4"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				flex-direction="row"
				flex-wrap="wrap"
				justify-content="center"
			/>
			<Text text-align="center" font="normal 900 46px/1.2 --fontFamily-sansHelvetica" margin="0px 0px 40px 0px" width="100%">
				Do you want these items located at the{"\n"}
				<br />
				beginning of the main axis?{"\n\n"}
			</Text>
			<Box width="100%" display="flex" justify-content="space-around">
				<Box display="flex" flex-direction="column" align-items="center">
					<Image src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2026.svg?v=2021-06-17T16:46:08.834Z" width="70px" />
					<Text font="normal 900 36px/1.2 --fontFamily-sansHelvetica" color="#5E405D" margin="20px 0px 0px -40px">
						<Span color="#43D677">
							YES
						</Span>
						, beginning{"\n\n"}
					</Text>
					<Text font="normal 400 30px/1.2 --fontFamily-sansHelvetica" color="#6B6B6B" margin="6px 0px 36px -40px" text-align="center">
						OK, default value has
						<br />
						you covered.{"\n\n"}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column">
					<Image src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2030.svg?v=2021-06-17T16:46:25.513Z" width="70px" />
					<Text font="normal 900 36px/1.2 --fontFamily-sansHelvetica" color="#5E405D" margin="20px 0px 16px 0px">
						<Span color="#E87667">
							NO
						</Span>
						, other{"\n\n"}
					</Text>
					<Text font="normal 400 30px/1.2 --fontFamily-sansHelvetica" color="#6B6B6B" margin="6px 0px 36px -40px" text-align="center">
						OK, use one of these:{"\n\n\n\n\n"}
					</Text>
				</Box>
			</Box>
			<Box display="flex" width="100%" justify-content="space-between">
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="48%"
					margin="0px 2% 0px 0px"
					align-items="center"
				>
					<Text margin="0px 0px 36px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n\n"}justify-content: flex-start;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Box
						background="#EA8C8C"
						padding="10px 10px 10px 10px"
						display="flex"
						width="80%"
						position="relative"
					>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
							</Box>
						</Box>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
							</Box>
						</Box>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="48%"
					align-items="center"
					margin="0px 0px 0px 2%"
				>
					<Text margin="0px 0px 36px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n\n"}justify-content: flex-end;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Box
						background="#EA8C8C"
						padding="10px 10px 10px 10px"
						display="flex"
						width="80%"
						position="relative"
						justify-content="flex-end"
					>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
							</Box>
						</Box>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
							</Box>
						</Box>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box width="100%" display="flex" padding="20px 0px 20px 0px" justify-content="space-around">
				<Text margin="0px 0px 0px 0px" color="#FCFAFA" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 0px" color="#9CD8B4" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
			</Box>
			<Box display="flex" width="100%" justify-content="flex-end">
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="44%"
					align-items="center"
					margin="0px 0px 0px 0%"
				>
					<Text margin="0px 0px 36px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n\n"}justify-content: flex-end;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Box
						background="#EA8C8C"
						padding="10px 10px 10px 10px"
						display="flex"
						width="80%"
						position="relative"
						justify-content="flex-end"
					>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
							</Box>
						</Box>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
							</Box>
						</Box>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box width="100%" display="flex" padding="20px 0px 20px 0px" justify-content="space-around">
				<Text margin="0px 0px 0px 0px" color="#FCFAFA" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 0px" color="#9CD8B4" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
			</Box>
			<Box display="flex" width="100%" justify-content="flex-end">
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="44%"
					margin="0px 0px 0px 0%"
					align-items="center"
				>
					<Text margin="0px 0px 36px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n\n"}justify-content: center;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Box
						background="#EA8C8C"
						padding="10px 10px 10px 10px"
						display="flex"
						width="80%"
						position="relative"
						justify-content="center"
					>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
							</Box>
						</Box>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
							</Box>
						</Box>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box width="100%" display="flex" padding="20px 0px 20px 0px" justify-content="space-around">
				<Text margin="0px 0px 0px 0px" color="#FCFAFA" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 0px" color="#9CD8B4" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
			</Box>
			<Box display="flex" width="100%" justify-content="flex-end">
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="44%"
					align-items="center"
					margin="0px 0px 0px 0%"
				>
					<Text margin="0px 0px 36px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n\n"}justify-content: 
space-between;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Box
						background="#EA8C8C"
						padding="10px 10px 10px 10px"
						display="flex"
						width="80%"
						position="relative"
						justify-content="space-between"
					>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
							</Box>
						</Box>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
							</Box>
						</Box>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box width="100%" display="flex" padding="20px 0px 20px 0px" justify-content="space-around">
				<Text margin="0px 0px 0px 0px" color="#FCFAFA" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 0px" color="#9CD8B4" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
			</Box>
			<Box display="flex" width="100%" justify-content="flex-end">
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="44%"
					align-items="center"
					margin="0px 0px 0px 0%"
				>
					<Text margin="0px 0px 36px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n\n"}justify-content: 

space-around;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Box
						background="#EA8C8C"
						padding="10px 10px 10px 10px"
						display="flex"
						width="80%"
						position="relative"
						justify-content="space-around"
					>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
							</Box>
						</Box>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
							</Box>
						</Box>
						<Box padding="15px 15px 15px 15px">
							<Box padding="15px 15px 15px 15px" background="#C3E2D2">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			background="#F5FCF8"
			padding="70px 0 150px 0"
			border-width="0px"
			border-style="solid"
			border-color="#9CD8B4"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				flex-direction="row"
				flex-wrap="wrap"
				justify-content="center"
			/>
			<Text text-align="center" font="normal 900 46px/1.2 --fontFamily-sansHelvetica" margin="0px 0px 40px 0px" width="100%">
				Do you want the items on one line or to move to
				<br />
				another when adjusting viewport?{"\n\n\n\n"}
			</Text>
			<Box width="100%" display="flex" justify-content="space-around">
				<Box display="flex" flex-direction="column">
					<Image src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2026.svg?v=2021-06-17T16:46:08.834Z" width="70px" margin="0px 0px 0px 40px" />
					<Text font="normal 900 36px/1.2 --fontFamily-sansHelvetica" color="#5E405D" margin="20px 0px 0px 20px">
						one line{"\n\n\n\n"}
					</Text>
					<Text font="normal 400 30px/1.2 --fontFamily-sansHelvetica" color="#6B6B6B" margin="6px 0px 36px -40px" text-align="center">
						OK, default value has
						<br />
						you covered.{"\n\n"}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column">
					<Image src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2030.svg?v=2021-06-17T16:46:25.513Z" width="70px" />
					<Text font="normal 900 36px/1.2 --fontFamily-sansHelvetica" color="#5E405D" margin="20px 0px 16px 0px">
						move to another{"\n\n\n\n"}
					</Text>
					<Text font="normal 400 30px/1.2 --fontFamily-sansHelvetica" color="#6B6B6B" margin="6px 0px 36px 0px" text-align="center">
						OK, use one of these:{"\n\n\n\n\n"}
					</Text>
				</Box>
			</Box>
			<Box display="flex" width="100%" justify-content="space-between">
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="48%"
					margin="0px 2% 0px 0px"
					align-items="center"
				>
					<Text margin="0px 0px 36px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n\n\n"}flex-wrap: nowrap;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Box width="100%" display="flex" align-items="center" justify-content="center">
						<Box
							background="#EA8C8C"
							padding="10px 10px 10px 10px"
							display="flex"
							width="40%"
							position="relative"
						>
							<Box padding="15px 15px 15px 15px">
								<Box padding="15px 15px 15px 15px" background="#C3E2D2">
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px">
								<Box padding="15px 15px 15px 15px" background="#C3E2D2">
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px">
								<Box padding="15px 15px 15px 15px" background="#C3E2D2">
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
								</Box>
							</Box>
						</Box>
						<Image width="64px" height="64px" margin="0px 0px 0px 10px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2033.svg?v=2021-06-17T22:15:09.760Z" />
					</Box>
				</Box>
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="48%"
					margin="0px 0px 0px 2%"
					align-items="center"
				>
					<Text margin="0px 0px 36px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n\n\n"}flex-wrap: wrap;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Box width="100%" display="flex" align-items="center" justify-content="center">
						<Box
							background="#EA8C8C"
							padding="10px 10px 10px 10px"
							display="flex"
							width="40%"
							position="relative"
							flex-wrap="wrap"
						>
							<Box padding="15px 15px 15px 15px">
								<Box padding="15px 15px 15px 15px" background="#C3E2D2">
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px">
								<Box padding="15px 15px 15px 15px" background="#C3E2D2">
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px">
								<Box padding="15px 15px 15px 15px" background="#C3E2D2">
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
								</Box>
							</Box>
						</Box>
						<Image width="64px" height="64px" margin="0px 0px 0px 10px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2033.svg?v=2021-06-17T22:15:09.760Z" />
					</Box>
				</Box>
			</Box>
			<Box width="100%" display="flex" padding="20px 0px 20px 0px" justify-content="space-around">
				<Text margin="0px 0px 0px 0px" color="#FCFAFA" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 0px" color="#9CD8B4" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
			</Box>
			<Box display="flex" width="100%" justify-content="flex-end">
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="44%"
					align-items="center"
					margin="0px 0px 0px 2%"
				>
					<Text margin="0px 0px 36px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n\n\n"}flex-wrap: 
wrap-reverse;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Box width="100%" display="flex" align-items="center" justify-content="center">
						<Box
							background="#EA8C8C"
							padding="10px 10px 10px 10px"
							display="flex"
							width="40%"
							position="relative"
							flex-wrap="wrap-reverse"
						>
							<Box padding="15px 15px 15px 15px">
								<Box padding="15px 15px 15px 15px" background="#C3E2D2">
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px">
								<Box padding="15px 15px 15px 15px" background="#C3E2D2">
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px">
								<Box padding="15px 15px 15px 15px" background="#C3E2D2">
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
								</Box>
							</Box>
						</Box>
						<Image width="64px" height="64px" margin="0px 0px 0px 10px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2033.svg?v=2021-06-17T22:15:09.760Z" />
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			background="#FCFAFA"
			padding="70px 0 150px 0"
			border-width="0px"
			border-style="solid"
			border-color="#9CD8B4"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				flex-direction="row"
				flex-wrap="wrap"
				justify-content="center"
			/>
			<Text text-align="center" font="normal 900 46px/1.2 --fontFamily-sansHelvetica" margin="0px 0px 40px 0px" width="100%">
				How do you want these items laid out on the cross axis?{"\n\n\n\n\n\n\n"}
			</Text>
			<Box width="100%" display="flex" justify-content="space-around">
				<Box display="flex" flex-direction="column">
					<Image src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2026.svg?v=2021-06-17T16:46:08.834Z" width="70px" margin="0px 0px 0px 40px" />
					<Text font="normal 900 36px/1.2 --fontFamily-sansHelvetica" color="#5E405D" margin="20px 0px 0px 20px">
						stretched{"\n\n"}
					</Text>
					<Text font="normal 400 30px/1.2 --fontFamily-sansHelvetica" color="#6B6B6B" margin="6px 0px 36px -40px" text-align="center">
						OK, default value has
						<br />
						you covered.{"\n\n"}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column">
					<Image src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/Group%2030.svg?v=2021-06-17T16:46:25.513Z" width="70px" />
					<Text font="normal 900 36px/1.2 --fontFamily-sansHelvetica" color="#5E405D" margin="20px 0px 16px 0px" text-align="center">
						not stretched{"\n\n"}
					</Text>
					<Text font="normal 400 30px/1.2 --fontFamily-sansHelvetica" color="#6B6B6B" margin="6px 0px 36px 0px" text-align="center">
						OK, use one of these:{"\n\n\n\n\n"}
					</Text>
				</Box>
			</Box>
			<Box display="flex" width="100%" justify-content="space-between">
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="48%"
					margin="0px 2% 0px 0px"
					align-items="center"
				>
					<Text margin="0px 0px 36px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n\n\n\n"}align-items: stretch;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Box width="100%" display="flex" justify-content="center">
						<Box
							background="#EA8C8C"
							padding="10px 0px 10px 0px"
							display="flex"
							width="70%"
							position="relative"
							flex-direction="row"
							height="342px"
						>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="48%"
					margin="0px 0px 0px 2%"
					align-items="center"
				>
					<Text margin="0px 0px 36px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n\n\n\n"}align-items: 
flex-start;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Box width="100%" display="flex" justify-content="center">
						<Box
							background="#EA8C8C"
							padding="10px 0px 10px 0px"
							display="flex"
							width="70%"
							position="relative"
							flex-direction="row"
							height="342px"
							align-items="flex-start"
						>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex" align-items="flex-start">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex" align-items="flex-start">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex" align-items="flex-start">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box width="100%" display="flex" padding="20px 0px 20px 0px" justify-content="space-around">
				<Text margin="0px 0px 0px 0px" color="#FCFAFA" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 0px" color="#9CD8B4" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
			</Box>
			<Box display="flex" width="100%" justify-content="flex-end">
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="44%"
					align-items="center"
					margin="0px 0px 0px 2%"
				>
					<Text margin="0px 0px 36px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n\n\n\n"}align-items: 
flex-end;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Box width="100%" display="flex" justify-content="center">
						<Box
							background="#EA8C8C"
							padding="10px 0px 10px 0px"
							display="flex"
							width="70%"
							position="relative"
							flex-direction="row"
							height="342px"
							align-items="flex-end"
						>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex" align-items="flex-start">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex" align-items="flex-start">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex" align-items="flex-start">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box width="100%" display="flex" padding="20px 0px 20px 0px" justify-content="space-around">
				<Text margin="0px 0px 0px 0px" color="#FCFAFA" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 0px" color="#9CD8B4" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
			</Box>
			<Box display="flex" width="100%" justify-content="flex-end">
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="44%"
					align-items="center"
					margin="0px 0px 0px 2%"
				>
					<Text margin="0px 0px 36px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n\n\n\n"}align-items: 

center

;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Box width="100%" display="flex" justify-content="center">
						<Box
							background="#EA8C8C"
							padding="10px 0px 10px 0px"
							display="flex"
							width="70%"
							position="relative"
							flex-direction="row"
							height="342px"
							align-items="center"
						>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex" align-items="flex-start">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex" align-items="flex-start">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex" align-items="flex-start">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box width="100%" display="flex" padding="20px 0px 20px 0px" justify-content="space-around">
				<Text margin="0px 0px 0px 0px" color="#FCFAFA" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 0px" color="#9CD8B4" font="normal 900 36px/1.2 --fontFamily-sansHelvetica">
					OR{"\n\n"}
				</Text>
			</Box>
			<Box display="flex" width="100%" justify-content="flex-end">
				<Box
					background="#FCF9E6"
					padding="30px 20px 20px 20px"
					border-width="5px"
					border-style="solid"
					border-radius="5px"
					border-color="#9CD8B4"
					display="flex"
					flex-direction="column"
					width="44%"
					align-items="center"
					margin="0px 0px 0px 2%"
				>
					<Text margin="0px 0px 36px 0px" font="normal 500 30px/1.2 --fontFamily-sansHelvetica" text-align="center">
						<Span
							background="#B7ABB6"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" \n\n\n\n"}align-items: 


baseline;
						</Span>
						{" "}on{" "}
						<Span
							color="#EA8C8C"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							container
						</Span>
						{"\n\n"}
					</Text>
					<Box width="100%" display="flex" justify-content="center">
						<Box
							background="#EA8C8C"
							padding="10px 0px 10px 0px"
							display="flex"
							width="70%"
							position="relative"
							flex-direction="row"
							height="342px"
							align-items="baseline"
						>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex" align-items="flex-start">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/pear.svg?v=2021-06-16T21:41:39.184Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex" align-items="flex-start">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/grapes_copy.svg?v=2021-06-16T21:43:11.317Z" />
								</Box>
							</Box>
							<Box padding="15px 15px 15px 15px" width="33.333%" display="flex" align-items="flex-start">
								<Box
									padding="15px 15px 15px 15px"
									background="#C3E2D2"
									display="flex"
									align-items="flex-start"
									justify-content="center"
									width="100%"
								>
									<Image width="50px" height="50px" src="https://uploads.quarkly.io/60ca6e11950f4f001fe37dcf/images/orange.svg?v=2021-06-16T21:43:22.307Z" />
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
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