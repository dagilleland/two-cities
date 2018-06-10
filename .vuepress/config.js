module.exports = {
    title: 'Tale of Two Cities',
    description: 'by Charles Dickens',
    base: '/two-cities/',
    themeConfig: {
        repo: 'dagilleland/two-cities',
        nav: [
            { text: 'About', link: '/About/' },
            { text: 'Book 1', link: '/Book1/' },
            { text: 'Book 2', link: '/Book2/' },
            { text: 'Book 3', link: '/Book3/' }
        ],
        sidebar: {
            '/Book1/' : [
                '',
                'ch1-01',
                'ch1-02',
                'ch1-03',
                'ch1-04',
                'ch1-05',
                'ch1-06',
                {text: 'Next Book', link: '/Book2/'}
            ],

            '/Book2/' : [
                '',
                'ch2-01',
                'ch2-02',
                'ch2-03',
                'ch2-04',
                'ch2-05',
                'ch2-06',
                'ch2-07',
                'ch2-08',
                'ch2-09',
                'ch2-10',
                'ch2-11',
                'ch2-12',
                'ch2-13',
                'ch2-14',
                'ch2-15',
                'ch2-16',
                'ch2-17',
                'ch2-18',
                'ch2-19',
                'ch2-20',
                'ch2-21',
                'ch2-22',
                'ch2-23',
                'ch2-24',
                {text: 'Next Book', link: '/Book3/'}
            ],

            '/Book3/' : [
                '',
                'ch3-01',
                'ch3-02',
                'ch3-03',
                'ch3-04',
                'ch3-05',
                'ch3-06',
                'ch3-07',
                'ch3-08',
                'ch3-09',
                'ch3-10',
                'ch3-11',
                'ch3-12',
                'ch3-13',
                'ch3-14',
                'ch3-15'
            ],

            '/About/' : [
                '',
                'preface',
                'license',
                'postface'
            ]
        }
    }
  }