<script setup>
import Chart from 'chart.js/auto'
import { onMounted } from 'vue'

onMounted(() => {
    const labels = ['Frontend', 'Backend', 'Comm', 'Réseaux', 'Maths', 'Code']

    const stats = [80, 70, 60, 10, 70, 90]

    new Chart(document.getElementById('myChart'), {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [
                {
                    data: stats,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.4)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                    pointRadius: 0,
                    pointHoverRadius: 0,
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
            elements: {
                line: {
                    borderWidth: 3,
                },
            },
            scales: {
                r: {
                    min: 0,
                    max: 100,
                    ticks: {
                        display: true,
                        stepSize: 50,
                        backdropColor: 'transparent',
                        color: '#000',
                    },
                    angleLines: {
                        color: '#ccc',
                    },
                    grid: {
                        color: '#ccc',
                    },
                    pointLabels: {
                        font: {
                            size: 13,
                        },
                        color: function (context) {
                            const label = context.label
                            if (label === 'Code') return '#e47196'
                            if (label === 'Réseaux') return '#42aaff'
                            return '#000'
                        },
                    },
                },
            },
        },
    })
})
</script>

<template>
    <div>
        <div class="content_2">
            <canvas id="myChart"></canvas>
        </div>
        <table class="sticky">
            <tr>
                <th>Talent</th>
                <td>Adaptabilité</td>
            </tr>
        </table>
        <div class="talent_description description">
            Peut s'adapter à n'importe quelle situation.
        </div>
    </div>
</template>

<style scoped>
.content_2 {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    max-width: 700px;
    height: 350px;
    font-size: larger;
    background-color: white;
    border-left: 25px solid #dbdbd9;
    margin-bottom: 5px;
}
</style>
