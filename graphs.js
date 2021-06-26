let prodMins = 3;
let enterMins = 6;
let socialMins = 3;
let shopMins = 2;
let edMins = 4;
let idleMins = 1;

let pieChart = document.getElementById('pieChart').getContext('2d');
let barChart = document.getElementById('barChart').getContext('2d');

let timeDistributionChart = new Chart(pieChart, {
    type: 'pie',
    data: {
        labels: ['Productivity', 'Entertainment', 'Social', 'Shopping', 'Education', 'Idle'],
        datasets: [{
            label: 'Time Spent (minutes)',
            data: [
                prodMins,
                enterMins,
                socialMins,
                shopMins,
                edMins,
                idleMins
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255,206, 86, 0.6)',
                'rgba(75, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000',
            hoverOffset: 5
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                align: 'center',
                text: 'Tab Usage Distribution',
                font: {
                    family: "Lato",
                    size: 25,
                },
                color: 'black'
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        family: "Lato",
                        size: 18,
                    },
                    color: 'black'
                }
            },
            tooltip: {
                enabled: true,
                bodyFont: {
                    family: "Lato"
                },
                boxWidth: 20,
                boxHeight: 10
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                bottom: 0,
                top: 0
            }
        }
    }
});

let timeByTabChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['Productivity', 'Entertainment', 'Social', 'Shopping', 'Education', 'Idle'],
        datasets: [{
            label: 'Time Spent (minutes)',
            data: [
                prodMins,
                enterMins,
                socialMins,
                shopMins,
                edMins,
                idleMins
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255,206, 86, 0.6)',
                'rgba(75, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000',
            hoverOffset: 5
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                align: 'center',
                text: 'Minutes Spent per Tab Classification',
                font: {
                    family: "Lato",
                    size: 25,
                },
                color: 'black'
            },
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                bodyFont: {
                    family: "Lato"
                },
                titleFont: {
                    family: "Lato"
                },
                boxWidth: 20,
                boxHeight: 10
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        indexAxis: 'y',
        scales: {
            y: {
                ticks: {
                    font: {
                        family: "Lato",
                        size: 14
                    },
                    color: "black"
                }
            },
            x: {
                ticks: {
                    font: {
                        family: "Lato",
                        size: 14
                    },
                    color: "black"
                }
            }
        }
    }
});