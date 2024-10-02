'use strict';

export let content1 = `
    <table>
        <tr>
            <th>Nom</th>
            <td>Loris Weier</td>
        </tr>
        <tr>
            <th>Type</th>
            <td>
                <div class="types">
                    <img class="type" src="img/types/type-acier.png">
                    <img class="type" src="img/types/type-combat.png">
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
            <td id="total-days"></td>
        </tr>
        <tr>
            <th>Niveau suivant</th>
            <td>
                <div class="exp_bar">
                    <p id="exp-bar-text"></p>
                    <progress id="exp-bar" value="0" max="365"></progress>
                </div>
            </td>
        </tr>
    </table>

    <table class="sticky">
        <tr>
            <th>Objet</th>
            <td>
                <div class="object">
                    <img src="img/object.png">
                    Email
                </div>
            </td>
        </tr>
    </table>
    <div class="object_description description">
        Cet objet permet à son détenteur d'être contacté via cette adresse mail : <a href="mailto:lorisweier@gmx.fr">lorisweier@gmx.fr</a>
    </div>
    `;