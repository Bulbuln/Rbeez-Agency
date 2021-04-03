import styled from 'styled-components';


export const HomeSection = styled.div `
    height: 500px;
    background-image: url('image/img-1.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: static;
    
    
    `


export const HomeInformation = styled.div `
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%)
    
`

export const  HomeTitle = styled.h2  `
    font-size: 60px;
    font-weight: bold;
    color: #0275d8 ;
`

export const HomeInfo = styled.h4 `
    font-size: 35px;
    color: #fff;
    margin-bottom: 20px;
`

export const HomeDesc = styled.h4 `
    line-height: 1.5;
    color: #ffff;
    margin-left: 5px;
    margin-bottom: 20px;

`

export const DescSpan =  styled.span `
    color: #000
`

export const HomeBtn = styled.button `
    background: #04CAB9;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold
`

// .home .home-information .home-btn:hover {
//     background: #fff;
//     color: #eb5424
// }



// @media (max-width:768px) {
//     .home .home-information .home-title {
//         font-size: 40px;
//         color: #fff
//     }
    
//     .home .home-information .home-info {
//         font-size: 20px
//     }
    
//     .home .home-information .home-desc {
//         font-size: 15px
//     }
// }

// @media (max-width:575px) {
//     .home .home-information .home-title {
//         font-size: 30px;
//     }
// }