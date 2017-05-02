module.exports = function(app) {
    
    // ===== WEB APPLICATION ===== //
    require('./web/routes.js')(app);
    
    // ===== WEB SERVICES API ==== //
    require('./api/routes.js')(app);
    
};
