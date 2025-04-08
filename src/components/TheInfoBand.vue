<script setup>
const birthday = new Date('2004-9-21')

function age() {
    let today = new Date()
    let age = today.getFullYear() - birthday.getFullYear()
    if (
        today.getMonth() < birthday.getMonth() ||
        (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())
    ) {
        age--
    }
    return age
}
</script>

<template>
    <div class="info-band">
        <img class="pokeball" src="/img/masterball-sprite.png" />
        <p>Loris</p>
        <p id="age">Niv. {{ age() }}</p>
        <img class="gender" src="/img/male-gender.png" />
    </div>
</template>

<style lang="scss" scoped>
.info-band {
    box-sizing: border-box;

    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: flex-end;
    height: 50px;
    width: 700px;

    padding-right: 100px;

    background-color: black;
    color: white;

    img {
        width: 25px;
    }

    .pokeball {
        width: 40px;
    }

    p {
        font-size: x-large;
        font-weight: bold;
    }

    .gender {
        background-color: royalblue;
        border-radius: 50%;
    }
}
</style>
