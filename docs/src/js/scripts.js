const init = () => {
	buildUI();
},
buildUI = () => {
	const heading = createEle("header"),
		  main_content = createEle("div"),
		  main_frame = createEle("div"),
		  content = createEle("div"),
	      footer = createEle("footer");
	//
	heading.innerHTML = "Heading";
	heading.className = "w3-h1 w3-large w3-padding-16 w3-white";

	//
	main_content.innerHTML = "main_content";
	main_content.className = "w3-teal w3-margin-top w3-margin-bottom";

	main_frame.append(main_content);
	main_frame.className = "w3-container w3-card w3-white w3-margin-top w3-margin-bottom";

	content.append(main_frame);
	content.className = "w3-container w3-teal w3-margin-left w3-margin-right";
	
	//
	footer.innerHTML = "EHAWK LLC &copy; 2021 || POWERED BY w3css";
	footer.className = "w3-h4 w3-padding-16 w3-center w3-white w3-small";

	////
	body.append(heading,content,footer);
};

window.onload = () => init();