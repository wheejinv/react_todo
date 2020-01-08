import React from "react";
import "./App.css";

function App() {
	const text = `당신은 어썸한가욤?`;
	const condition = true;
	const style = {
		backgroundColor: "gray", // background-color
		border: "1px solid black",
		height: Math.round(Math.random() * 300) + 50,
		width: Math.round(Math.random() * 300) + 50,
		WebkitTransition: "all", // 웹 브라우저 접두어인 -webkit
		MozTransition: "all", // 웹 브라우저 접두어인 -mos
		msTransition: "all", // 하지만 예외로 대문자로 바꾸지 않고 소문자 ms 로 작성.
	};

	return (
		<div className="my-div">
			{ /* 요소 박에서의 주석은 이렇게 작성함. */}
			<h1>리액트 안녕</h1>
			<h2>{text}</h2>
			{
				condition && "참입니다"
			}
			<div
				style={style}
				// self-closed 태그에서만 작동하는 주석이라고 합니다.
			/>
			// 이건 그냥 렌더링 됨 ㅋ
		</div>
	);
}

export default App;
