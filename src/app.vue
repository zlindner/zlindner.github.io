<template>
    <div id="app">
        <Home />
        <Projects />

        <Socials />
    </div>
</template>

<script>
    import Home from './components/home';
    import Projects from './components/projects';
    import Socials from './components/socials';

    export default {
        name: 'App',
        components: { Home, Projects, Socials }
    };
</script>

<style lang="sass">
    @font-face
        font-family: "SF Display"
        font-weight: 500
        src: url("https://sf.abarba.me/SF-UI-Display-Medium.otf")

    @font-face
        font-family: "SF Text"
        font-weight: 400
        src: url("https://sf.abarba.me/SF-UI-Text-Regular.otf")

    body
        margin: 0
        padding: 40px

        color: #fff
        background-color: #000
        font-family: "SF Text"
        font-weight: 400

        overflow-x: hidden
        user-select: none

    div
        box-sizing: border-box

    a
        color: #fff
</style>
