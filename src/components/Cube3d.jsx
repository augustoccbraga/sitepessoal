import React, { useEffect } from "react";
import { CuboContainer } from "./Containers.style";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import Redux from "../assets/Redux.jpg";
import JavaScript from "../assets/JavaScript.jpg";
import WordPress from "../assets/WordPress.jpg";
import StyledComponents from "../assets/StyledComponents.jpg";
import TypeScript from "../assets/TypeScript.jpg";
import ReactIMG from "../assets/React.jpg";

const Cube3d = () => {
	const [textures, setTextures] = React.useState(null);

	useEffect(() => {
		let isMounted = true;

		const loadTextures = async () => {
			const loader = new TextureLoader();
			const [lado_1, lado_2, lado_3, lado_4, lado_5, lado_6] =
				await Promise.all([
					loader.loadAsync(Redux),
					loader.loadAsync(JavaScript),
					loader.loadAsync(WordPress),
					loader.loadAsync(StyledComponents),
					loader.loadAsync(TypeScript),
					loader.loadAsync(ReactIMG),
				]);

			if (isMounted) {
				setTextures({ lado_1, lado_2, lado_3, lado_4, lado_5, lado_6 });
			}
		};

		requestAnimationFrame(loadTextures);

		return () => {
			isMounted = false;
		};
	}, []);

	if (!textures) {
		return null; // Ou um loader/spinner
	}

	return (
		<CuboContainer>
			<Canvas
				camera={{
					position: [6, -1, 1],
					fov: 20,
				}}
			>
				<OrbitControls enableZoom={false} enablePan={false} />
				<ambientLight />
				<directionalLight position={[10, 10, 10]} />
				<mesh rotation={[Math.PI / 10, 10, 10]}>
					<boxGeometry attach="geometry" args={[1, 1, 1]} />
					<meshStandardMaterial
						map={textures.lado_1}
						attach="material-0"
						color={"#fff"}
					/>
					<meshStandardMaterial
						map={textures.lado_2}
						attach="material-1"
						color={"#fff"}
					/>
					<meshStandardMaterial
						map={textures.lado_3}
						attach="material-2"
						color={"#fff"}
					/>
					<meshStandardMaterial
						map={textures.lado_4}
						attach="material-3"
						color={"#fff"}
					/>
					<meshStandardMaterial
						map={textures.lado_5}
						attach="material-4"
						color={"#fff"}
					/>
					<meshStandardMaterial
						map={textures.lado_6}
						attach="material-5"
						color={"#fff"}
					/>
				</mesh>
			</Canvas>
		</CuboContainer>
	);
};

export default Cube3d;
