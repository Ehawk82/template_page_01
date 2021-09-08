const init = () => {
	buildUI();
},
buildUI = () => {
	const heading = createEle("header"),
	      side_frame_l = createEle("div"),
	      side_frame_r = createEle("div"),
	      sub_frame = createEle("div"),
		  main_content = createEle("div"),
		  main_frame = createEle("div"),
		  content = createEle("div"),
		  side_frame_l_item = createEle("div"),
		  side_frame_r_item = createEle("div"),
	      footer = createEle("footer");
	//
	heading.innerHTML = "Heading";
	heading.className = "w3-container w3-header w3-large w3-padding-16";

	//
	side_frame_l_item.innerHTML = "left item";
	side_frame_l_item.className = "w3-container w3-black w3-padding-16";

	side_frame_r_item.innerHTML = "right item";
	side_frame_r_item.className = "w3-container w3-black w3-padding-16";

	side_frame_l.append(side_frame_l_item);
	side_frame_l.className = "w3-container w3-white w3-margin-top w3-margin-bottom w3-half";

	side_frame_r.append(side_frame_r_item);
	side_frame_r.className = "w3-container w3-white w3-margin-top w3-margin-bottom w3-half";

	sub_frame.innerHTML = "&nbsp;";
	sub_frame.className = "w3-container";

	main_content.append(side_frame_l,side_frame_r,sub_frame);
	main_content.className = "w3-container w3-margin-top w3-margin-bottom";

	main_frame.append(main_content);
	main_frame.className = "w3-container w3-card w3-white w3-margin-top w3-margin-bottom";

	content.append(main_frame);
	content.className = "w3-container w3-margin-left w3-margin-right";
	
	//
	footer.innerHTML = "EHAWK LLC &copy; 2021 || POWERED BY w3css";
	footer.className = "w3-h4 w3-padding-16 w3-center w3-white w3-small";

	////
	body.append(heading,content,footer);
};

window.onload = () => init();