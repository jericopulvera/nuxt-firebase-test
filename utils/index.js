/**
 * Get cookie from request.
 *
 * @param  {Object} req
 * @param  {String} key
 * @return {String|undefined}
 */
export function cookieFromRequest(req, key) {
    if (!req.headers.cookie) {
        return
    }

    const cookie = req.headers.cookie.split(';').find(
        c => c.trim().startsWith(`${key}=`)
    )

    if (cookie) {
        return cookie.split('=')[1]
    }
}

export function emailDbfy(email) {
    return email.replace('@', '-').replace('.', '-')
}