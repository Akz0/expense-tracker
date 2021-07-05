import { keyframes } from "styled-components";


export const transformOpacityAnimation=keyframes`
    0%{
        transform:${props=>props.scale?`scale(${props.scale})`:0.8};
        opacity: ${props=>props.opacity?props.opacity:0};
    }
    100%{
        transform:scale(1);
        opacity: 1;
    }
`
export const opacityAnimation=keyframes`
    0%{
        opacity: ${props=>props.opacity?props.opacity:0};
    }
    100%{
        opacity: ${props=>props.opacityTo?props.opacityTo:1};
    }
`