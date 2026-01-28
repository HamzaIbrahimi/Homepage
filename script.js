const cards = document.querySelector('.project_cards');
const github = 'icons/github.svg';
const exit = 'icons/exit.svg';
const projects = [
    {
        projectName: 'CloudSync Dashboard',
        imgSrc: 'project_photos/icloud-sync.jpg',
        iconLinks: {
            github: 'https://github.com/user/cloudsync',
            demo: 'https://cloudsync-demo.io',
        },
        description:
            'A real-time data monitoring platform with integrated cloud storage and automated backup scheduling.',
    },
    {
        projectName: 'SwiftPay Mobile',
        imgSrc: 'project_photos/swift-pay.jpg',
        iconLinks: {
            github: 'https://github.com/user/swiftpay',
            demo: 'https://swiftpay-app.com',
        },
        description:
            'A lightweight fintech solution focusing on peer-to-peer encrypted transactions and budget tracking.',
    },
    {
        projectName: 'EcoTrack AI',
        imgSrc: 'project_photos/eco-carbon.jpg',
        iconLinks: {
            github: 'https://github.com/user/ecotrack',
            demo: 'https://ecotrack-ai.org',
        },
        description:
            'An environmental impact analyzer that uses machine learning to suggest carbon footprint reductions.',
    },
    {
        projectName: 'DevFlow Kanban',
        imgSrc: 'project_photos/project-manage.jpg',
        iconLinks: {
            github: 'https://github.com/user/devflow',
            demo: 'https://devflow-kanban.net',
        },
        description:
            'A streamlined project management tool designed specifically for agile software development teams.',
    },
    {
        projectName: 'HealthPulse Wearable',
        imgSrc: 'project_photos/smart-watch.jpg',
        iconLinks: {
            github: 'https://github.com/user/healthpulse',
            demo: 'https://healthpulse-app.io',
        },
        description:
            'A comprehensive fitness tracking API that syncs biometric data with personalized workout recommendations.',
    },
    {
        projectName: 'SecureVault Auth',
        imgSrc: 'project_photos/block-security.jpg',
        iconLinks: {
            github: 'https://github.com/user/securevault',
            demo: 'https://securevault-auth.com',
        },
        description:
            'An enterprise-grade authentication library specializing in multi-factor security and biometric login integration.',
    },
];

for (const project of projects) {
    cards.insertAdjacentHTML(
        'beforeend',
        `
             <div class="card">
                <img src="${project.imgSrc}" alt="">
                <div class="details">
                    <div class="project_name">${project.projectName}</div>
                    <div class="project_links">
                        <a href="${project.iconLinks.github}" target="_blank"><img class="icon" src="${github}" alt=""></a>
                        <a href="${project.iconLinks.demo}" target="_blank"><img class="icon" src="${exit}" alt=""></a>
                    </div>
                </div>
                <div class="description">${project.description}</div>
            </div>`,
    );
}
