<script setup></script>

<template>
    <footer>
        <p>WEIER Loris - 2025</p>

        <div>
            <img id="control-down" class="control" src="/img/arrow-down.png" />
            <img id="control-top" class="control" src="/img/arrow-top.png" />
            <img id="control-left" class="control" src="/img/arrow-left.png" />
            <img id="control-right" class="control" src="/img/arrow-right.png" />
            Contrôles
        </div>

        <!--        <div id="control-b">-->
        <!--            <span class="control">B</span>-->
        <!--            Retour-->
        <!--        </div>-->
    </footer>
</template>

<style lang="scss" scoped>
footer {
    display: flex;
    justify-content: right;
    align-items: center;
    height: 5vh;

    padding: 0 20px;

    background-color: black;
    color: white;

    font-weight: bold;

    p {
        flex-grow: 2;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        margin: 0 10px;

        font-size: larger;
    }
}

.control {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    aspect-ratio: 1/1;

    margin-right: 5px;

    background-color: white;
    border-radius: 50%;
    color: black;

    font-size: x-large;
}
</style>
