module.exports = {
  ci: {
    collect: {
      staticDistDir: './',
      url: ['http://localhost:3000/'],
      startServerCommand: 'rails server -e production',
    },
    assert: {
      preset: 'lighthouse:recommended',
    },  
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
