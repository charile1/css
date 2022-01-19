import * as THREE from 'three';

// ----- 주제: 기본 장면 구성

export default function example() {
	// Renderer(화면에 보이는)
	const canvas = document.querySelector('#three-canvas');
	const renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러 크기를 브라우저 창 크기로
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 고해상 디스플레이 지원
	renderer.shadowMap.enabled = true; // 그림자가 생기도록

	// Scene
	const scene = new THREE.Scene();
	// 배경색 설정
	scene.background = new THREE.Color('white');

	// Camera(카메라)
	const camera = new THREE.PerspectiveCamera(
		75, // 시야각(field of view)
		window.innerWidth / window.innerHeight, // 장면 비율
		0.1, // near(가까이 보이는 한계)
		1000 // far(멀리 보이는 한계)
	);
	camera.position.set(0, 1, 5); // 카메라 위치
	scene.add(camera); // 무대에 카메라를 넣어준것입니다.

	// Light(조명)
/E.AmbientLight('white', 0.5); // 색상, 강도
	scene.add(ambientLight);
	// 스팟 조명
	const spotLight = new THREE.SpotLight('white', 0.7); // 색상, 강도
	spotLight.position.set(-2, 5, 3);
	spotLight.castShadow = true; // 그림자를 만들 수 있도록
	spotLight.shadow.mapSize.width = 1024; // 그림자 해상도
	spotLight.shadow.mapSize.height = 1024;
	scene.add(spotLight);

	// Mesh
	const floor = new THREE.Mesh(
		new THREE.PlaneGeometry(5, 5), //종이매트리(가로,세로)
		new THREE.MeshStandardMaterial({
			color: 'lightgray'
		})
	);
	floor.receiveShadow = true; // 표면에 그림자가 생길 수 있도록
	floor.rotation.x = -Math.PI * 0.5; // Math.PI는 180도 , x축으로 파이의 0.5는 90도, 원래 벽처럼 긴

	const box = new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1),
		new THREE.MeshStandardMaterial({
			color: 'limegreen'
		})
	);
	box.castShadow = true; // 박스의 그림자를 만들 수 있도록
	box.position.y = 0.5; // 내 높이의 절반만큼 올려줍니다. 없애주면 박스가 절반으로 됩니다.

	scene.add(floor, box);

	// 기기 성능 차이에 따른 애니메이션 속도 차이를 없애기 위해 three.js에서 제공하는 Clock 사용
	const clock = new THREE.Clock();

	// 빠르게 반복 실행 되는 그리기 함수
	function draw() {
		const delta = clock.getDelta(); // draw 실행 시간 간격
		console.log(delta);
		// const time = clock.getElapsedTime(); // 총 경과 시간

		box.rotation.y += delta;
		// box.rotation.y += 0.01;
		// 기기 성능 차이에 따른 애니메이션 속도 차이를 없애기 위해 Clock의 delta 사용

		// 렌더링
		renderer.render(scene, camera);
		// draw 함수 반복 실행
		renderer.setAnimationLoop(draw);
	}

	// 캔버스 사이즈를 브라우저 창 사이즈에 맞추기
	// 브라우저 창 사이즈 바뀔때마다 setSize 함수 호출
	function setSize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix(); // 카메라 관련 속성이 변하면 실행
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera); //re에서 render를 해줘야 최종적으로 보입니다/
	}

	// 이벤트
	// 브라우저 창 사이즈 변경 시, 캔버스 사이즈를 맞추기 위해 실행
	window.addEventListener('resize', setSize);

	draw();
}
