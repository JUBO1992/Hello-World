/// <reference path="styles.d.ts" />
import * as React from 'react';
import {Router, Link} from 'react-router';
import {Navbar, Nav, NavItem, Table, Button, NavDropdown, Carousel} from 'react-bootstrap';

import carouselStyle=require("xstyle/css!./styles/carousel.css");

export interface CarouselProps { }
export class CustomCarousel extends React.Component<CarouselProps, {}>{
    static carouselStyle=carouselStyle;
    render() {
        return (
            <div className="Carouselcontainer">
                <Carousel>
                    <Carousel.Item>
                        <img width={1920} height={500} alt="900x500" src="home/imgs/banner1.png"/>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1920} height={500} alt="900x500" src="home/imgs/banner1.png"/>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1920} height={500} alt="900x500" src="home/imgs/banner1.png"/>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
