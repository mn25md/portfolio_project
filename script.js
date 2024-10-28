// スムーズスクロール
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// セクションのフェードインアニメーション
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 一度表示されたら監視を解除
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
// Chart.jsでレーダーチャートを生成
const ctx = document.getElementById('skillChart').getContext('2d');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Ruby on Rails', 'GitHub', 'Excel'],
    datasets: [{
      label: 'スキルレベル',
      data: [2, 3, 3, 3, 3, 3, 5], // 各スキルのレベル（0〜10）
      backgroundColor: 'rgba(181, 162, 127, 0.4)', // ベージュ系の半透明
      borderColor: '#b5a27f',
      borderWidth: 2,
      pointBackgroundColor: '#b5a27f',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#b5a27f'
    }]
  },
  options: {
    responsive: true,
    scale: {
      ticks: {
        beginAtZero: true,
        max: 10 // 最大値を10に設定
      }
    },
    plugins: {
      legend: {
        display: false // ラベルを非表示
      }
    }
  }
});

