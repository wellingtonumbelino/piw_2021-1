const render = (post) =>{
    return {
        id: post._id,
        text: post.text,
        likes: post.likes,
        idUser: post.id_user
    }
}

const renderMany = (posts) => {
    return posts.map((post) => render(post))
}

module.exports.render = render
module.exports.renderMany = renderMany