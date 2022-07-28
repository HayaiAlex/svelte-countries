var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/hayaialex/svelte-countries.git', // Update to point to your repository  
        user: {
            name: 'HayaiAlex', // update to use your name
            email: 'alexadams2084@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)