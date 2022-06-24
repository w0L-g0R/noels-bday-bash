<script lang="ts">
</script>

<div class="outer">
	<div class="inner">
		<label>Back</label>
	</div>
</div>

<style lang="sass">
.outer 
    position: relative
    margin: auto
    width: 70px
    margin-top: 200px
    cursor: pointer


.inner 
    width: inherit
    text-align: center


label  
    font-size: 1em 
    line-height: 4em
    text-transform: uppercase
    color: black
    transition: all .3s ease-in
    opacity: 0
    cursor: pointer


.inner:before, .inner:after 
    position: absolute
    content: ''
    height: 1px
    width: inherit
    background: black
    left: 0
    transition: all .3s ease-in


.inner:before 
    top: 50% 
    transform: rotate(45deg)  


.inner:after   
    bottom: 50%
    transform: rotate(-45deg)  


.outer:hover label 
    opacity: 1


.outer:hover .inner:before,
.outer:hover .inner:after 
    transform: rotate(0)


.outer:hover .inner:before 
    top: 0


.outer:hover .inner:after 
    bottom: 0

</style>
