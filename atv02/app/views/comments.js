const render = (comment) =>{
    return {
        id: comment._id,
        text: comment.text,
        id_user: comment.id_user,
        id_post: comment.id_post
    }
}

const renderMany = (comments) => {
    return comments.map((comment)=> render(comment))
}

module.exports.render = render
module.exports.renderMany = renderMany