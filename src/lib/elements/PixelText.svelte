<script lang="ts">
</script>

<main class="container">
	<div class="neons">Join!</div>
</main>

<style lang="sass">

.container 

    display: flex
    justify-content: center
    align-items: center
    flex-direction: column

    // background: black

    .neons 
        font-family: 'Neon Pixel', sans-serif
        font-size: 4rem
        text-align: center
        animation: glow 2s ease-in-out infinite alternate

@keyframes glow
    from 
        color: #fff
        text-shadow: 0 0 10px #FF67B8, 0 0 20px #FF67B8, 0 0 30px #FF67B8, 0 0 40px #FF67B8, 0 0 50px #FF67B8, 0 0 60px #FF67B8, 0 0 70px #FF67B8, 0 0 90px #FF67B8

    to 
        color: gray
        text-shadow: 0 0 20px #FF67B8, 0 0 30px #FF67B8, 0 0 40px #FF67B8, 0 0 50px #FF67B8, 0 0 60px #FF67B8, 0 0 70px #FF67B8, 0 0 80px #FF67B8, 0 1 90px #FF67B8



</style>
