module.exports = {
  ci: {
    collect: {
      staticDistDir: './app/views/*.html.erb',
      url: ['http://localhost:3000/'],
      startServerCommand: 'rails server -e production',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
