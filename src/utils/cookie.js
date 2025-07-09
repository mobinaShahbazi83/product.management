const setCookie = tokens => {
    document.cookie = `token=${token.tokens}; max-age=${1 * 24 * 60 * 60}`
}

export  {setCookie}