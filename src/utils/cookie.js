const setCookie = token => {
    document.cookie = `token=${token}; max-age=${1 * 24 * 60 * 60}`
}

export  {setCookie}