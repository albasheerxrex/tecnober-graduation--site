exports.Home = (req, res, next) => {
    res.render('index', {

        path: '/',

    });
};
exports.about = (req, res, next) => {
    res.render('about', {

        path: '/about',

    });
};