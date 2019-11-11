export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc917279c414f91655eb88d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-h6ueszrn',
                  apiId: '23932383-b3b8-46da-af7f-f762826acc0b'
                },
                {
                  buildHookId: '5dc9172721788d8b3ecbb300',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-way3j76e',
                  apiId: 'd1d17275-3b20-4985-9b4b-4dd53fbcddf1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pdhung197/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-way3j76e.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
