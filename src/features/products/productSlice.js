import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cars: ["Model S", "Model Y", "Model 3", "Model X"],
	products: [
		{
			name: "Model S",
			desc: "Order Online for Touchless Delivery",
			bgImage: "model-s.jpg",
			price: "Starting at $32,740",
			btnOption2: "Demo Drive",
			btnOption1: "Custom Order",
		},
		{
			name: "Model Y",
			desc: "After Federal Tax Credit",
			bgImage: "model-y.jpg",
			price: "Starting at $40,240",
			btnOption2: "Demo Drive",
			btnOption1: "Explore Inventory",
		},
		{
			name: "Model 3",
			desc: "After Federal Tax Credit",
			bgImage: "model-3.jpg",
			price: "Starting at $32,740",
			btnOption2: "Custom Order",
			btnOption1: "Explore Inventory",
			["sectionFooter"]:
				"3 months free Supercharging when you take delivery of a new Inventory vehicle by June 30",
		},
		{
			name: "Model X",
			desc: <a href="#">Explore Inventory</a>,
			bgImage: "model-x.jpg",
			price: "",
			btnOption2: "Demo Drive",
			btnOption1: "Custom Order",
		},
		{
			name: "Solar Panels",
			desc: <a href="#">Schedule a Virtual Consultation</a>,
			bgImage: "solar-panel.jpg",
			price: "Starting at $32,740",
			btnOption2: "Learn More",
			btnOption1: "Order Now",
		},
		{
			name: "Solar Roof",
			desc: "Produce Clean Energy From Your Roof",
			bgImage: "solar-roof.jpg",
			price: "Starting at $32,740",
			btnOption2: "Learn More",
			btnOption1: "Order Now",
		},
	],
};
const productSlice = createSlice({
	name: "product",
	reducer: {},
	initialState,
});
export const selectProduct = (state) => {
	return state.product.products;
};
export default productSlice.reducer;
