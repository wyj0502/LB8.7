require.config({
    baseUrl: './js',
    paths: {
        ajax: 'index'
    }

})
require(['ajax'], function(a) {
    a();
})