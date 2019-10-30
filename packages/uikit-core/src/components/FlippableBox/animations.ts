import { keyframes } from "styled-components";

// Implementation that doesn't require explicit height/width
// shamelessly stolen from here: https://codepen.io/anon/pen/bwmkAo
// Added separate animation for front and back flips so that the
// animation "reverses" when flipped from back-to-front - that is,
// front-to-back flips clockwise, back-to-front flips counter-clockwise.

export const frontHide = keyframes`
  0% {
		transform: rotateY(0deg);
    height: 100%;
    width: 100%;
	}

	49% {
		height: 100%;
		width: 100%;
	}

	50% {
		height: 0;
		width: 0;
	}

	100% {
		transform: rotateY(180deg);
		height: 0;
		width: 0;
	}
`;

export const frontShow = keyframes`
  0% {
		transform: rotateY(180deg);
		height: 0;
		width: 0;
	}

	49% {
		height: 0;
		width: 0;
	}

	50% {
		height: 100%;
		width: 100%;
	}

	100% {
		transform: rotateY(0deg);
		height: 100%;
		width: 100%;
	}
`;

export const backHide = keyframes`
  0% {
		transform: rotateY(0deg);
    height: 100%;
    width: 100%;
	}

	49% {
		height: 100%;
		width: 100%;
	}

	50% {
		height: 0;
		width: 0;
	}

	100% {
		transform: rotateY(-180deg);
		height: 0;
		width: 0;
	}
`;

export const backShow = keyframes`
  0% {
		transform: rotateY(-180deg);
		height: 0;
		width: 0;
	}

	49% {
		height: 0;
		width: 0;
	}

	50% {
		height: 100%;
		width: 100%;
	}

	100% {
		transform: rotateY(0deg);
		height: 100%;
		width: 100%;
	}
`;
