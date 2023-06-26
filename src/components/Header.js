import React, { useState } from "react";
import { styled } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { selectProduct } from "../features/products/productSlice";

function Header() {
	const [isBurgerShow, setIsBurgerShow] = useState(false);
	const products = useSelector(selectProduct);
	// remove scroll for body when isBurgerShow is true
	isBurgerShow
		? document.body.classList.add("body-not-scroll")
		: document.body.classList.remove("body-not-scroll");
	return (
		<Container>
			<a href="#">
				<img src="/images/logo.svg" alt="Tesla Logo" />
			</a>
			<Menu>
				{products
					? products.map((p, i) => (
							<a key={i} href="#">
								{p.name}
							</a>
					  ))
					: false}
			</Menu>
			<RightMenu>
				<a href="#">Shop</a>

				<CustomMenu onClick={() => setIsBurgerShow(true)}></CustomMenu>
			</RightMenu>

			<BurgerMenu show={isBurgerShow}>
				<CustomCloseMenu
					onClick={() => setIsBurgerShow(false)}
				></CustomCloseMenu>

				<ul>
					<li>
						<a style={{ wordSpacing: "2px" }} href="#">
							Tesla Account
						</a>
					</li>
					{products
						? products.map((p, i) => (
								<li key={i}>
									<a href="#">{p.name}</a>
								</li>
						  ))
						: false}

					<li>
						<a href="#">Existing Inventory</a>
					</li>
					<li>
						<a href="#">Used Inventory</a>
					</li>
					<li>
						<a href="#">Trade-in</a>
					</li>
					<li>
						<a href="#">Cybertruck</a>
					</li>
					<li>
						<a href="#">Roadaster</a>
					</li>
					<li>
						<a href="#">Charging</a>
					</li>
					<li>
						<a href="#">SEMI</a>
					</li>
				</ul>
			</BurgerMenu>
			{isBurgerShow && (
				<BurgerMenuOverLay
					onClick={() => setIsBurgerShow(false)}
				></BurgerMenuOverLay>
			)}
		</Container>
	);
}

export default Header;

const Container = styled.div`
	z-index: 1;
	min-height: 76px;
	padding: 0 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`;
const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-self: center;
	gap: 16px;
	padding: 0 16px;
	a {
		text-transform: uppercase;
		font-weight: 600;
		flex-wrap: nowrap;
	}
	text-align: center;

	@media (width<=880px) {
		display: none;
	}
`;
const RightMenu = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	a {
		font-weight: 600;
		text-transform: uppercase;
		margin: 10px 0;
	}
`;
const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;

const BurgerMenu = styled.div`
	/* open/close logic */

	transform: ${(props) => (props.show ? "translate(0)" : "translate(100%)")};
	opacity: ${(props) => (props.show ? "0.85" : "0.01")};
	/* style */
	z-index: 99999;
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: #fff;
	width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: opacity 0.4s ease-in, transform 0.3s ease-in-out;
	/* ul list */
	ul {
		overflow-y: scroll;
		width: 100%;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 32px 20px;
		li {
			font-weight: 500;
			text-transform: uppercase;
			padding-bottom: 16px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.2);
			transition: all 0.3s ease-out;
			&:hover > a {
				transform: translateX(3px);
			}
			&:not(:hover) {
				opacity: 0.75;
			}
			&:hover {
				border-bottom: 1px solid rgba(0, 0, 0, 0.5);
			}
			a {
				display: inline-block;
				transition: all 0.3s ease-out;
			}
		}
	}
`;
const CustomCloseMenu = styled(CloseIcon)`
	/* padding-top: 16px; */
	cursor: pointer;
	align-self: end;
	margin: 26px 16px 0 0;
`;
const BurgerMenuOverLay = styled.div`
	transition: all 0.4s ease-in;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 16;
	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(3px);
	z-index: 5;
	cursor: pointer;
`;
