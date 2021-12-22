Package.describe({
    name: 'deathcookies:pagination',
    version: '0.1.0',
    author: 'maedlerdaniel@gmail.com',
    summary: 'Pagination for subscription',
    homepage: 'https://github.com/DeathCookies/meteor-jalik-pagination',
    git: 'https://github.com/DeathCookies/meteor-jalik-pagination.git',
    documentation: 'README.md',
    license: 'MIT'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');
    api.use(['underscore', 'check', 'session'], 'client');
    api.use(['minimongo', 'mongo-livedata', 'templating', 'reactive-var'], 'client');
    api.addFiles(['pagination.html'], 'client');
    api.addFiles(['pagination.js'], 'client');
    api.export('Pagination');
    api.export('Paginations');
});

