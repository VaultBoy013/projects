import React from "react";
import "../css/index.css";
import { actionsBind, Selector } from "../../../state/hooks";
import { Board, InfoCart, styleCart, SvgBoard } from "../types";
const {removeCart} = actionsBind;
const Index = () => {
    const { carts } = Selector( ( state ) => state.cartsReducer );
    return (
        <div className={Board.BOARD_WRAPPER}>
            {
                carts.map( ( {username, name}, index )=>{
                    const {firstname, lastname} = name;
                    const textHeader = `${index + 1}# ${username.length < 30 ? username.toUpperCase() : username.slice( 0, 19 ) + "..."}`;
                    let textSubheader = `${firstname.toUpperCase()} ${lastname.toUpperCase()}`;
                    textSubheader = textSubheader.length < 19 ? textSubheader : textSubheader.slice( 0, 19 ) + "...";
                    return (
                        <div key={`$${index}cart@@@`}
                            className={Board.CART}
                            style={styleCart}
                        >
                            <button className={Board.CLOSE} onClick={()=>{removeCart( index );}}>🗙</button>
                            <h5 className={Board.HEADER}>{textHeader}</h5>
                            <p className={Board.SUBHEADER}>{textSubheader}</p>
                            <p className={Board.DESC}>{InfoCart.INFO}</p>
                            <a href="#" className={Board.BTN}>
                                {InfoCart.BTN_INFO}
                                <svg className={SvgBoard.CLASS}
                                    aria-hidden={SvgBoard.ARIA_HIDDEN}
                                    xmlns={SvgBoard.XMLNS}
                                    fill={SvgBoard.FILL} viewBox={SvgBoard.VIEW_BOX}>
                                    <path stroke={SvgBoard.STROKE}
                                        strokeLinecap={SvgBoard.LINECAP}
                                        strokeLinejoin={SvgBoard.LINE_JOIN}
                                        strokeWidth={SvgBoard.STROKE_WIDTH}
                                        d={SvgBoard.D} />
                                </svg>
                            </a>
                        </div>
                    );
                } )
            }
        </div>
    );
};

export default Index;