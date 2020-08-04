<template>
    <div class="socials">
        <ul>
            <li><a href="https://github.com/zlindner" target="_blank noopener noreferrer">github</a></li>
            <li><a href="https://linkedin.com/in/zachlindner" target="_blank noopener noreferrer">linkedin</a></li>
            <li><a href="Resume.pdf" target="_blank noopener noreferrer">resume</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Socials'
    };
</script>

<style lang="sass" scoped>
    .socials
        position: absolute
        top: 40px
        right: 40px

        ul
            list-style-type: none

            li
                display: inline-block
                margin-left: 40px

                a
                    font-size: 18px
</style>
