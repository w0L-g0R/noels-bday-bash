<main>
	<div class="wrapper">
		<span>C</span>
		<span>L</span>
		<span>I</span>
		<span>C</span>
		<span style="margin-right:12px">K</span>
		<span>M</span>
		<span>E</span>
		<span>!</span>
	</div>
</main>

<style lang="sass">
    @import url("https://fonts.googleapis.com/css2?family=Titan+One&display=swap")

    .wrapper 
        // width: 100vw
        text-align: center
        
    span 
        -webkit-text-stroke-width: 1.25px
        -webkit-text-stroke-color: #000
        font-size: 66px
        text-shadow: 0 0px #f3c623, 0 0px #f2aaaa
        transform: translate(0, 100%) rotate(4deg)
        animation: jump 2s ease-in-out infinite
        display: inline-block
        font-family: "Titan One", cursive
        color: #fff

        @for $i from 1 through 7
            &:nth-child(#{$i})
                animation-delay: 120ms * $i
    
    @keyframes jump 
        33% 
            text-shadow: 0 60px #f37121, 0 120px #f2aaaa
        
        50% 
            transform: translate(0, 0) rotate(-4deg)
            text-shadow: 0 0px #8fc0a9, 0 0px #84a9ac
        
        66.67% 
            text-shadow: 0 -60px #d54062, 0 -120px #8fc0a9
    
    main 
        margin: 0
        padding: 0
        width: 100%
        height: 100vh
        box-sizing: border-box
        display: grid
        place-items: center
        overflow: hidden
        // background: #000
    
    @media screen and (max-height: 200px) 
        .wrapper 
            transform: scale(0.3,0.3)
        
    
    @media screen and (max-width: 576px) 
        .wrapper 
            span 
                font-size: 50px

</style>
