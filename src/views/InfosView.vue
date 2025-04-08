<script setup>
const birthday = new Date('2004-9-21')

function daysUntilBirthday() {
    let today = new Date()
    let nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())
    if (today > nextBirthday) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1)
    }
    return Math.floor((nextBirthday - today) / 86400000)
}

function daysSinceBorn() {
    return Math.floor((new Date() - birthday) / 86400000)
}
</script>

<template>
    <div>
        <table>
            <tr>
                <th>Nom</th>
                <td>Loris Weier</td>
            </tr>
            <tr>
                <th>Type</th>
                <td>
                    <div class="types">
                        <img class="type" src="/img/types/type-acier.png" />
                        <img class="type" src="/img/types/type-combat.png" />
                    </div>
                </td>
            </tr>
            <tr>
                <th>Status actuel</th>
                <td>Étudiant en Informatique</td>
            </tr>
            <tr>
                <th>Github</th>
                <td><a href="https://github.com/WashiFR" target="_blank">WashiFR</a></td>
            </tr>
        </table>

        <table>
            <tr>
                <th>Points d'Experience</th>
                <td id="total-days">{{ daysSinceBorn() }}</td>
            </tr>
            <tr>
                <th>Niveau suivant</th>
                <td>
                    <div class="exp-bar">
                        <p id="exp-bar-text">{{ daysUntilBirthday() }}</p>
                        <progress
                            id="exp-bar"
                            :value="365 - daysUntilBirthday()"
                            max="365"
                        ></progress>
                    </div>
                </td>
            </tr>
        </table>

        <table class="sticky">
            <tr>
                <th>Objet</th>
                <td>
                    <div class="object">
                        <img src="/img/object.png" />
                        Email
                    </div>
                </td>
            </tr>
        </table>

        <div class="object-description description">
            Cet objet permet à son détenteur d'être contacté via cette adresse mail :
            <a href="mailto:lorisweier@gmx.fr">lorisweier@gmx.fr</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.types {
    display: flex;
    align-items: center;
    gap: 10px;

    .type {
        width: 120px;

        border-radius: 3px;
    }
}

.exp-bar {
    display: flex;
    flex-direction: column;

    text-align: right;

    p {
        margin: 0;
    }
}

.object {
    display: flex;
    align-items: center;

    img {
        width: 50px;

        padding-right: 10px;
    }
}
</style>
