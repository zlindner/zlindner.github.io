<template>
    <section class="projects">
        <div class="content">
            <span class="header">projects.</span>
            <div class="grid">
                <div>
                    <a href="https://github.com/zlindner/pripol" target="_blank noopener noreferrer">pripol</a>

                    <span class="desc"
                        >a nlp based web application that allows users to analyze a website's privacy policy w/ a
                        convolutional neural network.</span
                    >

                    <span class="stack">typescript | react | python | flask | tensorflow</span>
                </div>

                <div>
                    <a href="https://github.com/zlindner/graph-seg" target="_blank noopener noreferrer">graph-seg</a>

                    <span class="desc"
                        >an unsupervised text segmentation algorithm using semantic relatedness graphs & maximal
                        cliques.</span
                    >

                    <span class="stack">python | networkx</span>
                </div>

                <div>
                    <a href="https://github.com/zlindner/zlindner.github.io" target="_blank noopener noreferrer"
                        >zlindner.github.io</a
                    >

                    <span class="desc">my personal website / portfolio.</span>

                    <span class="stack">javascript | vue | sass</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Projects'
    };
</script>

<style lang="sass" scoped>
    .projects
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

                div
                    width: 300px
                    height: 400px

                    a
                        display: block
                        color: #fff
                        font-size: 20px

                    .desc
                        display: block
                        margin: 10px 0
                        font-size: 18px

                    .stack
                        font-size: 14px
</style>
