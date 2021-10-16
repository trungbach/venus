const DATE_TIME = 'YYYY-MM-DD HH:mm:ss'
const DATE_TIME_UTC = 'YYYY-MM-DD HH:mm:ssZ'
const PAGE_SIZE = 20
const TOKEN_COOKIE = 'token_crypt'
const USER_COOKIE = 'user_wallet'
const listMenu = [
    {
        url: '/#mint',
        name: 'mint',
    },
    {
        url: '/#savings',
        name: 'savings',
    },
    {
        url: '/#protocol',
        name: 'protocol',
    },
    {
        url: '/#borrow',
        name: 'borrow',
    },
    {
        url: '/#markets',
        name: 'markets',
    },
    {
        url: '/#community',
        name: 'docs',
    },
   
]

export {
    DATE_TIME,
    PAGE_SIZE,
    TOKEN_COOKIE,
    USER_COOKIE,
    listMenu,
    DATE_TIME_UTC
}