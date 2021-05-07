module.exports = {
    siteMetadata: {
        title: "Cursuri de formare profesionala",
        description: "Invata meserie la cursuri de calificare vest"
    },
    plugins: [
        'gatsby-plugin-postcss', 
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Centru de servicii',
                icon: 'static/favicon.png'
            }
        }
    ]
}