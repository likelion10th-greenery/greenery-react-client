import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { items } from '../../rawData';

const TOTAL_SLIDES = 4; // 총 슬라이드 개수 보다 하나 적게
export default function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideRef = useRef(null);
	const nextSlide = () => {
		if (currentSlide >= TOTAL_SLIDES) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};
	const prevSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(TOTAL_SLIDES);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};

	useEffect(() => {
		slideRef.current.style.transition = 'all 0.5s ease-in-out';
		slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
	}, [currentSlide]);

	return (
		<Container>
			<SliderContainer ref={slideRef}>
				<img src={items[0].img_url} alt="식물 사진" width={300} height={300} />
				<img src={items[0].img_url} alt="식물 사진" width={300} height={300} />
				<img src={items[0].img_url} alt="식물 사진" width={300} height={300} />
			</SliderContainer>
			<Button onClick={prevSlide}>Prev Slide</Button>
			<Button onClick={nextSlide}>next Slide</Button>
		</Container>
	);
}

const Container = styled.div`
	width: 300px;
	overflow: hidden;
`;

const Button = styled.button`
	all: unset;
	border: 1px solid grey;
	padding: 0.5em 2em;
	color: black;
	border-radius: 10px;
	&:hover {
		transiton: all 0.3s ease-in-out;
		background-color: grey;
		colr: fff#;
	}
`;

const SliderContainer = styled.div`
	width: 50%;
	display: flex;
`;
