<template>
    <section class="home">
        <h1>
            zachary<br />
            lindner
        </h1>

        <div class="content">
            <span class="header">about.</span>
            <div class="grid">
                <span>hey, i'm zach -- a recent computer science graduate from the university of guelph.</span>
                <span
                    >i'm currently developing my skills through building web-based natural language processing (nlp)
                    applications.</span
                >
                <span
                    >i'm available for work and any other kind of opportunities.
                    <a href="mailto:zach.lindner@hotmail.com">get in touch.</a></span
                >
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Home'
    };
</script>

<style lang="sass" scoped>
    .home
        h1
            font-size: 72px
            font-family: "SF Display"
            font-weight: 500
            margin: 0

        .content
            display: flex
            margin-top: 200px

            .header
                width: 300px
                font-size: 24px
                letter-spacing: 2px

            .grid
                width: calc(100% - 300px)
                display: grid
                grid-template-columns: repeat(auto-fill, 300px)
                column-gap: 50px
                row-gap: 25px

                span
                    width: 300px
                    font-size: 18px

                    a
                        color: #fff
</style>
