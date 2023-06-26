import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { useSelector } from "react-redux";
import { selectProduct } from "../features/products/productSlice";

function Home() {
	const products = useSelector(selectProduct);
	// 	{
	// 	name: "Model S",
	// 	desc: "Order Online for Touchless Delivery",
	// 	bgImage: "model-s.jpg",
	// 	price: "Starting at $32,740",
	// 	btnOption2: "Demo Drive",
	// 	btnOption1: "Custom Order",
	// },

	return (
		<Container>
			{products &&
				products.map((pr, i) => {
					return (
						<Section
							key={i}
							price={pr?.price}
							bgImage={pr?.bgImage}
							leftBtnText={pr?.btnOption1}
							rightBtnText={pr?.btnOption2}
							desc={pr?.desc}
							title={pr?.name}
							footer={pr?.sectionFooter}
						/>
					);
				})}
		</Container>
	);
}

const Container = styled.div`
	height: 100vh;
	width: 100vw;
`;
export default Home;
