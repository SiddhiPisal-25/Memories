// Sales Overview - Line Chart
const ctxSales = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctxSales, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
            label: 'Sales ($)',
            data: [1200, 1900, 3000, 5000, 4200, 6200, 7200, 8000],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            borderWidth: 2,
            tension: 0.3,
            fill: true,
            pointBackgroundColor: '#007bff'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#343a40',
                    font: { size: 14 }
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            x: {
                ticks: { color: '#6c757d' }
            },
            y: {
                ticks: { color: '#6c757d' },
                beginAtZero: true
            }
        }
    }
});

// Top Products - Bar Chart
const ctxProducts = document.getElementById('productsChart').getContext('2d');
const productsChart = new Chart(ctxProducts, {
    type: 'bar',
    data: {
        labels: ['Shoes', 'Bags', 'Watches', 'T-shirts', 'Jeans'],
        datasets: [{
            label: 'Units Sold',
            data: [320, 210, 180, 450, 300],
            backgroundColor: [
                '#28a745',
                '#ffc107',
                '#17a2b8',
                '#fd7e14',
                '#6f42c1'
            ],
            borderRadius: 8,
            barPercentage: 0.6
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            x: {
                ticks: { color: '#6c757d' }
            },
            y: {
                ticks: { color: '#6c757d' },
                beginAtZero: true
            }
        }
    }
});
